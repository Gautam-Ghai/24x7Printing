import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div id="contact">
      <div className='container mx-auto'>
        <h1 className='p-4 z-10 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>Get in <span className='text-primary'>touch</span></h1>
        <div className='grid grid-cols-12 gap-4'>
          <div className="col-span-12 lg:col-span-6 flex items-center p-4">
            <h3 className='max-w-md z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>Whether you are interested in getting to know us or getting a service - We are ready to answer any and all questions. Feel free to reach us at anytime.</h3>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col p-4">
            <div className='flex m-4'>
              <div className='h-16 w-16 bg-primary text-bgColor rounded-full grid place-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className='ml-4 font-open text-lg md:text-2xl font-medium text-textColor py-4'>778-770-4479</h3>
            </div>

            <div className='flex m-4'>
              <div className='h-16 w-16 bg-primary text-bgColor rounded-full grid place-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <Link href={"mailto:print2go247@gmail.com"} >
                <h3 className='cursor-pointer ml-4 font-open text-lg md:text-2xl font-medium text-textColor py-4'><a href="https://form.jotform.com/223258749959274">printtogo247@gmail.com</a></h3>
              </Link>
            </div>
            <div className='flex m-4'>
              <div className='h-16 w-16 bg-primary text-bgColor rounded-full grid place-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className='cursor-pointer ml-4 font-open text-lg md:text-2xl font-medium text-textColor py-4'>Cornell Avenue, Coquitlam</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact