import React from 'react'
import arby from '../assets/testi/arby.png'
import violet from '../assets/testi/violet.jpeg'
import kayron from '../assets/testi/kayron.png'
import bask from '../assets/testi/bask.png'
export default function Testimonial() {
    return (
        <div>
            <section className='w-full py-20 px-6'>
                <div className='container mx-auto'>
                    <div className='text-center md:mx-24'>
                        <h1 className='text-xl md:text-2xl font-bold font-quicksand'>Testimonials</h1>
                        <p className='text-base text-gray-400 font-quicksand py-2 px-4 tracking-wide'>Prove it yourself, and seriously improve your skills and see the process in action.</p>
                    </div>
                    <div className='flex flex-col items-center py-10'>
                        <img src={bask} alt='user' className='rounded-full h-32 w-32' />
                        <h1 className='font-bold font-quicksand text-lg py-2'>Bask</h1>
                        <p className='text-center text-gray-500 leading-loose tracking-wider font-quicksand '>
                            "I learned a lot from here, here I was taught from zero to hero, I really like decode!"
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-8 lg:mx-24'>
                        <div className='bg-white shadow-sm border border-red-400 border-dashed p-4 rounded-sm'>
                            <div className='flex justify-between gap-8 my-3 items-center'>
                                <p className='text-gray-500 font-quicksand text-sm text-justify'>"The most recommended place to learn PHP and Laravel. Decode was able to give an explanation without rushing. Very suitable for beginners"</p>
                                <img src={arby} alt='user' className='rounded-full h-10 w-10' />
                            </div>
                            <span className='font-quicksand text-gray-800'>Arbiter Vildred</span>
                        </div>
                        <div className='bg-white shadow-sm border border-red-400 border-dashed p-4 rounded-sm'>
                            <div className='flex justify-between gap-8 my-3 items-center'>
                                <p className='text-gray-500 font-quicksand text-sm text-justify'>"Decode again makes it easier to access web learning which has been difficult to reach, there is no longer any reason not to study"</p>
                                <img src={violet} alt='user' className='rounded-full h-10 w-10' />
                            </div>
                            <span className='font-quicksand text-gray-800'>Remnant Violet</span>
                        </div>
                        <div className='bg-white shadow-sm border border-red-400 border-dashed p-4 rounded-sm'>
                            <div className='flex justify-between gap-8 my-3 items-center'>
                                <p className='text-gray-500 font-quicksand text-sm text-justify'>"Studying at decode is the right step. the material is very easy to understand, detailed and there are always tips and tricks!"</p>
                                <img src={kayron} alt='user' className='rounded-full h-10 w-10' />
                            </div>
                            <span className='font-quicksand text-gray-800'>Kayron</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
