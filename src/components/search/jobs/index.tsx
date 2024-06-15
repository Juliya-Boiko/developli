"use client"
import styles from '../styles.module.scss'
import Image from 'next/image'
import svgSearch from '../../../../public/icons/search-normal.svg'
import svgLocation from '../../../../public/icons/location.svg'
import { jobLocations } from '@/constants/processData'
import { btnSizes } from '@/utils/setBtnStyles'
import { JobSearchProps } from "../type"
import { BtnPrimary } from '@/components/buttons/primary'
import { Controller } from 'react-hook-form'
import { forwardRef } from 'react'
import { LocationField } from './Locations'

const JobSearch = forwardRef<HTMLDivElement, JobSearchProps>(({ placeholder, register, filter, control, onClick }, ref) => (
  <div className={styles.jobsWrapper}>
    <div className={styles.wrapper}>
      <Image src={svgSearch} alt="search" width={20} height={20} className={styles.icon} />
      <input
        type="text"
        {...register(filter)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
    
    <Controller
      name='location'
      control={control}
      render={({ field }) => (
      <div className={styles.selectWrapper}>
        <Image src={svgLocation} alt="location" width={20} height={20} />
        <LocationField
          {...field}
          value={field.value}
          options={jobLocations.options}
          onChange={(v) => field.onChange(v)} />
        </div>
      )} />
    <BtnPrimary type='button' height={btnSizes.Small} title='Search' accent onClick={onClick} />
  </div>
));

JobSearch.displayName = 'JobSearch';

export { JobSearch };
