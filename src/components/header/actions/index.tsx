"use client"
import styles from './styles.module.scss'
import { BtnOutlined } from "@/components/buttons/outlined"
import { BtnPrimary } from "@/components/buttons/primary"
import { buttonSizes } from "@/constants/buttonSizes"

export const Actions = () => (
  <div className={styles.actionsContainer}>
    <BtnOutlined text="Start hiring" height={buttonSizes.Small} onClick={() => console.log('Headerclick')} />
    <BtnPrimary text="Find a job" height={buttonSizes.Small} onClick={() => console.log('Headerclick')} />
  </div>
)
  