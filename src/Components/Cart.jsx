import React from 'react'

function Cart() {

  function getDateFiveDaysAhead() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5); 
    return currentDate.toISOString().split('T')[0];
  }

  return (
    <div className='mt-20 w-screen px-5 flex justify-between min-h-screen'>
      <div className="w-[65%]">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="text-left px-4 py-2">Book</th>
              <th className="text-left px-4 py-2">Info</th>
              <th className="text-left px-4 py-2">Price</th>
              <th className="text-left px-4 py-2">Qty</th>
              <th className="text-left px-4 py-2">Estimate delivery date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">
                <img src="/images/book1.jpg" alt="Book Cover" className="h-32 w-auto" />
              </td>
              <td className="px-4 py-2">
                <div>
                  <h2 className="font-bold text-lg">My first doctor visit</h2>
                  <h3 className="text-sm text-gray-600">By: Ravi Patel</h3>
                </div>
              </td>
              <td className="px-4 py-2">250rs</td>
              <td className="px-4 py-2 ">
                <button className="border border-gray-400 px-2 py-1 mr-1 rounded">-</button>
                <span>1</span>
                <button className="border border-gray-400 px-2 py-1 ml-1 rounded">+</button>
              </td>
              <td className="px-4 py-2">{getDateFiveDaysAhead()}</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className='w-4/12 px-5 py-3 border border-slate-400 '>
          <p className='text-3xl'>Price detail</p>
          <table className='mt-3 text-lg mb-3 font-light'>
            <tr>
              <td>Total Mrp</td>
              <td>250rs</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>10rs</td>
            </tr>
            <tr>
              <td>Total Mrp</td>
              <td>240rs</td>
            </tr>
          </table>
          <hr />
          <button className='mt-3 mb-3 text-xl'>Apply coupons</button>
          <hr />
          <p className='text-base pt-3'>Other charges</p>
          <tr className='pb-3'>
            <td className='text-lg font-light'>Shipping charges</td>
            <td className='text-lg font-light'>0rs</td>
          </tr>
          <hr />
          <tr className='w-full'>
            <td className='pt-3'>Final Price</td>
            <td className='text-left'>240rs</td>
          </tr>
        </div>
    </div>
  )
}

export default Cart