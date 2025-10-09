import React from 'react'

const Page2 = () => {
  return (
    <div className='relative z-20 h-screen w-full flex justify-center gap-3 flex-col overflow-hidden max-lg:px-9  max-lg:h-[25vh] max-sm:px-4 max-sm:h-[278px]'>
        <p className='z-20 text-4xl font-normal text-center text-white mb-10 max-sm:text-2xl'>Mission</p>
        <h1 className='z-20 text-8xl font-[Inter] font-black text-white text-center max-lg:text-5xl max-sm:text-[30px]'>Connecting ideas to decentralized tech.</h1>
        <div className='w-auto min-w-full min-h-full z-10 absolute top-0 left-0 opacity-50 bg-linear-to-r from-[#211F5E] to-[#302F8B]'></div>
        <video className='absolute w-auto min-w-full min-h-full max-w-none z-0 top-0 left-0 max-sm:object-left' autoPlay loop muted src="videos/background_video.mp4"></video>
    </div>
  )
}

export default Page2