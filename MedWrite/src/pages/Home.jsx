import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin, Calendar, User } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CourseCard from '../components/CourseCard';
import Accordion from '../components/Accordion';
import VideoSection from '../components/VideoSection';
import { courses, faqItems, pathways, membershipTiers, sampleProfiles } from '../data/content';

// ── Learning Areas ──────────────────────────────────────────
const learningAreas = [
  { icon: '📝', title: 'Medical Writing', desc: 'Foundation skills for healthcare documentation', href: '/courses' },
  { icon: '🔬', title: 'Clinical Research Writing', desc: 'Trial documents, summaries, and research communication', href: '/courses' },
  { icon: '📖', title: 'Publication Writing', desc: 'Manuscripts, case reports, and journal-ready content', href: '/courses' },
  { icon: '📋', title: 'Regulatory Writing Basics', desc: 'Submission documents and quality-focused writing', href: '/courses' },
  { icon: '🤝', title: 'Patient Education Writing', desc: 'Simple, clear content for patients and caregivers', href: '/courses' },
  { icon: '💼', title: 'Freelance Medical Writing', desc: 'Build your independent writing career', href: '/freelance' },
  { icon: '✏️', title: 'Medical Editing', desc: 'Quality review, grammar, and style consistency', href: '/courses' },
  { icon: '⚖️', title: 'Research Ethics', desc: 'Integrity, privacy, and responsible communication', href: '/ethics' },
];

// ── Who Can Join ────────────────────────────────────────────
const audiences = [
  { icon: '🎓', title: 'Pharmacy Students', desc: 'Build a career pathway beyond dispensing and retail' },
  { icon: '🧪', title: 'Life Science Graduates', desc: 'BSc/MSc Biology, Biochemistry, Biotechnology' },
  { icon: '🏥', title: 'Medical Students & Interns', desc: 'Develop communication skills alongside clinical training' },
  { icon: '👨‍⚕️', title: 'Doctors & Dentists', desc: 'Explore new career paths in healthcare communication' },
  { icon: '🩺', title: 'Nurses & Allied Health Professionals', desc: 'Transition skills to healthcare content and education' },
  { icon: '📊', title: 'Clinical Research Professionals', desc: 'CRA, CRC, Data Managers, and study coordinators' },
  { icon: '💊', title: 'Pharma & CRO Employees', desc: 'Enhance writing skills within your current role' },
  { icon: '📰', title: 'Science Journalists & Content Writers', desc: 'Specialise in healthcare and life sciences content' },
  { icon: '✍️', title: 'Medical Editors & Proofreaders', desc: 'Formalise your skills with structured learning' },
  { icon: '🖥️', title: 'Freelance Content Writers', desc: 'Transition from general to healthcare content writing' },
  { icon: '🌐', title: 'Healthcare Communication Professionals', desc: 'Advance your expertise in medical communication' },
];

// ── Ethics Cards ─────────────────────────────────────────────
const ethicsTopics = [
  { icon: '🔍', title: 'Research Integrity', desc: 'Honest reporting of research findings' },
  { icon: '🔒', title: 'Patient Privacy', desc: 'Protecting identities in case studies and reports' },
  { icon: '📚', title: 'Plagiarism Prevention', desc: 'Original writing and proper referencing' },
  { icon: '⚖️', title: 'Conflict of Interest', desc: 'Transparent disclosure in healthcare content' },
];

// ── Testimonials ─────────────────────────────────────────────
const testimonials = [
  { initials: 'PS', name: 'Priya S.', role: 'Pharmacy Graduate, Mumbai', quote: 'MedWrite India Academy has given me a clear roadmap into medical writing. As a pharmacy student, I never knew this career existed until I found this platform. The structured learning approach is exactly what I needed.' },
  { initials: 'RM', name: 'Rahul M.', role: 'Clinical Research Associate, Hyderabad', quote: 'The clinical research documentation module helped me understand the writing side of trials that I was always involved in but never documented formally. Highly practical content.' },
  { initials: 'AK', name: 'Anita K.', role: 'Freelance Medical Writer, Bengaluru', quote: 'The Freelance Centre resources are incredibly useful. Clear, honest guidance on building a portfolio and working with clients — something I wish I had when I started out.' },
];

// ── Events ───────────────────────────────────────────────────
const upcomingEvents = [
  { title: 'Introduction to Medical Writing Careers', date: 'Coming Soon', format: 'Online · Free', speaker: 'MedWrite Faculty', desc: 'An open session for students and early-career professionals exploring medical writing.' },
  { title: 'How to Build a Medical Writing Portfolio', date: 'Coming Soon', format: 'Online · Free', speaker: 'MedWrite Faculty', desc: 'Practical session on creating writing samples and presenting your work professionally.' },
  { title: 'Ethics in Healthcare Communication', date: 'Coming Soon', format: 'Online · Free', speaker: 'MedWrite Faculty', desc: 'Understanding accuracy, transparency, and patient safety in medical writing.' },
];

