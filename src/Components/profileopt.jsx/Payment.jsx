import React,{useEffect, useState} from 'react'
import { Trash2 } from 'lucide-react'

function Payment() {  
  const [another, setanother] = useState(false)
  let paymentmethods=["Upi id = 12345678@moneybank"]

  let addanother=()=>{

  }

  return (
    <div id='payment' className='w-10/12 md:w-9/12'>
      <div className=' flex flex-col gap-6'>
        <h2 className='text-3xl'>Payment methods :</h2>
        {
          paymentmethods[0]?paymentmethods.map((way)=>{
            return(
              <div key={way.id} className='bg-slate-200 px-4 py-2 cursor-pointer flex justify-between'>
              <div>{way}</div>
              <Trash2/>
            </div>
            )
          }):console.log("empty array")
        }
        <div onClick={()=>setanother(prev=>!prev)} className={`bg-slate-200 px-4 py-2 cursor-pointer flex justify-between `}>
          <div>Add another method +</div>
        </div>
        <div className={`${another?"":"hidden"}`}>
          <select className='outline-none cursor-pointer'>
            <option>UPI</option>
            <option>Debit Card</option>
            <option>Credit Card</option>
          </select>
          <input type="text" className='bg-slate-200 outline-none px-4 py-2' />
          <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max'>Add</button>
        </div>
        <div>
          
        </div>
      </div>
    <form>
    </form>
    </div>
  )
}

export default Payment