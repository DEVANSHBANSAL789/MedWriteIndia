import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const ethicsModules = [
  { icon: '🔍', title: 'Research Integrity Basics', desc: 'Understanding honest and transparent reporting of research findings. Covers fabrication, falsification, selective reporting, and responsible authorship.' },
  { icon: '🔒', title: 'Patient Privacy & Confidentiality', desc: 'How to protect patient identities in case studies, adverse event reports, and patient education content. Covers anonymization and de-identification basics.' },
  { icon: '📋', title: 'Good Clinical Practice (GCP) Awareness', desc: 'An introduction to GCP principles for medical writers working with clinical trial documentation. Understanding of ICH E6 basics and their relevance to document writing.' },
  { icon: '📝', title: 'Informed Consent Communication', desc: 'How consent information should be communicated — clearly, completely, and in language appropriate for the participant. The medical writer\'s role in informed consent forms.' },
  { icon: '⚖️', title: 'Conflict of Interest Awareness', desc: 'Understanding what constitutes a conflict of interest in medical writing and publication, and how to disclose it transparently.' },
  { icon: '📚', title: 'Plagiarism & Proper Referencing', desc: 'What constitutes plagiarism in scientific writing, how to reference correctly, when to quote vs paraphrase, and tools for checking originality.' },
  { icon: '📊', title: 'Data Transparency in Medical Writing', desc: 'The importance of reporting both positive and negative trial results. Selective reporting and its impact on medical knowledge and patient safety.' },
  { icon: '⚠️', title: 'Safety & Risk Communication', desc: 'How to write accurately about drug side effects, risk-benefit profiles, and safety data — balancing completeness with clarity.' },
];

const principles = [
  { icon: '🎯', label: 'Accuracy' },
  { icon: '🔍', label: 'Transparency' },
  { icon: '📌', label: 'Attribution' },
  { icon: '🔒', label: 'Privacy' },
  { icon: '⚖️', label: 'Integrity' },
  { icon: '🤝', label: 'Responsibility' },
];

export default function Ethics() {
  return (
    <main>
      <PageHero
        title="Ethics & Compliance in Medical Writing"
        subtitle="Understanding responsibility, accuracy, and integrity in healthcare communication"
        dark
        breadcrumb={[{ label: 'Ethics & Compliance' }]}
      />

      {/* Disclaimer */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="container-max">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Disclaimer:</strong> This page provides general educational awareness content about ethical principles in medical writing and research communication. It does not constitute formal ethics training, legal advice, or regulatory guidance. For formal ethics certification and compliance training, consult qualified institutional programmes.
            </p>
          </div>
        </div>
      </section>

      {/* 8.1 Why Ethics Matters */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-4">Why It Matters</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ethics at the Heart of Medical Writing</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>In medical writing, accuracy is not optional — it directly impacts patient safety, scientific integrity, and public trust in healthcare.</p>
                <p>Medical writers have a responsibility to communicate truthfully, attribute sources correctly, protect patient identities, declare conflicts of interest, and write in ways that serve patients and science — not commercial interests alone.</p>
                <p>A single inaccuracy in a patient information leaflet, a missing conflict of interest declaration in a publication, or selective reporting of clinical trial data can have serious consequences for real people.</p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=90&auto=format&fit=crop"
                alt="Ethics in healthcare research"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8.2 Ethics Modules */}
      <section className="section-padding bg-emerald-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ethics Learning Modules</h2>
            <p className="section-subtext mx-auto">Eight essential topics for ethical medical writing practice</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicsModules.map((mod) => (
              <div key={mod.title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{mod.icon}</div>
                <h3 className="font-bold text-gray-800 mb-3 text-sm group-hover:text-emerald-800 transition-colors">{mod.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{mod.desc}</p>
                <button
                  className="mt-4 text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors text-left"
                  onClick={() => alert(`Module: ${mod.title}\n\nThis learning module is coming soon. Register your interest to be notified when it launches.`)}
                >
                  Explore Module →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.3 Key Principles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Key Ethical Principles</h2>
            <p className="section-subtext mx-auto">The six pillars of responsible healthcare communication</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {principles.map((p) => (
              <div key={p.label} className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 hover:bg-emerald-100 transition-colors group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{p.icon}</div>
                <div className="text-sm font-bold text-emerald-800">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics in Practice */}
      <section className="section-padding bg-emerald-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ethics in Practice</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-bold text-gray-800 mb-3">For Clinical Research Writers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Report all trial results — positive and negative</li>
                <li>• Follow ICH E6 GCP documentation standards</li>
                <li>• Protect participant confidentiality at all times</li>
                <li>• Ensure accuracy in safety narratives</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-bold text-gray-800 mb-3">For Publication Writers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Declare all authors' roles transparently</li>
                <li>• Disclose funding sources and conflicts of interest</li>
                <li>• Cite sources accurately and completely</li>
                <li>• Follow journal-specific ethics guidelines</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-gray-800 mb-3">For Patient Education Writers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Write in plain, clear, accessible language</li>
                <li>• Ensure all health claims are evidence-based</li>
                <li>• Avoid alarming or misleading language</li>
                <li>• Protect patient case study identities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 CTA */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Our Ethics & Compliance Learning Pathway</h2>
          <p className="text-emerald-100 mb-8">Build a strong ethical foundation for all your medical writing work.</p>
          <Link to="/pathways" className="btn-white">
            View Pathway <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
