import React from 'react'
import TeamCard from './Teamcard'
import Folders from './Folders'

const Sidebar = () => {
    const products = ['Roadmap', 'Feedback', 'Performance', 'Team', 'Analytics']
    const sales = ['Feedback', 'Performance']
    const design = ['Performance', 'Team', 'Analytics']
    const office = []
    const legal = []

    return (
        <div className='p-4 flex flex-col gap-4 w-[25vw] border h-screen m-2 rounded-lg justify-between ' >
            <div>


                <div className='flex items-center justify-between px-3'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-11 rounded-xl' src="/logo.png" alt="logo" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>INC</span>
                            <span className='font-semibold'>InnovateHub</span>
                        </div>
                    </div>
                    <div>
                        <img className='w-10 rounded-full' src="/profile.jpeg" alt="profile" />
                    </div>
                </div>
                <div className='border overflow-hidden h-max w-full mt-5 rounded-2xl'>
                    <TeamCard logo='/pen.png' teamName='Design' endLogo='X+1' />
                    <TeamCard logo='/speaker.png' teamName='Marketing' endLogo='X+2' />
                    <TeamCard logo='/pen.png' teamName='Development' endLogo='X+3' />

                    <div>

                        <div className='border-t text-gray-600 flex cursor-pointer p-2 gap-3 hover:bg-gray-100' >
                            <div>+</div>
                            <div>Create a team</div>
                        </div>

                    </div>
                </div>

                <div className='folders '>
                    <div className='flex justify-between px-4 text-gray-600'>
                        <span>Folders</span>
                        <span>+</span>
                    </div>
                    <Folders folderName='Products' arr={products} />
                    <Folders folderName='Sales' arr={sales} />
                    <Folders folderName='Design' arr={design} />
                    <Folders folderName='Office' arr={office} />
                    <Folders folderName='Legal' arr={legal} />
                </div>
            </div>
            <div className='px-4 font-semibold'>
                <div className='flex w-full gap-2 p-3'>
                    <span><img className='w-5' src="/speaker.png" alt="" /></span>
                    <span>Invite teammates</span>
                </div>
                <div className='flex w-full justify-between items-center p-3'>
                    <div className='flex  gap-2'>
                        <span><img className='w-5' src="/speaker.png" alt="" /></span>
                        <span>Help and first step</span>
                    </div>

                    <div className='rounded-md px-3 py-1 bg-gray-100 text-xs border text-center text-zinc-500'>0/6</div>
                </div>
                <div className='flex w-full  justify-between items-center  bg-gray-200 p-3 rounded-lg'>
                    <div >
                        <span className='rounded-lg mr-2 py-1 px-2 bg-white'>7</span>
                        <span>days left on trial</span>
                    </div>

                    <button className='bg-black text-white px-4 py-2 rounded-lg'>Add biling</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
