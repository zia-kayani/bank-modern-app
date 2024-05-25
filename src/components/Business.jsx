import React from 'react'
import { features } from '../constants'
import styles ,{layout} from '../style'
import Button from './Button'

const FeatureCard =({icon, title, content, index})=>{
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] ${styles.flexCenter} rounded-full bg-dimBlue`}>
        <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex flex-col ml-6'>
        <h4 className='font-poppins text-[18px] leading-[23px] mb-1 text-white font-semibold '>{title}</h4>
        <p className='font-poppins text-[16px] leading-[24px] mb-1 text-dimWhite font-normal '>{content}</p>
      </div>
    </div>
  )
}
export default function Business() {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>you do the busines,<br className='sm:block hidden'/> we'll handle the money </h2>
        <p className={`${styles.paragraph } max-w-[470px] mt-5`}>With the right credit card you can improve your finencial life by building credit, earning rewards and saving money.But with the hundred of credit cards on the market.</p>
        <Button styles='mt-10 '/>
      </div>


      <div className={` ${layout.sectionImg} flex flex-col`}>
        {features.map((features, index)=>(
          <FeatureCard key={features.id} {...features} index={index} />
        ))}
      </div>  
    </section>
  )
}
