import React,{useState} from 'react'
import { useCategory } from './Context/Category';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  let categories = ["Trending", "Fiction", "Non-fiction", "Academic", "Comics", "Novels", "Biographies", "Children's Books", "Science Fiction", "Fantasy", "Self-help", "Mystery", "Romance", "Thriller", "Poetry", "Graphic Novels", "Historical Fiction", "Cookbooks"];
  const {setcategory}=useCategory()
  const [search, setsearch] = useState(" ")
  const [allowsearch, setallowsearch] = useState(false)
  const [navopt, setnavopt] = useState(false)

  const searchbook=(evt)=>{
    if (evt.key==="Enter"){
      setcategory(search)
    }
  }

  return (
    <nav className='w-screen top-0 fixed pt-2 px-2 z-40 bg-black bg-opacity-50 text-white'>
    <div className=' flex justify-between items-center pb-1'>
        <div className='flex gap-7'>
          <Link to="/">
          <h1 className='text-2xl cursor-pointer font-Playfair'>BookCircle</h1></Link>
          <input type="text" placeholder='Search' className='hidden sm:block border border-black w-96 bg-zinc-200 px-2 py-1 placeholder:text-black text-black placeholder:text-lg outline-none'
          onChange={(e)=>setsearch(e.target.value)}
          onKeyDown={searchbook} />
        </div>
        <div className='flex gap-5'>
        <img src="/images/search.png" alt="Seach icon" className='h-6 sm:hidden cursor-pointer ' onClick={()=>setallowsearch((prev=>!prev))} />
          <NavLink to="/cart"> <img src="/images/cart.png" alt="Cart icon" className='h-6 sm:h-8 cursor-pointer ' /></NavLink>
          <div>
          <img src="/images/pfp.jpg" alt=" Profile picture" className='h-6 sm:h-8 cursor-pointer rounded-full' onClick={()=>setnavopt(prev=>!prev)} />
          <div className={`absolute bg-white right-0 top-[38px] rounded-md text-black py-1 px-2 text-lg ${navopt?"":"hidden"}`} >
            <ul >
            <NavLink to="/login"><li className='border-b border-gray-500 py-1'>Login</li></NavLink>
            <NavLink to="/profile"> <li className='border-b border-gray-500 py-1'>Profile</li></NavLink>
              <li className='py-1'>Signout</li>
            </ul>
          </div>
          </div>
        </div>
    </div>
    <div>
      <ul className='flex overflow-x-auto gap-4  no-scrollbar pb-2 font-light'>
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