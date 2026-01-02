import React from 'react';
import Projects from '@/components/Projects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const [query, setQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgrounds/backprojects.jpg')" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">All Projects</h1>
          <p className="text-muted-foreground mt-2">Explore detailed descriptions and demos of each project.</p>
          <div className="mt-4">
            <Link to="/" className="text-cyan-400 hover:underline">← Back to home</Link>
          </div>
        </div>

        <div className="mb-8 flex justify-center">
          <input
            className="w-full md:w-2/3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/25 to-blue-700/20 border border-blue-600/30 text-white placeholder-white/60"
            placeholder="Search projects by title, tech or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Projects query={query} hideHeader />
      </div>
    </div>
  );
};

export default ProjectsPage;
