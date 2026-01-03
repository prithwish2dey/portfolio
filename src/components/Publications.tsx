

import React from "react";
import { ExternalLink, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


/* ---------------- DATA ---------------- */

export const journalPublications = [
  {
    title: "Studying Human Modality Preferences in a Human-Drone Framework for Secondary Task Selection",
    authors: ["Suprakas Saren", "Rubini Mariyappan", "Prithwish Dey", "Debasish Ghose", "Pradipta Biswas"],
    journal: "Journal on Multimodal User Interfaces",
    publisher: "Springer",
    link: "https://link.springer.com/article/10.1007/s12193-025-00462-3",
    authorImages: [
      "/images/12.jpeg",
      "/images/13.jpeg",
      "/images/3.jpg",
      "/images/9.jpg",
      "/images/7.jpg"
    ],
    tags: ["HCI", "Multimodal", "User Study"],
    published: "2025-10-08",
    // summary: "Short summary of the journal paper.",
  },
];

export const conferencePublications = [
  {
    title:
      "A Quantum Public Key Cryptographic Scheme using Entangled States and Grover Operator",
    authors: [
      "Soumen Bajpayee",
      "Sarbani Sen",
      "Prithwish Dey",
      "Dr. Imon Mukherjee",
    ],
    conference: "ICSP Conference 2024",
    publisher: "Springer Book Chapter",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-90587-2_12",
    authorImages: [
      "/images/8.jpg",
      "/images/10.jpg",
      "/images/3.jpg",
      "/images/6.jpg"
    ],
    tags: ["Quantum", "Cryptography"],
    published: "2025-05-23",
    // summary:
    //   "A novel framework combining Quantum Transfer Learning and classical convolutional networks to improve diabetic retinopathy classification.",
  },
  {
    title:
      "LLaVA-TB: A Large Language and Vision Assistant for Tuberculosis Detection from Chest X-Rays",
    authors: [
      "Zaina Akhter",
      "Iffat Jabin",
      "Prithwish Dey",
      "Mukund Mitra",
      "Dr. Abhishek Mukhopadhyay",
    ],
    conference: "CVIP Conference 2025",
    publisher: "Springer Book Chapter",
    link: "#",
    authorImages: [
      "/images/5.jpg",
      "/images/4.jpg",
      "/images/3.jpg",
      "/images/2.jpg",
      "/images/1.jpg"
    ],
    tags: ["Medical", "Vision", "GenAI"],
    published: "2025-12-14",
    // summary:
    //   "A novel framework combining Quantum Transfer Learning and classical convolutional networks to improve diabetic retinopathy classification.",
  },
];

/* ------------- REUSABLE COLUMN ------------- */

const getInitials = (name = "") => {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
};

const parsePublishedDate = (pub: any) => {
  if (pub?.published) {
    const t = Date.parse(pub.published);
    if (!isNaN(t)) return new Date(t);
  }
  const meta = pub.conference || pub.journal || "";
  const match = meta.match(/\b(19|20)\d{2}\b/);
  return match ? new Date(parseInt(match[0], 10), 0, 1) : null;
};

const formatPublished = (pub: any) => {
  const d = parsePublishedDate(pub);
  if (!d) return '';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
};

const sortByDateDesc = (arr: any[]) => [...arr].sort((a, b) => (parsePublishedDate(b)?.getTime() || 0) - (parsePublishedDate(a)?.getTime() || 0));

const PublicationColumn: React.FC<{ title: string; publications: any[] }> = ({ title, publications }) => {
  if (!publications || publications.length === 0) {
    return (
      <div className="space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-cyan-400 text-center"
        >
          {title}
        </motion.h3>

        <div className="text-center text-gray-400">No publications found.</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-cyan-400 text-center"
      >
        {title}
      </motion.h3>

      {publications.map((pub, index) => {
        const meta = pub.conference || pub.journal || "";
        const yearMatch = meta.match(/\b(19|20)\d{2}\b/);
        const year = yearMatch ? yearMatch[0] : null;
        const hasLink = pub.link && pub.link !== "#";

        const avatars = pub.authorImages && pub.authorImages.length > 0
          ? pub.authorImages.slice(0, 5).map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                alt={pub.authors?.[i] || `Author ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-black/20 object-cover bg-gray-700"
              />
            ))
          : (pub.authors || []).slice(0, 5).map((a: string, i: number) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-cyan-800/70 text-cyan-100 flex items-center justify-center text-xs font-semibold border-2 border-black/20"
                title={a}
              >
                {getInitials(a)}
              </div>
            ));

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 w-full shadow-xl border border-cyan-500/10 hover:shadow-[0_12px_40px_rgba(13,148,136,0.12)] transition-transform hover:-translate-y-1"
          >
            {/* accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400/60 rounded-l-md" />

            <div className="md:flex md:items-start md:gap-6">
              <div className="flex-1 pl-3">
                <h4 className="text-lg md:text-xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {pub.title}
                </h4>

                {/* Meta row with simple colored logos and text */}
                <div className="mt-3 flex items-center gap-4 text-xs">
                  <div className="inline-flex items-center gap-2 text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-cyan-400" aria-hidden />
                    <span className="font-medium text-white">{pub.conference || pub.journal}</span>
                  </div>

                  <span className="text-gray-500">•</span>

                  <div className="inline-flex items-center gap-2 text-gray-300">
                    <span className="w-3 h-3 rounded-full bg-amber-400" aria-hidden />
                    <span className="font-medium text-white">{pub.publisher}</span>
                  </div>

                  {formatPublished(pub) && (
                    <span className="ml-auto inline-flex items-center text-xs bg-cyan-800/60 text-cyan-200 px-2 py-1 rounded-full">{formatPublished(pub)}</span>
                  )}
                </div>

                {/* Authors avatars + names (images kept, names shifted right) */}
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex -space-x-3 items-center z-10 min-w-[140px]">{avatars}</div>

                  <div className="ml-4 text-sm text-gray-300 break-words">
                    <span className="italic">Authors:</span>
                    {(pub.authors || []).map((a: string, ai: number) => (
                      <span
                        key={ai}
                        className={`inline ml-2 ${a === 'Prithwish Dey' ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-base md:text-lg' : 'text-gray-300 text-sm'}`}
                      >
                        {a}{ai < (pub.authors || []).length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {pub.summary && (
                  <p className="text-sm text-gray-300 mt-3">{pub.summary}</p>
                )}
              </div>

              <div className="mt-4 md:mt-0 md:flex md:flex-col md:items-end md:justify-between">
                <div className="flex items-center gap-3">
                  {hasLink ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-full shadow hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Read</span>
                    </a>
                  ) : (
                    <span className="inline-block px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">No link</span>
                  )}
                </div>

                {/* small meta row on bottom for compact view */}
                <div className="text-right mt-3">
                  <span className="text-xs text-muted-foreground">{pub.publisher}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ---------------- MAIN ---------------- */

/* ---------------- MAIN ---------------- */

export type PublicationsProps = { preview?: boolean; limit?: number; hideHeader?: boolean };

const Publications = ({ preview = false, limit = 2, hideHeader = false }: PublicationsProps) => {
  const [query, setQuery] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState<'all' | 'conference' | 'journal'>('all');

  // filter function
  const matches = (pub: any) => {
    if (!query) return true;
    const q = query.trim().toLowerCase();
    const hay = [pub.title, pub.conference, pub.journal, pub.publisher, (pub.authors || []).join(" "), (pub.tags || []).join(" ")]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  };

  const filteredConference = conferencePublications.filter(matches);
  const filteredJournal = journalPublications.filter(matches);



  return (
    <section
      id="publications"
      className="relative w-full py-24 px-6 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/backpublication.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center">
          {!hideHeader && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Research <span className="text-cyan-400">Publications</span>
              </motion.h2>
              <p className="text-gray-400 text-lg">
                Peer-reviewed contributions in GenAI, Computer Vision, MR and Quantum Cryptography
              </p>
            </>
          )}

          {/* Search (only on full page) */}
          {!preview && (
            <div className="mt-6 flex flex-col items-center justify-center gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, author, venue or tag..."
                className="w-full md:w-2/3 max-w-2xl px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/30 to-blue-700/20 border border-blue-600/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Tabbed selector for full page */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedTab('all')}
                  className={`px-4 py-2 rounded-full transition ${selectedTab === 'all' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedTab('conference')}
                  className={`px-4 py-2 rounded-full transition ${selectedTab === 'conference' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
                >
                  Conferences
                </button>
                <button
                  onClick={() => setSelectedTab('journal')}
                  className={`px-4 py-2 rounded-full transition ${selectedTab === 'journal' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
                >
                  Journals
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Columns / preview tab selector (All / Conferences / Journals) or single-tab view on full page */}
        {preview ? (
          <div className="mt-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <button
                onClick={() => setSelectedTab('all')}
                className={`px-3 py-1.5 rounded-full text-sm transition ${selectedTab === 'all' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTab('conference')}
                className={`px-3 py-1.5 rounded-full text-sm transition ${selectedTab === 'conference' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
              >
                Conferences
              </button>
              <button
                onClick={() => setSelectedTab('journal')}
                className={`px-3 py-1.5 rounded-full text-sm transition ${selectedTab === 'journal' ? 'bg-cyan-400 text-black' : 'bg-black/20 text-white border border-cyan-600/20'}`}
              >
                Journals
              </button>
            </div>

            {selectedTab === 'all' ? (
              <div className="w-full max-w-6xl mx-auto">
                <PublicationColumn
                  title="All Publications"
                  publications={sortByDateDesc([...filteredConference, ...filteredJournal]).slice(0, limit)}
                />
              </div>
            ) : selectedTab === 'conference' ? (
              <div className="w-full max-w-6xl mx-auto">
                <PublicationColumn title="Conference Publications" publications={sortByDateDesc(filteredConference).slice(0, limit)} />
              </div>
            ) : (
              <div className="w-full max-w-6xl mx-auto">
                <PublicationColumn title="Journal Publications" publications={sortByDateDesc(filteredJournal).slice(0, limit)} />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            <div className="w-full max-w-7xl mx-auto">
              {selectedTab === 'all' ? (
                <PublicationColumn title="All Publications" publications={sortByDateDesc([...filteredConference, ...filteredJournal])} />
              ) : selectedTab === 'conference' ? (
                <PublicationColumn title="Conference Publications" publications={sortByDateDesc(filteredConference)} />
              ) : (
                <PublicationColumn title="Journal Publications" publications={sortByDateDesc(filteredJournal)} />
              )}
            </div>
          </div>
        )}

        {preview && (
          <div className="text-center mt-8">
            {/* <a href="/publications" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition-transform">
              See all publications
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a> */}

            <Link
              to="/publications"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition-transform"
            >
              See all publications
            </Link>

          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;










// import React from "react";
// import { ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";

// /* ======================================================
//    DATA (NOT EXPORTED — IMPORTANT FOR VITE FAST REFRESH)
// ====================================================== */

// const journalPublications = [
//   {
//     title:
//       "Studying Human Modality Preferences in a Human-Drone Framework for Secondary Task Selection",
//     authors: [
//       "Suprakas Saren",
//       "Rubini Mariyappan",
//       "Prithwish Dey",
//       "Debasish Ghose",
//       "Pradipta Biswas",
//     ],
//     journal: "Journal on Multimodal User Interfaces",
//     publisher: "Springer",
//     link: "https://link.springer.com/article/10.1007/s12193-025-00462-3",
//     published: "2025-07-10",
//     tags: ["HCI", "Multimodal", "User Study"],
//     authorImages: [
//       "/images/12.jpeg",
//       "/images/13.jpeg",
//       "/images/3.jpg",
//       "/images/9.jpg",
//       "/images/7.jpg",
//     ],
//   },
// ];

// const conferencePublications = [
//   {
//     title:
//       "A Quantum Public Key Cryptographic Scheme using Entangled States and Grover Operator",
//     authors: [
//       "Soumen Bajpayee",
//       "Sarbani Sen",
//       "Prithwish Dey",
//       "Dr. Imon Mukherjee",
//     ],
//     conference: "ICSP Conference 2024",
//     publisher: "Springer Book Chapter",
//     link: "https://link.springer.com/chapter/10.1007/978-3-031-90587-2_12",
//     published: "2024-12-10",
//     tags: ["Quantum", "Cryptography"],
//     authorImages: [
//       "/images/8.jpg",
//       "/images/10.jpg",
//       "/images/3.jpg",
//       "/images/6.jpg",
//     ],
//   },
//   {
//     title:
//       "LLaVA-TB: A Large Language and Vision Assistant for Tuberculosis Detection from Chest X-Rays",
//     authors: [
//       "Zaina Akhter",
//       "Iffat Jabin",
//       "Prithwish Dey",
//       "Mukund Mitra",
//       "Dr. Abhishek Mukhopadhyay",
//     ],
//     conference: "CVIP Conference 2025",
//     publisher: "Springer Book Chapter",
//     link: "#",
//     published: "2025-03-01",
//     tags: ["Medical", "Vision", "GenAI"],
//     authorImages: [
//       "/images/5.jpg",
//       "/images/4.jpg",
//       "/images/3.jpg",
//       "/images/2.jpg",
//       "/images/1.jpg",
//     ],
//   },
// ];

// /* ======================================================
//    HELPERS
// ====================================================== */

// const sortByDate = (arr: any[]) =>
//   [...arr].sort(
//     (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
//   );

// const getInitials = (name: string) =>
//   name
//     .split(" ")
//     .slice(0, 2)
//     .map((n) => n[0])
//     .join("")
//     .toUpperCase();

// /* ======================================================
//    CARD COMPONENT
// ====================================================== */

// const PublicationCard = ({ pub }: { pub: any }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 25 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 md:p-7 border border-cyan-500/10 shadow-lg hover:-translate-y-1 transition"
//   >
//     <h3 className="text-base md:text-lg font-semibold text-cyan-400">
//       {pub.title}
//     </h3>

//     <p className="mt-1 text-xs md:text-sm text-gray-400">
//       {pub.conference || pub.journal} • {pub.publisher}
//     </p>

//     {/* Authors */}
//     <div className="mt-3 flex items-center gap-2 flex-wrap">
//       {pub.authorImages?.slice(0, 5).map((img: string, i: number) => (
//         <img
//           key={i}
//           src={img}
//           className="w-8 h-8 rounded-full object-cover border border-black/30"
//         />
//       ))}
//       {!pub.authorImages &&
//         pub.authors.slice(0, 5).map((a: string, i: number) => (
//           <div
//             key={i}
//             className="w-8 h-8 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center"
//           >
//             {getInitials(a)}
//           </div>
//         ))}
//     </div>

//     <p className="mt-3 text-xs md:text-sm text-gray-300">
//       <span className="italic">Authors:</span>{" "}
//       {pub.authors.map((a: string, i: number) => (
//         <span
//           key={i}
//           className={`${
//             a === "Prithwish Dey"
//               ? "text-cyan-400 font-semibold"
//               : ""
//           }`}
//         >
//           {a}
//           {i < pub.authors.length - 1 && ", "}
//         </span>
//       ))}
//     </p>

//     <div className="mt-4 flex justify-between items-center">
//       <span className="text-xs bg-cyan-800/40 text-cyan-200 px-2 py-1 rounded-full">
//         {new Date(pub.published).toLocaleDateString("en-US", {
//           month: "short",
//           year: "numeric",
//         })}
//       </span>

//       {pub.link && pub.link !== "#" && (
//         <a
//           href={pub.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1.5 rounded-full text-black font-medium hover:scale-105 transition"
//         >
//           <ExternalLink size={14} /> Read
//         </a>
//       )}
//     </div>
//   </motion.div>
// );

// /* ======================================================
//    MAIN COMPONENT
// ====================================================== */

// const Publications = ({ preview = false, limit = 2 }: any) => {
//   const [tab, setTab] = React.useState<"all" | "conference" | "journal">("all");

//   const allPublications = sortByDate([
//     ...conferencePublications,
//     ...journalPublications,
//   ]);

//   const visible =
//     tab === "all"
//       ? allPublications
//       : tab === "conference"
//       ? sortByDate(conferencePublications)
//       : sortByDate(journalPublications);

//   const list = preview ? visible.slice(0, limit) : visible;

//   return (
//     <section className="py-20 px-4 md:px-6 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
//           Research <span className="text-cyan-400">Publications</span>
//         </h2>

//         <p className="text-center text-gray-400 text-sm md:text-lg mb-8">
//           GenAI · Computer Vision · MR · Quantum Cryptography
//         </p>

//         {/* Tabs */}
//         <div className="flex justify-center gap-2 mb-8 flex-wrap">
//           {["all", "conference", "journal"].map((t) => (
//             <button
//               key={t}
//               onClick={() => setTab(t as any)}
//               className={`px-4 py-1.5 rounded-full text-sm transition ${
//                 tab === t
//                   ? "bg-cyan-400 text-black"
//                   : "border border-cyan-600/30"
//               }`}
//             >
//               {t.charAt(0).toUpperCase() + t.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {list.map((p, i) => (
//             <PublicationCard key={i} pub={p} />
//           ))}
//         </div>

//         {/* CTA */}
//         {preview && (
//           <div className="text-center mt-10">
//             <a
//               href="/publications"
//               className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition"
//             >
//               See all publications →
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Publications;
