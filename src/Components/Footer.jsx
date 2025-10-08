import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[446px] '>
        <div className='h-[400px] bg-[#211F5E] text-white flex justify-center items-center px-32'>
            <div className="h-[228px] w-[1253px] flex justify-between">
                <div >
                    <img className='mb-4' src="images/nav-logo.svg" alt="navLogo" />
                    <p className='text-[20px]'>info@nexachain.in</p>
                    <p className='text-lg'>+91 12345 67890</p>
                    <div className='w-[204px] flex gap-4 justify-start mt-5'>
                        <a href="#"> <img src="images/instagram.svg" alt="instagramLogo" /></a>
                        <a href="#"> <img src="images/linkedin.svg" alt="instagramLogo" /></a>
                        <a href="#"> <img src="images/facebook.svg" alt="instagramLogo" /></a>
                        <a href="#"> <img src="images/twitter.svg" alt="instagramLogo" /></a>
                    </div>
                </div>
                <div className='basis-1/2 flex gap-28 items-start justify-end'>
                    <ul className='flex flex-col gap-2.5'>
                        <h2 className='text-[22px] font-medium mb-2.5'>Blog</h2>
                        <li className='text-sm '><a href="">Company</a></li>
                        <li className='text-sm '><a href="">Career</a></li>
                        <li className='text-sm '><a href="">Mobile</a></li>
                        <li className='text-sm '><a href="">How it works</a></li>
                    </ul>
                    <ul className='flex flex-col gap-2.5'>
                        <h2 className='text-[22px] font-medium mb-2.5'>About</h2>
                        <li className='text-sm '><a href="">Contact</a></li>
                        <li className='text-sm '><a href="">About us</a></li>
                        <li className='text-sm '><a href="">FAQ</a></li>
                        <li className='text-sm '><a href="">Our Team</a></li>
                        <li className='text-sm '><a href="">Terms of servises</a></li>
                    </ul>
                    <ul className='flex flex-col gap-2.5'>
                        <h2 className='text-[22px] font-medium mb-2.5'>Products</h2>
                        <li className='text-sm '><a href="">Terms of use</a></li>
                        <li className='text-sm '><a href="">Privacy policy</a></li>
                        <li className='text-sm '><a href="">Log in</a></li>
                    </ul>
                </div>
            </div>
        </div>



        <div className='h-[46px] w-full flex items-center justify-center'>
            <p>@ Copyright 2025 Nexa Chain Core Pvt.Ltd. - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer