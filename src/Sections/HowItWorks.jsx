// import React from 'react'
import Picture from '../assets/HowItWorks.svg'
import One from '../assets/one.svg'

const HowItWorks = () => {
  return (
    <div className="h-[80vh] py-[10rem]">
      <h1 className='text-center text-3xl font-semibold'>How it works</h1>
      <div className='fbc mt-7'>
      <div>
        <img src={One} alt="" className='w-[50px] mx-auto'/>
        <h2 className='text-center'>Record Screen</h2>
        <p className="">  Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
        <img src={Picture} alt="" />
      </div>
      <div>
        <img src={One} alt="" className='w-[50px] mx-auto'/>
        <h2 className='text-center'>Record Screen</h2>
        <p className="">  Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
        <img src={Picture} alt="" />
      </div>
      <div>
        <img src={One} alt="" className='w-[50px] mx-auto'/>
        <h2 className='text-center'>Record Screen</h2>
        <p className="">  Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
        <img src={Picture} alt="" />
      </div>
     

      </div>
    </div>
  )
}

export default HowItWorks
