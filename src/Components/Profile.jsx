import React from 'react'
import Profileopt from './profileopt.jsx/Profileopt'

function Profile() {
  return (
    <main className='pt-[77px] h-screen flex w-screen'> 
        <ul className=' w-60 h-full flex flex-col border-r-2 border-slate-500 bg-gray-200 divide-y-[2px] divide-gray-200'>
          <li className='sideopt'>Profile</li>
          <li className='sideopt'>Addresss Info</li>
          <li className='sideopt'>My Orders</li>
          <li className='sideopt'>My Books</li>
          <li className='sideopt'>Payment method</li>
          <li className='sideopt'>Reviews</li>
          <li className='sideopt'>Rewards</li>
          <li className='sideopt'>Help?</li>
          <li className='sideopt border'>Sign Out</li>
        </ul>
        <div className='w-full h-full'>
          <Profileopt/>
        </div>
    </main>
  )
}

export default Profile