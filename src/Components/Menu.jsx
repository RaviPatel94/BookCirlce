import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { useCategory } from './Context/Category';

function Menu() {
  const apikey = import.meta.env.VITE_BOOK;
  const {category}=useCategory()
  const [data, setdata] = useState([])
  const getmainbooks= async()=>{
    try {
      const res=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40&startIndex=0&key=${apikey}`)
      setdata(res.data.items)
      console.log(res.data.items  )
       } catch (error) {
      console.log("fetch error"+error)
    }
  }
  
  useEffect(() => {
    getmainbooks()
  }, [category])
  

  return (
    <main id='menu' className='min-h-screen pt-5 px-3 grid3:px-6 pb-5'>
      <div className='grid grid-cols-2 grid2:grid-cols-3 grid3:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 grid3:gap-5 lg:grid-cols-7'>
        {data.map((item)=>{
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
          const randomprice = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
          const rating = (Math.random() * (5 - 3) + 3).toFixed(1);

          if (thumbnail!=undefined){
            return(
              <div key={item.id} className='border-2 flex flex-col items-center justify-center h-max py-2'>
              <div className=' h-[160.71px] w-[100px] md:w-[106px] md:h-[170.71px] lg:h-[176.71px] lg:w-[120px] '>
                <img src={thumbnail} alt="Book Cover" className=' w-full h-full object-fill' />
              </div>
              <div className='flex flex-col items-center w-full pt-2'>
                <h3 className=' w-11/12 text-sm truncate'>{item.volumeInfo.title}</h3>
                <div className='flex justify-between w-11/12 text-xs'>
                  <div>{randomprice} Rs</div>
                  <div className='flex gap-1'>{rating}
                    <img src="/images/star.png" alt="" className='h-4 w-4' />
                  </div>
                </div>
              </div>
            </div>
              )
          }
        })}
      </div>
        
    </main>
  )
}

export default Menu