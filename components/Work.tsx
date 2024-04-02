import React from 'react'
import Image from 'next/image'

function Work() {
    return (
        <div id="working">
            <div className='container mx-auto py-8'>
                <h1 className='p-4 z-10 mb-4 font-open text-5xl md:text-7xl font-medium text-textColor py-4 tracking-wider'>How it <span className='text-primary'>works</span></h1>
                <div className='flex flex-wrap justify-center items-center'>
                    <div className='flex flex-col p-4'>
                        <div className='relative flex items-center'>
                            <Image className='z-10' src="/assets/upload.png" alt="wave" width={400} height={400} />
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <div className='h-16 w-16 rounded-full bg-primary grid place-items-center'>
                                <h3 className='font-open text-3xl font-semibold text-bgColor'>1</h3>
                            </div>
                            <h3 className='max-w-md z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>Once you are ready with the document to print, send us an email including the details like number of copies, coloured or back and white, etc</h3>
                        </div>
                    </div>

                    <div className='flex flex-col p-4'>
                        <div className='relative flex items-center'>
                            <Image className='z-10' src="/assets/print.png" alt="wave" width={400} height={400} />
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <div className='h-16 w-16 rounded-full bg-primary grid place-items-center'>
                                <h3 className='font-open text-3xl font-semibold text-bgColor'>2</h3>
                            </div>
                            <h3 className='max-w-md z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>Give us a call to confirm the time of arrival and get the exact location of pickup. We will get the customized printouts ready in no time.</h3>
                        </div>
                    </div>

                    <div className='flex flex-col p-4'>
                        <div className='relative flex items-center'>
                            <Image className='z-10' src="/assets/pickup.png" alt="wave" width={400} height={400} />
                        </div>
                        <div className='flex flex-col items-center md:items-start'>
                            <div className='h-16 w-16 rounded-full bg-primary grid place-items-center'>
                                <h3 className='font-open text-3xl font-semibold text-bgColor'>3</h3>
                            </div>
                            <h3 className='max-w-md z-10 font-open text-lg md:text-2xl font-medium text-textColor py-4'>When its ready, we will meet you at the designated spot. We also offer delivery services for a standard fair price. Contact us for further details.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work