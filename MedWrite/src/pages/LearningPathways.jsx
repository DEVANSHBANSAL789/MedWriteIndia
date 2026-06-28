import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const pathways = [
  {
    title: 'Beginner Medical Writer Pathway',
    icon: '🎯',
    color: 'from-blue-600 to-blue-700',
    steps: [
      'Introduction to Medical Writing',
      'Basic Scientific Reading Skills',
      'Medical Terminology Essentials',
      'Structured Writing Practice',
      'Editing and Referencing Basics',
      'Beginner Portfolio Project',
    ],
    outcome: 'Confidence in medical writing foundations and a first portfolio piece',
  },
  {
    title: 'Clinical Research Writer Pathway',
    icon: '🔬',
    color: 'from-purple-600 to-purple-700',
    steps: [
      'Clinical Research Documentation Basics',
      'Understanding Clinical Trial Phases',
      'Informed Consent Communication',
      'Safety Narrative Writing',
      'Good Documentation Practices',
      'Clinical Research Writing Portfolio',
    ],
    outcome: 'Practical understanding of clinical research writing and documentation',
  },
  {
    title: 'Scientific Publication Writer Pathway',
    icon: '📖',
    color: 'from-teal-600 to-teal-700',
    steps: [
      'Introduction to Scientific Literature',
      'IMRAD Structure & Manuscript Writing',
      'Abstract & Poster Writing',
      'Case Report Writing',
      'Referencing & Citation Tools',
      'Journal Submission Basics',
    ],
    outcome: 'Skills to write and structure publication-ready scientific content',
  },
  {
    title: 'Freelance Medical Writer Pathway',
    icon: '💼',
    color: 'from-emerald-700 to-emerald-800',
    steps: [
      'Introduction to Freelance Medical Writing',
      'Building a Writing Portfolio',
      'Client Communication Essentials',
      'Pricing and Project Management',
      'Contracts and Confidentiality Basics',
      'Create Your Freelance Profile',
    ],
    outcome: 'Ready to launch as an independent medical writer',
  },
  {
    title: 'Patient Education Writer Pathway',
    icon: '🤝',
    color: 'from-rose-600 to-rose-700',
    steps: [
      'Health Literacy and Plain Language Principles',
      'Writing for Patient Audiences',
      'Disease Awareness Content',
      'Patient Leaflets and Medication Guides',
      'Review and Readability Check',
      'Patient Education Writing Portfolio',
    ],
    outcome: 'Skills to write compassionate, clear patient health content',
  },
  {
    title: 'Ethics & Compliance Awareness Pathway',
    icon: '⚖️',
    color: 'from-gray-700 to-gray-800',
    steps: [
      'Research Integrity Basics',
      'Patient Privacy and Confidentiality',
      'Plagiarism Prevention and Referencing',
      'Conflict of Interest in Medical Communication',
      'GCP Awareness for Medical Writers',
      'Responsible Communication Practices',
    ],
    outcome: 'A strong ethical foundation for all medical writing work',
  },
];

export default function LearningPathways() {
  return (
    <main>
      <PageHero
        title="Learning Pathways"
        subtitle="Follow a structured journey in your chosen area of medical writing"
        breadcrumb={[{ label: 'Learning Pathways' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Disclaimer */}
          <div className="notice-box mb-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">ℹ️</span>
              <p className="text-emerald-800 text-sm leading-relaxed">
                MedWrite India Academy offers structured Learning Pathways as educational guidance. Completion acknowledgements are provided for learning progress. These are <strong>not formally accredited qualifications</strong>. They do not replace professional certifications, medical degrees, or regulatory training requirements.
              </p>
            </div>
          </div>

          {/* Pathway Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {/* Header */}
                <div className={`bg-gradient-to-r ${pathway.color} p-6 text-white`}>
                  <div className="text-4xl mb-3">{pathway.icon}</div>
                  <h3 className="text-lg font-bold leading-snug">{pathway.title}</h3>
                </div>

                {/* Steps */}
                <div className="p-6 flex-1">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Learning Steps</h4>
                  <ol className="space-y-3">
                    {pathway.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${pathway.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          {i + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>

                  {/* Outcome */}
                  <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">Pathway Outcome</div>
                        <p className="text-xs text-emerald-700">{pathway.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert('Pathway enrollment is opening soon. Register your interest via the Join Now button to stay informed.')}
                    className="mt-4 w-full py-2.5 text-sm font-medium text-emerald-800 border border-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Start This Pathway
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Learning Journey?</h2>
          <p className="text-emerald-100 mb-8">Explore our full course library and start building your medical writing skills today.</p>
          <Link to="/courses" className="btn-white">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
