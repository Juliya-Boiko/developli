import { ButtonProps } from "../type"
import styles from './styles.module.scss'

export const BtnOutlined = ({ text, height }: ButtonProps) => {
  const buttonHeight = { 'height': height }

  return (
    <button
      type="button"
      className={styles.outlinedBtn}
      style={buttonHeight as React.CSSProperties}
    >
      {text}
    </button>
  )
}