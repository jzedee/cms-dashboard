import React from 'react'
import Subnavbar from './Subnavbar'

const Navbar = () => {
    return (
        <div >
            <div className='flex items-center w-full justify-between p-3 font-semibold text-lg'>
                <span>Products</span>
                <div className='flex items-center gap-5   '>
                    <div className='relative shadow-sm overflow-hidden rounded-lg'>
                        <img className='w-4 opacity-50 absolute top-3 left-4' src="/search.png" alt="" />
                        <input className='border rounded-lg  py-2 pr-1  pl-10' placeholder='Search for...' type="text" />
                    </div>
                    <div className='py-3 px-3 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100'>
                        <img className='w-5' src="/chat.png" alt="chat" />
                    </div>
                    <div className='py-3 px-3 border  rounded-lg shadow-sm cursor-pointer hover:bg-gray-100'>
                        <img className='w-5 ' src="/setting.png" alt="" />
                    </div>
                </div>
            </div>

            <Subnavbar />
        </div>
    )
}

export default Navbar
