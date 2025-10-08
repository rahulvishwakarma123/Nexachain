import React from 'react'

const Navbar = () => {
  return (
    <div className='NAVBAR z-50 bg-white h-[90px] sticky top-0 flex justify-between items-center px-30 w-screen max-lg:px-4'>
      <div className='LOGO flex items-center  gap-3'>
        <img className='h-[50px] max-lg:h-[35px] w-[20px]' src="/public/images/frame1.png" alt="Logo" />
        <h1 className='text-xl font-semibold'>Nexachain</h1>
      </div>
      <ul className='flex items-center justify-end gap-8 h-10 w-[725px] text-[18px] max-md:hidden'>
        <li>Home</li>
        <li className='font-bold text-blue-900 underline'>About Us</li>
        <li>Servises</li>
        <li>Case Studies</li>
        <li><button>Contact Us</button></li>
      </ul>
      <div className='hidden max-md:block max-lg:min-[16px] max-lg:h-[24px]'>
        <a href="#"><img src="/public/images/burger.png" alt="hamburger" /></a>
      </div>
    </div>
  )
}

export default Navbar