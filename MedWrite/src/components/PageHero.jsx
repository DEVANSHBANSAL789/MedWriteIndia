import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb = [], bgImage, imagePosition = 'object-center', children }) {
  // Default image if none provided
  const image = bgImage || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=90&auto=format&fit=crop';
  
  return (
    <div
      className="relative text-white py-20 lg:py-32 overflow-hidden flex items-center min-h-[40vh]"
    >
      <img src={image} alt="Background" className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/10" />
      <div className="relative container-max w-full">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="text-lg lg:text-xl text-emerald-50 max-w-3xl leading-relaxed mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
