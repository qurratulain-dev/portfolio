import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full">
      <span className="inline-block text-xs font-semibold text-emerald-400/60 uppercase tracking-[0.2em] mb-3">
        Get In Touch
      </span>
      <h2 className="text-2xl sm:text-2xl lg:text-[45px] font-extrabold text-white mb-6 leading-tight">
                        <span className="text-emerald-500">Let’s Build</span>    <br />  Something Extraordinary <br />Together
                    </h2>
                    <p className="text-[#b8b8b8] mb-8 leading-relaxed max-w-[520px]">
                        Have an idea, collaboration, or project in mind? I’d love to hear
                        from you. Fill out the form and let’s start turning your vision into
                        reality.
                    </p>
                    <div className="flex items-start gap-3 mt-4">
                        <a
                            href="mailto:dev.quratulain@gmail.com"
                            aria-label="Send email"
                            className="relative overflow-hidden border-2 border-emerald-500 text-white w-11 h-11 rounded-lg 
                                       inline-flex shrink-0 items-center justify-center text-xl transition-all duration-500 group"
                        >
                            <span className="relative z-10">
                                <HiOutlineMail />
                            </span>
                            <span
                                className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
                                           -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
                            ></span>
                        </a>
                        <div>
                            <p className="text-[#b8b8b8] text-sm tracking-wide">E-mail:</p>
                            <p className="text-[#b8b8b8] font-medium break-all">dev.quratulain@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                        <a
                            href="https://wa.me/923157753260"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="relative overflow-hidden border-2 border-emerald-500 text-white w-11 h-11 rounded-lg 
                                       inline-flex shrink-0 items-center justify-center text-xl transition-all duration-500 group"
                        >
                            <span className="relative z-10">
                                <FaWhatsapp />
                            </span>
                            <span
                                className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
                                           -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
                            ></span>
                        </a>
                        <div>
                            <p className="text-[#b8b8b8] text-sm tracking-wide">WhatsApp:</p>
                            <p className="text-[#b8b8b8] font-medium">+92 315 7753260</p>
                        </div>
                    </div>
    </div>
  )
}

export default ContactLeft
