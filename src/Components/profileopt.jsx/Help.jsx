import React, {useState} from 'react'

function Help() {

  const [trust, settrust] = useState(false)
  const [days, setdays] = useState(false)
  const [price, setprice] = useState(false)
  const [country, setcountry] = useState(false)
  return (
    <div id='help' className='flex flex-col gap-8 items-center w-full pb-6 '>
      <h2 className='text-3xl'>Frequently asked questions</h2>
      <div className='flex flex-col gap-3 items-center w-full text-lg font-light'>
      <div className='border hover:bg-gray-200 border-gray-300 shadow-md w-8/12 py-3 flex flex-col items-start px-9 '>
        <div onClick={()=>settrust(prev=>!prev)} className='w-full flex justify-between  cursor-pointer'>
          <div>Can i trust the sellers?</div>
          <div>{trust?"X":"V"}</div></div>
        <div className={trust?"block text-base":"hidden"}>Yes, all the seller are verified by us and you can trust them</div>
      </div>
      <div className='border hover:bg-gray-200 border-gray-300 shadow-md w-8/12 py-3 flex flex-col items-start px-9 '>
        <div onClick={()=>setdays(prev=>!prev)} className=' cursor-pointer w-full flex justify-between'>
          <div>In how many days will i recive me order?</div>
          <div>{days?"X":"V"}</div></div>
        <div className={days?"block text-base":"hidden"}>Delivery is done in 5-7 days in average.</div>
      </div>
      <div  className='border hover:bg-gray-200 border-gray-300 shadow-md w-8/12 py-3 flex flex-col items-start px-9 '>
        <div onClick={()=>setprice(prev=>!prev)} className=' cursor-pointer w-full flex justify-between'>
          <div>What price should i set for my book?</div>
          <div>{price?"X":"V"}</div></div>
        <div className={price?"block text-base":"hidden"}>Full price if new book, around 75% if second hand and 50% if 3rd hand. </div>
      </div>
      <div className='border hover:bg-gray-200 border-gray-300 shadow-md w-8/12  py-3 flex flex-col items-start px-9 '>
        <div onClick={()=>setcountry(prev=>!prev)} className='w-full flex justify-between cursor-pointer'>
          <div>Can this be delivered in my country?</div>
          <div>{country?"X":"V"}</div></div>
        <div className={country?"block text-base":"hidden"}>Our service is available in 130 countries. refer this list: <span className='text-blue-500 cursor-pointer underline'>countries</span></div>
      </div>
      <div className='border hover:bg-gray-200 border-gray-300 shadow-md w-8/12  py-3 px-9 cursor-pointer '>Other</div>
      </div>
    </div>
  )
}

export default Help