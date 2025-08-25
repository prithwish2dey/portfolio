
// import { useState, useEffect } from 'react';
// import { Mail, Github, Linkedin } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Navigation from "@/components/Navigation";

// const Index = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       <Navigation activeSection={activeSection} />
      
//       {/* Background Elements */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <main>
//         <section id="home" className="min-h-screen flex items-center justify-center">
//           <Hero />
//         </section>
        
//         <section id="about" className="py-20">
//           <About />
//         </section>
        
//         <section id="skills" className="py-20">
//           <Skills />
//         </section>
        
//         <section id="projects" className="py-20">
//           <Projects />
//         </section>
        
//         <section id="contact" className="py-20">
//           <Contact />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
//         <div className="container mx-auto px-6 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-muted-foreground mb-4 md:mb-0">
//               © 2025 Prithwish Dey. Crafted with quantum precision.
//             </p>
//             <div className="flex space-x-4">
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="mailto:prithwish2dey@gmail.com" className="hover:text-primary transition-colors">
//                   <Mail className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="https://github.com/prithwish2dey" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                   <Github className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button variant="ghost" size="sm" asChild>
//                 <a href="https://linkedin.com/in/prithwish-dey-9a6267286" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                   <Linkedin className="h-4 w-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;





















import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Publications from "@/components/Publications";
import Gallery from "@/components/Gallery";
import Navigation from "@/components/Navigation";
import VisitorMap from "@/components/VisitorMap"; // 👈 Map component
import LikeViewCounter from '@/components/likeCounter'; // 👈 Like/View counter component

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'publications', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation activeSection={activeSection} />

      {/* Background Glow Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="py-0">
          <About />
        </section>

        <section id="skills" className="py-0">
          <Skills />
        </section>

        <section id="projects" className="py-0">
          <Projects />
        </section>

        <section id="publications" className="py-0">
          <Publications />
        </section>

        <section id="gallery" className="py-0">
          <Gallery />
        </section>

        <section id="contact" className="py-0">
          <Contact />
        </section>

         <section id="LikeViewCounter" className="py-0">
          <LikeViewCounter />
        </section>

      </main>

      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 space-y-6">
          {/* Map Component */}
          {/* <VisitorMap /> */}

          {/* Footer Links and Text */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Prithwish Dey
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:prithwish2dey@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white shadow-md hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/prithwish2dey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white shadow-md hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/prithwish-dey-9a6267286"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-600 text-white shadow-md hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
