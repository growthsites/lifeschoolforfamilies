import React from 'react'
import Image from 'next/image'
import HeroImage from '../../public/hero-image.jpg'

const Hero = () => {
  return (
    <>
      <div className="mx-auto w-full sm:h-screen flex-items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 bg-[#FEF5E4]">
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
          <div className='space-y-5 flex flex-col justify-center items-center text-center md:items-start py-20 px-10 md:pr-24 md:py-0 md:px-0 md:text-left'>
            <h1 className='tracking-tighter text-4xl xl:text-6xl font-bold'>Building Brighter Futures — Together.</h1>
            <p>
              Helping parents and children grow in skills, confidence, and connection.
            </p>
            <div className='sm:flex gap-4'>
            <a
              href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-md bg-[#280d02] px-6 py-3 text-white shadow-sm transition-all duration-200 hover:bg-[#280d02] hover:opacity-80 hover:shadow-lg active:scale-95">
                Free consultation
              </button>
            </a>
            <a
              href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-3 sm:mt-0 rounded-md bg-[#F7DAB8] px-6 py-3 text-black transition-all duration-200 hover:bg-[#F7DAB8] hover:opacity-80 hover:shadow-lg active:scale-95">
                Explore programs
              </button>
            </a>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={HeroImage}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero