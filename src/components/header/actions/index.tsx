import styles from './styles.module.scss'
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'
import { routesNames } from '@/constants/routesNames'

export const Actions = () => (
  <div className={styles.actionsContainer}>
    <RouterLink
      title="Find a job"
      primary
      height={linkSizes.Small}
      path={routesNames.Index}
    />
    <RouterLink
      title="Start hiring"
      height={linkSizes.Small}
      path={routesNames.Index}
    />
  </div>
)
  