import React from 'react'
import CountUp from 'react-countup';
function MainPage() {
return (
<>
    {/* Hero Part */}
    <section
        className='md:mt-[70px] mx-auto mb-[200px] h-fit md:self-center md:mx-52 md:flex justify-between max-w-screen'>
        <div className='mx-auto w-full px-6  mt-6  pt-3 md:pt-0 xl:px-0'>
            <div
                className=' hidden md:block w-fit px-2 py-2 bg-brand-teal-light bg-red-500 rounded-[24px] mb-4 text-white'>
                Hard to manage tasks?</div>
            <div>
                <p className='text-brand-dark-blue width-fit-content text-[27px] md:text-[54px] font-bold w-fit'>Manage
                    Your Day<br />With<span className='text-brand-teal-light'> Tasko</span></p>
                <div className='flex gap-x-6 mt-4'>
                    <div className=' rounded-full h-14 w-14 shadow-xl p-2 text-center'><img src='https://w7.pngwing.com/pngs/82/542/png-transparent-task-computer-icons-checklist-clipboard-scorecard-miscellaneous-text-rectangle-thumbnail.png'/></div>
                    <div className='flex flex-col justify-center'>
                        <h4 className='text-md font-semibold'>Manages Tasks Anytime</h4>
                        <p className='text-sm md:text-md text-light-gray'>Your personalised Manager just a tap away</p>
                    </div>
                </div>
                <button
                    className='mt-4 w-full md:max-w-[420px] py-3 md:py-4 rounded text-center font-bold text-md bg-brand-blue hover:bg-blue-700 text-white cursor-pointer px-24 md:px-32 whitespace-nowrap'>Go
                    to Tasko</button>
            </div>
        </div>
        <div
            className='overflow-hidden  w-full px-4 self-start mt-6  pt-3 md:pt-0 flex justify-center items-center md:rounded-full shadow-lg'>
            <img alt='vector' className=' md:max-h-[360px] w-fit  object-cover'
                src='https://img.freepik.com/free-vector/hand-drawn-business-planning-with-task-list_23-2149164275.jpg' />
        </div>

    </section>

    <section className='p-6 mx-auto md:mx-48 shadow-2xl rounded-2xl'>

        <div>
            <h1 className='text-22 md:text-5xl md:mb-6 text-blue-950 font-bold pt-4'>Study in your dream college with Leap
            </h1>


                <div className='flex items-center justify-center flex-wrap flex-1'>
                    <div className='w-1/3'>
                        <div className='flex flex-col items-center justify-center border-r-2 pr-6'>
                            <div><img alt='University Vector Logo'
                                    src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/new-landing-page/loan_icon.svg' />
                            </div>
                            <p className='text-xs md:text-md text-gray-600  text-center'>Universities Supported</p>
                            <h1 className='md:font-[60px] text-brand-teal-light font-bold'> <span ><CountUp end={231} /> +</span></h1>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex flex-col items-center justify-center border-r-2 pr-6'>
                            <div><img alt='University Vector Logo'
                                    src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/new-landing-page/loan_icon.svg' />
                            </div>
                            <p className='text-xs md:text-md text-gray-600  text-center'>Universities Supported</p>
                            <h1 className='font-xs md:font-[60px] text-brand-teal-light font-bold'> <span ><CountUp end={2300} /> +</span></h1>

                           
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex flex-col items-center justify-center '>
                            <div><img alt='University Vector Logo'
                                    src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/new-landing-page/loan_icon.svg' />
                            </div>
                            <p className='text-xs md:text-md text-gray-600 text-center'>Universities Supported</p>
                            <h1 className='md:font-[50px] text-brand-teal-light font-bold  text-center'> <span >$<CountUp end={175} />Mn</span></h1>
                        </div>
                    </div>
                    <div className='mt-4 pl-6'>
                    <img alt='University Vector Logo' className='object-cover max-w-[300px]'
                                    src='https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/new-landing-page/map.svg' />
                    </div>
            </div>



        </div>
    </section>
</>
)
}

export default MainPage