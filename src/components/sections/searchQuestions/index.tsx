"use client"
import styles from './styles.module.scss'
import { processFaq } from '@/constants/processData'
import { useState } from 'react'
import { Search } from "@/components/search"
import { QuestionCard } from './QuestionCard'

const tabs = processFaq.map((el) => ({ title: el.title, value: el.value }))

export const SearchQuestions = () => {
  const [filter, setFilter] = useState('')
  const [tab, setTab] = useState(tabs[0].value)

  const handleFilter = (v: string) => {
    setFilter(v)
  }

  const handleTab = (v: string) => {
    setTab(v)
  }

  const renderContent = () => {
    const selectedItem = processFaq.find((item) => item.value === tab);
    const filteredData = selectedItem?.data.filter((el) => el.question.toLowerCase().includes(filter.toLowerCase()))
    return selectedItem && filteredData ? (
      <ul className={styles.list}>
        {filteredData.map((el) => (
          <QuestionCard key={el.question} question={el.question} answer={el.answer} />
        ))}
      </ul>
    ) : null;
  };

  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>Helping you is our priority</h1>
      <div className={styles.searchWrapper}>
        <Search placeholder='Search question' onChange={handleFilter} />
      </div>
      <div className={styles.tabs}>
        {tabs.map((el) => (
          <button
            type='button'
            key={el.value}
            className={styles.tabBtn}
            style={{
              color: el.value === tab ? '#1F8FFF' : '#7F879E',
              borderColor: el.value === tab ? '#1F8FFF' : 'transparent'
            }}
            onClick={() => handleTab(el.value)}
          >
            {el.title}
          </button>
        ))}
      </div>
      {renderContent()}
    </section>
  )
}