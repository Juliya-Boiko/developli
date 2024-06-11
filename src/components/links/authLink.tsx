import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import svgSrc from '../../../public/icons/person.svg'
import { AuthLinkProps } from './type'

export const AuthLink = ({ title, path }: AuthLinkProps) => (
  <Link
    href={path}
    className={styles.authLink}
  >
    <Image src={svgSrc} alt="Login" width={20} height={20} />
    {title}
  </Link>
)
