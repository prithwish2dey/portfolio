
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Github, ExternalLink } from "lucide-react";
// import DiamondCard from "@/components/DiamondCard";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Hybrid Quantum ML for DR Detection",
//       description: "Revolutionary fundus image analysis using Quantum Transfer Learning for diabetic retinopathy detection.",
//       tech: ["Qiskit", "Python", "TensorFlow", "OpenCV", "Quantum ML"],
//       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
//       link: null,
//       github: null,
//       category: "Quantum Computing",
//       featured: true,
//     },
//     {
//       title: "PaediPrime",
//       description: "Comprehensive online pediatric healthcare system with AI-powered time prediction using reinforcement learning.",
//       tech: ["Reinforcement Learning", "XGBoost", "Scikit-learn", "Flask", "AI"],
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
//       link: "https://www.paediprime.tech",
//       github: null,
//       category: "AI/ML Healthcare",
//       featured: true,
//     },
//     {
//       title: "WildGuard360",
//       description: "Innovative wildlife protection and environmental monitoring platform featuring pet tracking, fire prediction, and snake recognition.",
//       tech: ["ResNet50", "Transfer Learning", "Computer Vision", "React", "Python"],
//       image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
//       link: "https://wild-guard360.vercel.app",
//       github: null,
//       category: "Computer Vision",
//       featured: true,
//     },
//   ];

//   const codingProfiles = [
//     { platform: "LeetCode", username: "Prithwish2Dey", url: "https://leetcode.com/u/Prithwish2Dey", icon: "💻" },
//     { platform: "CodeChef", username: "dey_prithwish", url: "https://codechef.com/users/dey_prithwish", icon: "👨‍💻" },
//     { platform: "GitHub", username: "prithwish2dey", url: "https://github.com/prithwish2dey", icon: "🐙" },
//   ];

//   return (
//     <div className="container mx-auto px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 glow-text">
//           Innovative <span className="text-primary">Projects</span>
//         </h2>
//         <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
//           Cutting-edge projects pushing the boundaries of technology
//         </p>

//         {/* Featured Projects in Triangular Pattern */}
//         <div className="relative flex flex-col items-center space-y-12 mb-20">
//           {/* Row 1 - Single project at top */}
//           <div className="flex justify-center">
//             <Card className="w-96 overflow-hidden bg-card/30 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:glow-effect group backdrop-blur-sm">
//               <div className="relative overflow-hidden">
//                 <img 
//                   src={projects[0].image}
//                   alt={projects[0].title}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/30">
//                     {projects[0].category}
//                   </span>
//                 </div>
//                 {projects[0].featured && (
//                   <div className="absolute top-4 right-4">
//                     <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
//                       Featured
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
//                   {projects[0].title}
//                 </h3>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   {projects[0].description}
//                 </p>
                
//                 <div className="mb-6">
//                   <div className="flex flex-wrap gap-2">
//                     {projects[0].tech.slice(0, 3).map((tech, techIndex) => (
//                       <span 
//                         key={techIndex}
//                         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   {projects[0].link && (
//                     <Button asChild size="sm" className="glow-effect hover:scale-105 transition-transform">
//                       <a href={projects[0].link} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Demo
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Row 2 - Two projects at bottom */}
//           <div className="flex justify-center gap-12">
//             {projects.slice(1, 3).map((project, index) => (
//               <Card 
//                 key={index + 1}
//                 className="w-96 overflow-hidden bg-card/30 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:glow-effect group backdrop-blur-sm"
//               >
//                 <div className="relative overflow-hidden">
//                   <img 
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/30">
//                       {project.category}
//                     </span>
//                   </div>
//                   {project.featured && (
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/30">
//                         Featured
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   <div className="mb-6">
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.slice(0, 3).map((tech, techIndex) => (
//                         <span 
//                           key={techIndex}
//                           className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     {project.link && (
//                       <Button asChild size="sm" className="glow-effect hover:scale-105 transition-transform">
//                         <a href={project.link} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="h-4 w-4 mr-2" />
//                           Demo
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Coding Profiles in triangular pattern */}
//         <div className="text-center">
//           <h3 className="text-3xl font-bold mb-12 text-primary">Competitive Programming</h3>
//           <div className="relative flex flex-col items-center space-y-8">
//             {/* Row 1 - Single profile */}
//             <Button 
//               variant="outline" 
//               asChild 
//               className="w-64 h-auto p-6 border-primary/30 hover:border-primary hover:glow-effect transition-all hover:scale-105 bg-card/30 backdrop-blur-sm"
//             >
//               <a href={codingProfiles[0].url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-3">
//                 <span className="text-3xl">{codingProfiles[0].icon}</span>
//                 <div>
//                   <div className="font-semibold">{codingProfiles[0].platform}</div>
//                   <div className="text-sm text-muted-foreground">@{codingProfiles[0].username}</div>
//                 </div>
//               </a>
//             </Button>

//             {/* Row 2 - Two profiles */}
//             <div className="flex justify-center gap-8">
//               {codingProfiles.slice(1, 3).map((profile, index) => (
//                 <Button 
//                   key={index + 1}
//                   variant="outline" 
//                   asChild 
//                   className="w-64 h-auto p-6 border-primary/30 hover:border-primary hover:glow-effect transition-all hover:scale-105 bg-card/30 backdrop-blur-sm"
//                 >
//                   <a href={profile.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-3">
//                     <span className="text-3xl">{profile.icon}</span>
//                     <div>
//                       <div className="font-semibold">{profile.platform}</div>
//                       <div className="text-sm text-muted-foreground">@{profile.username}</div>
//                     </div>
//                   </a>
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;














































import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hybrid Quantum Model for DR Detection",
      description: "Comparision between Classical and Quantum Transfer Learning methods for diabetic retinopathy detection.",
      tech: ["Python", "Qiskit", "PennyLane", "Torch", "OpenCV"],
      image: "/images/quantum.png",
      link: null,
      category: "Quantum Computing",
    },
    {
      title: "PaediPrime",
      description: "AI-powered pediatric healthcare with real time prediction.",
      tech: ["ANN", "XGBoost", "Flask"],
      image: "/images/paediprime.png",
      link: "https://www.paediprime.tech",
      category: "AI/ML",
    },
    {
      title: "WildGuard360",
      description: "Wildlife protection, Animal disease prediction, Pet finding system.",
      tech: ["Python", "ResNet18", "KNN"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      link: "https://wild-guard360.vercel.app",
      category: "Computer Vision",
    },
  ];

  const DiamondCard = ({ project }: { project: any }) => (
    <div className="relative w-80 h-80 sm:w-96 sm:h-[420px] transform rotate-45 hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 transform -rotate-45 rounded-2xl overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border border-cyan-400/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-shadow duration-500 text-white">
        {/* Image */}
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />

        {/* Content */}
        <div className="p-5 space-y-2">
          <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-1 text-[11px]">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="bg-cyan-400/10 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-300/20">
                {tech}
              </span>
            ))}
          </div>

          {/* Demo Button */}
          <div className="flex justify-center mt-4">
            <a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-md transition 
                ${project.link
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"}`}
            >
              <ExternalLink className="w-3 h-3" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounds/backprojects.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
          Innovative <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Building the future with AI/ML, QML and Computer Vision.
        </p>
      </div>

      {/* Diamond Layout */}
      <div className="relative z-10 flex flex-col items-center space-y-24">
        {/* Top Row: Two diamonds */}
        <div className="flex flex-wrap justify-center gap-24">
          <DiamondCard project={projects[0]} />
          <DiamondCard project={projects[1]} />
        </div>

        {/* Bottom Row: Centered */}
        <div className="mt-[-4rem]">
          <DiamondCard project={projects[2]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
