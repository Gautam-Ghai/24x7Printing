import React from 'react'
import Image from 'next/image'

function Landing() {
    return (
        <>
            <div className='container mx-auto py-8'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-6 flex items-center'>
                        <div className='flex flex-col max-w-2xl p-4'>
                            <h1 className='z-10 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>Your <span className='text-primary'>Anytime</span> Printshop</h1>
                            <h3 className='z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>Online submissions not getting you enough grades? Boss asking for prints on a short deadline? Totally fine—email us the document that shows off your best work, your most innovative research, or documents for your early morning appointment. We will contact you and print it for you within minutes.</h3>
                            <div className="flex mt-4">
                                <button className='z-10 mr-4 px-6 md:px-10 py-3 bg-primary text-bgColor font-medium text-lg md:text-2xl rounded-xl'><a href="https://form.jotform.com/223258749959274">Upload</a></button>
                                <a href="#services" className='cursor-pointer z-10 ml-4 px-6 md:px-10 py-3 bg-secondary text-textColor font-medium text-lg md:text-2xl rounded-xl'>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className='relative col-span-12 lg:col-span-6 flex items-center'>
                        <Image className='z-10' src="/assets/Photocopy-pana.png" alt="wave" width={760} height={760} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing