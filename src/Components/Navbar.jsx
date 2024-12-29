import React from 'react'

function Navbar() {
  let categories = ["Trending", "Fiction", "Non-fiction", "Academic", "Comics", "Novels", "Biographies", "Children's Books", "Science Fiction", "Fantasy", "Self-help", "Mystery", "Romance", "Thriller", "Poetry", "Graphic Novels", "Historical Fiction", "Cookbooks"];


  return (
    <nav className='w-screen fixed pt-2 px-2 z-40 bg-black bg-opacity-50 text-white'>
    <div className='flex justify-between items-center pb-1'>
        <div className='flex gap-7'>
          <h1 className='text-2xl cursor-pointer font-Playfair'>BookCircle</h1>
          <input type="text" placeholder='Search' className='border border-black w-96 bg-zinc-200 px-2 py-1 placeholder:text-black text-black placeholder:text-lg outline-none' />
        </div>
        <div className='flex gap-5'>
          <img src="/images/cart.png" alt="" className='h-8 cursor-pointer ' />
          <img src="/images/pfp.jpg" alt="" className='h-8 cursor-pointer rounded-full' />
        </div>
    </div>
    <div>
      <ul className='flex overflow-x-auto gap-4  no-scrollbar pb-2'>
          {
            categories.map((category, index)=>(
              <li key={index} className='h-max whitespace-nowrap hover:underline cursor-pointer'>
                {category}
              </li>
            ))
          }
      </ul>
    </div>
    </nav>
  )
}

export default Navbar