"use client"
import styles from './styles.module.scss'
import { useForm, Controller } from "react-hook-form"
import { TextField } from '../../fields/textField'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactSchema, ContactFormData } from '@/utils/validation'
import { companySize, searchTags } from '@/constants/processData'
import { SelectField } from '../../fields/selectField'
import { AreaField } from '../../fields/areaField'
import { CheckField } from '../../fields/checkField'
import { BtnPrimary } from '@/components/buttons/primary'
import { btnSizes } from '@/utils/setBtnStyles'

export const ContactForm = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    mode: "onTouched",
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = (data: ContactFormData) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.wrapper}>
        <TextField 
          type='text' 
          label='Your Name' 
          required 
          name='name' 
          placeholder='Enter your name' 
          register={register} 
          errors={errors.name} />
        <TextField 
          type='email' 
          label='Email' 
          required 
          name='email' 
          placeholder='Enter your email' 
          register={register} 
          errors={errors.email} />
        <TextField 
          type='text' 
          label='Company Name' 
          name='companyName' 
          placeholder='Enter your company name' 
          register={register} 
          errors={errors.companyName} />
        <Controller
          name='companySize'
          control={control}
          render={({ field }) => (
            <SelectField
              {...field}
              isMulti={false}
              isGrey
              label='Company Size'
              value={field.value}
              options={companySize}
              onChange={(v) => field.onChange(v)} />
          )} />
      </div>
      <div className={styles.topics}>
        <Controller
          name='topics'
          control={control}
          render={({ field }) => (
            <SelectField
              {...field}
              isMulti={true}
              isGrey
              label='How our team can help you?'
              value={field.value}
              options={searchTags}
              onChange={(v) => field.onChange(v)} />
        )} />
      </div>
      <AreaField
        label='Your message'
        required
        name='message'
        placeholder='Type anything' 
        register={register} 
        errors={errors.message} />
      <div className={styles.actions}>
        <Controller
          name='agreement'
          control={control}
          render={({ field }) => (
            <CheckField
              {...field}
              value={field.value}
              label='I agree to  Terms of Service and Privacy Policy.'
              register={register}
              errors={errors.agreement}
              onChange={(v) => field.onChange(v)} />
        )} />
        <BtnPrimary title='Contact us' type='submit' accent height={btnSizes.Big} />
      </div>
    </form>
  )
}