// ── Filter Tabs ───────────────────────────────────────────────
const courseFilters = ['All', 'Beginner', 'Intermediate', 'Freelance', 'Ethics'];

export default function Home() {
  const [courseFilter, setCourseFilter] = useState('All');

  const filteredCourses = courses.filter((c) =>
    courseFilter === 'All' ? true : c.category.includes(courseFilter)
  ).slice(0, 6);

  return (
    <main>
      {/* 1.1 Hero */}
      <HeroSlider />

      {/* 1.2 Learning Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Learning Areas</h2>
            <p className="section-subtext mx-auto">Explore the core specializations available on MedWrite India Academy</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {learningAreas.map((area) => (
              <Link
                key={area.title}
                to={area.href}
                className="group flex flex-col items-center text-center p-6 bg-white border border-emerald-100 hover:border-emerald-400 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-colors">
                  {area.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1.5 group-hover:text-emerald-800 transition-colors">{area.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{area.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1.3 What is Medical Writing */}
      <section className="section-padding bg-emerald-50" id="what-is">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">About Medical Writing</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">What is Medical Writing?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>Medical writing is the process of creating clear, accurate, and well-structured content about medicine, healthcare, research, and science. It bridges the gap between complex scientific findings and the people who need to understand them — whether they are regulators, doctors, researchers, or patients.</p>
                <p>Medical writers work across pharmaceutical companies, CROs, hospitals, research institutions, medical communication agencies, and as independent freelancers.</p>
                <p>In India, the demand for qualified medical writers is growing rapidly as the pharmaceutical, clinical research, and healthcare sectors expand.</p>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '💊', title: 'Growing Industry', desc: 'India is one of the world\'s top pharmaceutical markets' },
                  { icon: '📄', title: 'Diverse Document Types', desc: 'From clinical study reports to patient leaflets' },
                  { icon: '🌐', title: 'Global Opportunities', desc: 'Work with international pharma and CRO companies' },
                  { icon: '🎓', title: 'No Single Background Required', desc: 'Open to doctors, pharmacists, life science graduates, and writers' },
                ].map((stat) => (
                  <div key={stat.title} className="p-4 bg-white rounded-xl border border-emerald-100 shadow-sm">
                    <div className="text-xl mb-2">{stat.icon}</div>
                    <div className="text-sm font-bold text-gray-800 mb-1">{stat.title}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=90&auto=format&fit=crop"
                alt="Medical professional writing and research"
                className="w-full h-[480px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-emerald-800 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">India</div>
                <div className="text-xs text-emerald-200">3rd Largest Pharma Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.4 Who Can Join */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who Is This Platform For?</h2>
            <p className="section-subtext mx-auto">
              MedWrite India Academy is designed for anyone who wants to learn, grow, or build a career in medical writing and healthcare communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-colors">
                  {a.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-emerald-800 transition-colors">{a.title}</h3>
                  <p className="text-xs text-gray-500">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 Featured Courses */}
      <section className="section-padding bg-emerald-50" id="courses">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="section-heading">Featured Learning Modules</h2>
            <p className="section-subtext mx-auto">Start learning today with our structured courses for all levels</p>
          </div>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {courseFilters.map((f) => (
              <button
                key={f}
                onClick={() => setCourseFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${courseFilter === f ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-400 hover:text-emerald-800'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors text-base">
              View All 8 Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.6 Learning Pathways */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Structured Learning Pathways</h2>
            <p className="section-subtext mx-auto">Follow a guided journey from beginner to professional in your chosen medical writing specialization</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${pathway.color} p-6 text-white`}>
                  <div className="text-3xl mb-2">{pathway.icon}</div>
                  <h3 className="text-lg font-bold">{pathway.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {pathway.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                        {i < pathway.steps.length - 1 && (
                          <div className="hidden" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-emerald-700 font-medium">{pathway.outcome}</p>
                    </div>
                  </div>
                  <Link to="/pathways" className="mt-4 inline-flex items-center gap-1.5 text-sm text-emerald-700 font-medium hover:text-emerald-900 transition-colors">
                    View Full Pathway <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.7 Freelance Spotlight */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-4">Freelance Centre</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Build Your Independent Medical Writing Career</h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-8">
                The freelance medical writing market in India is expanding. Pharmaceutical companies, CROs, hospitals, and health communication agencies are increasingly looking for skilled independent writers. Learn how to position yourself, build a portfolio, set your rates, and find your first client.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📁', text: 'Build a professional writing portfolio from day one' },
                  { icon: '💬', text: 'Learn how to communicate with pharma and research clients' },
                  { icon: '💰', text: 'Understand project pricing and professional rates for India' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-emerald-100">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/freelance" className="btn-outline-white">
                Visit Freelance Centre
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=90&auto=format&fit=crop"
                alt="Freelance medical writer working on laptop"
                className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white text-emerald-800 p-4 rounded-xl shadow-lg">
                <div className="text-lg font-bold">📈 Growing</div>
                <div className="text-xs text-gray-500">Freelance demand in India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.8 Ethics Spotlight */}
      <section className="section-padding bg-emerald-50" id="ethics-intro">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Ethics Matters in Medical Writing</h2>
            <p className="section-subtext mx-auto">Accuracy, transparency, and patient safety are at the heart of every well-written medical document</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {ethicsTopics.map((topic) => (
              <div key={topic.title} className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{topic.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-800 transition-colors">{topic.title}</h3>
                <p className="text-sm text-gray-500">{topic.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/ethics" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors">
              Explore Ethics Learning <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.9 Professional Network */}
      <section className="section-padding bg-white" id="network">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Join the MedWrite India Professional Network</h2>
            <p className="section-subtext mx-auto">Our network brings together learners, professionals, freelancers, and organizations interested in medical writing and clinical research communication across India.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {membershipTiers.map((tier) => (
              <div key={tier.title} className={`rounded-xl border ${tier.featured ? 'border-emerald-400 bg-emerald-50 shadow-lg' : 'border-gray-100 bg-white shadow-sm'} p-6 hover:shadow-md transition-all duration-300`}>
                {tier.featured && <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">Most Popular</div>}
                <div className="text-3xl mb-3">{tier.icon}</div>
                <h3 className="font-bold text-gray-800 mb-3">{tier.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{tier.who}</p>
                <button
                  onClick={() => alert('Membership registration is opening soon. Thank you for your interest in joining MedWrite India Academy Professional Network!')}
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${tier.featured ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'border border-emerald-800 text-emerald-800 hover:bg-emerald-50'}`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          {/* Notice */}
          <div className="notice-box flex items-start gap-4 max-w-3xl mx-auto">
            <span className="text-xl flex-shrink-0">📌</span>
            <p className="text-emerald-800 text-sm leading-relaxed">
              We are building our network. Member profiles will be published here once members register and provide their consent. Be among the first to create your professional presence.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link to="/network#join" className="btn-primary">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* 1.10 Upcoming Webinars */}
      <section className="section-padding bg-emerald-50" id="events">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Upcoming Free Webinars & Workshops</h2>
            <p className="section-subtext mx-auto">Join live sessions on medical writing, clinical research, freelancing, and career development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div className="h-1 bg-emerald-800" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="badge-emerald">Upcoming</span>
                    <span className="text-xs text-gray-400">{event.format}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 leading-snug">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-1">{event.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-5">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                    <span className="mx-1">·</span>
                    <User className="w-3.5 h-3.5" />
                    {event.speaker}
                  </div>
                  <button
                    className="w-full py-2.5 text-sm font-medium bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Registration Opens Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events" className="inline-flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-600 transition-colors">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.11 Video Learning */}
      <VideoSection />

      {/* 1.12 Testimonials */}
      <section className="section-padding bg-emerald-800" id="voices">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Voices From the Community</h2>
            <div className="max-w-2xl mx-auto bg-emerald-900/50 border border-emerald-700 rounded-xl p-4">
              <p className="text-emerald-200 text-sm italic">
                We are a new platform. As our community grows, we will feature real voices from our learners and members with their permission. The profiles below are illustrative examples of the type of community we are building.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t) => (
              <div key={t.name} className="relative bg-white/10 backdrop-blur-sm border border-emerald-700 rounded-xl p-6">
                <div className="text-emerald-400 text-5xl font-serif leading-none mb-4">"</div>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-emerald-300 text-xs">{t.role}</div>
                  </div>
                  <span className="ml-auto badge-gray text-xs">Sample Profile</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.13 FAQ */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subtext mx-auto">Everything you need to know about MedWrite India Academy</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* 1.14 Final CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Ready to Start Your Medical Writing Journey?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Join our growing community of learners and healthcare communication professionals across India
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/courses" className="btn-white text-base px-8 py-4">
              Explore Courses
            </Link>
            <Link to="/network" className="btn-outline-white text-base px-8 py-4">
              Join the Network
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
