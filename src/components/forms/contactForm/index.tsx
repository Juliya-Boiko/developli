"use client"
import styles from './styles.module.scss'
import { useForm, Controller } from "react-hook-form"
import { TextField } from '../textField'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema, ContactFormData } from '@/utils/validation'
import { companySize } from '@/constants/processData'
import { SelectField } from '../selectField'

export const ContactForm = () => {
  const { register, control, getFieldState, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    mode: "onTouched",
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = (data: ContactFormData) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      <div>
        <TextField 
          type='text' 
          label='Your Name' 
          required 
          name='name' 
          placeholder='name' 
          register={register} 
          errors={errors.name}
        />
        <TextField 
          type='email' 
          label='Your Name' 
          required 
          name='email' 
          placeholder='email' 
          register={register} 
          errors={errors.email}
        />
        <TextField 
          type='text' 
          label='Company Name' 
          name='companyName' 
          placeholder='Enter your company name' 
          register={register} 
          errors={errors.companyName}
        />

        <Controller
          name='companySize'
          control={control}
          render={({ field }) => (
            <SelectField
              {...field}
              label='Company Size'
              value={field.value}
              options={companySize}
              onChange={(v) => field.onChange(v)}
            />
          )}
        />
      </div>

      <label>
        <p>agreement</p>
        <input type="checkbox" {...register("agreement")} />
        {errors.agreement && <span>{errors.agreement.message}</span>}
      </label>
      
      <button type="submit">Check</button>
    </form>
  )
}