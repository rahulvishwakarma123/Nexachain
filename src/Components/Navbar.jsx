import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
      <div className='NAVBAR z-50 bg-white h-[90px] sticky top-0 flex justify-between items-center px-30 w-screen max-lg:px-4'>
        <div className='LOGO flex items-center  gap-3'>
          <img className='h-[50px] max-lg:h-[35px] w-[20px]' src="images/Frame1.png" alt="Logo" />
          <h1 className='text-xl font-semibold'>Nexachain</h1>
        </div>
        <ul className='flex items-center justify-end gap-8 h-10 w-[725px] text-[18px] max-md:hidden'>
          <li>Home</li>
          <li className='font-bold text-blue-900 underline'>About Us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li className='text-white text-base rounded-lg py-2 px-4 bg-[#211F5E]'><button>Contact Us</button></li>
        </ul>
        <div className='hidden max-md:block max-lg:min-[16px] max-lg:h-[24px]'>
          <button
            type='button'
            aria-controls='mobileNav'
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#211F5E]'
          >
            <img src="images/burger.png" alt="Menu" />
          </button>
        </div>
      </div>
      {isMenuOpen && <div
        id='mobileNav'
        className={` z-40 w-full bg-white border-t fixed top-90px border-gray-200 flex flex-col justify-center items-center gap-5 text-xl py-4`}
      >
        <a onClick={() => setIsMenuOpen(false)} href="#">Home</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">About Us</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Services</a>
        <a onClick={() => setIsMenuOpen(false)} href="#">Case Studies</a>
        <button className='text-white text-base rounded-lg py-2 px-4 bg-[#211F5E]' onClick={() => setIsMenuOpen(false)}>Contact Us</button>
      </div>} 
    </>
  )
}

export default Navbar