"use client"
import styles from './styles.module.scss'
import { policyTerms } from "@/constants/processData"
import Select, { SingleValue } from 'react-select'
import { useState } from 'react'

const options = policyTerms.map((el) => ({ value: el.title, label: el.title }))

export const PrivacyConditions = () => {
  interface Option {
  value: string;
  label: string;
  }
  
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  //   ];
  const [selectedOption, setSelectedOption] = useState(options[0])


 const handleChange = (opt: SingleValue<Option>) => {
    console.log(opt);
  };
  
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Legal Information</h1>
      <p className={styles.subTitle}>If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message.</p>
      <div>
        {/* <select name="polisy" id="polisy" className={styles.select}>
          {policyTerms.map((el, idx) => (
            <option key={`${el.title}_${idx}`} value={el.title}>{el.title}</option>
          ))}
        </select> */}
        <Select
            defaultValue={selectedOption}
            onChange={handleChange}
            options={options}
          />
      </div>
    </section>
  )
}