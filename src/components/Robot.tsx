import { useEffect, useRef } from "react";

export default function Robot() {
  const eyeRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!eyeRef.current) return;
      eyeRef.current.setAttribute("cy", `${12 + Math.sin(Date.now() / 250) * 1}`);
    }, 100);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 animate-float-up z-50">
      <div className="relative w-full h-full">
        <img
          src="/models/Graident Ai Robot.jpg"
          alt="AI Chatbot"
          className="w-full h-full object-cover rounded-full border-2 border-cyan-400 shadow-lg animate-pulse cursor-pointer hover:scale-110 transition-transform"
        />
        {/* Speech bubble */}
        <div className="absolute -left-10 -top-3 rounded-full bg-black/70 py-1 px-2 text-xs text-white font-semibold shadow-lg backdrop-blur-sm animate-bounce whitespace-nowrap">
          Hi! 👋
        </div>
      </div>
    </div>
  );
}
