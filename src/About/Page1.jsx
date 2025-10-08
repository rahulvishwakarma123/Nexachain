import React from 'react'
const Page1 = () => {
  return (
    <div className='bg-[#E1EBFF] px-30 pt-[90px] flex items-center justify-center h-screen w-full bg-no-repeat bg-cover max-lg:block max-lg:h-auto max-lg:px-4 max-sm:pt-6'>
        <div className='basis-1/2 flex flex-col gap-8 max-lg:px-4 max-md:mt-32 max-md:gap-4 max-sm:mt-0 max-sm:gap-0'>
            <h1 className='text-[#3F4D9E] font-bold leading-[84px] text-[64px] max-lg:text-center max-sm:text-4xl'>About Us</h1>
            <p className='text-2xl leading-[33px] text-[#505050] max-lg:text-justify max-sm:text-sm max-sm:leading-5'>Nexa Chain Core Pvt. Ltd. is a forward-thinking blockchain development company committed to building secure, scalable, and future-ready Web3 solutions. We partner with businesses across the crypto, fintech, and decentralized space to transform their ideas into reliable blockchain platforms, smart contracts, and token ecosystems. With a focus on usability, performance, and innovation, our team bridges the gap between cutting-edge technology and real-world application—helping clients navigate the evolving digital economy with confidence</p>
        </div>
        <div className='lg:basis-1/2 px-10 max-sm:px-0'>
            <img src="../../public/images/web3.png" alt="" />
        </div>
    </div>
  )
}

export default Page1

