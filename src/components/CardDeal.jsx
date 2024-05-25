import React from 'react'
import styles, { layout } from '../style'
import { card } from '../assets'
import Button from './Button'

export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />in few easy steps </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          there are lot of deals which you can grab depends upon your account type like mastercard ,
          visacard and debit card credit . there are lot of deals which you can grab depends upon your account type like mastercard ,
          visacard and debit card credit
        </p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>  
    </section>
  )
}
