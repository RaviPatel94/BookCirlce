import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

function Books() {
    const [editing, setediting] = useState(false)
    const [pick, setpick] = useState("401/B ABC nagar, 123456, kak city, india")
    const [editpick, seteditpick] = useState(false)
    const [image, setimage] = useState("/images/pfp.jpg")

    const editingpick=(e)=>{
        e.preventDefault()
        seteditpick((prev)=>!prev)
    }

    const handlefile=(e)=>{
    const file=e.target.files[0]
    if (file){
        setimage(URL.createObjectURL(file))
    }
    }  
  return (
    <div id='mybooks' className='w-full flex flex-col items-center justify-center'>
        <div className=' px-2 grid3:px-4 lg:w-11/12 flex flex-col items-start'>

        <div className='flex w-full justify-between'>
        <h1 className=' text-2xl lg:text-3xl mb-4'>Your Books</h1>
        <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max'
        onClick={()=>setediting((prev)=>!prev)}
        >Add Book</button>
        </div>

        <form  className={`py-6 flex w-full justify-between ${editing?"":"hidden"}`}>
            <div className='flex flex-col items-start gap-6 text-base lg:text-lg '>
                <div>
                <label htmlFor="title">Title : </label>
                <input type="text" name='title' className='bg-slate-200 outline-none px-1 rounded-md'  /></div>
                <div><label htmlFor="Author">Author : </label>
                <input type="text" name='Author' className='bg-slate-200 outline-none px-1 rounded-md'  /></div>
                <div className='flex gap-2 grid2:gap-10 w-full'>
                    <div>
                <label htmlFor="Price">Price : </label>
                <input type="number" name='Price' className='bg-slate-200 outline-none px-1 rounded-md w-20'  />
                <select name="currency" id="">
                <option value="opt1">&#x20b9;</option>
                <option value="opt2">&#x24;</option>
                <option value="opt3">&#x20ac;</option>
                <option value="opt4">&#xa3;</option>
                <option value="opt5">&#xa5;</option>
                <option value="opt6">&#x20a9;</option>
                <option value="opt7">&#x20a6;</option>
                <option value="opt8">&#x20bd;</option>
                <option value="opt9">&#x20aa;</option>
                <option value="opt10">&#x58f;</option>
                </select>
                </div>
                <div>
                <label htmlFor="Quantity">Quantity : </label>
                <input type="number" name='Quantity' className='bg-slate-200 outline-none px-1 rounded-md w-10'  />
                </div>
                </div>
                <div className='w-full '>
                    <label htmlFor="padd">Pick up address : </label>
                    <input type="text" name='padd' value={pick} className={` lg:w-[275px] outline-none truncate px-1 py-[2px] rounded-md ${editpick?"bg-slate-200":""}`} onChange={(e)=>setpick(e.target.value)} readOnly={!editpick} />
                    <button className='bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 hover:text-gray-100 h-max' onClick={editingpick}>{editpick?"Save":"Edit"}</button>
                </div>
                <div className='flex grid2:flex-row flex-col gap-1 rounded-md'>
                <label htmlFor="desc" className='whitespace-nowrap'>Description : </label>
                <textarea name="desc" id="" className= 'px-1 bg-slate-200 outline-none w-64 lg:w-96 h-20 ' placeholder='Information about the book'></textarea></div>
            </div>
            <div className='hidden grid3:flex flex-col sm:flex-row gap-3 h-max'>
                <img src={image} className='h-28' />
                <div className='w-40 flex flex-col justify-between'>
                    <p>Click and Upload a picture of book cover.</p>
                    <input type="file" accept='image/*' className='bg-slate-100 w-40' onChange={handlefile} />
                </div>
            </div>
        </form>

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

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Books