// import { Card } from "@/components/ui/card";

// const About = () => {
//   const education = [
//     {
//       degree: "B.Tech, Computer Science",
//       institution: "IIIT Kalyani",
//       period: "2022–2026",
//       grade: "CGPA: 9.86",
//       image: "/images/IIITK.png"
//     },
//     {
//       degree: "Higher Secondary (XII)",
//       institution: "Arambagh High School",
//       period: "2022",
//       grade: "96.6%",
//       image: "/images/AHS.jpg"
//     },
//     {
//       degree: "Secondary (X)",
//       institution: "Arambagh High School",
//       period: "2020",
//       grade: "95.86%",
//       image: "/images/AHS.jpg"
//     },
//   ];

//   const experience = [
//     {
//       role: "Research Intern",
//       company: "IISc Bangalore",
//       period: "2025",
//       description: "Human-Drone Interaction with MR Interfaces",
//       image: "/images/IISc.png"
//     },
//     {
//       role: "Research Intern",
//       company: "IISc Bangalore",
//       period: "2024",
//       description: "Mixed Reality & Object Detection",
//       image: "/images/IISc.png"
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="relative w-full py-20 px-6 text-white bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/backgrounds/backabout.png')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-80"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
//           About <span className="text-primary">Me</span>
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           {/* Bio Section */}
//           <div className="space-y-6">
//             <div className="gradient-border rounded-lg">
//               <div className="gradient-border-content p-8 rounded-lg bg-card/50 backdrop-blur-md">
//                 <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   I'm a passionate Computer Science undergraduate at IIIT Kalyani, with a strong academic record 
//                   and a keen interest in cutting-edge technologies like Quantum Computing, AI/ML, Generative AI, 
//                   and Mixed Reality.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   Known for innovative projects like <span className="text-primary">WildGuard360</span> and 
//                   <span className="text-primary"> PaediPrime</span>, I bring a future-oriented approach to 
//                   solving real-world problems.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   I am a published author in quantum cryptography and a hackathon winner dedicated to 
//                   building impactful tech solutions that bridge the gap between theoretical research and 
//                   practical applications.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <div className="space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               <Card className="p-6 text-center bg-card/60 border-primary/30 hover:border-primary/60 transition-colors backdrop-blur-md">
//                 <div className="text-3xl font-bold text-primary mb-2">9.87</div>
//                 <div className="text-sm text-muted-foreground">CGPA</div>
//               </Card>
//               <Card className="p-6 text-center bg-card/60 border-primary/30 hover:border-primary/60 transition-colors backdrop-blur-md">
//                 <div className="text-3xl font-bold text-primary mb-2">2</div>
//                 <div className="text-sm text-muted-foreground">Research Internships</div>
//               </Card>
//               <Card className="p-6 text-center bg-card/60 border-primary/30 hover:border-primary/60 transition-colors backdrop-blur-md">
//                 <div className="text-3xl font-bold text-primary mb-2">3+</div>
//                 <div className="text-sm text-muted-foreground">Major Projects</div>
//               </Card>
//               <Card className="p-6 text-center bg-card/60 border-primary/30 hover:border-primary/60 transition-colors backdrop-blur-md">
//                 <div className="text-3xl font-bold text-primary mb-2">1</div>
//                 <div className="text-sm text-muted-foreground">Publication</div>
//               </Card>
//             </div>
//           </div>
//         </div>

//         {/* Education & Experience */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Education Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
//             <div className="space-y-4">
//               {education.map((edu, index) => (
//                 <Card key={index} className="p-6 flex items-center gap-4 bg-card/60 border-primary/30 hover:border-primary/60 transition-all hover:glow-effect backdrop-blur-md">
//                   <img src={edu.image} alt="Edu" className="w-16 h-16 rounded-full object-cover" />
//                   <div>
//                     <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
//                     <p className="text-primary">{edu.institution}</p>
//                     <div className="text-sm text-muted-foreground flex justify-between w-full">
//                       <span>{edu.period}</span>
//                       <span className="font-semibold text-primary">{edu.grade}</span>
//                     </div>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-primary">Experience</h3>
//             <div className="space-y-4">
//               {experience.map((exp, index) => (
//                 <Card key={index} className="p-6 flex items-start gap-4 bg-card/60 border-primary/30 hover:border-primary/60 transition-all hover:glow-effect backdrop-blur-md">
//                   <img src={exp.image} alt="Edu" className="w-16 h-16 rounded-full object-cover" />
//                   <div>
//                     <h4 className="font-semibold text-lg mb-1">{exp.role}</h4>
//                     <p className="text-primary">{exp.company}</p>
//                     <p className="text-muted-foreground mb-1">{exp.description}</p>
//                     <span className="text-sm text-muted-foreground">{exp.period}</span>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




















































