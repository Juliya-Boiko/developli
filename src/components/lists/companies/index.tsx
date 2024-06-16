import styles from './styles.module.scss'
import { companies } from "@/constants/processData"
import { CompanyCard } from "@/components/cards/company"

export const CompaniesList = () => (
  <ul className={styles.list}>
    {companies.map((el) => (
      <li key={el.id}>
        <CompanyCard
          id={el.id}
          companyId={el.companyId}
          position={el.position}
          avatar={el.avatar}
          link={el.link}
          name={el.name}
          city={el.city}
          counry={el.counry}
          salary={el.salary}
          createdAt={el.createdAt}
          updatedAt={el.updatedAt}
          experience={el.experience}
          workLevel={el.workLevel}
          type={el.type}
          description={el.description}
          requirements={el.requirements}
        />
      </li>
    ))}
  </ul>
)