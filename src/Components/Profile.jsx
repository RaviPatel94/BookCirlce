import React, { useEffect, useState } from 'react'
import Profileopt from './profileopt.jsx/Profileopt'
import Addinfo from './profileopt.jsx/Addinfo'
import Orders from './profileopt.jsx/Orders'
import Books from './profileopt.jsx/Books'
import Payment from './profileopt.jsx/Payment'
import Rewards from './profileopt.jsx/Rewards'
import Help from './profileopt.jsx/Help'
import Contact from './profileopt.jsx/Contact'
import { User,House,FileClock,BookCopy,CreditCard,Gift,CircleHelp, Settings, LogOut, Mail, ShoppingCart } from 'lucide-react';

function Profile() {

  const [inview, setinview] = useState(" ")
  const [opennav, setopennav] = useState(false)
  
  useEffect(()=>{
      const item=document.getElementById(inview)
      item?.scrollIntoView({behavior:"smooth"})
      setinview(" ")
  },[inview])

  return (
    <main className='pt-[77px] h-screen flex w-screen relative'> 
        <div className={`absolute left-3 top-24 size-8 flex flex-col justify-between cursor-pointer transition-all duration-200 ${opennav? "translate-x-52":""}`} onClick={()=>setopennav(!opennav)}>
          <hr className='border-[1.5px] border-black' />
          <hr className='border-[1.5px] border-black' />
          <hr className='border-[1.5px] border-black' />
        </div>
        <ul className={` z-10 h-full absolute md:static w-52 lg:w-64  md:flex flex-col border-r-2 font-light border-slate-500 bg-gray-200 divide-y-[2px] divide-gray-200 transition-all duration-200 ${opennav?"flex" :"hidden"} `}>
          <li className='sideopt flex gap-2 items-center'
          onClick={()=>setinview("profile")}
          > <User className=' size-5 lg:size-6' /> Profile</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("address")}
          > <House className=' size-5 lg:size-6'/> Address Info</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("orders")}
          > <FileClock className=' size-5 lg:size-6'/> My Orders</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("mybooks")}
          > <BookCopy className=' size-5 lg:size-6'/> My Books</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("Payment")}
          > <CreditCard className=' size-5 lg:size-6'/>Payment method</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("rewards")}
          ><Gift className=' size-5 lg:size-6'/>Rewards</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("help")}
          ><CircleHelp className=' size-5 lg:size-6'/>FYQ</li>
          <li className='sideopt flex gap-2 pl-2'
          onClick={()=>setinview("contact")}
          ><CircleHelp className=' size-5 lg:size-6'/>Contact</li>
        </ul>
        <div className='w-full h-full overflow-y-scroll pb-10 flex flex-col items-center gap-20'>
          <Profileopt/>
           <Addinfo/>
          <Orders/>
          <Books/>
          <Payment/>
          <Rewards/>
          <Help/>
          <Contact/>
        </div>
    </main>
  )
}

export default Profile