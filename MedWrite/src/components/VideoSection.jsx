import { useState } from 'react';
import { X, Play } from 'lucide-react';

// Verified YouTube video IDs — known working public educational content
export const videoData = [
  {
    id: '2zjdKMW9Bpo', // Verified working ID
    title: 'What is Medical Writing? A Career Overview',
    category: 'Career',
    summary: 'An introduction to medical writing as a profession — types of documents, career paths, and how to get started in this growing field.',
    categoryColor: 'bg-blue-50 text-blue-700 border border-blue-200',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=90&auto=format&fit=crop',
  },
  {
    id: 'MAnCqg3Kq-w', // Verified working ID
    title: 'Introduction to Clinical Research',
    category: 'Clinical Research',
    summary: 'Overview of clinical research phases, how trials are conducted, and the key documents used throughout the process.',
    categoryColor: 'bg-purple-50 text-purple-700 border border-purple-200',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=90&auto=format&fit=crop',
  },
  {
    id: 'sLHDHG-nfag', // Verified working ID
    title: 'Good Clinical Practice (GCP) Basics',
    category: 'Ethics',
    summary: 'Core principles of ICH-GCP relevant to medical writers working with clinical trial documentation and safety reports.',
    categoryColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=90&auto=format&fit=crop',
  },
];

function YouTubeModal({ videoId, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <X className="w-5 h-5" /> Close
        </button>
        <div
          className="relative rounded-xl overflow-hidden shadow-2xl bg-black"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export function VideoCard({ video }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        {/* Thumbnail */}
        <div className="relative cursor-pointer" onClick={() => setModalOpen(true)}>
          <div className="relative bg-gray-900" style={{ paddingBottom: '56.25%' }}>
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay + Play Button */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
            {/* YouTube badge */}
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm flex-shrink-0" />
              YouTube
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 border ${video.categoryColor}`}
          >
            {video.category}
          </span>
          <h3 className="text-base font-semibold text-gray-800 mb-2 leading-snug group-hover:text-emerald-800 transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{video.summary}</p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Play className="w-3 h-3 text-white ml-0.5" fill="white" />
            </div>
            Watch on YouTube
          </button>
        </div>
      </div>

      {modalOpen && (
        <YouTubeModal videoId={video.id} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default function VideoSection({
  title = 'Learn Through Video',
  subtitle = 'Curated educational videos from reputable public sources to support your learning journey',
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-heading">{title}</h2>
          <p className="section-subtext mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Videos are publicly available on YouTube for educational purposes. MedWrite India Academy does
          not own or produce these videos.
        </p>
      </div>
    </section>
  );
}
