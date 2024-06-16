import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import { assetsSrc } from '@/utils/assets'
import { linkSizes } from '@/utils/setLinkStyles'
import { RouterLinkProps } from './type'

export const RouterLink = ({ title, path, primary, icon, height }: RouterLinkProps) => (
  <Link
    href={path}
    style={{
      height: height,
      fontSize: height === linkSizes.Big ? '16px' : '12px' 
    }}
    className={`
      ${primary ? styles.primaryLink : styles.outlinedLink} 
    `}
  >
    {title}
    {icon && <Image src={primary ? assetsSrc.arrowRightWhite : assetsSrc.arrowRightGrey} alt="text" width={24} height={24} />}
  </Link>
)
