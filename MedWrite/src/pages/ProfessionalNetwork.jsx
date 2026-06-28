import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { membershipTiers, sampleProfiles } from '../data/content';

const benefits = [
  { icon: '🌟', title: 'Build professional visibility', desc: 'Create a presence in the medical writing community' },
  { icon: '🔗', title: 'Connect with professionals', desc: 'Meet other medical writing professionals across India' },
  { icon: '💼', title: 'Discover opportunities', desc: 'Find freelance and career opportunities' },
  { icon: '🎓', title: 'Access learning resources', desc: 'Webinars, events, and educational content' },
  { icon: '📣', title: 'Share your expertise', desc: 'Grow your profile and contribute to the community' },
  { icon: '🧭', title: 'Get career guidance', desc: 'Portfolio development and career direction support' },
];

const guidelines = [
  { title: 'Treat all members with professional respect', content: 'All interactions within the MedWrite India Professional Network should be professional, respectful, and constructive. Personal attacks, discriminatory language, or disrespectful behaviour of any kind are not acceptable.' },
  { title: 'Share knowledge generously and accurately', content: 'When sharing information, career advice, or resources, ensure what you share is accurate, up to date, and relevant. Misinformation in a healthcare communication community can have real consequences.' },
  { title: 'Do not spam or solicit members directly', content: 'Do not use the network to send unsolicited promotional messages, sales pitches, or job solicitations directly to members. Share relevant opportunities in appropriate community spaces only.' },
  { title: 'Disclose conflicts of interest when sharing information', content: 'If you are sharing information, tools, or recommendations that you have a financial or professional interest in, disclose this clearly to the community.' },
  { title: 'Protect patient privacy in all discussions', content: 'Never share patient-identifiable information, client-confidential data, or unpublished research details in community discussions. Patient privacy and data confidentiality are non-negotiable.' },
  { title: 'Follow ethical medical writing practices', content: 'All community contributions should reflect ethical medical writing principles — accurate attribution, transparent disclosure, evidence-based communication, and respect for intellectual property.' },
];

