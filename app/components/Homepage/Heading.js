import React from 'react'

const Heading = () => {
    return (
        <div className='grid '>
            <div className='flex  justify-between'>
                <div className='flex gap-2'>
                    <input type="checkbox" />
                    <span>Brand</span>
                </div>
                <span>+</span>
            </div>
            <div>Description</div>
            <div>Members</div>
            <div>Categories</div>
            <div>Tags</div>
            <div>Next meeting</div>
            <div style={{ borderRight: 'none' }}>+</div>
        </div>
    )
}

export default Heading
