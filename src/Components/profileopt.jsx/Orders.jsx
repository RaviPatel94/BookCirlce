import React from 'react'

function Orders() {
  return (
    <div id='orders' className='w-full flex flex-col items-center justify-center'>
        <div className='w-11/12 lg:w-10/12 flex flex-col items-start'>
        <h1 className='text-3xl mb-4'>Your Orders</h1>
        <table className='w-full table-fixed text-center border-separate border-spacing-y-2 font lg:font-normal'>
            <thead className='border-b border-slate-700 text-lg'>
                <tr >
                    <th className='font-medium' >Order ID</th>
                    <th className='font-medium'>Cover</th>
                    <th className='w-52 font-medium' >Title</th>
                    <th className='font-medium' >Price</th>
                    <th className='font-medium'> Date of purchase</th>
                    <th className='font-medium'>Status</th>
                </tr>
            </thead>
            <tbody >
                <tr className='border-b border-slate-700'>
                    <td className='py-6'>1234</td>
                    <td><img src="/images/book2.jpg" className='h-24 mx-auto' alt="" /></td>
                    <td className='truncate'>A guide for mbbs students <div className='text-sm font-light'>by Dr rd verma</div> </td>
                    <td>450rs</td>
                    <td>29/12/2024</td>
                    <td><div className='flex items-center justify-center gap-2' > <div className=' hidden lg:block h-[10px] w-[10px] bg-red-500 rounded-full'></div>Processing</div></td>
                </tr>
                <tr>
                    <td>1654</td>
                    <td><img src="/images/book3.jpg" className='h-24 mx-auto' alt="" /></td>
                    <td className='truncate'>Wonder worm  <div className='text-sm font-light'>by Saurabh Patel</div></td>
                    <td>490rs</td>
                    <td>26/12/2024</td>
                    <td><div className='flex items-center justify-center gap-2' > <div className='hidden lg:block h-[10px] w-[10px] bg-blue-500 rounded-full'></div>Shipped </div></td>
                </tr>
                <tr>
                    <td>1983</td>
                    <td><img src="/images/book4.jpg" className='h-24 mx-auto' alt="" /></td>
                    <td className='truncate'>Grace the heart of the fire <div className='text-sm font-light'>by Peterwattson</div></td>
                    <td>360rs</td>
                    <td>20/12/2024</td>
                    <td><div className='flex items-center justify-center gap-2' > <div className='hidden lg:block h-[10px] w-[10px] bg-green-500 rounded-full'></div>Delivered</div></td>
                </tr>
                <tr>
                    <td>2349</td>
                    <td><img src="/images/book5.jpg" className='h-24 mx-auto' alt="" /></td>
                    <td className='truncate'>Nutrituion and you with readings  <div className='text-sm font-light'>by Dr Khushi mishra</div></td>
                    <td>620rs</td>
                    <td>02/12/2024</td>
                    <td><div className='flex items-center justify-center gap-2' > <div className=' hidden lg:block h-[10px] w-[10px] bg-green-500 rounded-full'></div>Delivered</div></td>
                </tr>
                <tr>
                    <td>3072</td>
                    <td><img src="/images/book1.jpg" className='h-24 mx-auto' alt="" /></td>
                    <td className='truncate'>My first doctor visit <div className='text-sm font-light'>by Tanmay gangude</div></td>
                    <td>510rs</td>
                    <td>12/11/2024</td>
                    <td><div className='flex items-center justify-center gap-2' > <div className='hidden lg:block h-[10px] w-[10px] bg-green-500 rounded-full'></div>Delivered</div></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Orders