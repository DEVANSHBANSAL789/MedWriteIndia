import { Link } from 'react-router-dom';
import { PenLine, Mail } from 'lucide-react';

// Inline SVG social icons (lucide-react doesn't include brand icons)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const footerLinks = {
  Learn: [
    { label: 'Courses', href: '/courses' },
    { label: 'Learning Pathways', href: '/pathways' },
    { label: 'Resources', href: '/resources' },
    { label: 'Video Library', href: '/resources#videos' },
    { label: 'Career Centre', href: '/career' },
  ],
  Community: [
    { label: 'Professional Network', href: '/network' },
    { label: 'Freelance Centre', href: '/freelance' },
    { label: 'Freelance Directory', href: '/freelance#directory' },
    { label: 'Events & Webinars', href: '/events' },
    { label: 'Become a Member', href: '/network#join' },
  ],
  Platform: [
    { label: 'About', href: '/about' },
    { label: 'Ethics & Compliance', href: '/ethics' },
    { label: 'Contact', href: '/contact' },
    { label: 'Join Now', href: '/network#join' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact#privacy' },
    { label: 'Terms of Use', href: '/contact#terms' },
    { label: 'Disclaimer', href: '/about#disclaimer' },
    { label: 'Sitemap', href: '/contact#sitemap' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-emerald-700 rounded-lg flex items-center justify-center">
                <PenLine className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">MedWrite India</div>
                <div className="text-emerald-300 text-[10px] font-semibold tracking-widest uppercase leading-tight">Academy</div>
              </div>
            </Link>
            <p className="text-emerald-200 text-sm leading-relaxed mb-6">
              India's learning platform for medical writing and clinical research communication. Practical education for healthcare and pharmaceutical professionals.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="w-9 h-9 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="w-9 h-9 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 bg-emerald-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-emerald-200 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex items-center gap-2 mb-8 p-4 bg-emerald-800 rounded-xl">
          <Mail className="w-4 h-4 text-emerald-300 flex-shrink-0" />
          <span className="text-emerald-200 text-sm">
            Questions? Write to us at{' '}
            <a href="mailto:info@medwriteindia.com" className="text-white font-medium hover:text-emerald-200 transition-colors">
              info@medwriteindia.com
            </a>
          </span>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-emerald-800 pt-6">
          <p className="text-emerald-400 text-xs leading-relaxed mb-3">
            <strong className="text-emerald-300">Disclaimer:</strong> MedWrite India Academy is an independent educational platform. It is not affiliated with AMWA, EMWA, CITI Program, or any other professional association. All content is original and for general educational and career guidance purposes only. It does not replace formal medical, regulatory, legal, or institutional training or certification.
          </p>
          <p className="text-emerald-500 text-xs">
            © {new Date().getFullYear()} MedWrite India Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
