import { Trash2 } from 'lucide-react'
import React from 'react'

function Books() {
  return (
    <div id='mybooks' className='w-full flex flex-col items-center justify-center'>
        <div className=' px-2 grid3:px-4 lg:w-11/12 flex flex-col items-start'>
        <div className='flex w-full justify-between'>
        <h1 className=' text-2xl lg:text-3xl mb-4'>Your Books</h1>
        <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max'>Add Book</button>
        </div>
        <table className=' mx-auto w-full grid3:w-[97%] lg:w-[95%] h-max table-fixed text-center border border-black grid3:border-none rounded-xl border-separate border-spacing-y-6 grid3:border-spacing-y-2 font lg:font-normal'>
            <thead className=' hidden grid3:contents border-b border-slate-700 text-sm sm:text-[16px] lg:text-lg '>
                <tr >
                    <th className='font-medium'>Cover</th>
                    <th className='w-44 lg:w-52 font-medium' >Title</th>
                    <th className='font-medium' >Price</th>
                    <th className='font-medium' >Quantity</th>
                    <th className='font-medium'>Orders</th>
                    <th className='font-medium'>Remove</th>
                </tr>
            </thead>
            <tbody className='h-full' >
                <tr className=' text-sm sm:text-[16px] lg:text-lg h-full w-full '>
                    
                    <td className='w-3/12'><img src="/images/book2.jpg" className=' h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className=' w-6/12 h-full py-1 '> <div className='flex grid3:contents  flex-col w-full h-full items-center justify-between'> <div className=' min-w-44 truncate'>A guide for mbbs students <div className='text-sm font-light'>by Dr rd verma</div></div>
                    <div className='flex w-full grid3:hidden justify-between'>
                    <div>450rs</div>
                    <div>3</div>
                    </div></div>
                     </td>
                    <td className=' h-full w-full hidden grid3:table-cell'>450rs</td>
                    <td className=' h-full w-full hidden grid3:table-cell'>3</td>
                    <td className='py-6 hidden grid3:table-cell'>1</td>
                    
                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                        <div className=' flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                      <Trash2 className=' size-5 lg:size-6'/>
                    <div className='grid3:hidden block'>1</div></div></td>
                </tr>

                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='w-3/12'><img src="/images/book3.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>Wonder worm
                                <div className='text-sm font-light'>by Saurabh Patel</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>490rs</div>
                                <div>1</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>490rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>26/12/2024</td>
                    <td className='py-6 hidden grid3:table-cell'>2</td>
                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                        <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                            <Trash2 className='size-5 lg:size-6' />
                            <div className='grid3:hidden block'>1</div>
                        </div>
                    </td>
                </tr>

                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='w-3/12'><img src="/images/book4.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>Grace the heart of the fire
                                <div className='text-sm font-light'>by Peterwattson</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>360rs</div>
                                <div>4</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>360rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>20/12/2024</td>
                    <td className='py-6 hidden grid3:table-cell'>3</td>
                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                        <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                            <Trash2 className='size-5 lg:size-6' />
                            <div className='grid3:hidden block'>3</div>
                        </div>
                    </td>
                </tr>

                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='w-3/12'><img src="/images/book5.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>Nutrition and you with readings
                                <div className='text-sm font-light'>by Dr Khushi Mishra</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>620rs</div>
                                <div>2</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>620rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>02/12/2024</td>
                    <td className='py-6 hidden grid3:table-cell'>4</td>
                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                        <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                            <Trash2 className='size-5 lg:size-6' />
                            <div className='grid3:hidden block'>2</div>
                        </div>
                    </td>
                </tr>

                <tr className='text-sm sm:text-[16px] lg:text-lg h-full w-full'>
                    <td className='w-3/12'><img src="/images/book1.jpg" className='h-20 lg:h-24 mx-auto' alt="" /></td>
                    <td className='w-6/12 h-full py-1'>
                        <div className='flex grid3:contents flex-col w-full h-full items-center justify-between'>
                            <div className='min-w-44 truncate'>My first doctor visit
                                <div className='text-sm font-light'>by Tanmay Gangude</div>
                            </div>
                            <div className='flex w-full grid3:hidden justify-between'>
                                <div>510rs</div>
                                <div>6</div>
                            </div>
                        </div>
                    </td>
                    <td className='h-full w-full hidden grid3:table-cell'>510rs</td>
                    <td className='h-full w-full hidden grid3:table-cell'>12/11/2024</td>
                    <td className='py-6 hidden grid3:table-cell'>5</td>
                    <td className='h-full w-3/12 grid3:w-full py-1 lg:py-0 grid3:flex'>
                        <div className='flex items-center flex-col w-full h-full justify-between grid3:justify-center pt-1 grid3:pt-0 mx-auto'>
                            <Trash2 className='size-5 lg:size-6' />
                            <div className='grid3:hidden block'>5</div>
                        </div>
                    </td>
                </tr>


            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Books