import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

const importantSkills = [
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Qiskit", logo: "/images/qiskit.png" },
  { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Flask", logo: "/images/flask.png" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
  { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
];

const cubePoints = [
  [1, 1, 1], [-1, 1, 1], [1, -1, 1], [-1, -1, 1],
  [1, 1, -1], [-1, 1, -1], [1, -1, -1], [-1, -1, -1],
  [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]
];

const Skills = () => {
  const containerRef = useRef(null);
  const rotateX = useMotionValue(5);
  const rotateY = useMotionValue(5);
  const springX = useSpring(rotateX, { stiffness: 40, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 40, damping: 20 });

  const [isMobile, setIsMobile] = useState(false);
  const [SIZE, setSIZE] = useState(180);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setSIZE(mobile ? 110 : 170);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const yAnim = animate(rotateY, 20, {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    const xAnim = animate(rotateX, -10, {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });
    return () => {
      yAnim.stop();
      xAnim.stop();
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/backskills.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center pt-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Cube Wrapper */}
        <div
          ref={containerRef}
          className={`relative perspective-1000 flex items-start justify-end
            ${isMobile ? "w-[300px] h-[300px] translate-x-[150px] translate-y-[150px]" : "w-[500px] h-[500px] translate-x-[250px] translate-y-[250px]"}`}
        >
          <motion.div
            className="relative"
            style={{
              width: isMobile ? "300px" : "500px",
              height: isMobile ? "300px" : "500px",
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
          >
            {cubePoints.map(([x, y, z], index) => {
              const skill = importantSkills[index];
              if (!skill) return null;
              const translate = `translate3d(${x * SIZE}px, ${y * SIZE}px, ${z * SIZE}px)`;
              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{ transform: translate, transformStyle: "preserve-3d" }}
                >
                  <div className="p-[3px] rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 animate-glow-border shadow-xl relative">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`${isMobile ? "w-12 h-12" : "w-16 h-16"} object-contain rounded-full bg-black p-1 hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <span className={`mt-1 ${isMobile ? "text-xs" : "text-sm"} font-medium text-blue-400 whitespace-nowrap`}>
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-glow-border {
          background-size: 300% 300%;
          animation: glowSpin 6s linear infinite;
        }
        @keyframes glowSpin {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Skills;
