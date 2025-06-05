import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import InfiniteTextSlider from './InfiniteTextSlider';

function Hero() {
  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'BootStrap', "Tailwind CSS", 'Laravel', 'MySql', 'Java', "Python"
  ];

  const typedRef = useRef(null);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [' FullStack Developer '],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-[#222222] mt-10 mx-4 md:mx-10 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center md:items-start h-auto md:h-[500px] relative overflow-hidden">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 z-10 relative h-[300px] md:h-auto mb-6 md:mb-0">
          {/* Particle effect */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute top-0 left-0 w-full h-full"
            options={{
              background: { color: { value: 'transparent' } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: 'repulse' },
                  resize: true,
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                },
              },
              particles: {
                color: { value: '#ffffff' },
                links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.3, width: 1 },
                collisions: { enable: true },
                move: { direction: 'none', enable: true, outMode: 'bounce', speed: 2 },
                number: { density: { enable: true, area: 800 }, value: 40 },
                opacity: { value: 0.3 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 4 } },
              },
              detectRetina: true,
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-row mb-2 gap-2 md:gap-3">
              <h1 className="text-3xl  font-extrabold text-white font-serif">Hi,</h1>
              <h1 className="text-3xl  font-extrabold text-[#8245ec] font-serif">I am</h1>
            </div>

            <h1 className="text-xl font-extrabold text-white font-serif mb-2 gap-2">
              <span className="text-white text-xl gap-2 ">Somsubhro</span>
              <span className="text-white text-xl "> Chakraborty</span>
            </h1>

            <h2 className="text-xl md:text-4xl text-purple-500 font-mono tracking-wider">
              <span ref={typedRef}></span>
            </h2>
          </div>
          <h1 className='text-white mt-5'>I am a MCA student of Heritage Institute of Technology. Skilled in both front-end and back-end development, I develop modern technologies to create seamless user experiences and efficient solutions.</h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative z-0">
          <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
              clipPath: 'polygon(64% 1%, 100% 0, 100% 100%, 0% 100%)',
              backgroundColor: '#8245ec',
            }}
          ></div>

          <div className="flex justify-center items-center h-full relative z-10">
            <img
              src="https://imgs.search.brave.com/oajBPYNPsefs3N6qWonSmzg61vpUZIIdlOJz9AREAhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvcHJv/Z3JhbW1lci0zZC1p/Y29uLWRvd25sb2Fk/LWluLXBuZy1ibGVu/ZC1mYngtZ2x0Zi1m/aWxlLWZvcm1hdHMt/LWRldmVsb3BtZW50/LWNvZGluZy1wcm9n/cmFtbWluZy1kZXZl/bG9wZXItcHJvZmVz/c2lvbi1hdmF0YXIt/cGFjay1wZW9wbGUt/aWNvbnMtMTE3NTc1/MTIucG5nP2Y9d2Vi/cA"
              alt="profile"
              className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#111111] py-6 md:py-10 text-xl md:text-2xl">
        <InfiniteTextSlider items={techStack} duration={25} />
      </div>
    </>
  );
}
export default Hero;
