import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import contactHero from '../assets/contact-hero-v3.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — questions, suggestions, or partnership enquiries"
        breadcrumb={[{ label: 'Contact' }]}
        bgImage={contactHero}
        imagePosition="object-[center_45%]"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Message Received!</h3>
                  <p className="text-emerald-700 text-sm">Thank you for reaching out. We will respond to your message within 2–3 business days.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-emerald-700 font-medium hover:text-emerald-900 transition-colors text-sm">
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
                    >
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Course Information</option>
                      <option>Membership / Network</option>
                      <option>Freelance Centre</option>
                      <option>Events & Webinars</option>
                      <option>Partnership / Collaboration</option>
                      <option>Corporate Membership</option>
                      <option>Speaker Interest</option>
                      <option>Content Contribution</option>
                      <option>Technical Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary py-3.5 justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</div>
                      <a href="mailto:info@medwriteindia.com" className="text-emerald-800 font-medium hover:text-emerald-600 transition-colors">
                        info@medwriteindia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Based In</div>
                      <div className="text-gray-700 font-medium">India — serving learners nationwide</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Response Time</div>
                      <div className="text-gray-700 font-medium">2–3 business days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-gray-800 mb-4">Useful Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Join the Professional Network', href: '/network#join' },
                    { label: 'Suggest a Webinar Topic', href: '/events#suggest' },
                    { label: 'Express Interest in Mentoring', href: '/network#mentorship' },
                    { label: 'Corporate Membership Enquiry', href: '/network#categories' },
                    { label: 'Explore Courses', href: '/courses' },
                  ].map((link) => (
                    <a key={link.label} href={link.href} className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg transition-colors group">
                      <span className="text-sm text-gray-600 group-hover:text-emerald-800 transition-colors">{link.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="notice-box" id="privacy">
                <h3 className="font-bold text-emerald-800 mb-2 text-sm">Privacy & Data Notice</h3>
                <p className="text-emerald-700 text-xs leading-relaxed">
                  Information submitted through this form is used only to respond to your enquiry. We do not share your personal information with third parties. For our full privacy and terms of use, contact us at info@medwriteindia.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location visual */}
      <section className="bg-emerald-800 py-16">
        <div className="container-max text-center">
          <p className="text-emerald-300 text-sm uppercase tracking-widest mb-4">Serving Medical Writers Across India</p>
          <div className="flex flex-wrap justify-center gap-6 text-white font-medium">
            {['Mumbai', 'Hyderabad', 'Bengaluru', 'Pune', 'Chennai', 'Delhi', 'Ahmedabad', 'Kolkata', 'Chandigarh'].map((city) => (
              <div key={city} className="flex items-center gap-1.5 text-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
