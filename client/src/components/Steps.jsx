import React from 'react'
import { assets } from '../assets/assets';

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-28 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Steps to remove background <br /> image in seconds
            </h1>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-16 xl:mt-24 justify-center'>
                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300 ease-in-out flex-1 max-w-sm'>
                    <img className='max-w-9 flex-shrink-0' src={assets.upload_icon} alt="" />
                    <div>
                        <p className='font-medium mb-2'>Upload image</p>
                        <p className='text-sm text-gray-600'>This is a demo text,will replace later. <br /> This is a demo</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300 ease-in-out flex-1 max-w-sm'>
                    <img className='max-w-9 flex-shrink-0' src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='font-medium mb-2'>Remove background</p>
                        <p className='text-sm text-gray-600'>This is a demo text,will replace later. <br /> This is a demo</p>
                    </div>
                </div>
                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300 ease-in-out flex-1 max-w-sm'>
                    <img className='max-w-9 flex-shrink-0' src={assets.download_icon} alt="" />
                    <div>
                        <p className='font-medium mb-2'>Download image</p>
                        <p className='text-sm text-gray-600'>This is a demo text,will replace later. <br /> This is a demo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps