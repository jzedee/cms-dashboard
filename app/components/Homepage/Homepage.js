import React from 'react'
import Navbar from './Navbar'
import Subnavbar from './Subnavbar'
import Items from './Items'
import Footer from './Footer'

const Homepage = () => {
    return (
        <div className='homepage w-[75vw] relative flex justify-between flex-col border h-screen m-2 rounded-lg'>
            <div className='flex flex-col'>
                <Navbar />
                <Items />
            </div>
            <div className='flex mx-auto pb-2'>
                <Footer />
            </div>


        </div>
    )
}

export default Homepage
