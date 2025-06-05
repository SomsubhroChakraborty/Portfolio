import React from 'react'
import StickyScrollSection from './StickyScrollSection';

function Projects() {
  
  return (
   <div className="bg-[#111111] py-10 md:py-20 flex flex-col items-center px-4 md:px-6">
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Projects</h2>

      {/* Vertical line with dot */}
      <div className="mt-4 flex flex-col items-center">
        <div className="w-[2px] h-6 md:h-10 bg-[#8245ec]"></div>
        <div className="w-2 h-2 bg-[#8245ec] rounded-full mt-[2px]"></div>
      </div>
       <div className='flex flex-col py-6 md:py-10 gap-6 relative w-full max-w-6xl'>
                    <StickyScrollSection index={0} total={3}>
                        <div className='flex flex-col lg:flex-row bg-[#1A1A1A] rounded-md overflow-hidden'>
                            <div className='w-full lg:w-1/2 p-4 md:p-6'>
                                <img className='rounded w-full h-auto object-cover' src="https://cdn.dribbble.com/userupload/42879207/file/original-da0440afb85c4666d1bfb5240de02dd6.png?resize=1024x768&vertical=center" alt="Healthy Treats Project" />
                            </div>
                            <div className='w-full lg:w-1/2 p-4 md:p-6 space-y-4 md:space-y-6'>
                                <span className='text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-white bg-gray-800 inline-block'>SOFTWARE</span>
                                <h1 className='text-xl md:text-2xl lg:text-4xl text-white'>Healthy Treats</h1>
                                <p className='text-xs md:text-sm text-white/60 leading-relaxed'>Welcome to Healthy Treats, your trusted source for nutritious and delicious food products for pet animals. We believe your furry friends deserve the very best, which is why we craft every treat with care, using high-quality, natural ingredients. Our products are designed to support overall wellness, from strong bones and shiny coats to happy tummies and wagging tails. With a focus on health and flavor, Healthy Treats brings joy to mealtime while giving you peace of mind. Because when your pets are healthy and happy, so are you!</p>
                                <div className='space-y-0'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-y border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>PREVIEW</p>
                                        <a href="#" className='text-cyan-500 underline transition duration-300 hover:text-cyan-600 break-all'>https://healthytreats.shop/</a>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-b border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>COMPLETED IN</p>
                                        <p>50 days</p>
                                    </div>
                                </div>
                                <div className='bg-[linear-gradient(to_right,_#FF9B66,_#C445FF)] relative z-10 p-[2px] rounded-full w-max'>
                                  
                                </div>
                            </div>
                        </div>
                    </StickyScrollSection>
                    
                    <StickyScrollSection index={1} total={3}>
                        <div className='flex flex-col lg:flex-row bg-[#1A1A1A] rounded-md overflow-hidden'>
                            <div className='w-full lg:w-1/2 p-4 md:p-6'>
                                <img className='rounded w-full h-auto object-cover' src="https://imgs.search.brave.com/V4FjSGoku4qZoaVL7FiiHOz3-UoyXo5jR21hgJz2kG4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/Njc0Njg4NC9waG90/by9kb2N0b3Itd29y/a2luZy13aXRoLWRv/bm9yLWJsb29kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1I/QkVkQ0I0TTdwS1E0/UmdjQTY2OGZCOTZn/SzludFZlWkxYQVhG/RTJtVE1JPQ" alt="Blood Bank Management System Project" />
                            </div>
                            <div className='w-full lg:w-1/2 p-4 md:p-6 space-y-4 md:space-y-6'>
                                <span className='text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-white bg-gray-800 inline-block'>SOFTWARE</span>
                                <h1 className='text-xl md:text-2xl lg:text-4xl text-white'>Blood Bank Management System</h1>
                                <p className='text-xs md:text-sm text-white/60 leading-relaxed'>The Blood Bank Management System is a web-based application designed to streamline the process of blood donation, storage, and distribution. It helps hospitals and donors manage requests, track inventory, and ensure timely availability of blood, enhancing healthcare efficiency and saving lives effectively.</p>
                                <div className='space-y-0'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-y border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>GITHUB LINK</p>
                                        <a href="#" className='text-cyan-500 underline transition duration-300 hover:text-cyan-600 break-all'>https://github.com/SomsubhroChakraborty/BlogBazzar</a>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-b border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>COMPLETED IN</p>
                                        <p>90 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StickyScrollSection>
                    
                    <StickyScrollSection index={2} total={3}>
                        <div className='flex flex-col lg:flex-row bg-[#1A1A1A] rounded-md overflow-hidden'>
                            <div className='w-full lg:w-1/2 p-4 md:p-6'>
                                <img className='rounded w-full h-auto object-cover' src="https://imgs.search.brave.com/kXb2G0qoqCLceDDLviay0KZSRbvns6O3X8KOXxQpxrQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9zdGluZ2VyLmNv/bS90dXRvcmlhbHMv/d3AtY29udGVudC91/cGxvYWRzL3NpdGVz/LzIvMjAyNS8wMi9C/bG9nZ2luZy1hbHQt/MS0xLmpwZw" alt="Blog Bazzar Project" />
                            </div>
                            <div className='w-full lg:w-1/2 p-4 md:p-6 space-y-4 md:space-y-6'>
                                <span className='text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full font-medium text-white bg-gray-800 inline-block'>SOFTWARE</span>
                                <h1 className='text-xl md:text-2xl lg:text-4xl text-white'>Blog Bazzar</h1>
                                <p className='text-xs md:text-sm text-white leading-relaxed'>Blog Bazzar is a dynamic platform that brings together bloggers, readers, and content creators under one roof. It offers diverse articles on technology, lifestyle, business, and more. With easy navigation and community engagement, Blog Bazzar empowers writers to showcase their voice and readers to discover fresh, insightful perspectives daily.</p>
                                <div className='space-y-0'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-y border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>PREVIEW</p>
                                        <a href="#" className='text-cyan-500 underline transition duration-300 hover:text-cyan-600 break-all'>https://voluble-cobbler-a0702b.netlify.app</a>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm border-b border-white/20 py-3 md:py-4 text-white/40 gap-2 sm:gap-0'>
                                        <p className='font-medium'>COMPLETED IN</p>
                                        <p>10 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StickyScrollSection>
                </div>
    </div>
  )
}

export default Projects