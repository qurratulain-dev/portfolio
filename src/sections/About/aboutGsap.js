import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutGsapAnimation = (aboutRef) => {
  const section = aboutRef.current;

  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  const counters = section.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 50;

      const counting = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count) + "+"; 
          requestAnimationFrame(counting);
        } else {
          counter.innerText = target + "+"; 
        }
      };

      counting();
    };

    // ✅ ScrollTrigger 
    ScrollTrigger.create({
      trigger: section,              
      start: "top 75%",             
      end: "bottom 20%",            
      toggleActions: "play none none none",
      once: true,                   
      onEnter: () => {
        updateCount();

        gsap.fromTo(
          counter,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      },
    });
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
};
