"use client"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import styles from './styles.module.scss'
import { reviews } from '@/constants/processData'
import Image from 'next/image'
import { BtnIcon } from '@/components/buttons/icon'
import { useCallback } from 'react'
import Marquee from 'react-fast-marquee'

const options: EmblaOptionsType = {}
export const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className={styles.section}>
      <div className={`${styles.titleWrapper}`}>
        <h2 className={styles.title}>Working with <span className='accent-green'>world class</span> partners</h2>
        <div className={styles.block}>
          <p>Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
          <div className={styles.buttonsWrapper}>
            <BtnIcon reversed onClick={scrollPrev} />
            <BtnIcon onClick={scrollNext} />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderViewport} ref={emblaRef}>
        <div className={styles.sliderContainer}>
          {reviews.map((el, idx) => (
            <div className={styles.slide} key={`${el.author}-${idx}`}>
              <Image src={el.icon} alt={el.author} className={styles.icon} />
              <div className={styles.info}>
                <p className={styles.text}>{el.text}</p>
                <p className={styles.author}>{el.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      <div className={styles.logoWall}>
        <Marquee speed={25} loop={0} autoFill={true}>
          {reviews.map((el, idx) => (
            <div key={`${el.author}-${idx}`} className={styles.marqee}>
              <Image src={el.icon} alt={el.author} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}