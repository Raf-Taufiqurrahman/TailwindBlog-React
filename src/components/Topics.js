import React from 'react'
export default function Topics() {
    return (
        <div>
            <section className='w-full flex text-center justify-center py-32 bg-[#EEF2F6]'>
                <div className='container mx-auto'>
                    <h1 className='font-bold font-quicksand text-base md:text-2xl'>Start by choosing Topics</h1>
                    <p className='text-sm text-gray-400 font-quicksand py-2 px-4'>If you are confused about which articles to choose, you can see a list of topics that have been grouped into certain topics.</p>
                    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-6 px-4'>
                        <div className='p-2 bg-white border border-teal-400 rounded-md relative hover:bg-teal-500 hover:text-white group transition duration-500 ease-out'>
                            <div className='flex flex-col text-center justify-center'>
                                <h1 className='text-lg font-bold font-quicksand leading-loose tracking-wider'>Laravel</h1>
                                <p className='text-xs text-gray-400 font-quicksand group-hover:text-white'>20 Articles</p>
                            </div>
                            <div className='absolute font-quicksand font-bold rounded-md bg-white border-2 border-red-500 p-1 text-xs bottom-12 -left-3 -rotate-12 group-hover:bg-red-500'>
                                New Articles
                            </div>
                        </div>
                        <div className='p-2 bg-white border border-teal-400 rounded-md hover:bg-teal-500 hover:text-white group'>
                            <div className='flex flex-col text-center justify-center'>
                                <h1 className='text-lg font-bold font-quicksand leading-loose tracking-wider'>Vue</h1>
                                <p className='text-xs text-gray-400 font-quicksand group-hover:text-white'>7 Articles</p>
                            </div>
                        </div>
                        <div className='p-2 bg-white border border-teal-400 rounded-md hover:bg-teal-500 hover:text-white group'>
                            <div className='flex flex-col text-center justify-center'>
                                <h1 className='text-lg font-bold font-quicksand leading-loose tracking-wider'>Tailwind</h1>
                                <p className='text-xs text-gray-400 font-quicksand group-hover:text-white'>10 Articles</p>
                            </div>
                        </div>
                        <div className='p-2 bg-white border border-teal-400 rounded-md hover:bg-teal-500 hover:text-white group'>
                            <div className='flex flex-col text-center justify-center'>
                                <h1 className='text-lg font-bold font-quicksand leading-loose tracking-wider'>Bootstrap</h1>
                                <p className='text-xs text-gray-400 font-quicksand group-hover:text-white'>3 Articles</p>
                            </div>
                        </div>
                        <div className='p-2 bg-white border border-teal-400 rounded-md hover:bg-teal-500 hover:text-white group'>
                            <div className='flex flex-col text-center justify-center'>
                                <h1 className='text-lg font-bold font-quicksand leading-loose tracking-wider'>React</h1>
                                <p className='text-xs text-gray-400 font-quicksand group-hover:text-white'>4 Articles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
