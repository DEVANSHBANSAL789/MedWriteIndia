import React, { useEffect } from 'react';
import { 
  BookOpen, Video, Briefcase, Globe, Users, ShieldCheck, 
  GraduationCap, Stethoscope, Laptop, Building2,
  HeartHandshake, Megaphone, CheckCircle, Star,
  MapPin, User, Mail, ChevronRight,
  Sparkles, Medal, MessageCircle, Bell, UserCheck, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import PageHero from '../components/PageHero';
import membershipHero from '../assets/membership-hero.png';

export default function Membership() {
  useEffect(() => {
    document.title = "Membership | MedWrite India Academy";
  }, []);

  const handleStaticClick = (e) => {
    e.preventDefault();
    alert('Membership registration will open soon.');
  };

  const benefits = [
    { id: 'benefit-learning', title: "Learning Resources", description: "Access beginner-friendly guides, templates, checklists, and structured learning pathways.", icon: <BookOpen className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=90&auto=format&fit=crop" },
    { id: 'benefit-webinar', title: "Webinar & Event Updates", description: "Receive updates about upcoming webinars, workshops, video sessions, and career-focused events.", icon: <Video className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=90&auto=format&fit=crop" },
    { id: 'benefit-career', title: "Career Support", description: "Explore career roadmaps, resume guidance, portfolio tips, interview preparation, and job-role awareness.", icon: <Briefcase className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=90&auto=format&fit=crop" },
    { id: 'benefit-freelance', title: "Freelance Visibility", description: "Freelance members can create a profile for future listing in the freelance medical writer directory, after permission.", icon: <Globe className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=90&auto=format&fit=crop" },
    { id: 'benefit-networking', title: "Professional Networking", description: "Connect with learners, medical writers, editors, researchers, and healthcare communication professionals.", icon: <Users className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=90&auto=format&fit=crop" },
    { id: 'benefit-ethics', title: "Ethics & Quality Guidance", description: "Access resources on responsible writing, research integrity, patient privacy, plagiarism prevention, and communication ethics.", icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=90&auto=format&fit=crop" },
  ];

  const categories = [
    { id: 'cat-student', title: "Student Member", icon: <GraduationCap className="w-8 h-8 text-emerald-700" />, description: "For pharmacy, life sciences, medicine, dentistry, nursing, biotechnology, and healthcare students who want to explore medical writing.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=90&auto=format&fit=crop" },
    { id: 'cat-professional', title: "Professional Member", icon: <Stethoscope className="w-8 h-8 text-emerald-700" />, description: "For medical writers, editors, doctors, researchers, pharma professionals, clinical research professionals, and healthcare communicators.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90&auto=format&fit=crop" },
    { id: 'cat-freelance', title: "Freelance Member", icon: <Laptop className="w-8 h-8 text-emerald-700" />, description: "For independent medical writers, editors, publication writers, regulatory writers, patient education writers, and healthcare content specialists.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=90&auto=format&fit=crop" },
    { id: 'cat-corporate', title: "Corporate Member", icon: <Building2 className="w-8 h-8 text-emerald-700" />, description: "For pharma companies, CROs, hospitals, medical communication agencies, health-tech companies, academic groups, and training organizations.", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=90&auto=format&fit=crop" },
  ];

  const communityFeatures = [
    { id: 'comm-discussion', title: "Discussion Groups", icon: <MessageCircle className="w-6 h-6 text-emerald-700" />, desc: "Join focused groups for clinical research, regulatory writing, publication writing, and patient education content.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&auto=format&fit=crop" },
    { id: 'comm-events', title: "Events & Webinars", icon: <Bell className="w-6 h-6 text-emerald-700" />, desc: "Get early access to community events, expert-led webinars, and skills workshops.", image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=90&auto=format&fit=crop" },
    { id: 'comm-mentorship', title: "Mentorship Circles", icon: <UserCheck className="w-6 h-6 text-emerald-700" />, desc: "Be part of peer-to-peer mentorship circles connecting beginners with experienced professionals.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=90&auto=format&fit=crop" },
    { id: 'comm-updates', title: "Member Updates", icon: <Bell className="w-6 h-6 text-emerald-700" />, desc: "Stay informed with curated industry news, community announcements, and new learning resource releases.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=90&auto=format&fit=crop" },
  ];

  const volunteerRoles = [
    { title: "Mentor Future Writers", icon: <User className="w-5 h-5" /> },
    { title: "Speak at Webinars", icon: <Megaphone className="w-5 h-5" /> },
    { title: "Review Learning Resources", icon: <CheckCircle className="w-5 h-5" /> },
    { title: "Support Student Members", icon: <HeartHandshake className="w-5 h-5" /> },
    { title: "Help Build Community", icon: <Users className="w-5 h-5" /> },
  ];

  const awards = [
    { id: 'award-recognition', title: "Future Recognition Programme", desc: "A planned programme to formally recognize outstanding contributions." },
    { id: 'award-contributor', title: "Contributor Spotlight", desc: "Recognizing outstanding content contributions." },
    { id: 'award-volunteer', title: "Volunteer Appreciation", desc: "For those who dedicate time to community growth." },
    { id: 'award-community', title: "Community Builder Recognition", desc: "For professionals fostering connections." },
  ];

  const faqItems = [
    { question: "Who can become a member?", answer: "Membership is open to anyone interested in medical writing and healthcare communication, including students, active professionals, freelancers, and organizations. This is an independent platform." },
    { question: "Is membership open for students?", answer: "Yes, we have a dedicated Student Member category tailored specifically for those in pharmacy, life sciences, and medical fields who are exploring this career path." },
    { question: "Can freelance medical writers join?", answer: "Absolutely. Freelance members will have the opportunity to showcase their expertise and create a profile for future listing in our directory." },
    { question: "Will my profile be shown publicly?", answer: "Public profiles are shown only with your explicit permission. You will have full control over what is displayed in the member directory." },
    { question: "Can I add my LinkedIn profile?", answer: "Yes, when creating your profile, you will have the option to link your LinkedIn account to help build your professional network." },
    { question: "Is this affiliated with AMWA or EMWA?", answer: "No. This site is not affiliated with AMWA or EMWA. MedWrite India Academy is an independent platform focused on the Indian medical writing community." },
    { question: "Will I receive a certificate?", answer: "No formal accreditation or certification is claimed. We provide educational resources and community networking support." },
    { question: "Is login active right now?", answer: "Currently, the static site login is only a UI preview. Real authentication will be added when the backend is connected." },
    { question: "Can companies join as corporate members?", answer: "Yes, we welcome pharma companies, CROs, and agencies to join as Corporate Members to support the community and discover talent." },
    { question: "How do I become a founding member?", answer: "We are currently building our community. Early members who join when registration opens will be recognized as founding members of MedWrite India Academy." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero */}
      <PageHero
        title="Membership"
        subtitle="Join a growing India-focused community for medical writing, clinical research communication, ethical healthcare content, and professional development."
        bgImage={membershipHero}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <button onClick={handleStaticClick} className="bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg flex items-center justify-center gap-2">
            Join Now <ChevronRight className="w-5 h-5" />
          </button>
          <a href="#benefits" className="border border-emerald-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700/50 transition-colors flex items-center justify-center">
            Explore Benefits
          </a>
        </div>
      </PageHero>

      {/* Why Membership Matters */}
      <section className="py-20 bg-white border-b border-gray-100" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Why Join</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Why Membership Matters</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Membership gives learners and professionals a structured way to grow, connect, and build visibility in the medical writing field.</p>
              <p className="text-gray-600 leading-relaxed">MedWrite India Academy is designed for students, writers, researchers, healthcare professionals, and organizations who want access to learning support, professional resources, community opportunities, and career guidance.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop" alt="Professional medical writing community" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-24 bg-gray-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Membership Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the resources and opportunities available to our community members.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} id={benefit.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group scroll-mt-24">
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent z-10 group-hover:opacity-0 transition-opacity" />
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-100">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Categories */}
      <section className="py-24 bg-white" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Who Can Join</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Member Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find the membership tier that best fits your current career stage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="flex flex-col sm:flex-row bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all duration-300 group scroll-mt-24">
                <div className="sm:w-2/5 h-52 sm:h-auto overflow-hidden relative">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50/30 sm:to-gray-50/10" />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-100">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Member */}
      <section className="py-16 bg-gray-50" id="founding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-14 border border-emerald-200 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80')" }} />
            <Sparkles className="absolute top-6 right-6 w-24 h-24 text-emerald-200" />
            <Sparkles className="absolute bottom-6 left-6 w-16 h-16 text-emerald-200" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" /> Early Access Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Become a Founding Member</h2>
              <p className="text-emerald-800 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                We are currently building our membership community. Early members will be recognized as founding members of MedWrite India Academy's professional network. Member profiles will be published only after receiving clear permission from each member.
              </p>
              <button onClick={handleStaticClick} className="inline-flex items-center gap-2 bg-emerald-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-sm">
                Become a Founding Member <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="py-24 bg-white" id="directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Find Professionals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Member Directory</h2>
            <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-50 px-6 py-3 rounded-xl border border-gray-100 text-sm">
              <Lock className="w-4 h-4 text-emerald-600" />
              Member listings will appear here once members join and give permission for public listing.
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr. [Name Placeholder]", role: "Medical Writer — Regulatory & Clinical", location: "Mumbai, Maharashtra", expertise: "CTD Writing, Clinical Study Reports", experience: "5+ Years", services: "Regulatory Submissions, Protocol Writing" },
              { name: "[Name Placeholder]", role: "Scientific Publication Writer", location: "Hyderabad, Telangana", expertise: "Manuscript Writing, Peer-Review Publications", experience: "3+ Years", services: "Journal Articles, Literature Reviews" },
              { name: "[Name Placeholder]", role: "Freelance Healthcare Content Writer", location: "Pune, Maharashtra", expertise: "Patient Education, Health Communication", experience: "2+ Years", services: "Patient Leaflets, Health Blog Content" },
            ].map((profile, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-t-2xl" />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-50 text-orange-700 text-[9px] font-bold px-2 py-1 rounded-full border border-orange-200 uppercase tracking-wider">Sample Only</span>
                </div>
                <div className="flex items-start gap-4 mb-5 mt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{profile.name}</h4>
                    <p className="text-emerald-700 font-medium text-sm">{profile.role}</p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                      <MapPin className="w-3 h-3" /> {profile.location}
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-5 bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-xs text-gray-500 font-semibold uppercase shrink-0">Expertise</p>
                    <p className="text-xs text-gray-700 text-right">{profile.expertise}</p>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-xs text-gray-500 font-semibold uppercase shrink-0">Experience</p>
                    <p className="text-xs text-gray-700 text-right">{profile.experience}</p>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-xs text-gray-500 font-semibold uppercase shrink-0">Services</p>
                    <p className="text-xs text-gray-700 text-right">{profile.services}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleStaticClick} className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors border border-blue-100">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    Connect
                  </button>
                  <button onClick={handleStaticClick} className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-2.5 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-colors border border-emerald-100">
                    <Mail className="w-4 h-4" /> Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Access */}
      <section className="py-24 bg-gray-50" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Connect & Grow</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Community Access</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Access a structured community built around meaningful discussions, professional growth, and peer support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityFeatures.map((feature) => (
              <div key={feature.id} id={feature.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group scroll-mt-24">
                <div className="h-40 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-3 border border-emerald-100">{feature.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Mentorship */}
      <section className="py-24 bg-white" id="volunteer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Give Back</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Volunteer & Mentorship</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">As the community grows, members may contribute as mentors, webinar speakers, resource reviewers, community volunteers, or student guides.</p>
              <p className="text-sm text-emerald-700 font-medium bg-emerald-50 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-100">
                <Star className="w-4 h-4" /> Opportunities represent future community initiatives.
              </p>
            </div>
            <div className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 overflow-hidden rounded-2xl shadow-md mb-2">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90&auto=format&fit=crop" alt="Volunteer and mentorship" className="w-full h-48 object-cover" />
              </div>
              {volunteerRoles.map((role, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:border-emerald-200 transition-colors">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700 flex-shrink-0">{role.icon}</div>
                  <span className="font-semibold text-gray-800 text-sm">{role.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-24 bg-gray-50" id="awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Recognition & Awards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">A future-facing recognition programme to celebrate those who contribute to medical writing and healthcare communication in India.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div key={award.id} id={award.id} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm relative mt-4 hover:shadow-md hover:border-emerald-200 transition-all duration-300 scroll-mt-24">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider flex items-center gap-1 shadow-sm whitespace-nowrap">
                    <Star className="w-3 h-3" /> Coming Soon
                  </div>
                </div>
                <Medal className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership FAQs */}
      <section className="py-24 bg-white" id="faqs">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-semibold text-sm uppercase tracking-widest">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Membership FAQs</h2>
            <p className="text-gray-600">Clear answers about joining MedWrite India Academy.</p>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* My Account Preview */}
      <section className="py-16 bg-gray-50" id="account">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-emerald-800 px-8 py-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-700 rounded-full flex items-center justify-center border-2 border-emerald-500">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">My Account</h3>
                <p className="text-emerald-300 text-sm">Member dashboard — coming soon</p>
              </div>
              <div className="ml-auto">
                <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">UI Preview Only</span>
              </div>
            </div>
            <div className="p-8 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Profile", icon: <User className="w-5 h-5" />, desc: "View & edit your member profile" },
                { label: "Resources", icon: <BookOpen className="w-5 h-5" />, desc: "Access your saved resources" },
                { label: "Community", icon: <Users className="w-5 h-5" />, desc: "View your network connections" },
              ].map((item, i) => (
                <button key={i} onClick={handleStaticClick} className="text-left p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50 transition-colors group">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-700 mb-3 group-hover:bg-emerald-200 transition-colors">{item.icon}</div>
                  <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </button>
              ))}
            </div>
            <div className="px-8 pb-8">
              <button onClick={handleStaticClick} className="w-full py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Login to Member Area — Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-800 text-white py-24" id="join">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become Part of India's Growing Medical Writing Community</h2>
          <p className="text-emerald-100 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">Join as a student, professional, freelancer, or organization and grow with a focused healthcare communication network.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleStaticClick} className="w-full sm:w-auto bg-white text-emerald-800 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm flex items-center justify-center gap-2">
              Join Now <ChevronRight className="w-5 h-5" />
            </button>
            <a href="#benefits" className="w-full sm:w-auto bg-transparent text-white border border-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center">
              Explore Member Benefits
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
