import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full bg-[#E1EBFF] flex items-center justify-center px-32'>
        <div className='h-[408px] w-[1253px] flex justify-between'>
          <div className='basis-1/2 pr-42 h-1/2'>
            <h2 className='text-5xl text-[#211F5E] font-bold mb-6'>Contact Us</h2>
            <p className='text-[#494949] text-2xl'>We are committed to processing the information in order to contact you and talk about your project. </p>
            <div className="contactDetails flex flex-col gap-7 pt-9">
                <p className='flex gap-8 text-xl'><img src="images/email.svg" alt="email icon" />info@nexachain.in</p>
                <p className='flex gap-8 text-xl'><img src="images/property-location.svg" alt="email icon" />2nd floor, Chinar Fortune, Hoshangabad road, Bhopal, Madhya pradesh</p>
                <p className='flex gap-8 text-xl'><img src="images/mobile-chat.svg" alt="email icon" />+91 123 654 7890</p>
            </div>
        </div>


        <div className='w-[493px] flex flex-col justify-between'>
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