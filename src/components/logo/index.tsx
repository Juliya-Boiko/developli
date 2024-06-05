import Link from 'next/link'
import Image from 'next/image'
import svgSrc from '../../../public/logo/logo.svg'
import styles from './styles.module.scss'
import { routesNames } from "@/constants/routesNames"

export const Logo = () => (
  <Link href={routesNames.Index} className={styles.logoLink}>
    <Image src={svgSrc} alt="Logo" fill={true}  />
  </Link>
)
  