function SampleProfileCard({ profile }) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <span className="absolute top-4 right-4 text-xs bg-gray-100 text-gray-500 border border-gray-200 rounded-full px-2.5 py-0.5 font-medium">
        Sample Profile
      </span>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
          {profile.initials}
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{profile.name}</h3>
          <p className="text-sm text-emerald-700">{profile.role}</p>
          <p className="text-xs text-gray-400">{profile.location}</p>
        </div>
      </div>
      <div className="space-y-2 text-sm mb-4">
        <div className="text-gray-600"><span className="font-medium text-gray-700">Specialization:</span> {profile.specialization}</div>
        <div className="flex flex-wrap gap-1 mt-1">
          {profile.services.map((s) => <span key={s} className="chip text-xs">{s}</span>)}
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={() => alert('Contact functionality will be available on live profiles.')} className="flex-1 py-2 text-xs font-medium border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors">
          Contact
        </button>
        <button onClick={() => alert('LinkedIn profiles visible on live member listings.')} className="flex-1 py-2 text-xs font-medium bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors">
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default function ProfessionalNetwork() {
  return (
    <main>
      <PageHero
        title="Professional Network"
        subtitle="Building a community of medical writers, clinical research professionals, and healthcare communicators across India"
        breadcrumb={[{ label: 'Professional Network' }]}
        bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=90&auto=format&fit=crop"

        imagePosition="object-[center_35%]"
      />

      {/* 7.1 Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-6">India's Medical Writing Professional Community</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our Professional Network brings together learners, medical writers, editors, researchers, healthcare professionals, and freelancers who are interested in medical writing and clinical research communication.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This section is designed to help professionals create visibility, share their expertise, and connect with others in the healthcare communication field — across India's major pharmaceutical and research cities.
          </p>
        </div>
      </section>

      {/* 7.2 Why Join */}
      <section className="section-padding bg-emerald-50" id="why">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Join the Network?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-800 transition-colors">{b.title}</h3>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.3 Member Categories */}
      <section className="section-padding bg-white" id="categories">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Membership Categories</h2>
            <p className="section-subtext mx-auto">Choose the membership type that best fits your professional background and goals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier) => (
              <div key={tier.title} className={`rounded-xl border ${tier.featured ? 'border-emerald-400 bg-emerald-50 shadow-lg' : 'border-gray-100 bg-white shadow-sm'} p-6 hover:shadow-md transition-all duration-300 flex flex-col`}>
                {tier.featured && <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 bg-emerald-200 rounded-full px-2 py-0.5 w-fit">Most Popular</div>}
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{tier.title}</h3>
                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Who</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.who}</p>
                </div>
                <div className="mb-6 flex-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">What You Get</div>
                  <p className="text-sm text-gray-600">{tier.benefits}</p>
                </div>
                <button
                  onClick={() => alert('Membership registration is opening soon. Thank you for your interest!')}
                  className={`w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${tier.featured ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'border border-emerald-800 text-emerald-800 hover:bg-emerald-50'}`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.4 Member Directory */}
      <section className="section-padding bg-emerald-50" id="directory">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="section-heading">Member Directory</h2>
          </div>
          <div className="notice-box mb-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">🔒</span>
              <div className="text-emerald-800 text-sm space-y-2">
                <p>We publish member information only after receiving permission from the member. We do not copy names, photos, bios, or LinkedIn details from any public platform without consent.</p>
                <p className="font-medium">We are building our community. Member profiles will appear here as people join and create their profiles.</p>
              </div>
            </div>
          </div>

          {/* Be First Card */}
          <div className="max-w-lg mx-auto mb-10 border-2 border-dashed border-emerald-300 rounded-2xl p-8 text-center bg-white">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Be a Founding Member</h3>
            <p className="text-gray-600 text-sm mb-6">Join today and be among the founding members of MedWrite India Academy's Professional Network.</p>
            <button
              onClick={() => alert('Membership registration opening soon! We will notify you when it launches.')}
              className="btn-primary"
            >
              Join Now
            </button>
          </div>

          {/* Sample Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProfiles.map((profile) => (
              <SampleProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 Mentorship */}
      <section className="section-padding bg-white" id="mentorship">
        <div className="container-max max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">🧭</div>
          <h2 className="section-heading mb-6">Mentorship Opportunities</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            As our community grows, we plan to connect aspiring medical writers with experienced professionals who can offer guidance, career advice, and support.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you are an experienced medical writer interested in mentoring, we would love to hear from you.
          </p>
          <a
            href="mailto:info@medwriteindia.com?subject=Mentorship Interest - MedWrite India Academy"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Mail className="w-4 h-4" />
            Express Interest in Mentoring
          </a>
        </div>
      </section>

      {/* 7.6 Community Guidelines */}
      <section className="section-padding bg-emerald-50" id="guidelines">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Community Guidelines</h2>
            <p className="section-subtext mx-auto">Standards that keep our community professional, respectful, and valuable</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Accordion items={guidelines.map(g => ({ question: g.title, answer: g.content }))} />
          </div>
        </div>
      </section>

      {/* 7.7 CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-20" id="join">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Become a Founding Member</h2>
          <p className="text-emerald-100 text-lg mb-2">Join MedWrite India Academy's Professional Network</p>
          <p className="text-emerald-200 text-sm mb-10 max-w-2xl mx-auto">
            Create your member profile, connect with healthcare communication professionals, and build your presence in India's growing medical writing community.
          </p>
          <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid gap-4">
              <input type="text" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:border-white" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:border-white" />
              <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                <option value="" className="text-gray-800">Select Membership Type</option>
                <option value="student" className="text-gray-800">Student Member</option>
                <option value="professional" className="text-gray-800">Professional Member</option>
                <option value="freelance" className="text-gray-800">Freelance Member</option>
                <option value="corporate" className="text-gray-800">Corporate Member</option>
              </select>
              <button
                onClick={() => alert('Thank you for your interest! We will notify you when membership opens. Registration is coming soon.')}
                className="w-full py-3.5 bg-white text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
