import React from 'react'
import Navbar from './Navbar'
import Subnavbar from './Subnavbar'
import Items from './Items'
import Footer from './Footer'

const Homepage = () => {
    return (
        <div className='homepage w-[75vw] relative flex justify-between flex-col border rounded-lg overflow-hidden box-border p-2 h-full'>
            <div className='flex flex-col overflow-y-auto box-border flex-1'>
                <Navbar />
                <Items />
            </div>
            <div className='flex mx-auto pb-2 px-2'>
                <Footer />
            </div>


        </div>
    )
}

export default Homepage
