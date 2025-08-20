import React from 'react'
import { GiTeacher } from "react-icons/gi";
import { RiParentFill } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";

const CardData = [
  {
    id: 1,
    title: "Tutoring",
    desc: "Boost confidence in maths and English with personalised online and in-person tutoring for children and teens.",
    icon: <GiTeacher />,
    bgColour: "#A46B62",
    button: <button className="rounded-md bg-[#280d02] px-6 py-3 text-white shadow-sm transition-all duration-200 hover:bg-[#280d02] hover:opacity-80 hover:shadow-lg active:scale-95">See Tutoring Options</button>
  },
    {
    id: 2,
    title: "Parenting Courses",
    desc: "Learn practical parenting strategies and improve communication at home with our expert-led courses.",
    icon: <RiParentFill />,
    bgColour: "#A46B62",
    button: <button className="rounded-md bg-[#280d02] px-6 py-3 text-white shadow-sm transition-all duration-200 hover:bg-[#280d02] hover:opacity-80 hover:shadow-lg active:scale-95">Explore Parenting Courses</button>
  },
    {
    id: 3,
    title: "Life School Community",
    desc: "Join our safe, supportive space for families. Get tips, join challenges, and share your wins.",
    icon: <IoIosSchool />,
    bgColour: "#A46B62",
    button: <button className="rounded-md bg-[#280d02] px-6 py-3 text-white shadow-sm transition-all duration-200 hover:bg-[#280d02] hover:opacity-80 hover:shadow-lg active:scale-95">Join the Community</button>
  }
]

const Cards = () => {
  return (
    <div>
      <div className="sm:h-screen mx-auto w-full py-24 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 bg-[#FEF5E4]">
        <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
          <h1 className='uppercase'>Why work with us</h1>
          <p className='font-semibold text-4xl xl:text-5xl'>Benefits of working with us</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {
            CardData.map((item, index) => {
              return (
                <div 
                  key={item.id || index}
                  className="space-y-4 p-6"
                >
                  <div style={{backgroundColor: item.bgColour}} className='w-16 h-16 rounded-full flex justify-center items-center text-white'>
                    <div className='text-3xl'>{item.icon}</div>
                  </div>
                  <p className='text-3xl tracking-tight font-semibold'>{item.title}</p>
                  <p className='text-sm pb-2'>{item.desc}</p>
                  <a
                    href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr&rdid=efsq7Rp07HTu0EMj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1Apqtx46ZL%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.button}
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Cards