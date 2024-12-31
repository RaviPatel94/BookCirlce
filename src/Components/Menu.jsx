import React, {useEffect,useState} from 'react'
import axios from 'axios';

function Menu() {

  const [data, setdata] = useState([])
  const getmainbooks= async()=>{
    try {
      const res=await axios.get("https://www.googleapis.com/books/v1/volumes?q=book&maxResults=40&startIndex=0&key=AIzaSyBM7n0PHnpqWbNL95Qaz0HWD-zjoru-yWk").then(setdata(res.data.items))   
       } catch (error) {
      console.log("fetch error"+error)
    }
  }
  
  useEffect(() => {
    getmainbooks()
  }, [])
  

  return (
    <main className='min-h-screen pt-5 px-6'>
      <div className='grid grid-cols-6 gap-6'>
        {data.map((item)=>{
          // let thumbnail=item.volumeInfo.image
          <div className='border-2 h-60 flex flex-col items-center'>
          <div className='h-[185.71px] w-[130px] '>
            <img src="/images/book1.jpg" alt="" className=' w-full h-full object-fill' />
          </div>
          <div className='flex flex-col items-center'>
            <h3>the man and sheep</h3>
            <div className='flex justify-between w-full'>
              <div>price</div>
              <div>Rate</div>
            </div>
          </div>
        </div>
        })}
      </div>
        
    </main>
  )
}

export default Menu