import React from 'react'
import Bg from '../assets/bg.svg'
export default function Hero() {
    return (
        <div>
            <section className='w-full mx-auto py-36 bg-sky-50 text-gray-800 h-screen'>
                <div className='container flex flex-col md:flex-row mx-auto items-center gap-8 md:gap-24'>
                    <div className='w-6/6 md:w-3/6 px-14 md:px-0'>
                        <img src={Bg} alt="Backgorund" className=''/>
                    </div>
                    <div className='w-6/6 md:w-3/6 px-14 md:px-0'>
                        <h1 className='text-3xl text-center md:text-start md:text-5xl font-extrabold font-quicksand text-gray-800'>
                            Decode
                        </h1>
                        <p className='font-quicksand font-bold text-sm text-center md:text-start md:text-md py-2 text-gray-500'>
                            Improve your skills to the next level, with articles, topics, forum, and much more in here such as Laravel, Vue, React, Tailwind CSS and much more.
                        </p>
                        <div className='py-3 flex gap-3 justify-center md:justify-start'>
                            <button className='p-2 bg-gray-700 text-white font-quicksand font-bold shadow-md shadow-gray-500 hover:bg-gray-900 text-xs md:text-base'>
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
