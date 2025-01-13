import React from 'react'

function Orders() {
  return (
    <div id='orders' className='w-full flex flex-col items-center justify-center'>
        <div className=' px-2 grid3:px-4 lg:w-11/12 flex flex-col items-start'>
        <h1 className=' text-2xl lg:text-3xl mb-4'>Your Orders</h1>
        <table className=' mx-auto w-full grid3:w-[97%] lg:w-[95%] h-max table-fixed text-center border border-black grid3:border-none rounded-xl border-separate border-spacing-y-6 grid3:border-spacing-y-2 font lg:font-normal'>
            <thead className=' hidden grid3:contents border-b border-slate-700 text-sm sm:text-[16px] lg:text-lg '>
                <tr >
                    <th className='font-medium' >ID</th>
                    <th className='font-medium'>Cover</th>
                    <th className='w-44 lg:w-52 font-medium' >Title</th>
                    <th className='font-medium' >Price</th>
                    <th className='font-medium'> Date of purchase</th>
                    <th className='font-medium'>Status</th>
                </tr>
            </thead>
            <tbody className='h-full' >
                <tr className=' text-sm sm:text-[16px] lg:text-lg h-full w-full '>
                    <td className='py-6 hidden grid3:block'>1234</td>
                    <td className='w-3/12'><img src="/images/book2.jpg" className=' h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className=' w-6/12 h-full py-1 '> <div className='flex grid3:contents  flex-col w-full h-full items-center justify-between'> <div className=' min-w-44 truncate'>A guide for mbbs students <div className='text-sm font-light'>by Dr rd verma</div></div>
                    <div className='flex w-full grid3:hidden justify-between'>
                    <div>450rs</div>
                    <div>29/12/2024</div>
                    </div></div>
                     </td>
                    <td className=' h-full w-full hidden grid3:table-cell'>450rs</td>
                    <td className=' h-full w-full hidden grid3:table-cell'>29/12/2024</td>
                    
                    <td className='h-full w-3/12 py-1'>
                        <div className=' flex grid3:block items-center my-auto flex-col w-full h-full justify-between  grid3:justify-center pt-1'>
                        <div className='flex items-center justify-center h-full w-full gap-2' > 
                        <div className=' sm:max-lg:hidden h-[10px] w-[10px] bg-blue-500 rounded-full'></div>
                        <div className='hidden sm:block '>Processed</div>
                        </div> 
                    <div className='grid3:hidden block'>Id:1234</div></div></td>
                </tr>

                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                <td className='py-6 hidden grid3:block'>1654</td>
                <td className='w-3/12'><img src="/images/book3.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                <td className='w-6/12 h-full py-1'>
                    <div className='flex grid3:contents flex-col w-full h-full items-center justify-between grid3:justify-center'>
                        <div className='min-w-44 truncate'>Wonder worm
                            <div className='text-sm font-light'>by Saurabh Patel</div>
                        </div>
                        <div className='flex w-full grid3:hidden justify-between'>
                            <div>490rs</div>
                            <div>26/12/2024</div>
                        </div>
                    </div>
                </td>
                <td className='h-full w-full hidden grid3:table-cell'>490rs</td>
                <td className='h-full w-full hidden grid3:table-cell'>26/12/2024</td>
                <td className='h-full w-3/12 py-1'>
                    <div className='flex items-center my-auto flex-col w-full h-full justify-between pt-1'>
                        <div className='flex items-center justify-center h-full w-full gap-2'>
                            <div className='sm:max-lg:hidden h-[10px] w-[10px] bg-purple-700 rounded-full'></div>
                            <div className='hidden sm:table-cell'>Shipped</div>
                        </div>
                        <div className='grid3:hidden block'>Id:1654</div>
                    </div>
                </td>
                 </tr>
                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='py-6 hidden grid3:block'>1983</td>
                    <td className='w-3/12'><img src="/images/book4.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-36 truncate'>Grace the heart of the fire
                                <div className='text-sm font-light'>by Peterwattson</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>360rs</div>
                                <div>20/12/2024</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>360rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>20/12/2024</td>
                    <td className='h-full w-3/12 py-1'>
                        <div className='flex items-center my-auto flex-col w-full h-full justify-between pt-1'>
                            <div className='flex items-center justify-center h-full w-full gap-2'>
                                <div className='sm:max-lg:hidden h-[10px] w-[10px] bg-green-500 rounded-full'></div>
                                <div className='hidden sm:table-cell'>Delivered</div>
                            </div>
                            <div className='grid3:hidden block'>Id:1983</div>
                        </div>
                    </td>
                </tr>
                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='py-6 hidden grid3:block'>2349</td>
                    <td className='w-3/12'><img src="/images/book5.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>Nutrition and you with readings
                                <div className='text-sm font-light'>by Dr Khushi Mishra</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>620rs</div>
                                <div>02/12/2024</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>620rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>02/12/2024</td>
                    <td className='h-full w-3/12 py-1'>
                        <div className='flex items-center my-auto flex-col w-full h-full justify-between pt-1'>
                            <div className='flex items-center justify-center h-full w-full gap-2'>
                                <div className='sm:max-lg:hidden h-[10px] w-[10px] bg-green-500 rounded-full'></div>
                                <div className='hidden sm:table-cell'>Delivered</div>
                            </div>
                            <div className='grid3:hidden block'>Id:2349</div>
                        </div>
                    </td>
                </tr>
                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='py-6 hidden grid3:block'>3072</td>
                    <td className='w-3/12'><img src="/images/book1.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>My first doctor visit
                                <div className='text-sm font-light'>by Tanmay Gangude</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>510rs</div>
                                <div>12/11/2024</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>510rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>12/11/2024</td>
                    <td className='h-full w-3/12 py-1'>
                        <div className='flex items-center my-auto flex-col w-full h-full justify-between pt-1'>
                            <div className='flex items-center justify-center h-full w-full gap-2'>
                                <div className='sm:max-lg:hidden h-[10px] w-[10px] bg-green-500 rounded-full'></div>
                                <div className='hidden sm:table-cell'>Delivered</div>
                            </div>
                            <div className='grid3:hidden block'>Id:3072</div>
                        </div>
                    </td>
                    </tr>

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Orders