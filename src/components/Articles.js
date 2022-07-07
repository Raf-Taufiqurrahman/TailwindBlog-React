import React from 'react'
import articles1 from '../assets/post/post1.png'
import articles2 from '../assets/post/post2.png'
import articles3 from '../assets/post/post3.png'
import articles4 from '../assets/post/post4.png'
import user from '../assets/user.png'
import {HiChevronDoubleRight} from 'react-icons/hi'
export default function Articles() {
    return (
        <div>
            <section className='w-full py-20 px-6'>
                <div className='container mx-auto'>
                    <div>
                        <h1 className='font-bold font-quicksand text-lg'>Newest Articles</h1>
                        <p className='text-gray-400 text-sm font-quicksand'>This is a list of recently added articles</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
                        <div className='bg-white shadow-lg rounded-lg relative border-2 border-red-500 hover:scale-105 duration-500'>
                            <img src={articles1} alt='articles' className='w-full rounded-t-md object-cover'/>
                            <div className='text-sm absolute -top-5 -right-5 bg-white border-2 border-red-500 px-4 text-gray-800 rounded-md h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 '>
                                <span className='font-bold'>7</span>
                                <small>July</small>
                            </div>
                            <div className='py-4 px-6'>
                                <h1 className='font-bold font-quicksand text-base text-gray-700'>Laravel Components</h1>
                                <p className='font-bold font-quicksand text-sm text-justify text-gray-500'>
                                    Components and slots provide similar benefits to sections, layouts, and includes; however, some may find the mental model of components and slots easier to understand....
                                </p>
                                <div className='flex flex-row items-center gap-2 mt-4'>
                                    <img src={user} className="rounded-full w-8" alt='user'/>
                                    <p className='text-gray-400 text-xs'>Rafi Taufiqurrahman</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg rounded-lg relative border-2 border-red-500 hover:scale-105 duration-500'>
                            <img src={articles2} alt='articles' className='w-full rounded-t-md object-cover'/>
                            <div className='text-sm absolute -top-5 -right-5 bg-white border-2 border-red-500 px-4 text-gray-800 rounded-md h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 '>
                                <span className='font-bold'>6</span>
                                <small>July</small>
                            </div>
                            <div className='py-4 px-6'>
                                <h1 className='font-bold font-quicksand text-base text-gray-700'>Laravel Eloquent Relationships</h1>
                                <p className='font-bold font-quicksand text-sm text-justify text-gray-500'>
                                    Eloquent relationships are defined as methods on your Eloquent model classes. Since relationships also serve as powerful query builders, defining relationships as methods provides powerful method.....
                                </p>
                                <div className='flex flex-row items-center gap-2 mt-4'>
                                    <img src={user} className="rounded-full w-8" alt='user'/>
                                    <p className='text-gray-400 text-xs'>Rafi Taufiqurrahman</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg rounded-lg relative border-2 border-red-500 hover:scale-105 duration-500'>
                            <img src={articles4} alt='articles' className='w-full rounded-t-md object-cover'/>
                            <div className='text-sm absolute -top-5 -right-5 bg-white border-2 border-red-500 px-4 text-gray-800 rounded-md h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 '>
                                <span className='font-bold'>5</span>
                                <small>July</small>
                            </div>
                            <div className='py-4 px-6'>
                                <h1 className='font-bold font-quicksand text-base text-gray-700'>Laravel Blade Directive</h1>
                                <p className='font-bold font-quicksand text-sm text-justify text-gray-500'>
                                    In addition to template inheritance and displaying data, Blade also provides convenient shortcuts for common PHP control structures, such as conditional statements and loops
                                    ....
                                </p>
                                <div className='flex flex-row items-center gap-2 mt-4'>
                                    <img src={user} className="rounded-full w-8" alt='user'/>
                                    <p className='text-gray-400 text-xs'>Rafi Taufiqurrahman</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg rounded-lg relative border-2 border-red-500 hover:scale-105 duration-500'>
                            <img src={articles3} alt='articles' className='w-full rounded-t-md object-cover'/>
                            <div className='text-sm absolute -top-5 -right-5 bg-white border-2 border-red-500 px-4 text-gray-800 rounded-md h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 '>
                                <span className='font-bold'>30</span>
                                <small>June </small>
                            </div>
                            <div className='py-4 px-6'>
                                <h1 className='font-bold font-quicksand text-base text-gray-700'>Laravel Breeze</h1>
                                <p className='font-bold font-quicksand text-sm text-justify text-gray-500'>
                                Laravel Breeze is a minimal, simple implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and password confirmation....
                                </p>
                                <div className='flex flex-row items-center gap-2 mt-4'>
                                    <img src={user} className="rounded-full w-8" alt='user'/>
                                    <p className='text-gray-400 text-xs'>Rafi Taufiqurrahman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className='flex flex-row justify-center md:justify-end gap-2 md:gap-4 my-8 items-center'>
                        <li className="bg-teal-400  text-white dark:text-white hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center p-1 h-8 w-8 rounded-full">1</span>
                        </li>
                        <li className="hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center p-1 h-8 w-8 rounded-full">2</span>
                        </li>
                        <li className="hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center p-1 h-8 w-8 rounded-full">3</span>
                        </li>
                        <li className="hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center p-1 h-8 w-8 rounded-full">4</span>
                        </li>
                        <li className="hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center p-1 h-8 w-8 rounded-full">5</span>
                        </li>
                        <li className="hover:bg-teal-500 hover:text-white h-8 w-8 rounded-full">
                            <span className="inline-flex justify-center items-center p-1 h-8 w-8 rounded-full">
                                <HiChevronDoubleRight className="w-7 h-7"/>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
