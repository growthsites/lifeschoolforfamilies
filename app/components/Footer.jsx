import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#0f0400] text-white px-4 md:px-16 lg:px-28 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-lg font-bold mb-4'>About Us</h2>
          <p>We are a team dedicated to provide the best products and services for our customers.</p>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Quick as</h2>
          <ul>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li>Tutoring</li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li>About</li>
            </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li>Contact us</li>
            </a>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Follow Us</h2>
            <ul className='flex space-x-4'>
                <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li><FaFacebook /></li>
              </a>
              <a
                href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li><FaTiktok /></li>
              </a>
                <a
                href="https://www.instagram.com/life_school_for_familes?igsh=MWZ5ZXl6cjZ3YW9z&u"
                target="_blank"
                rel="noopener noreferrer"
              >              
                <li><FaInstagram /></li>
              </a>
            </ul>
        </div>
      </div>
      <div className='border-t pt-6 text-center mt-6'>
        <p>2025</p>
      </div>
    </footer>
  )
}

export default Footer