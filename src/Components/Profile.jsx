import React from 'react'
import Profileopt from './profileopt.jsx/Profileopt'
import Addinfo from './profileopt.jsx/Addinfo'
import Orders from './profileopt.jsx/Orders'

function Profile() {
  return (
    <main className='pt-[77px] h-screen flex w-screen'> 
        <ul className=' w-64 h-full flex flex-col border-r-2 font-light border-slate-500 bg-gray-200 divide-y-[2px] divide-gray-200'>
          <li className='sideopt flex gap-2 items-center'> <img src="/images/pfp.jpg" alt="pfp" className='w-6 h-6 rounded-full' /> Profile</li>
          <li className='sideopt'>Address Info</li>
          <li className='sideopt'>My Orders</li>
          <li className='sideopt'>My Books</li>
          <li className='sideopt'>Payment method</li>
          <li className='sideopt'>Reviews</li>
          <li className='sideopt'>Rewards</li>
          <li className='sideopt'>Help?</li>
          <li className='sideopt border'>Sign Out</li>
        </ul>
        <div className='w-full h-full overflow-y-scroll pb-10 flex flex-col gap-20'>
          <Profileopt/>
          <Addinfo/>
          <Orders/>
        </div>
    </main>
  )
}

export default Profile