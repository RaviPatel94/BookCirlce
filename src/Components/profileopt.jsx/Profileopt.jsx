import React from 'react'
import { useState } from 'react'

function Profileopt() {
  const [edit, setedit] = useState(false)
  const [name, setname] = useState("Ravi Patel")
  const [username, setusername] = useState("Ravip")
  const [email, setemail] = useState("ravi942004@gmail.com")
  const [number, setnumber] = useState("123456789")
  const [dob, setdob] = useState("2001-02-18")
  const [image, setimage] = useState("/images/pfp.jpg")

  const handlefile=(e)=>{
      const file=e.target.files[0]
      if (file){
        setimage(URL.createObjectURL(file))
      }
  }

  return (
    <div id='profile' className='flex h-max pt-14 justify-between items-center w-10/12 md:w-9/12'>
      <div className='flex w-full justify-between h-max items-start'>
        <div className=' h-full flex justify-center gap-12 flex-col'>
            <div>
            <h1 className='text-2xl lg:text-3xl mb-1'>Your Profile</h1>
            <p className='bg-slate-200 px-3 py-[2px] rounded-lg w-max text-xs lg:text-sm '>!Note : Everyone can see these details on your profile.</p></div>
            <div className=' z-0 w-max flex flex-col gap-6 text-sm lg:text-base items-center relative grid3:hidden' >
        <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100' onClick={()=>setedit(prev=>!prev)}>{edit?"Save":"Edit Profile"}</button>
            <img src={image} className='size-28 lg:size-32 rounded-full brightness-90' alt="Profile pic" />
            <input type="file" accept='image/*' placeholder={image} className={`absolute w-max -right-36 top-48 right-0 ${edit?"":"hidden"}`} onChange={handlefile} />
            
        </div>
            <div className='flex flex-col gap-5 text-base lg:text-lg font-light'>
                <div className='w-max'>Username : <input type="text" placeholder='Your Username' value={name} readOnly={!edit} onChange={(e)=>setname(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Full Name : <input type="text" placeholder='Your FullName' value={username} readOnly={!edit} onChange={(e)=>setusername(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Email : <input type="text" placeholder='Your Email' value={email} readOnly={!edit} onChange={(e)=>setemail(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Phone number : <input type="text" placeholder='Your Number' value={number} readOnly={!edit} onChange={(e)=>setnumber(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Date of birth : <input type='date'  value={dob} readOnly={!edit} onChange={(e)=>setdob(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
            </div>

        </div>
        <div className='grid3:flex flex-col gap-6 text-sm lg:text-base items-center relative hidden grid3:block' >
        <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100' onClick={()=>setedit(prev=>!prev)}>{edit?"Save":"Edit Profile"}</button>
            <img src={image} className='size-28 lg:size-32 rounded-full brightness-90' alt="Profile pic" />
            <input type="file" accept='image/*' placeholder={image} className={`absolute w-max -right-36 top-48 right-0 ${edit?"":"hidden"}`} onChange={handlefile} />
            
        </div>
        </div>
    </div>
  )
}

export default Profileopt