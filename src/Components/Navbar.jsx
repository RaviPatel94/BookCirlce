import React,{useState} from 'react'
import { useCategory } from './Context/Category';

function Navbar() {
  let categories = ["Trending", "Fiction", "Non-fiction", "Academic", "Comics", "Novels", "Biographies", "Children's Books", "Science Fiction", "Fantasy", "Self-help", "Mystery", "Romance", "Thriller", "Poetry", "Graphic Novels", "Historical Fiction", "Cookbooks"];
  const {setcategory}=useCategory()
  const [search, setsearch] = useState(" ")
  const [allowsearch, setallowsearch] = useState(false)
  console.log(allowsearch)

  const searchbook=(evt)=>{
    if (evt.key==="Enter"){
      setcategory(search)
    }
  }

  return (
    <nav className='w-screen fixed pt-2 px-2 z-40 bg-black bg-opacity-50 text-white'>
    <div className='flex justify-between items-center pb-1'>
        <div className='flex gap-7'>
          <h1 className='text-2xl cursor-pointer font-Playfair'>BookCircle</h1>
          <input type="text" placeholder='Search' className='hidden sm:block border border-black w-96 bg-zinc-200 px-2 py-1 placeholder:text-black text-black placeholder:text-lg outline-none'
          onChange={(e)=>setsearch(e.target.value)}
          onKeyDown={searchbook} />
        </div>
        <div className='flex gap-5'>
        <img src="/images/search.png" alt="" className='h-6 sm:hidden cursor-pointer ' onClick={()=>setallowsearch((prev=>!prev))} />
          <img src="/images/cart.png" alt="" className='h-6 sm:h-8 cursor-pointer ' />
          <img src="/images/pfp.jpg" alt="" className='h-6 sm:h-8 cursor-pointer rounded-full' />
        </div>
    </div>
    <div>
      <ul className='flex overflow-x-auto gap-4  no-scrollbar pb-2'>
          {
            categories.map((category, index)=>(
              <li key={index} className='h-max whitespace-nowrap hover:underline cursor-pointer'
              onClick={()=>setcategory(category)}>
                {category}
              </li>
            ))
          }
      </ul>
    </div>
    <input type="text" placeholder='Search' className={`sm:hidden border border-black w-11/12 ml-3 bg-zinc-200 px-2 py-1 placeholder:text-black text-black placeholder:text-lg outline-none ${allowsearch?"block":"hidden"}`}
          onChange={(e)=>setsearch(e.target.value)}
          onKeyDown={searchbook} />
    </nav>
  )
}

export default Navbar