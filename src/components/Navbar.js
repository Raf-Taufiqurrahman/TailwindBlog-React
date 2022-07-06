import React from 'react'
import { Link } from 'react-router-dom'
import { HiFire, HiHome, HiDocumentDuplicate, HiChatAlt2, HiColorSwatch} from "react-icons/hi";
export default function Navbar() {
    return (
        <div>
            <nav className='w-full flex bg-cyan-700 shadow-sm shadow-cyan-500'>
                <div className='container mx-auto px-4 text-white'>
                    <div className='flex flex-row gap-1 items-center py-3'>
                        <Link className='px-3 inline-block items-center gap-1 text-4xl hover:ring-2 hover:ring-cyan-600 p-2 rounded-md hover:bg-cyan-800' to='/'>
                            <HiFire/>
                        </Link>
                        <Link className='px-3 hidden md:flex items-center gap-1 hover:ring-2 hover:ring-cyan-600 p-2 rounded-md hover:bg-cyan-800 ' to='/'>
                            <HiHome className='text-md'/> Home
                        </Link>
                        <Link className='px-3 hidden md:flex items-center gap-1 hover:ring-2 hover:ring-cyan-600 p-2 rounded-md hover:bg-cyan-800 ' to='/'>
                            <HiDocumentDuplicate className='text-md'/> Articles
                        </Link>
                        <Link className='px-3 hidden md:flex items-center gap-1 hover:ring-2 hover:ring-cyan-600 p-2 rounded-md hover:bg-cyan-800 ' to='/'>
                            <HiColorSwatch className='text-md'/> Topics
                        </Link>
                        <Link className='px-3 hidden md:flex items-center gap-1 hover:ring-2 hover:ring-cyan-600 p-2 rounded-md hover:bg-cyan-800 ' to='/'>
                            <HiChatAlt2 className='text-md'/> Forum
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
