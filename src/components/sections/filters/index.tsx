"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../../public/icons/sort.svg'
import { JobSearch } from '@/components/search/jobs'
import { filtersSchema, FiltersFormData } from '@/utils/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch, Controller } from "react-hook-form"
import { FiltersForm } from "@/components/forms/filters"
import { Tags } from '@/components/tags'
import { SelectField } from '@/components/fields/selectField'
import { sort } from '@/constants/processData'
import { CompaniesList } from '@/components/lists/companies'

export const Filters = () => {
  const { register, control, setValue } = useForm<FiltersFormData>({
    resolver: yupResolver(filtersSchema)
  })

  const formValues = useWatch({ control });

  const handleDelete = (v: string | undefined) => {
    if (!v) return;
    const entry = Object.entries(formValues)
      .filter((el) => Array.isArray(el[1]))
      .find((el) => el[1].includes(v));
    if (!entry || !entry[0] || !Array.isArray(entry[1])) return;
    const updated = entry[1].filter((el) => el !== v);
    const keys: Array<keyof typeof formValues> = ["filter", "location", "sort", "experience", "category", "employmentType", "salary", "status"];

    if (!keys.includes(entry[0] as keyof typeof formValues)) return;

    setValue(entry[0] as keyof typeof formValues, updated);
  };

  return (
    <section className={`container ${styles.section}`}>
      <JobSearch placeholder="Search job name" control={control} filter="filter" register={register} onClick={() => console.log(formValues)} />
      
      <div className={styles.content}>
        <div className='mobileHidden'>
          <FiltersForm control={control} register={register} />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.head}>
            <div className={styles.block}>
              <p className={styles.title}>Recomendation</p>
              <p>38 product designer Jobs in United States</p>
            </div>

            <button type="button" className={styles.btnOpen}>
              <Image src={svgSrc} alt="arrow" width={18} height={18} />
            </button>

            <div className={`${styles.sort} mobileHidden`}>
              <span className={styles.text}>Sort by: </span>
              <Controller
                name='sort'
                control={control}
                render={({ field }) => (
                  <SelectField
                    {...field}
                    isMulti={false}
                    value={field.value}
                    options={sort}
                    onChange={(v) => field.onChange(v)} />
              )} />
            </div>
          </div>

          <div className='mobileHidden'>
            <Tags data={formValues} onClick={handleDelete} />
          </div>

          <CompaniesList />
        </div>
      </div>
    </section>
  )
}
