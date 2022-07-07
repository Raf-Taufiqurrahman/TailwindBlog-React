import React from 'react'
import Bg from '../assets/bg.svg'
export default function Hero() {
    return (
        <div>
            <section className='w-full mx-auto py-28 md:py-36 bg-[#EEF2F6] text-gray-800 relative'>
                <div className='container flex flex-col md:flex-row mx-auto items-center gap-8 md:gap-24'>
                    <div className='w-6/6 md:w-3/6 px-14 md:px-0'>
                        <img src={Bg} alt="Backgorund" className='object-cover w-full'/>
                    </div>
                    <div className='w-6/6 md:w-3/6 px-14 md:px-0'>
                        <h1 className='text-3xl text-center md:text-start md:text-5xl font-extrabold font-quicksand bg-gradient-to-r from-teal-500 to-red-500 bg-clip-text text-transparent'>
                            Decode
                        </h1>
                        <p className='font-quicksand font-bold text-sm text-center md:text-start md:text-md py-2 text-gray-500'>
                            Improve your skills to the next level, with articles, topics, forum, and much more in here such as Laravel, Vue, React, Tailwind CSS and much more.
                        </p>
                        <div className='py-3 flex gap-3 justify-center md:justify-start'>
                            <button className='p-2 bg-red-700 text-white font-quicksand font-bold shadow-md shadow-red-500 hover:bg-red-900 text-xs md:text-base'>
                                    Browse Topics
                            </button>
                            <button className='p-2 bg-teal-700 text-white font-quicksand font-bold shadow-md shadow-teal-500 hover:bg-teal-900 text-xs md:text-base'>
                                Read Articles
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
