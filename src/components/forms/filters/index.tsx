import styles from './styles.module.scss'
import { FilterTab } from './FiltersTab'
import { experienceFilters, categoryTags, typeFilters, salaryRange, jobStatus, jobLocations } from "@/constants/processData"
import { FiltersFormProps } from './type'

export const FiltersForm = ({ register, control }: FiltersFormProps) => {
  return (
    <div className={styles.form}>
      <FilterTab data={experienceFilters} name="experience" control={control} register={register}  />
      <FilterTab data={typeFilters} name="employmentType" control={control} register={register} />
      <FilterTab data={categoryTags} name="category" control={control} register={register} />
      <FilterTab data={salaryRange} name="salary" control={control} register={register}  />
      <FilterTab data={jobStatus} name="status" control={control} register={register}  />
    </div>
  )
}
