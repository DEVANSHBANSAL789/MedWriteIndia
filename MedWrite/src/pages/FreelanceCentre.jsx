import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { sampleProfiles } from '../data/content';

const skills = [
  { icon: '✍️', title: 'Strong Written English', desc: 'Clear, structured, grammatically correct writing' },
  { icon: '🔬', title: 'Medical/Scientific Knowledge', desc: 'Understanding of the subject area you write in' },
  { icon: '📚', title: 'Research Skills', desc: 'Ability to read, understand, and summarize scientific literature' },
  { icon: '🎯', title: 'Attention to Detail', desc: 'Accuracy in facts, references, and formatting' },
  { icon: '💬', title: 'Client Communication', desc: 'Professional, clear communication with project stakeholders' },
  { icon: '⏱️', title: 'Self-Management', desc: 'Meeting deadlines and managing multiple projects independently' },
];

const portfolioSteps = [
  { num: 1, title: 'Start with practice pieces', desc: 'Rewrite public patient leaflets, summarize clinical trial abstracts from PubMed' },
  { num: 2, title: 'Create a structure', desc: 'Title page, writing samples, areas of expertise clearly labeled' },
  { num: 3, title: 'Choose your specialization', desc: 'Pick 1–2 areas to showcase first — clinical, patient ed, or publication writing' },
  { num: 4, title: 'Format professionally', desc: 'Clean PDF, easy to read, consistent formatting throughout' },
  { num: 5, title: 'Create an online presence', desc: 'LinkedIn profile, simple portfolio website or Google Docs link' },
  { num: 6, title: 'Keep updating', desc: 'Add new samples as you write more and develop your specialization' },
];

const pricingRows = [
  { type: 'Entry-level practice writing', rate: 'Pro bono or nominal fee while building portfolio' },
  { type: 'General healthcare content', rate: 'Varies by market, experience, and client type' },
  { type: 'Clinical research documents', rate: 'Higher complexity = higher rates; research market surveys' },
  { type: 'Regulatory writing', rate: 'Specialized skill; commands premium market rates' },
  { type: 'Medical editing & proofreading', rate: 'Per-word or per-hour rates depending on document type' },
];

const clientTips = [
  { title: 'Getting the brief right', content: 'Always ask detailed questions before starting. Understand the scope, audience, purpose, and format before writing a single word. A clear brief prevents costly revisions and miscommunication.' },
  { title: 'Setting clear timelines', content: 'Agree on review rounds and deadlines upfront. Specify how many revision rounds are included, who the reviewers are, and what the final deliverable format should be.' },
  { title: 'Communicating professionally', content: 'Respond to emails within 24 hours on business days. Keep communication formal and clear. Use email as the primary medium; phone or video only when needed for complex issues.' },
  { title: 'Handling revisions professionally', content: 'Approach revisions with professionalism. Understand what the client wants, document the changes requested, and confirm when revisions are complete. Avoid ambiguity about what is included in agreed fees.' },
];

const contractItems = [
  'Scope of work — exactly what you are writing',
  'Payment terms — amount, currency, and payment schedule',
  'Deadlines — delivery dates and revision turnaround',
  'Revision policy — how many rounds are included',
  'Ownership of work — who owns the final document',
  'Confidentiality clause — protection of client information',
];

const checklistItems = [
  'Professional LinkedIn profile updated with medical writing focus',
  'Writing portfolio with 3–5 samples ready',
  'Clear list of your service offerings prepared',
  'Contact email and response policy established',
  'Basic freelance rate understanding developed',
  'Areas of specialization identified',
  'Professional bio written (50–100 words)',
  'References or writing samples ready to share',
  'NDA awareness and contract basics understood',
];

