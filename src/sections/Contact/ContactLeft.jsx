import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full">
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.75rem" }}>
        Have an Idea in mind? <br /><span className="bg-accent-gradient bg-clip-text text-transparent" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>Let's Talk.</span>
      </h2>
      <p style={{ fontSize: "0.95rem", color: "var(--grey)", maxWidth: "480px", lineHeight: 1.7 }}>
        Feel free to reach out via the form or my social channels. I respond to every message within 24 hours.
      </p>

                    <div className="flex items-start gap-3 mt-5">
                        <a
                            href="mailto:dev.quratulain@gmail.com"
                            aria-label="Send email"
                            className="relative overflow-hidden text-white w-11 h-11 rounded-lg 
                                       inline-flex shrink-0 items-center justify-center text-xl transition-all duration-500 ghost-btn"
                            style={{ border: "1px solid #3F3F46" }}
                        >
                            <span className="ghost-sweep" />
                            <span className="relative z-10">
                                <HiOutlineMail />
                            </span>
                        </a>
                        <div>
                            <p className="text-[#b8b8b8] text-sm tracking-wide">Email</p>
                            <p className="text-[#b8b8b8] font-medium break-all">dev.quratulain@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                        <a
                            href="https://wa.me/923157753260"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="relative overflow-hidden text-white w-11 h-11 rounded-lg 
                                       inline-flex shrink-0 items-center justify-center text-xl transition-all duration-500 ghost-btn"
                            style={{ border: "1px solid #3F3F46" }}
                        >
                            <span className="ghost-sweep" />
                            <span className="relative z-10">
                                <FaWhatsapp />
                            </span>
                        </a>
                        <div>
                            <p className="text-[#b8b8b8] text-sm tracking-wide">WhatsApp</p>
                            <p className="text-[#b8b8b8] font-medium">+92 315 7753260</p>
                        </div>
                    </div>
    </div>
  )
}

export default ContactLeft
