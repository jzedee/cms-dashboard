// components/teamcard.js
import React from 'react';

const TeamCard = (props) => {
    return (
        <div>
            <div className='m-2 items-center font-semibold flex justify-between cursor-pointer p-2 gap-3 hover:bg-gray-100 rounded-lg'>
                <div className='flex gap-3' >
                    <div className='flex items-center'>
                        <img className='w-4 ' src={props.logo} alt="logo" />
                        </div>
                    <div className='flex items-center'>{props.teamName} Team</div>
                </div>

                <div className='rounded px-3 py-1 bg-gray-100 text-xs border text-center text-zinc-500'>{props.endLogo}</div>

            </div>
        </div>
    );
};

export default TeamCard;
