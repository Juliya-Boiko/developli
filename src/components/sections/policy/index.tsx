"use client"
import styles from './styles.module.scss'
import { policyTerms } from "@/constants/processData"
import { SingleValue, ActionMeta } from 'react-select'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { SelectOption } from './type'

const Select = dynamic(() => import('react-select'), { ssr: false })

const options = policyTerms.map((el) => ({ value: el.title, label: el.title }))

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
      <div>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.text}</p>
      </div>
    ) : null;
  };
  
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Legal Information</h1>
      <p className={styles.subTitle}>If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message.</p>
      <div>
        <Select
          defaultValue={selectedOption}
          onChange={handleChange}
          options={options}
        />
        {renderContent()}
      </div>
    </section>
  )
}