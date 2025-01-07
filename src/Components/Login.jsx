import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [signin, setsignin] = useState(true)
  const switchsign=()=>{
    setsignin(prev=>!prev)
  }
  return (
    <main className='flex flex-col items-center justify-center h-screen w-screen gap-9 z-[1000] sm:flex-row'>
        <div className='bg-gray-300 h-96 w-80 rounded-xl flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-Playfair pb-2'>BookCircle</h1>
          <h2 className='w-44 text-center text-sm pb-7'>
          Books Within Reach:
          Buy, Read, Sell, Repeat! 
          </h2>
          <img src="/images/bookcircle.png" alt="" className='w-3/6 pb-6' />
          <div className='text-sm'>{signin?"Dont have an account? ":"Already have an account? "}<span onClick={switchsign} className='text-blue-500 underline cursor-pointer'>{signin?"Signup":"Signin"}</span></div>
        </div>
        <div className='h-96 w-72 rounded-xl '>
          <form action="submit" method="post" className={` flex-col items-start justify-around h-full px-3 ${signin?"flex":"hidden"} `}>
            <h1 className='text-2xl'>SignIn</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='w-full flex justify-center'>
            <Link to="/">
            <button className='mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white'>Submit</button></Link></div>
            <div className='flex justify-between w-full'>
              <div>Remember me: <input type="checkbox" className='cursor-pointer' /></div>
              <div className='text-blue-600 underline cursor-pointer'>Forgot Password</div>
            </div>
          </form>
          <form action="submit" method="post" className={` flex-col items-start justify-around h-full px-3 ${signin?"hidden":"flex"} `}>
            <h1 className='text-2xl'>SignUp</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor="Name">Name</label>
              <input type="text" name='Name' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='w-full flex justify-between'>
            
            <Link to="/">
            <button className='mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white'>Cancel</button>
            </Link>
            <Link to="/">
            <button className='mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white'>Submit</button>
            </Link>

            </div>
          </form>

        </div>
    </main>
  )
}

export default Login