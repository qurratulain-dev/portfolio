import { aboutGsapAnimation } from "./aboutGsap";
import React, { useEffect, useRef } from "react";


const LeftAbout = () => {
  const aboutRef = useRef(null);

    useEffect(() => {
        aboutGsapAnimation(aboutRef);
    }, []);
  return (
    <div ref={aboutRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 sm:gap-6 basis-full md:basis-[38%] w-full">
                    {/* Experience Box */}
                    <div  className="group border border-emerald-600/40 bg-gray-900/40 
                  rounded-lg text-center px-6 sm:px-8 py-8 transition-all duration-300 ease-in-out 
                  hover:bg-emerald-500/5 hover:border-emerald-500 
                  aspect-square w-full max-w-[360px] mx-auto flex flex-col justify-center items-center">
                        <h3 className="font-bold text-emerald-400 counter text-6xl sm:text-7xl lg:text-8xl" data-target="8">
                            0
                        </h3>
                        <p className="text-[#b8b8b8] text-2xl sm:text-3xl lg:text-4xl font-semibold mt-5">
                            Months of Experience
                        </p>
                    </div>

                    {/* Projects Box */}
                    <div className="group border border-emerald-600/40 bg-gray-900/40 
                  rounded-lg text-center p-4 transition-all duration-300 ease-in-out 
                  hover:bg-emerald-500/5 hover:border-emerald-500 
                   aspect-square w-full max-w-[360px] mx-auto flex flex-col justify-center items-center">
                        <h3 className="text-4xl font-bold text-emerald-400 counter" data-target="15">
                            0
                        </h3>
                        <p className="text-[#b8b8b8] mt-2 text-2xl font-semibold">
                            Projects Completed
                        </p>
                    </div>
                </div>
  )
}

export default LeftAbout
