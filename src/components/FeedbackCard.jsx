import React from 'react'
import {quotes} from '../assets'

export default function FeedbackCard({content, name , title, img}) {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} className='w-[42px] h-[27px] object-contain' />
      <p className='text-white my-10 text-[18px] font-poppins font-normal leading-[32px] '>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='text-white text-[20px] font-poppins font-semibold leading-[32px] '>{name}</h4>
          <p className='text-dimWhite text-[16px] font-poppins font-normal leading-[24px] '>{title}</p>
        </div>  
      </div>
    </div>
  )
}
