import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import { AuthLinkProps } from './type'
import { assetsSrc } from '@/utils/assets'

export const AuthLink = ({ title, path }: AuthLinkProps) => (
  <Link
    href={path}
    className={styles.authLink}
  >
    <Image src={assetsSrc.person} alt="Login" width={20} height={20} />
    {title}
  </Link>
)
