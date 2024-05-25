import React from 'react'
import { google, apple, bill } from '../assets'
import styles, { layout } from '../style'

export default function Billing() {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%]  h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 top-0 w-[50%]  h-[50%] rounded-full pink__gradient'/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5` }>
          a quitck brown fox jumps over the lazy dog
          a quitck brown fox jumps over the lazy dog
          a quitck brown fox jumps over the lazy dog
          a quitck brown fox jumps over the lazy dog

        </p>
        <div className='flex flex-row sm:mt-10 mt-6 flex-wrap '>
          <img src={google} alt='google_store' className='w-[128px] h-[43px] object-contain mr-5 cursor-pointer '/>
          <img src={apple} alt='apple_store' className='w-[128px] h-[43px] object-contain  cursor-pointer '/>

        </div>
      </div>
    </section>
  )
}
