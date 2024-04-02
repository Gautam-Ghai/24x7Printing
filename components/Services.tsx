import React from 'react'
import Reveal from '../utils/Reveal'

function Services() {

    return (
        <div id="services">
            <div className='container mx-auto py-8'>
                <div className='bg-ImgColor m-4 p-8 rounded-xl'>
                    <h1 className='z-10 mb-4 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'><span className='text-primary'>Services</span> we offer</h1>
                    <div className='flex flex-wrap justify-evenly items-center text-left'>
                        <Reveal duration={0.3} className='p-4 lg:p-8 bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg flex flex-col justify-center items-center'>
                            <>
                                <div className='lg:mb-4 h-16 w-16 rounded-full bg-primary text-bgColor grid place-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                                    </svg>
                                </div>
                                <h3 className='mt-4 font-open text-lg lg:text-2xl font-medium text-textColor'>Printing services based on your preferred size, colour and quantity. Bulk orders also available on request.</h3>
                            </>
                        </Reveal>
                        <Reveal duration={0.6} className='p-4 lg:p-8 bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg flex flex-col justify-center items-center'>
                            <>
                                <div className='lg:mb-4  h-16 w-16 rounded-full bg-primary text-bgColor grid place-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                                <h3 className='mt-4 font-open text-lg lg:text-2xl font-medium text-textColor'>Copying/ Xerox services at odd hours to get you ready for early morning appointments and deadlines.</h3>
                            </>
                        </Reveal>
                        <Reveal duration={0.9} className='p-4 lg:p-8 bg-bgColor shadow-lg m-2 h-72 w-72 lg:h-96 lg:w-96 rounded-lg flex flex-col justify-center items-center'>
                            <>
                                <div className='lg:mb-4 h-16 w-16 rounded-full bg-primary text-bgColor grid place-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                </div>
                                <h3 className='mt-4 font-open text-lg lg:text-2xl font-medium text-textColor'>We Deliver! Ask our team for available delivery service and we can bring your documents right to your doorstep.</h3>
                            </>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services