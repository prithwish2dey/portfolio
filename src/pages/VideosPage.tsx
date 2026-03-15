import React from 'react';
import { Link } from 'react-router-dom';

const videos = [
  {
    title: 'LLaVA-TB: A Vision-Language Assistant for Pulmonary TB Diagnosis Using Chest X-rays and GenAI',
    description: 'A quick walkthrough of the Smart Home Dashboard UI, showing real-time sensor updates and voice-command integration.',
    url: 'https://youtu.be/UcblWPFb-ig',
  },
  {
    title: 'Human-Drone Framework for Secondary Task Selection',
    description: 'Overview of the full training pipeline, from data ingestion to model deployment and monitoring.',
    url: 'https://www.youtube.com/watch?v=0zCT_Dw0p3E',
  },
  {
    title: 'XR Prototype Interaction Demo',
    description: 'Interactive demo of the XR prototype demo, highlighting gesture controls and augmented overlays.',
    url: 'https://indianinstituteofscience-my.sharepoint.com/:v:/g/personal/mukundmitra_iisc_ac_in/EZLCURJ8k6RAhAhQJFeRUGkBePhy3gf7-U_RTljz1sk6Bg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=I48WmN&referrer=Outlook.Desktop&referrerScenario=email-linkwithembed',
  },
];

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/backgrounds/backgallery.jpg')" }}>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Project Demos
          </h1>
          <p className="text-xl text-gray-200 mt-4 drop-shadow-lg">
            Watch immersive demos for each project and dive into the details.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300 hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="group relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/20">
                <iframe
                  className="h-full w-full"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300">
                  {video.title}
                </h2>
                <p className="text-white/80 mt-3 leading-relaxed drop-shadow-md">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

