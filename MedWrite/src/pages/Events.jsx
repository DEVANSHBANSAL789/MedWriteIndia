import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, Mail, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

const upcomingEvents = [
  {
    id: 1,
    title: 'Introduction to Medical Writing as a Career',
    date: 'Coming Soon',
    time: 'TBA',
    format: 'Online',
    price: 'Free',
    speaker: 'MedWrite Faculty',
    desc: 'Who is a medical writer? What do they write? How do you get started? An open session for students and early-career professionals.',
    category: 'Career',
  },
  {
    id: 2,
    title: 'How to Build Your Medical Writing Portfolio',
    date: 'Coming Soon',
    time: 'TBA',
    format: 'Online',
    price: 'Free',
    speaker: 'MedWrite Faculty',
    desc: 'Practical session on creating writing samples, organizing your portfolio, and presenting your work to potential clients or employers.',
    category: 'Skills',
  },
  {
    id: 3,
    title: 'Basics of Clinical Research Documentation',
    date: 'Coming Soon',
    time: 'TBA',
    format: 'Online',
    price: 'Free',
    speaker: 'MedWrite Faculty',
    desc: 'Understanding the types of documents produced during clinical trials, with an introduction to good documentation practices.',
    category: 'Clinical Research',
  },
  {
    id: 4,
    title: 'Writing Patient Education Content',
    date: 'Coming Soon',
    time: 'TBA',
    format: 'Online',
    price: 'Free',
    speaker: 'MedWrite Faculty',
    desc: 'How to write health information that patients can understand and use. Principles of plain language and health literacy in practice.',
    category: 'Patient Writing',
  },
  {
    id: 5,
    title: 'Ethics in Scientific Communication',
    date: 'Coming Soon',
    time: 'TBA',
    format: 'Online',
    price: 'Free',
    speaker: 'MedWrite Faculty',
    desc: 'Research integrity, plagiarism, conflict of interest, and patient privacy — a practical ethics session for medical writers.',
    category: 'Ethics',
  },
];

const speakers = [
  { initials: 'TBA', name: 'Speaker Announcements', org: 'Coming Soon', area: 'Medical Writing, Clinical Research, and Freelancing' },
  { initials: 'TBA', name: 'Industry Professionals', org: 'Pharmaceutical & CRO Sector', area: 'Regulatory Writing, Publication Writing' },
  { initials: 'TBA', name: 'Academic Experts', org: 'Research Institutions', area: 'Scientific Manuscript Writing, Research Ethics' },
];

const categoryColors = {
  Career: 'bg-blue-50 text-blue-700 border-blue-200',
  Skills: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Clinical Research': 'bg-purple-50 text-purple-700 border-purple-200',
  'Patient Writing': 'bg-rose-50 text-rose-700 border-rose-200',
  Ethics: 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function Events() {
  const [topicName, setTopicName] = useState('');
  const [topicText, setTopicText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setTopicName('');
    setTopicText('');
  };

  return (
    <main>
      <PageHero
        title="Events & Webinars"
        subtitle="Free and accessible learning sessions for the medical writing community"
        breadcrumb={[{ label: 'Events & Webinars' }]}
        bgImage="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=90&auto=format&fit=crop"
      />

      {/* Upcoming Events */}
      <section className="section-padding bg-white" id="upcoming">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Upcoming Events & Webinars</h2>
            <p className="section-subtext mx-auto">Our upcoming programme of free live sessions for the medical writing community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                <div className="h-1 bg-emerald-800" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="badge-emerald">Upcoming</span>
                    <span className={`badge border text-xs ${categoryColors[event.category]}`}>{event.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 leading-snug">{event.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{event.desc}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{event.format} · {event.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Users className="w-3.5 h-3.5" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>
                  <button
                    disabled
                    className="w-full py-2.5 bg-gray-100 text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                  >
                    Registration Opens Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sessions */}
      <section className="section-padding bg-emerald-50" id="past">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="section-heading">Past Sessions</h2>
            <p className="section-subtext mx-auto">Recorded sessions will be available here after our first events take place</p>
          </div>
          <div className="max-w-2xl mx-auto border-2 border-dashed border-emerald-200 rounded-2xl p-12 text-center bg-white">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Coming Soon</h3>
            <p className="text-gray-500 text-sm">
              Recorded sessions from our webinars and workshops will be published here. Join our network to be notified when recordings are available.
            </p>
            <button onClick={() => alert('Join our network to receive event recording notifications.')} className="mt-6 btn-primary">
              Get Notified
            </button>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section-padding bg-white" id="speakers">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Speakers</h2>
            <p className="section-subtext mx-auto">Speaker announcements will be made as our event programme develops</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((speaker, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {speaker.initials}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{speaker.name}</h3>
                <p className="text-sm text-emerald-700 mb-2">{speaker.org}</p>
                <p className="text-xs text-gray-400">{speaker.area}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">Are you a medical writing professional interested in speaking at one of our events?</p>
            <a href="mailto:info@medwriteindia.com?subject=Speaker Interest" className="inline-flex items-center gap-2 mt-3 text-emerald-700 font-medium hover:text-emerald-900 transition-colors">
              <Mail className="w-4 h-4" /> Contact us about speaking →
            </a>
          </div>
        </div>
      </section>

      {/* Suggest a Topic */}
      <section className="section-padding bg-emerald-50" id="suggest">
        <div className="container-max max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Suggest a Webinar Topic</h2>
            <p className="section-subtext mx-auto">Help us build a learning programme that serves your needs</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your topic suggestion has been received. We will consider it for our upcoming programme.</p>
              </div>
            ) : (
              <form onSubmit={handleTopicSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Webinar Topic Suggestion</label>
                  <textarea
                    required
                    rows={4}
                    value={topicText}
                    onChange={(e) => setTopicText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-800 resize-none"
                    placeholder="Describe the topic you would like us to cover — e.g., 'How to write a clinical study report', 'Freelance contracts explained', 'Regulatory writing for beginners'"
                  />
                </div>
                <button type="submit" className="w-full btn-primary justify-center py-3.5">
                  <Send className="w-4 h-4" />
                  Submit Suggestion
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 text-white py-16" id="calendar">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on Upcoming Events</h2>
          <p className="text-emerald-100 mb-8">Join the MedWrite India Professional Network to receive event announcements, registration details, and exclusive early access.</p>
          <Link to="/network#join" className="btn-white">
            Join the Network
          </Link>
        </div>
      </section>
    </main>
  );
}
