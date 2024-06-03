// import { ButtonProps } from "../type"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../../public/icons/person.svg'

export const BtnLogin = () => {
  return (
    <button type="button" className={styles.loginBtn}>
      <Image src={svgSrc} alt="Login" width={20} height={20} />
      <span>Login</span>
    </button>
  )
}