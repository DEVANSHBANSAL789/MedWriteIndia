import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, PenLine } from 'lucide-react';

const navItems = [
  {
    label: 'Membership',
    href: '/membership',
    dropdown: [
      { label: 'Membership Overview', href: '/membership' },
      { label: 'Join & Renew', href: '/membership#join' },
      { 
        label: 'Membership Benefits', 
        href: '/membership#benefits',
        subItems: [
          { label: 'Learning Resources', href: '/membership#benefit-learning' },
          { label: 'Webinar Access', href: '/membership#benefit-webinar' },
          { label: 'Career Support', href: '/membership#benefit-career' },
          { label: 'Freelance Visibility', href: '/membership#benefit-freelance' },
          { label: 'Community Networking', href: '/membership#benefit-networking' },
          { label: 'Resource Library', href: '/membership#benefit-ethics' },
        ]
      },
      { 
        label: 'Member Categories', 
        href: '/membership#categories',
        subItems: [
          { label: 'Student Member', href: '/membership#cat-student' },
          { label: 'Professional Member', href: '/membership#cat-professional' },
          { label: 'Freelance Member', href: '/membership#cat-freelance' },
          { label: 'Corporate Member', href: '/membership#cat-corporate' },
        ]
      },
      { label: 'Founding Members', href: '/membership#founding' },
      { label: 'Member Directory', href: '/membership#directory' },
      { 
        label: 'Community Access', 
        href: '/membership#community',
        subItems: [
          { label: 'Discussion Groups', href: '/membership#comm-discussion' },
          { label: 'Events & Webinars', href: '/membership#comm-events' },
          { label: 'Mentorship Circles', href: '/membership#comm-mentorship' },
          { label: 'Member Updates', href: '/membership#comm-updates' },
        ]
      },
      { label: 'Volunteer & Mentorship', href: '/membership#volunteer' },
      { 
        label: 'Recognition & Awards', 
        href: '/membership#awards',
        subItems: [
          { label: 'Future Recognition Programme', href: '/membership#award-recognition' },
          { label: 'Contributor Spotlight', href: '/membership#award-contributor' },
          { label: 'Volunteer Appreciation', href: '/membership#award-volunteer' },
        ]
      },
      { label: 'Membership FAQs', href: '/membership#faqs' },
      { label: 'My Account', href: '/membership#account' },
    ]
  },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Our Mission & Vision', href: '/about#mission' },
      { label: 'Why Medical Writing?', href: '/about#why' },
      { label: 'Who Is This For?', href: '/about#for' },
      { label: 'India & Medical Writing', href: '/about#india' },
      { label: 'Advisory Philosophy', href: '/about#philosophy' },
      { label: 'Disclaimer', href: '/about#disclaimer' },
    ],
  },
  {
    label: 'Courses',
    href: '/courses',
    dropdown: [
      { label: 'Beginner', href: '/courses?filter=Beginner' },
      { label: 'Intermediate', href: '/courses?filter=Intermediate' },
      { label: 'Freelance', href: '/courses?filter=Freelance' },
      { label: 'Ethics', href: '/courses?filter=Ethics' },
      { label: 'Clinical Research', href: '/courses?filter=Clinical Research' },
      { label: 'Editing', href: '/courses?filter=Editing' },
      { label: '→ View All Courses', href: '/courses', cta: true },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Beginner Roadmap', href: '/resources#roadmap' },
      { label: 'Writing Guides', href: '/resources#guides' },
      { label: 'Downloadable Templates', href: '/resources#templates' },
      { label: 'Checklists', href: '/resources#checklists' },
      { label: 'Clinical Research Glossary', href: '/resources#glossary' },
      { label: 'Video Library', href: '/resources#videos' },
      { label: 'Recommended Reading', href: '/resources#reading' },
      { label: '→ View All Resources', href: '/resources', cta: true },
    ],
  },
  {
    label: 'Freelance Centre',
    href: '/freelance',
    dropdown: [
      { label: 'What is Freelance Medical Writing?', href: '/freelance#what' },
      { label: 'Building Your Portfolio', href: '/freelance#portfolio' },
      { label: 'Working With Clients', href: '/freelance#clients' },
      { label: 'Pricing Basics', href: '/freelance#pricing' },
      { label: 'Contracts & Confidentiality', href: '/freelance#contracts' },
      { label: 'Freelance Profile Checklist', href: '/freelance#checklist' },
      { label: 'Freelance Directory', href: '/freelance#directory' },
    ],
  },
  {
    label: 'Professional Network',
    href: '/network',
    dropdown: [
      { label: 'Why Join?', href: '/network#why' },
      { label: 'Member Categories', href: '/network#categories' },
      { label: 'Member Directory', href: '/network#directory' },
      { label: 'Mentorship', href: '/network#mentorship' },
      { label: 'Community Guidelines', href: '/network#guidelines' },
      { label: 'Become a Member', href: '/network#join' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    dropdown: [
      { label: 'Upcoming Webinars', href: '/events#upcoming' },
      { label: 'Workshop Calendar', href: '/events#calendar' },
      { label: 'Featured Speakers', href: '/events#speakers' },
      { label: 'Past Sessions', href: '/events#past' },
      { label: 'Suggest a Topic', href: '/events#suggest' },
    ],
  },
  {
    label: 'Career Centre',
    href: '/career',
    dropdown: [
      { label: 'Career Roadmap', href: '/career#roadmap' },
      { label: 'Job Roles in Medical Writing', href: '/career#roles' },
      { label: 'Resume & Portfolio Tips', href: '/career#resume' },
      { label: 'Interview Preparation', href: '/career#interview' },
      { label: 'Skill Assessment', href: '/career#skills' },
      { label: 'Find Opportunities', href: '/career#opportunities' },
    ],
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 100);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="w-full">
          {/* Top Header Row */}
          <div className="px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-gray-100">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-emerald-900/30 transition-all duration-300">
                  <PenLine className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-extrabold text-[1.1rem] tracking-tight leading-none">MedWrite<span className="text-emerald-700">India</span></span>
                  <span className="text-emerald-600 text-[10px] font-bold tracking-[0.2em] uppercase leading-tight mt-0.5">Academy</span>
                </div>
              </Link>

              {/* Right Buttons */}
              <div className="hidden xl:flex items-center gap-3">
                <button
                  onClick={() => alert('Login portal coming soon. Register your interest via the Join Now button.')}
                  className="px-4 py-2 text-sm font-medium text-emerald-800 border border-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Login
                </button>
                <Link
                  to="/network#join"
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  Join Now
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="xl:hidden p-2 text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Second Menu Row (Desktop Only) */}
          <div className="hidden xl:flex items-center h-14 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-40">
            <div className="flex items-center gap-1 w-full justify-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeDropdown === item.label || location.pathname === item.href ? 'text-emerald-800 bg-emerald-50' : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50'}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-emerald-200 py-2 z-50 animate-slide-down">
                      {item.dropdown.map((sub) => (
                        <div
                          key={sub.label}
                          className="relative"
                          onMouseEnter={() => sub.subItems && setActiveSubDropdown(sub.label)}
                          onMouseLeave={() => sub.subItems && setActiveSubDropdown(null)}
                        >
                          <Link
                            to={sub.href}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                              sub.cta ? 'text-emerald-700 font-semibold hover:bg-emerald-50' 
                              : activeSubDropdown === sub.label ? 'bg-emerald-50 text-emerald-800'
                              : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-800'
                            }`}
                          >
                            <span>{sub.label}</span>
                            <div className="flex items-center gap-1">
                              {sub.badge && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200 ml-2 flex-shrink-0">
                                  {sub.badge}
                                </span>
                              )}
                              {sub.subItems && (
                                <ChevronDown className={`w-3.5 h-3.5 -rotate-90 transition-colors ${activeSubDropdown === sub.label ? 'text-emerald-700' : 'text-gray-400'}`} />
                              )}
                            </div>
                          </Link>
                          {/* Second-level sub-menu */}
                          {sub.subItems && activeSubDropdown === sub.label && (
                            <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-xl border border-emerald-200 py-2 z-[60] animate-slide-down">
                              {/* Invisible bridge so mouse can travel to sub-menu */}
                              <div className="absolute top-0 -left-2 w-2 h-full" />
                              {sub.subItems.map(nested => (
                                <Link
                                  key={nested.label}
                                  to={nested.href}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors ml-1">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto animate-slide-down">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-medium rounded-lg hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 pl-4 border-l-2 border-emerald-400 space-y-1 mt-1 mb-2">
                      {item.dropdown.map((sub) => (
                        <div key={sub.label}>
                          {sub.subItems ? (
                            <button
                              onClick={() => setMobileSubExpanded(mobileSubExpanded === sub.label ? null : sub.label)}
                              className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors text-gray-600 hover:text-emerald-800 hover:bg-emerald-50"
                            >
                              {sub.label}
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubExpanded === sub.label ? 'rotate-180' : ''}`} />
                            </button>
                          ) : (
                            <Link
                              to={sub.href}
                              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${sub.cta ? 'text-emerald-700 font-semibold' : 'text-gray-600 hover:text-emerald-800 hover:bg-emerald-50'}`}
                            >
                              {sub.label}
                            </Link>
                          )}
                          {sub.subItems && mobileSubExpanded === sub.label && (
                            <div className="ml-3 pl-3 border-l-2 border-emerald-200 space-y-1 my-1">
                              {sub.subItems.map(nested => (
                                <Link
                                  key={nested.label}
                                  to={nested.href}
                                  className="block px-3 py-2 text-sm rounded-lg text-gray-500 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block px-4 py-3 text-gray-800 font-medium rounded-lg hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                Contact
              </Link>
              <div className="flex gap-3 pt-4 border-t border-gray-100 mt-4">
                <button
                  onClick={() => alert('Login portal coming soon.')}
                  className="flex-1 py-3 text-emerald-800 border border-emerald-800 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
                >
                  Login
                </button>
                <Link to="/network#join" className="flex-1 py-3 text-white bg-emerald-800 rounded-lg font-medium text-center hover:bg-emerald-900 transition-colors">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer */}
      <div className="h-16 lg:h-20 xl:h-[136px]" />
    </>
  );
}
