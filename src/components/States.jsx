import React from 'react'
import {stats} from '../constants'
import styles from '../style'


export default function States() {
  return (
    <section className={`${styles.flexCenter} sm:mb-20 mb-6 flex flex-row flex-wrap`}>
      {stats.map((stat)=>(
        <div key={stat.id} className='flex flex-row justify-start items-center m-3'>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}
