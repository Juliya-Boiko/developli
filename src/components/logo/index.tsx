import Link from 'next/link'
import Image from 'next/image'
import { routesNames } from "@/constants/routesNames"
import svgSrc from '../../../public/logo/logo.svg'
import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <Link href={routesNames.Index} className={styles.logoLink}>
      <Image src={svgSrc} alt="Logo" fill={true}  />
    </Link>
  )
}