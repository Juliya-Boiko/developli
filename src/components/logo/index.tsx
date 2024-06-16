import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import { routesNames } from "@/constants/routesNames"
import { assetsSrc } from '@/utils/assets'

export const Logo = () => (
  <Link href={routesNames.Index} className={styles.logoLink}>
    <Image src={assetsSrc.logo} alt="Logo" fill={true}  />
  </Link>
)
  