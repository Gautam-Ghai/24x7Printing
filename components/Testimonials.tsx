import React from 'react'

function Testimonials() {
  return (
    <div id="testimonials">
      <div className='container mx-auto py-8'>
        <div className='bg-secondary m-4 p-8 rounded-xl'>
          <h1 className='z-10 mb-4 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>What our <span className='text-primary'>customers</span> are saying</h1>
          <div className='flex flex-wrap justify-evenly items-center'>
            <div className='flex flex-col justify-center bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg text-left p-4 lg:p-8'>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor mb-4'>Genuine, helping people. Helped me and never asked for a payment. I could give them whatever I wanted for a 5AM print service. Not like the other loots that charge you 10x!</h3>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor mt-4'>- Sasha</h3>
            </div>
            <div className='flex flex-col justify-center bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg text-left p-4 lg:p-8'>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor  mb-4'>Great people and providing printing at a reasonable rate</h3>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor mt-4'>- Manya</h3>
            </div>
            <div className='flex flex-col justify-center bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg text-left p-4 lg:p-8'>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor mb-4'>Great quality, great prices, and amazing customer service. Will come back again.</h3>
              <h3 className='font-open text-lg lg:text-2xl font-medium text-textColor mt-4'>- Gautam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials