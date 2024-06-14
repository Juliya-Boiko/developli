"use client"
import styles from './styles.module.scss'
import { policyTerms } from "@/constants/processData"
import { SingleValue } from 'react-select'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { SelectOption } from './type'

const Select = dynamic(() => import('react-select'), { ssr: false })

const options: SelectOption[] = policyTerms.map((el) => ({ value: el.title, label: el.title }))

export const PrivacyConditions = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<SelectOption>>(options[0])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const handleChange = (v: any) => {
    setSelectedOption(v)
  }

  const renderContent = () => {
    const selectedItem = policyTerms.find((item) => item.title === selectedOption?.value);
    return selectedItem ? (
      <div className={styles.wrapper}>
        <h2 className={styles.termName}>{selectedItem.title}</h2>
        <p className={styles.termDefinition}>{selectedItem.text}</p>
        <ul>
          {selectedItem.terms.map((el, idx) => (
            <li key={`${el.title}-${idx}`}>
              <p className={styles.termTitle}>{el.title}</p>
              {el.text.map((str) => (
                <p key={str} className={styles.termText}>{str}</p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  };
  
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Legal Information</h1>
      <p className={styles.subTitle}>If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message.</p>
      <div className={styles.content}>
        <Select
          defaultValue={selectedOption}
          onChange={handleChange}
          options={options}
          styles={{
            control: base => ({
              ...base,
              border: 0,
              boxShadow: 'none',
            }),
            option: (styles, { isSelected }) => ({
              ...styles,
              backgroundColor: isSelected ? '#47D18C' : 'white'
            })
          }}
          className={styles.select}
        />
        <div className={styles.termsWrapper}>
          {options.map((el) => (
            <button
              type='button'
              key={el.value}
              className={styles.termBtn}
              style={{
                color: el.value === selectedOption?.value ? '#47D18C' : '#252A3F'
              }}
              onClick={() => handleChange(el)}
            >
              {el.value}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    </section>
  )
}