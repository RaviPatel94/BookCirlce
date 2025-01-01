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
    <main className='min-h-screen pt-5 px-6'>
      <div className='grid grid-cols-7 gap-6'>
        {data.map((item)=>{
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
          const randomprice = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
          if (thumbnail!=undefined){
            return(
              <div key={item.id} className='border-2 h-60 flex flex-col items-center'>
              <div className='h-[185.71px] w-[130px] '>
                <img src={thumbnail} alt="" className=' w-full h-full object-fill' />
              </div>
              <div className='flex flex-col items-center w-full pt-2'>
                <h3 className=' w-11/12 text-sm truncate'>{item.volumeInfo.title}</h3>
                <div className='flex justify-between w-11/12 text-xs'>
                  <div>{randomprice}</div>
                  <div>Rate</div>
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