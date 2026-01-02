import React from 'react';
import Publications from '@/components/Publications';
import { Link } from 'react-router-dom';

const PublicationsPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgrounds/backpublication.webp')" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Publications</h1>
          <p className="text-muted-foreground mt-2">Complete list of conference and journal publications.</p>
          <div className="mt-4">
            <Link to="/" className="text-cyan-400 hover:underline">← Back to home</Link>
          </div>
        </div>

        <Publications hideHeader />
      </div>
    </div>
  );
};

export default PublicationsPage;
