import React from 'react'

const Contact = () => {
  return (
    <div className='h-auto pb-32 w-full bg-[#E1EBFF] flex px-32 max-sm:px-5 max-lg:px-9'>
      <div className='h-[408px] w-[1253px] flex justify-between max-lg:flex-col max-lg:h-auto max-lg:justify-start max-lg:gap-14'>
        <div className='basis-1/2 pr-42 max-xl:pr-0'>
          <h2 className='text-5xl text-[#211F5E] font-bold mb-6 max-sm:text-2xl max-lg:text-center max-sm:mb-0'>Contact Us</h2>
          <p className='text-[#494949] text-2xl max-lg:text-center max-sm:text-lg'>We are committed to processing the information in order to contact you and talk about your project. </p>
          <div className="contactDetails flex flex-col gap-7 pt-9 max-sm:pt-6 max-lg:gap-5">
            <p className='flex gap-8 text-xl max-sm:text-base'><img src="images/email.svg" alt="email icon" />info@nexachain.in</p>
            <p className='flex gap-8 text-xl max-sm:text-base'><img src="images/property-location.svg" alt="email icon" />2nd floor, Chinar Fortune, Hoshangabad road, Bhopal, Madhya pradesh</p>
            <p className='flex gap-8 text-xl max-sm:text-base'><img src="images/mobile-chat.svg" alt="email icon" />+91 123 654 7890</p>
          </div>
        </div>


        <div className='w-[493px] flex flex-col justify-between max-lg:w-full max-lg:gap-2'>
          <input className='bg-white border-1 border-[#D8D8D8] px-4 h-[48px] w-full rounded-lg' type="text" placeholder='Name' />
          <input className='bg-white border-1 border-[#D8D8D8] px-4 h-[48px] w-full rounded-lg' type="text" placeholder='Email' />
          <input className='bg-white border-1 border-[#D8D8D8] px-4 h-[48px] w-full rounded-lg' type="text" placeholder='Website' />
          <textarea className='bg-white h-[135px] pt-8 px-4 border-1 border-[#D8D8D8] rounded-lg resize-none' name="message" id="message" placeholder='Message'></textarea>
          <button className='py-4 px-6 font-medium text-2xl text-white rounded-lg bg-gradient-to-r from-[#211F5E] via-[#343C87] to-[#404E9F]'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact