"use client"
import ColoredDiv from './ColoredDiv';

const Item = (props) => {   
    return (
        <div className='grid'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <input type="checkbox" />
                    <div className='flex rounded gap-1 items-center'>
                        <img className='w-4' src={props.logo} alt="wix" />
                        <span>{props.brand}</span>
                    </div>
                </div>
                {(props.chatCount > 0) && 
                    <div className='flex items-center gap-2 object-contain'>
                        <img className='w-auto h-4' src="/chat.png" alt="chat" />
                        <span>{props.chatCount}</span>
                    </div>
                }
            </div>
            <div className='overflow-hidden text-nowrap text-ellipsis'>{props.desc}</div>
            <div className='flex'>
                {props.images.map((imageUrl, index) => (
                    <div key={index} className='w-8 h-8 rounded-full p-[2px] shadow-sm bg-white flex items-center justify-center'>
                        <img className='w-full h-full rounded-full' src={imageUrl} alt={`image-${index}`} />
                    </div>
                ))}
            </div>
            <div className='flex gap-1 overflow-x-auto'>
                {Array.isArray(props.categories) && props.categories.map((category, index) => (
                    <ColoredDiv key={index} title={category} color='violet' />
                ))}
            </div>
            <div className='flex gap-1 overflow-x-auto'>
                {Array.isArray(props.tags) && props.tags.map((tag, index) => (
                    <ColoredDiv key={index} title={tag} color='violet' />
                ))}
            </div>
            <div className='flex gap-1 overflow-x-auto'>
                <ColoredDiv title={props.meeting} color='green' />
            </div>
            <div style={{ borderRight: 'none' }}></div>
        </div>
    );
};

export default Item;
