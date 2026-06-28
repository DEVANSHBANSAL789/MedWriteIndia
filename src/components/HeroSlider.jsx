import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=90&auto=format&fit=crop',
    headline: 'Build Your Career in Medical Writing',
    subheadline:
      'Learn practical skills in scientific communication, clinical research documentation, and healthcare content writing — designed for India\'s growing pharmaceutical and research sector.',
    cta1: { label: 'Explore Courses', href: '/courses' },
    cta2: { label: 'View Learning Pathways', href: '/pathways' },
  },
  {
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=90&auto=format&fit=crop',
    headline: 'Understand Clinical Research Communication',
    subheadline:
      'Learn how to write clinical trial summaries, informed consent documents, safety narratives, and research reports with clarity and accuracy.',
    cta1: { label: 'Start Learning', href: '/courses' },
    cta2: { label: 'Explore Ethics Resources', href: '/ethics' },
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=90&auto=format&fit=crop',
    headline: 'Launch Your Freelance Medical Writing Career',
    subheadline:
      'Build your writing portfolio, learn how to communicate with clients, set your rates, and create a professional presence in healthcare communication.',
    cta1: { label: 'Visit Freelance Centre', href: '/freelance' },
    cta2: { label: 'Join Our Network', href: '/network' },
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90&auto=format&fit=crop',
    headline: 'Connect with Healthcare Communication Professionals',
    subheadline:
      'Discover mentors, explore career opportunities, attend webinars, and grow alongside a community of medical writers and researchers across India.',
    cta1: { label: 'View Professional Network', href: '/network' },
    cta2: { label: 'Become a Member', href: '/network#join' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isTransitioning ? 'scale(1.03)' : 'scale(1)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-emerald-900/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div
              className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/70 rounded-full text-emerald-200 text-xs font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                MedWrite India Academy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                {slide.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={slide.cta1.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-emerald-900/50"
                >
                  {slide.cta1.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={slide.cta2.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                >
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-medium">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
