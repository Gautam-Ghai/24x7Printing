import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id="about">
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-12 lg:col-span-6 flex flex-col items-center h-full p-4'>
            <h1 className='lg:hidden z-10 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>About the <span className='text-primary'>Cause</span></h1>
            <div className='relative flex items-center'>
              <Image className='z-10' src="/assets/GoodTeam-pana.png" alt="wave" width={760} height={760} />
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6 flex items-center p-4'>
            <div className='flex flex-col max-w-2xl'>
              <h1 className='hidden lg:block z-10 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>About the <span className='text-primary'>Cause</span></h1>
              <h3 className='z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>The world is moving faster than ever before and we understand that it becomes impossible to spare time for odd printing jobs. One of the biggest challenges that we faced in the area was the unavailability of a proper printing services before/ after work hours. Our mission is to provide adequate and reliable printing and related services at an affordable price in the Metro-Vancouver Area.</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About