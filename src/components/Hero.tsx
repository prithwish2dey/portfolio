import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import CubeScene from "@/components/CubeScene";

const Hero = () => {
  // const taglines = [
  //   "I am a AI/ML Developer",
  //   "Designing the future with GenAI & XR",
  //   // "Solving real-world challenges using Generative AI",
  //   "Crafting intelligent systems with Quantum Computing"
  // ];
  const taglines = [
  {
    text: "I am an AI/ML Developer",
    highlighted: (
      <>
        I am an <span className="text-cyan-400 font-semibold">AI/ML Developer</span>
      </>
    )
  },
  {
    text: "Designing the future with GenAI & XR",
    highlighted: (
      <>
        Designing the future with <span className="text-purple-400 font-semibold">GenAI</span> & <span className="text-pink-400 font-semibold">XR</span>
      </>
    )
  },
  {
    text: "Crafting intelligent systems with Quantum Computing",
    highlighted: (
      <>
        Crafting intelligent systems with <span className="text-blue-400 font-semibold">Quantum Computing</span>
      </>
    )
  }
  ];





  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [taglineIndex, setTaglineIndex] = useState(0);

 useEffect(() => {
  let currentIndex = 0;
  const typingInterval = setInterval(() => {
    if (currentIndex <= taglines[taglineIndex].text.length) {
      setDisplayText(taglines[taglineIndex].text.slice(0, currentIndex));
      currentIndex++;
    } else {
      setIsTyping(false);
      clearInterval(typingInterval);
      setTimeout(() => {
        setIsTyping(true);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 2500);
    }
  }, 50);

  return () => clearInterval(typingInterval);
}, [taglineIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/backgrounds/backhome.png')",
      }}
    >

      <div className="absolute inset-0 z-0">
  <CubeScene />
</div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 py-16 md:py-24 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Profile Image */}
        {/* <div className="w-full md:w-1/2 flex justify-center animate-float-up">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-2 shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <img
              src="/images/profile.png"
              alt="Prithwish Dey"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div> */}

          {/* Left: Profile Image */}
<div className="w-full md:w-1/2 flex justify-center animate-float-up">
  <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96">
    {/* Glowing background */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-400 blur-2xl opacity-100 animate-pulse z-0" />

    {/* Profile Image */}
    <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 sm:p-2 shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
      <img
        src="/images/profile.png"
        alt="Prithwish Dey"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  </div>
</div>




        {/* Right: Name + Tagline + Button */}
<div className="w-full md:w-1/2 text-center md:text-left text-white space-y-6 animate-fade-in">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-2 text-center md:text-left glow-text">
    <span className="text-white hover:text-cyan-400 transition duration-300">Prithwish</span>
    <span className="text-cyan-400">Dey</span>
  </h1>

  <p className="text-base sm:text-lg md:text-xl font-light min-h-[2.5rem] transition-opacity duration-500 ease-in-out">
    {isTyping ? (
      <>
        {displayText}
        <span className="animate-pulse">|</span>
      </>
    ) : (
      taglines[taglineIndex].highlighted
    )}
  </p>

  <p className="text-sm md:text-base text-gray-300">
    CSE Student at <span className="text-cyan-400">IIIT Kalyani</span>.<br />
    Passionate about building the future with emerging technologies.
  </p>

  <div className="flex justify-center md:justify-start">
    <Button
      variant="ghost"
      size="sm"
      onClick={scrollToAbout}
      className="flex items-center gap-2 text-white hover:text-cyan-400 hover:scale-105 transition duration-300"
    >
      <ArrowDown className="h-5 w-5" />
      <span className="text-sm">Discover More</span>
    </Button>
  </div>
</div>

      </div>
      
    </section>
  );
};

export default Hero;
