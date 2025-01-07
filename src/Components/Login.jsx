import React from 'react'

function Login() {
  return (
    <main className='flex items-center justify-center h-screen w-screen gap-9'>
        <div className='bg-gray-300 h-96 w-80 rounded-xl flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-Playfair pb-2'>BookCircle</h1>
          <h2 className='w-44 text-center text-sm pb-7'>
          Books Within Reach:
          Buy, Read, Sell, Repeat! 
          </h2>
          <img src="/images/bookcircle.png" alt="" className='w-3/6 pb-6' />
          <div className='text-sm'>Already have an account? <span className='text-blue-500 underline cursor-pointer'>Signup</span></div>
        </div>
        <div className='h-96 w-72 rounded-xl '>
          <form action="submit" method="post" className='flex flex-col items-start justify-around h-full px-3'>
            <h1 className='text-2xl'>SignIn</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' className='border border-black rounded-md h-8 outline-none px-1' />
            </div>
            <button className='mx-auto border-black px-3 py-1 rounded-md border hover:bg-black hover:text-white'>Submit</button>
            <div className='flex justify-between w-full'>
              <div>Remember me: <input type="checkbox" className='cursor-pointer' /></div>
              <div className='text-blue-600 underline cursor-pointer'>Forgot Password</div>
            </div>
          </form>
        </div>
    </main>
  )
}

export default Login