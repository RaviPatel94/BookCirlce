import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {

  const handlebuyscroll=()=>{
    const menusect=document.getElementById("menu")
    menusect?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className='h-screen w-screen'>
        <div className='relative flex items-center justify-center'>
            <img src="/images/poster.jpg" alt="" className='h-screen w-screen object-cover' />
            <div className='absolute text-white flex flex-col items-center gap-3'>
                <h1 className='grid3:text-8xl text-6xl drop-shadow-md font-Playfair'>BookCircle</h1>
                <h2 className='grid3:text-4xl text-center text-2xl pb-2 drop-shadow-md'>Books Within Reach: Buy, Rent, Read, Repeat! </h2>
                <div className='flex gap-4 text-xl'>
                    <button className='px-5 py-1 bg-green-500 hover:bg-green-600 rounded-lg drop-shadow-md'
                    onClick={handlebuyscroll}
                    >Buy</button>
                    <Link to="login">
                    <button className='px-5 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg drop-shadow-md'>Sell</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero