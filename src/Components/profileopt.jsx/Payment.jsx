import React,{useState} from 'react'
import { Trash2 } from 'lucide-react'

function Payment() {  
  const [another, setanother] = useState(false)

  return (
    <div id='payment' className='w-10/12 md:w-9/12'>
      <div className=' flex flex-col gap-6'>
        <h2 className='text-3xl'>Payment methods :</h2>
        <div className='bg-slate-200 px-4 py-2 cursor-pointer flex justify-between'>
          <div>Upi id = 12345678@moneybank</div>
          <Trash2/>
        </div>
        <div onClick={()=>setanother(prev=>!prev)} className='bg-slate-200 px-4 py-2 cursor-pointer flex justify-between'>
          <div>Add another method +</div>
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