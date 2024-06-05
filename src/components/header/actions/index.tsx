import { BtnOutlined } from "@/components/buttons/outlined"
import { BtnPrimary } from "@/components/buttons/primary"
import { buttonSizes } from "@/constants/buttonSizes"
import styles from './styles.module.scss'

export const Actions = () => {
  return (
    <div className={styles.actionsContainer}>
      <BtnOutlined text="Start hiring" height={buttonSizes.Small} onClick={() => console.log('Headerclick')} />
      <BtnPrimary text="Find a job" height={buttonSizes.Small} onClick={() => console.log('Headerclick')} />
    </div>
  );
}