import React from 'react'
import { useState } from 'react'

function Profileopt() {
  const [edit, setedit] = useState(false)
  const [name, setname] = useState("Ravi Patel")
  const [username, setusername] = useState("Ravip")
  const [email, setemail] = useState("ravi942004@gmail.com")
  const [number, setnumber] = useState("123456789")
  const [country, setcountry] = useState("india")

  return (
    <div className='flex h-full justify-around items-center w-full'>
      <div className='flex w-full justify-around h-max items-start'>
        <div className=' h-full flex justify-center gap-12 flex-col'>
            <div>
            <h1 className='text-3xl mb-1'>Your Profile</h1>
            <p className='bg-slate-200 px-2 py-[2px] rounded-lg'>!Note:Everyone can see these details on your profile.</p></div>
            <div className='flex flex-col gap-5 text-xl'>
                <div className='w-max'>Username : <input type="text" value={name} readOnly className='outline-none w-max cursor-default' /></div>
                <div>Full Name : <input type="text" value={username} readOnly className='outline-none w-max cursor-default' /></div>
                <div>Email : <input type="text" value={email} readOnly className='outline-none w-max cursor-default' /></div>
                <div>Phone number : <input type="text" value={number} readOnly className='outline-none w-max cursor-default' /></div>
                <div>Country : <input type="text" value={country} readOnly className='outline-none w-max cursor-default' /></div>
            </div>

        </div>
        <div className='flex flex-col gap-6  items-center' >
            <img src="/images/pfp.jpg" className='w-32 rounded-full brightness-90' alt="Profile pic" />
            <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100' onClick={()=>setedit(prev=>!prev)}>{edit?"Save":"Edit Profile"}</button>
        </div>
        </div>
    </div>
  )
}

export default Profileopt