const mistakes = [
  { title: 'Starting without a portfolio', content: 'Clients need writing samples before engaging you. Even practice pieces — rewritten patient leaflets, summaries of published research — are better than nothing. Start creating samples before you pitch.' },
  { title: 'Undercharging or working for free indefinitely', content: 'It is reasonable to write at low or no cost while building your first portfolio — but set a time limit. Research market rates, value your skills appropriately, and move toward professional rates as your experience grows.' },
  { title: 'No written agreement', content: 'Always document what has been agreed — scope, payment, deadlines, revisions. Even a simple email confirmation is better than nothing. A verbal agreement is hard to enforce and easy to misremember.' },
  { title: 'Taking on everything', content: 'Trying to write all types of medical content at once dilutes your expertise. Specialize first — build depth in 1–2 areas before expanding. Clients pay more for specialists than generalists.' },
  { title: 'Poor client communication', content: 'Slow responses, vague updates, and unclear emails damage your professional reputation. Respond promptly, communicate clearly, and keep clients informed of your progress.' },
  { title: 'Not keeping up with industry knowledge', content: 'Medical writing evolves — new guidelines, new standards, new document types. Make regular reading of industry publications, guideline updates, and professional community content part of your professional routine.' },
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
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div><span className="font-medium text-gray-700">Specialization:</span> {profile.specialization}</div>
        <div><span className="font-medium text-gray-700">Experience:</span> {profile.experience}</div>
        <div>
          <span className="font-medium text-gray-700">Services:</span>{' '}
          <div className="flex flex-wrap gap-1 mt-1">
            {profile.services.map((s) => (
              <span key={s} className="chip text-xs">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${profile.availability === 'Available for projects' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
          {profile.availability}
        </span>
        <div className="flex gap-2">
          <button onClick={() => alert('Contact functionality will be available once profiles are live.')} className="text-xs px-3 py-1.5 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors">
            Contact
          </button>
          <button onClick={() => alert('LinkedIn link will be visible on live profiles.')} className="text-xs px-3 py-1.5 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FreelanceCentre() {
  return (
    <main>
      <PageHero
        title="Freelance Medical Writing Centre"
        subtitle="Everything you need to build and grow your independent medical writing career"
        breadcrumb={[{ label: 'Freelance Centre' }]}
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=90&auto=format&fit=crop"
      />

      {/* 6.1 What is Freelance Medical Writing */}
      <section className="section-padding bg-white" id="what">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">Freelance Medical Writing</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Freelance Medical Writing?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Freelance medical writing means working as an independent professional, offering writing, editing, or communication services to pharmaceutical companies, CROs, hospitals, medical education companies, publishers, or health communication agencies — without being permanently employed by any single organization.</p>
                <p>India is seeing significant growth in demand for freelance medical writers, especially in cities like Hyderabad, Mumbai, Pune, Bengaluru, and Chennai.</p>
                <p>As a freelancer, you can work with multiple clients, choose your specialization, set your own schedule, and build a career that grows with you.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=90&auto=format&fit=crop"
                alt="Freelance medical writer working"
                className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 Skills */}
      <section className="section-padding bg-emerald-50" id="skills">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="section-heading">Skills You Need</h2>
            <p className="section-subtext mx-auto">Core competencies for a successful freelance medical writing career</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-800 transition-colors">{skill.title}</h3>
                <p className="text-sm text-gray-500">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.3 Portfolio Steps */}
      <section className="section-padding bg-white" id="portfolio">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="section-heading">How to Build Your Portfolio</h2>
            <p className="section-subtext mx-auto">A step-by-step guide to creating a professional medical writing portfolio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioSteps.map((step) => (
              <div key={step.num} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                <div className="w-10 h-10 bg-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.4 Client Tips */}
      <section className="section-padding bg-emerald-50" id="clients">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="section-heading">How to Work With Clients</h2>
            <p className="section-subtext mx-auto">Professional practices for client relationships in freelance medical writing</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Accordion items={clientTips.map(t => ({ question: t.title, answer: t.content }))} />
          </div>
        </div>
      </section>

      {/* 6.5 Pricing */}
      <section className="section-padding bg-white" id="pricing">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-heading">Pricing Basics</h2>
          </div>
          <div className="notice-box mb-8">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">⚠️</span>
              <p className="text-emerald-800 text-sm leading-relaxed">
                Pricing in freelance medical writing varies widely based on experience, specialization, document type, and client. The information below is for general educational understanding only and does not constitute financial or professional advice.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-emerald-800 text-white">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold">Document / Work Type</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold">General Rate Guidance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{row.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100">
              <p className="text-xs text-emerald-700">💡 Research industry surveys, professional communities, and job boards for current market rate guidance in your area of specialization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 Contracts */}
      <section className="section-padding bg-emerald-50" id="contracts">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Contracts & Clients</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">What to Include in a Basic Agreement</h3>
              <ul className="space-y-3">
                {contractItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3">NDAs in Pharma & CRO Work</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Non-Disclosure Agreements (NDAs) are standard in pharmaceutical and clinical research work. They require you to keep all client and project information confidential. Read any NDA carefully before signing and seek legal advice if you are unsure about any clause.</p>
              </div>
              <div className="notice-box">
                <p className="text-emerald-800 text-sm">⚖️ <strong>Always seek legal advice</strong> for formal contracts. This section is for general educational awareness only.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 Checklist */}
      <section className="section-padding bg-white" id="checklist">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Freelance Profile Checklist</h2>
            <p className="section-subtext mx-auto">Use this checklist before launching your freelance medical writing profile</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="space-y-4">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-6 h-6 rounded border-2 border-emerald-300 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.8 Freelance Directory */}
      <section className="section-padding bg-emerald-50" id="directory">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="section-heading">Freelance Medical Writer Directory</h2>
              <p className="text-gray-600 mt-2">Connect with freelance medical writers. Profiles are published with member consent only.</p>
            </div>
            <button onClick={() => alert('Freelance member registration is opening soon!')} className="btn-primary">
              + Create Your Profile
            </button>
          </div>
          <div className="notice-box mb-8">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">📌</span>
              <p className="text-emerald-800 text-sm leading-relaxed">
                We are building our freelance community. Member profiles will appear here once individuals register and give consent for listing. If you are a freelance medical writer based in India, we invite you to join and create your profile.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProfiles.map((profile) => (
              <SampleProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      {/* 6.9 Mistakes */}
      <section className="section-padding bg-white" id="mistakes">
        <div className="container-max max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Common Mistakes Freelancers Make</h2>
            <p className="section-subtext mx-auto">Avoid these pitfalls to build a more successful freelance medical writing career</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Accordion items={mistakes.map(m => ({ question: m.title, answer: m.content }))} />
          </div>
        </div>
      </section>

      {/* 6.10 CTA */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Create Your Professional Freelance Profile in Our Network</h2>
          <p className="text-emerald-100 mb-8">Join India's growing community of freelance medical writers and healthcare communication professionals.</p>
          <Link to="/network#join" className="btn-white">
            Join Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
