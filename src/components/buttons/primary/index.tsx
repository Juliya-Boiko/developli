import { ButtonProps } from "../type"
import styles from './styles.module.scss'

export const BtnPrimary = ({ text, height }: ButtonProps) => {
  const buttonHeight = { 'height': height }
  
  return (
    <button
      type="button"
      className={styles.primaryBtn}
      style={buttonHeight as React.CSSProperties}
    >
      {text}
    </button>
  )
}