import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science",
      institution: "IIIT Kalyani",
      period: "2022–2026",
      grade: "CGPA: 9.86",
      image: "/images/IIITK.png"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Arambagh High School",
      period: "2022",
      grade: "96.6%",
      image: "/images/AHS.jpg"
    },
    {
      degree: "Secondary (X)",
      institution: "Arambagh High School",
      period: "2020",
      grade: "95.86%",
      image: "/images/AHS.jpg"
    },
  ];

  const experience = [
    {
      role: "Research Intern",
      company: "IISc Bangalore",
      period: "2025",
      description: "Human-Drone Interaction with MR Interfaces",
      image: "/images/IISc.png"
    },
    {
      role: "Research Intern",
      company: "IISc Bangalore",
      period: "2024",
      description: "Mixed Reality & Object Detection",
      image: "/images/IISc.png"
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounds/backabout.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 glow-text">
          About <span className="text-primary">Me</span>
        </h2>


        {/* Social Links */}
<div className="flex flex-wrap justify-center gap-4 mb-12">
  <a
    href="https://drive.google.com/file/d/14F1cFQa-8GuQVVvRNAFL9nkZGpVCo-19/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    Resume
  </a>
  <a
    href="https://github.com/prithwish2dey"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/prithwish-dey-4655a8236/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    LinkedIn
  </a>
  <a
    href="https://www.codechef.com/users/dey_prithwish"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    CodeChef
  </a>
  <a
    href="https://leetcode.com/u/Prithwish2Dey"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    LeetCode
  </a>
  <a    
    href="https://drive.google.com/file/d/11wv_kpxouELQrELUVXyHD19MQfumTUEq/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-primary/30 rounded-full text-sm hover:border-primary hover:text-cyan-400 transition-all glow-effect"
  >
    Certifications
  </a>
</div>


        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="gradient-border rounded-lg">
              <div className="gradient-border-content p-8 rounded-lg bg-card/50 backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate Computer Science and Engineering Student at <span className="text-primary">IIIT Kalyani</span> and a keen interest in cutting-edge technologies like AI/ML, Generative AI, LLMs, Quantum Machine Learning, Quantum Cryptography
                  and Mixed Reality.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Known for innovative projects like <span className="text-primary">WildGuard360</span> and 
                  <span className="text-primary"> PaediPrime</span>, I bring a future-oriented approach to 
                  solving real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am a published author in quantum cryptography and a hackathon winner dedicated to 
                  building impactful tech solutions that bridge the gap between theoretical research and 
                  practical applications.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats - 2-1 Circle Layout with Links */}
          <div className="flex flex-col items-center gap-10">
            {/* Top Row: 2 Circles */}
            <div className="flex justify-center gap-14">
              <a href="#education" className="group">
                <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center bg-card/60 border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 hover:glow-effect backdrop-blur-md">
                  <div className="text-3xl font-bold text-primary group-hover:text-cyan-400 transition-colors">9.87</div>
                  <div className="text-sm text-muted-foreground mt-1">CGPA</div>
                </Card>
              </a>
              <a href="#experience" className="group">
                <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center bg-card/60 border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 hover:glow-effect backdrop-blur-md">
                  <div className="text-3xl font-bold text-primary group-hover:text-cyan-400 transition-colors">2</div>
                  <div className="text-sm text-muted-foreground mt-1 text-center">Research Internships</div>
                </Card>
              </a>
            </div>

            {/* Bottom Row: Centered Circle */}
            <a href="#projects" className="group">
              <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center bg-card/60 border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 hover:glow-effect backdrop-blur-md">
                <div className="text-3xl font-bold text-primary group-hover:text-cyan-400 transition-colors">3+</div>
                <div className="text-sm text-muted-foreground mt-1 text-center">Major Projects</div>
              </Card>
            </a>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div id="education">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 flex items-center gap-4 bg-card/60 border-primary/30 hover:border-primary/60 transition-all hover:glow-effect backdrop-blur-md">
                  <img src={edu.image} alt="Edu" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    <div className="text-sm text-muted-foreground flex justify-between w-full">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-primary">{edu.grade}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience">
            <h3 className="text-2xl font-bold mb-6 text-primary">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 flex items-start gap-4 bg-card/60 border-primary/30 hover:border-primary/60 transition-all hover:glow-effect backdrop-blur-md">
                  <img src={exp.image} alt="Edu" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{exp.role}</h4>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-muted-foreground mb-1">{exp.description}</p>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
