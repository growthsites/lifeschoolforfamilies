"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className=' w-full h-24 shadow-sm bg-[#FEF5E4]'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href="/">
        <div className='cursor-pointer text-4xl'>✏️</div>
      </Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex gap-4'>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              <li className='hover:border-b text-xl'>Tutoring</li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              <li className='hover:border-b text-xl'>About</li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              <li className='hover:border-b text-xl'>Contact us</li>
            </a>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#280d02] text-white p-10 ease-in duration-500"
        : "fixed -left-full top-0 p-10 ease-in duration-500"
      }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className='flex-col py-4'>
          <ul>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              <li 
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              <li 
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
              <li 
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact Us
              </li>
            </a>
          </ul>
        </div>
        <div className='flex flex-row justify-around pt-10 items-center'>
          <a
            href="https://www.instagram.com/life_school_for_familes?igsh=MWZ5ZXl6cjZ3YW9z&u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineFacebook size={30} />
          </a>
          <a
            href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTikTok size={30} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar