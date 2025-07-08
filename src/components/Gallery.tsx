// import React from "react";

// const images = [
//   { src: "/gallery/field-monitoring.jpg", caption: "Wildlife Field Monitoring" },
//   { src: "/gallery/quantum-workshop.jpg", caption: "Quantum ML Workshop 2024" },
//   { src: "/gallery/paper-presentation.jpg", caption: "Paper Presentation - ICSP" },
//   { src: "/gallery/team-discussion.jpg", caption: "AI Model Discussion" },
//   { src: "/gallery/project-showcase.jpg", caption: "Final Year Project Showcase" },
// ];

// const Gallery = () => {
//   return (
//     <section id="gallery" className="py-24 px-4 bg-black text-white">
//       <div className="max-w-6xl mx-auto text-center mb-20">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4">
//           Project <span className="text-cyan-400">Gallery</span>
//         </h2>
//         <p className="text-gray-400 text-lg max-w-3xl mx-auto">
//           Glimpses from workshops, conferences, and hands-on sessions.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-cyan-500/20 hover:scale-105 transition-transform duration-300"
//           >
//             <img src={img.src} alt={img.caption} className="w-full h-60 object-cover" />
//             <div className="p-4 text-center text-cyan-300 text-sm font-medium border-t border-cyan-500/10">
//               {img.caption}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;












import React, { useState } from "react";

const images = [
  { src: "/images/sirs.jpeg", caption: "With Prof. Pradipta Biswas and Indian Astronaut Delegate, Group Captian Ajit Krishnan" },
  {src: "/images/sc1.jpg", caption: "Winner of STATUS CODE 1 Hackathon (Wildlife Track Prize )"},
  { src: "/images/IISc.jpeg", caption: "Internship at IISc Bangalore" },
  { src: "/images/Thesis2.jpeg", caption: "B.Tech. 3rd Year Project Thesis Submission" },
  { src: "/images/user_study.jpeg", caption: "User Study of Human-Drone Interaction" },
  { src: "/images/200m.jpg", caption: "2nd Place in Intra College 200m Race" },
  { src: "/images/IISc_convocation.jpg", caption: "IISc Convocation 2024" },
  { src: "/images/NAL_cricket2.png", caption: "I3D Lab Vs NAL Cricket Match, 2024" },
  { src: "/images/IISc_cricket2.jpg", caption: "IISc Cricket Match, 2025" },
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <section
      id="gallery"
      className="relative w-full py-24 px-4 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounds/backgallery.png')",
      }}
    >
      {/* Dark overlay to dim background image */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Section content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
          Project <span className="text-cyan-400">Gallery</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Glimpses from Achievements, conferences, and User Studies.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className="relative group cursor-pointer overflow-hidden rounded-xl border border-cyan-500/20 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 z-10 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none"></div>

            {/* Image */}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Caption */}
            <div className="relative z-20 p-4 text-center text-cyan-300 text-sm font-medium bg-black/50 backdrop-blur-sm border-t border-cyan-500/10">
              {img.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-3xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-xl font-bold bg-black/60 hover:bg-black/80 p-2 rounded-full"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <p className="text-center mt-4 text-cyan-300 text-sm">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
