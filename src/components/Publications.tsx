// import React from "react";
// import { ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const publications = [
//   {
//     title: "Hybrid Quantum Transfer Learning for DR Detection",
//     conference: "International Conference on Signal Processing (ICSP 2024)",
//     publisher: "Springer Book Chapter",
//     link: "https://link.springer.com/example-paper1",
//     summary:
//       "A novel framework combining Quantum Transfer Learning and classical convolutional networks to improve diabetic retinopathy classification from fundus images.",
//   },
//   {
//     title: "WildGuard360: A Vision-Based Wildlife Safety Platform",
//     conference: "IEEE International Conference on Computer Vision Applications (ICCV-AI 2024)",
//     publisher: "IEEE Xplore (Under Review)",
//     link: "https://ieeexplore.ieee.org/example-paper2",
//     summary:
//       "An integrated wildlife monitoring system leveraging object detection, fire prediction, and pet recovery modules in edge-enabled environments.",
//   },
// ];

// const Publications = () => {
//   return (
//     <section id="publications" className="py-24 px-4 bg-black text-white">
//       <div className="max-w-6xl mx-auto text-center mb-20">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4">
//           Research <span className="text-cyan-400">Publications</span>
//         </h2>
//         <p className="text-gray-400 text-lg max-w-3xl mx-auto">
//           Peer-reviewed contributions to cutting-edge domains in Quantum ML and Computer Vision.
//         </p>
//       </div>

//       <div className="space-y-16 max-w-4xl mx-auto">
//         {publications.map((pub, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition duration-300"
//           >
//             <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{pub.title}</h3>
//             <p className="text-sm text-gray-400 mb-2 italic">{pub.conference} • {pub.publisher}</p>
//             <p className="text-gray-300 mb-4">{pub.summary}</p>
//             <Button
//               variant="outline"
//               className="text-xs border-cyan-400 text-cyan-300 hover:bg-cyan-500/10"
//               asChild
//             >
//               <a href={pub.link} target="_blank" rel="noopener noreferrer">
//                 <ExternalLink className="w-4 h-4 mr-1" />
//                 Read Paper
//               </a>
//             </Button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Publications;























import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const publications = [
  {
    title: "A Quantum Public Key Cryptographic Scheme using Entangled States and Grover Operator",
    authors: ["Soumen Bajpayee", "Sarbani Sen", "Prithwish Dey", "Dr. Imon Mukherjee"],
    conference: "ICSP Conference 2024",
    publisher: "Springer Book Chapter",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-90587-2_12",
    summary:
      "A novel framework combining Quantum Transfer Learning and classical convolutional networks to improve diabetic retinopathy classification.",
  },
  // Add more papers similarly
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 glow-text"
        >
          Research <span className="text-cyan-400">Publications</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto"
        >
          Peer-reviewed contributions in Quantum Cryptography.
        </motion.p>
      </div>

      <div className="space-y-16 max-w-4xl mx-auto">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-2">{pub.title}</h3>
            
            {/* Authors */}
            <p className="text-sm text-gray-400 mb-1">
              <span className="italic">Authors:</span> {pub.authors.join(", ")}
            </p>

            {/* Conference & Publisher */}
            <p className="text-sm text-gray-400 mb-2 italic">
              {pub.conference} • {pub.publisher}
            </p>

            {/* Summary */}
            <p className="text-gray-300 mb-4">{pub.summary}</p>

            {/* Button */}
            <Button variant="outline" className="text-xs border-cyan-400 text-cyan-300 hover:bg-cyan-500/10" asChild>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Read Paper
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
