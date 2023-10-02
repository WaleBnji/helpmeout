// import React from 'react'
import Icon1 from '../assets/Icon1.svg'
import FeaturesImg from '../assets/VideoRepository.svg'

const Features = () => {
  return (
    <div className='h-[80vh] py-[10rem]'>
     <div className='text-center'>
     <h1>Features</h1>
      <p>Key highlights of our Extensions</p>
     </div>
      <div className='fcc p-4 '>
        <div className='flex flex-col'>

        <div className='flex'>
            <img src={Icon1} alt="" className='w-[30px] h-[30px]' />
            <div className='ml-4'>
                <h1 className='text-2xl font-semibold'>Simple Screen Recordering</h1>
                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
        </div>
        <div className='flex'>
            <img src={Icon1} alt="" className='w-[30px] h-[30px]' />
            <div className='ml-4'>
                <h1 className='text-2xl font-semibold'>Simple Screen Recordering</h1>
                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
        </div>
        <div className='flex'>
            <img src={Icon1} alt="" className='w-[30px] h-[30px]' />
            <div className='ml-4'>
                <h1 className='text-2xl font-semibold'>Simple Screen Recordering</h1>
                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
        </div>
        </div>
        <div>
        <img src={FeaturesImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Features
