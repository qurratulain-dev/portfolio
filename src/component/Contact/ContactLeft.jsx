import React from 'react'
import { HiOutlineMail } from "react-icons/hi";


const ContactLeft = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                        <span className="text-emerald-500">Let’s Build</span>    <br />  Something Extraordinary <br />Together
                    </h2>
                    <p className="text-gray-500 mb-8 leading-relaxed max-w-[520px]">
                        Have an idea, collaboration, or project in mind? I’d love to hear
                        from you. Fill out the form and let’s start turning your vision into
                        reality.
                    </p>
                    <div className="flex items-start gap-3 mt-4">
                        <div className="border border-emerald-500/20 p-3 rounded-full">
                            <HiOutlineMail className="text-emerald-500 text-xl" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm tracking-wide">E-mail:</p>
                            <p className="text-gray-200 font-medium break-all">dev.quratulain@gmail.com</p>
                        </div>
                    </div>
    </div>
  )
}

export default ContactLeft
