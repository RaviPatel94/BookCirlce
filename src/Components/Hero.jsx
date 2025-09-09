import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";

function Hero() {

  const handlebuyscroll=()=>{
    const menusect=document.getElementById("menu")
    menusect?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className='h-screen w-screen'>
        <div className='relative flex items-center justify-center'>
            <img src="/images/poster.jpg" alt="" className='h-screen brightness-[.20] w-screen object-cover' />
            <div className='absolute text-white flex flex-col items-center gap-3'>
                <h1 className='grid3:text-8xl text-6xl drop-shadow-md font-Playfair'>BookCircle</h1>
                <h2 className='grid3:text-4xl text-center text-2xl pb-2 drop-shadow-lg'>Books Within Reach: Buy, Rent, Read, Repeat! </h2>
                <div className='flex gap-4 text-xl'>
                    <button className='px-3 py-1 bg-white flex items-center justify-center text-black hover:text-white hover:bg-[#28A745] rounded-lg drop-shadow-md'
                    onClick={handlebuyscroll}
                    ><FiShoppingCart className="mr-2" /> Buy</button>
                    <Link to="profile">
                    <button className='px-3 py-1 flex gap-1 pr-4 bg-white items-center justify-center text-black hover:text-white hover:bg-[#FF7A00] rounded-lg drop-shadow-md'>
                      <AiOutlineTag/>
                      Sell</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero