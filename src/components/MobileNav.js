import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome, HiDocumentDuplicate, HiChatAlt2, HiColorSwatch} from "react-icons/hi";
export default function MobileNav() {
    return (
        <div className='fixed bottom-0 w-full sm:hidden bg-black p-3'>
            <div className='container mx-auto px-4 text-white'>
                <div className='grid grid-cols-4 gap-6 justify-items-center text-2xl'>
                    <Link to='/' className='hover:ring-2 hover:ring-teal-600 p-2 rounded-md hover:bg-teal-800'>
                        <HiHome/>
                    </Link>
                    <Link to='/' className='hover:ring-2 hover:ring-teal-600 p-2 rounded-md hover:bg-teal-800'>
                        <HiDocumentDuplicate/>
                    </Link>
                    <Link to='/' className='hover:ring-2 hover:ring-teal-600 p-2 rounded-md hover:bg-teal-800'>
                        <HiChatAlt2/>
                    </Link>
                    <Link to='/' className='hover:ring-2 hover:ring-teal-600 p-2 rounded-md hover:bg-teal-800'>
                        <HiColorSwatch/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
