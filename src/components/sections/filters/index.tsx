"use client"
import styles from './styles.module.scss'
import { JobSearch } from '@/components/search/jobs'
import { filtersSchema, FiltersFormData } from '@/utils/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from "react-hook-form"
import { FiltersForm } from "@/components/forms/filters"
import { Recomendation } from '@/components/recomendation'
import { Tags } from '@/components/tags'

export const Filters = () => {
  const { register, control } = useForm<FiltersFormData>({
    resolver: yupResolver(filtersSchema)
  })

  const formValues = useWatch({ control });

  return (
    <section className={`container ${styles.section}`}>
      <JobSearch placeholder="Search job name" control={control} filter="filter" register={register} onClick={() => console.log(formValues)} />
     
      <div className={styles.content}>
        <div className='mobileHidden'>
          <FiltersForm control={control} register={register} />
        </div>

        <div className={styles.listWrapper}>
          <Recomendation />

          <div className='mobileHidden'>
            <Tags />
          </div>
          
          <div>list</div>
        </div>
      </div>
    </section>
  )
}
