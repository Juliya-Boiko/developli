"use client"
import styles from './styles.module.scss'
import { FilterTab } from './FiltersTab'
import { filtersSchema, FiltersFormData } from '@/utils/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from "react-hook-form"
import { experienceFilters, categoryTags, typeFilters, salaryRange, jobStatus, locations } from "@/constants/processData"


export const FiltersForm = () => {
  const { register, control } = useForm<FiltersFormData>({
    resolver: yupResolver(filtersSchema)
  })

  const values = useWatch({
    control,
  });
  // console.log(values)

  return (
    <form className={styles.form}>
      <FilterTab data={experienceFilters} name="experience" control={control} register={register}  />
      <FilterTab data={typeFilters} name="employmentType" control={control} register={register}  />
      <FilterTab data={categoryTags} name="category" control={control} register={register} />
      <FilterTab data={salaryRange} name="salary" control={control} register={register} />
      <FilterTab data={jobStatus} name="status" control={control} register={register} />
      <FilterTab data={locations} name="locations" control={control} register={register} />

    </form>
  );
}