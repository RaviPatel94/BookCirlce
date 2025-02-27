import React from 'react'

function Cart() {

  function getDateFiveDaysAhead() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5); 
    return currentDate.toISOString().split('T')[0];
  }

  return (
    <div className='pt-20 w-screen px-5 flex flex-col md:flex-row md:justify-between min-h-screen gap-6'>
      <div className="md:w-[65%]">
        <table className="table-auto w-full h-max">
          <thead className='font-Playfair'>
            <tr className="border-b border-black text-sm sm:text-lg">
              <th className="text-left px-1 sm:px-4 py-2 font-light">Book</th>
              <th className="text-left px-1 sm:px-4 py-2 font-light">Info</th>
              <th className="text-left px-1 sm:px-4 py-2 font-light">Price</th>
              <th className="text-left px-1 sm:px-4 py-2 font-light">Qty</th>
              <th className="text-left px-1 sm:px-4 py-2 font-light">Delivery by</th>
            </tr>
          </thead>
          <tbody className='h-full'>
            <tr className="border-b border-black h-full">
              <td className="px-1 sm:px-4 py-2">
                <img src="/images/book1.jpg" alt="Book Cover" className=" h-28 grid3:h-32 w-auto" />
              </td>
              <td className="px-1 sm:px-4 py-2">
                <div>
                  <p className=" text-sm grid3:text-base sm:text-lg text-light">My first doctor visit</p>
                  <h3 className="text-xs text-gray-600">By: Ravi Patel</h3>
                </div>
              </td>
              <td className="px-1 sm:px-4 py-2 text-sm grid3:text-lg">250rs</td>
              <td className="px-1 sm:px-4 py-2  ">
                <input type="number" name="" id="" defaultValue={1} className=' text-black placeholder:text-black w-7 outline-none text-sm grid3:text-lg px-2 py-2 hover:bg-gray-200' />
              </td>
              <td className=" px-1 sm:px-4 py-2 text-sm grid3:text-lg">{getDateFiveDaysAhead()}</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className='md:w-4/12 h-max px-5 py-5 border rounded-xl border-slate-400 '>
          <p className='text-3xl'>Order detail</p>
          <table className='border-separate border-spacing-1 mt-3 text-base mb-3 font-light w-full'>
            <tbody>
            <tr>
              <td>Total Mrp: </td>
              <td className='text-end'>250rs</td>
            </tr>
            <tr>
              <td>Discount: </td>
              <td className='text-end'>10rs</td>
            </tr>
            <tr>
              <td>Total Mrp: </td>
              <td className='text-end'>240rs</td>
            </tr>
            </tbody>
          </table>
          <hr className='border-1 border-black' />
          <button className='mt-3 mb-3 text-base text-green-600 border px-3 py-2 rounded-lg border-green-600 hover:text-white hover:bg-green-600 transition-all duration-150'>Apply coupons</button>
          <hr className='border-1 border-black' />
          <p className='text-sm pt-3'>Other charges</p>
          <div className='font-light flex flex-col py-2 gap-1'> 
          <label htmlFor="address">Address :</label>
          <input type="text" name='address' className= 'outline-none bg-gray-200 px-1 py-2 rounded-md text-sm' defaultValue={"401/B XYZ building, abc city, 123456 , India"} /></div>
          <table className='w-full mb-3'>
          <tbody>
          <tr className='w-full'>
            <td className='text-base  font-light'>Shipping charges: </td>
            <td className='text-base text-end font-light'>15rs</td>
          </tr>
          </tbody>
          </table>
          <hr className='border-1 border-black' />
          <table className='w-full'>
            <tbody>
          <tr className='w-full text-lg font-light'>
            <td className='pt-3 '>Final Price: </td>
            <td className='text-end'>255rs</td>
          </tr>
          <tr>
            <td >
              <div className='mt-3 px-2 py-1 rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer '> Proceed to payment</div>
            </td>
          </tr>
          </tbody>
          </table>
        </div>
    </div>
  )
}

export default Cart