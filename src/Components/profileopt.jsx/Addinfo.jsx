import React,{useState} from 'react'

function Addinfo() {
const [edit, setedit] = useState(false)
  const [address1, setaddress1] = useState("201/C, ABC building, xyz nagar, Mumbai, India")
  const [address2, setaddress2] = useState("xyz nagar")
  const [city, setcity] = useState("Mumbai")
  const [postal, setpostal] = useState("123456")
  const [country, setcountry] = useState("India")

  return (
    <div id='address' className='flex h-max justify-between items-center  w-10/12 md:w-9/12'>
      <div className='flex w-full justify-between h-max items-start'>
        <div className=' h-full flex justify-center gap-8 md:gap-12 flex-col'>
            <div>
            <h1 className='text-2xl lg:text-3xl mb-1'>Address Info</h1>
            <p className='bg-slate-200 px-3 py-[2px] rounded-lg w-max text-xs lg:text-sm '>This Information won't be visible to anyone.</p></div>
            <button className='bg-blue-500 px-3 py-1 md:hidden rounded-md hover:bg-blue-600 hover:text-gray-100 w-max text-sm lg:text-base' onClick={()=>setedit(prev=>!prev)}>{edit?"Save":"Edit Address"}</button>
            <div className='flex flex-col gap-5 text-base lg:text-lg font-light'> 
                <div className='w-max'>Address line 1 : <input type="text" placeholder='201/C, ABC building' value={address1} readOnly={!edit} onChange={(e)=>setaddress1(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Address line 2 : <input type="text" placeholder='Your FullName' value={address2} readOnly={!edit} onChange={(e)=>setaddress2(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>City : <input type="text" placeholder='Your city' value={city} readOnly={!edit} onChange={(e)=>setcity(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Postal code : <input type="number" placeholder='Your postal' value={postal} readOnly={!edit} onChange={(e)=>setpostal(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
                <div>Country : <input type="text" placeholder='Your Country' value={country} readOnly={!edit} onChange={(e)=>setcountry(e.target.value)} className={`px-2 outline-none w-max cursor-default ${edit?"bg-slate-200 rounded-lg cursor-text":""}`} /></div>
            </div>

        </div>
        <div className='flex flex-col gap-6  items-center relative' >
        <button className= ' hidden md:block bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100' onClick={()=>setedit(prev=>!prev)}>{edit?"Save":"Edit Address"}</button>
            
        </div>
        </div>
    </div>
  )
}

export default Addinfo