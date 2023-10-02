// import React from 'react'
import Person1 from '../assets/Person1.svg'
import Person2 from '../assets/Person2.svg'
import Person3 from '../assets/Person3.svg'
// import Grid from '../assets/Grid.svg'

const Hero = () => {
  return (
    <div className='px-14 py-[12rem] mt-6 h-[80vh]'>
        <div className='fbc'>
            <div className='w-[40%] space-y-4'>
            <h1 className='text-5xl font-semibold'>
                Show Them Dont Just Tell
            </h1>
            <p>
            Help your friends and loved ones by creating and sending videos on how to get things done on a website. 
            </p>
            <button className='bg-blue-500 p-2 rounded '>
                Install HelpMeOut
            </button>

            </div>
            <div className='fcc space-x-2'>
                <div className='space-y-2'>
                    <img src={Person1} alt="" />
                    <img src={Person3} alt="" />
                </div>
                <div>
                    <img src={Person2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
