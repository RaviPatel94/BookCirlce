import React, { useEffect, useState } from 'react'
import Profileopt from './profileopt.jsx/Profileopt'
import Addinfo from './profileopt.jsx/Addinfo'
import Orders from './profileopt.jsx/Orders'
import Books from './profileopt.jsx/Books'
import Payment from './profileopt.jsx/Payment'
import Rewards from './profileopt.jsx/Rewards'
import Help from './profileopt.jsx/Help'

function Profile() {

  const [inview, setinview] = useState(" ")
  
  useEffect(()=>{
      const item=document.getElementById(inview)
      item?.scrollIntoView({behavior:"smooth"})
      setinview(" ")
  },[inview])


  return (
    <main className='pt-[77px] h-screen flex w-screen'> 
        <ul className=' w-64 h-full flex flex-col border-r-2 font-light border-slate-500 bg-gray-200 divide-y-[2px] divide-gray-200'>
          <li className='sideopt flex gap-2 items-center'
          onClick={()=>setinview("profile")}
          > <img src="/images/pfp.jpg" alt="pfp" className='w-6 h-6 rounded-full'/> Profile</li>
          <li className='sideopt'
          onClick={()=>setinview("address")}
          >Address Info</li>
          <li className='sideopt'
          onClick={()=>setinview("orders")}
          >My Orders</li>
          <li className='sideopt'
          onClick={()=>setinview("mybooks")}
          >My Books</li>
          <li className='sideopt'
          onClick={()=>setinview("Payment")}
          >Payment method</li>
          <li className='sideopt'
          onClick={()=>setinview("rewards")}
          >Rewards</li>
          <li className='sideopt'
          onClick={()=>setinview("help")}
          >Help?</li>
          <li className='sideopt border'
          onClick={()=>setinview("signout")}
          >Sign Out</li>
        </ul>
        <div className='w-full h-full overflow-y-scroll pb-10 flex flex-col items-center gap-20'>
          <Profileopt/>
          <Addinfo/>
          <Orders/>
          <Books/>
          <Payment/>
          <Rewards/>
          <Help/>
        </div>
    </main>
  )
}

export default Profile