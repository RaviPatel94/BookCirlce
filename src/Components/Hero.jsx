import React from 'react'

function Hero() {
  return (
    <div className='h-screen w-screen'>
        <div className='relative flex items-center justify-center'>
            <img src="/images/poster.jpg" alt="" className='h-screen w-screen object-cover' />
            <div className='absolute text-white flex flex-col items-center gap-3'>
                <div className='text-8xl drop-shadow-md font-Playfair'>BookCircle</div>
                <div className='text-4xl pb-2 drop-shadow-md'>Books Within Reach: Buy, Rent, Read, Repeat! </div>
                <div className='flex gap-4 text-xl'>
                    <button className='px-5 py-1 bg-green-500 hover:bg-green-600 rounded-lg drop-shadow-md'>Buy</button>
                    <button className='px-5 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg drop-shadow-md'>Sell</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Hero