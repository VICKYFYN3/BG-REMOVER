import React from 'react'
import { assets, plans } from './../assets/assets';

const BuyCredit = () => {
    return (
        <div className='text-center pt-8 md:pt-14 pb-8 px-4'>
            <div className='max-w-6xl mx-auto'>
                <button className='border border-gray-400 px-6 md:px-10 py-2 rounded-full mb-6 text-sm md:text-base'>
                    Our Plans
                </button>
                
                <h1 className='text-center text-xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-8 md:mb-10 px-4'>
                    Choose the plan that's right for you
                </h1>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto'>
                    {plans.map((item, index) => (
                        <div 
                            className='bg-white drop-shadow-sm border rounded-lg py-8 md:py-12 px-6 md:px-8 text-gray-700 hover:scale-105 transition-all duration-500 w-[70%] sm:w-full mx-auto' 
                            key={index}
                        >
                            <img width={40} src={assets.logo_icon} alt="" />
                            <p className='mt-3 font-semibold text-base md:text-lg'>{item.id}</p> 
                            <p className='text-sm md:text-base text-gray-600'>{item.desc}</p>
                            <p className='mt-4 md:mt-6'>
                                <span className='text-2xl md:text-3xl font-medium'>${item.price}</span>
                                <span className='text-sm md:text-base'>/ {item.credits} credits</span>
                            </p>
                            <button className='w-full bg-gray-800 text-white mt-6 md:mt-8 text-sm md:text-base rounded-md py-2.5 hover:bg-gray-700 transition-colors'>
                                Purchase
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BuyCredit;