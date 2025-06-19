
// import { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";

// interface NavigationProps {
//   activeSection: string;
// }

// const Navigation = ({ activeSection }: NavigationProps) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//   { id: 'home', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'publications', label: 'Publications' },
//   { id: 'gallery', label: 'Gallery' },
//   { id: 'contact', label: 'Contact' },
// ];


//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
//     }`}>
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <div className="font-bold text-xl glow-text">
//             Prithwish<span className="text-primary">.</span>
//           </div>
          
//           <div className="hidden md:flex space-x-1">
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 variant={activeSection === item.id ? "default" : "ghost"}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`transition-all duration-300 ${
//                   activeSection === item.id 
//                     ? 'glow-effect text-primary-foreground' 
//                     : 'hover:text-primary'
//                 }`}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </div>

//           {/* Mobile menu button - simplified for now */}
//           <div className="md:hidden">
//             <Button variant="ghost" size="sm">
//               Menu
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;





















import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // close menu after click
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-xl glow-text">
            Prithwish<span className="text-primary">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'glow-effect text-primary-foreground' 
                    : 'hover:text-primary'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-background/90 backdrop-blur-md rounded-lg p-4 shadow-lg space-y-2 border border-border/30">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`w-full justify-start ${
                  activeSection === item.id ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
