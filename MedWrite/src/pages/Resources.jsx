import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import VideoSection from '../components/VideoSection';
import resourcesHero from '../assets/resources-hero.png';

const resourceCategories = ['All', 'Beginner Guides', 'Templates', 'Checklists', 'Glossary', 'Career Tools', 'Ethics Tools', 'Freelance Tools'];

const resources = [
  { id: 1, title: 'Medical Writing Beginner Guide', category: 'Beginner Guides', type: 'PDF', icon: '📘', desc: 'A step-by-step guide for those starting out in medical writing — document types, career options, skills needed, and first steps.' },
  { id: 2, title: 'Manuscript Structure Checklist', category: 'Checklists', type: 'PDF', icon: '✅', desc: 'A practical checklist for IMRAD-structured scientific manuscripts — sections, word counts, abstract requirements, and references.' },
  { id: 3, title: 'Patient-Friendly Writing Checklist', category: 'Checklists', type: 'PDF', icon: '✅', desc: 'Use this checklist to verify that your patient education content is clear, readable, and appropriate for a general health audience.' },
  { id: 4, title: 'Clinical Research Glossary', category: 'Glossary', type: 'PDF', icon: '📚', desc: 'Key terms used in clinical trials, research documentation, and regulatory writing — from Adverse Event to Protocol Deviation.' },
  { id: 5, title: 'Freelance Portfolio Template', category: 'Freelance Tools', type: 'PDF', icon: '📁', desc: 'A clean template to help freelance medical writers create a professional writing portfolio with sample work descriptions and service listings.' },
  { id: 6, title: 'Client Brief Template', category: 'Templates', type: 'PDF', icon: '📋', desc: 'A structured brief template for freelance medical writers to gather project requirements from clients before starting work.' },
  { id: 7, title: 'Literature Review Planning Sheet', category: 'Templates', type: 'PDF', icon: '📋', desc: 'A planning worksheet to organize background reading, key study summaries, and reference notes for any medical writing project.' },
  { id: 8, title: 'Medical Editing Checklist', category: 'Checklists', type: 'PDF', icon: '✅', desc: 'A document review checklist covering grammar, style, consistency, referencing, structure, and clarity for medical document editing.' },
  { id: 9, title: 'Ethics and Plagiarism Checklist', category: 'Ethics Tools', type: 'PDF', icon: '⚖️', desc: 'Verify that your medical writing is original, properly attributed, transparent about conflicts of interest, and ethically sound.' },
  { id: 10, title: 'Career Roadmap: From Science to Medical Writing', category: 'Career Tools', type: 'PDF', icon: '🗺️', desc: 'A visual career pathway guide showing how different educational backgrounds can transition into medical writing.' },
];

const roadmapSteps = [
  { num: 1, label: 'Assess Skills', desc: 'Review your background and identify transferable skills' },
  { num: 2, label: 'Learn Basics', desc: 'Complete Introduction to Medical Writing module' },
  { num: 3, label: 'Pick Niche', desc: 'Choose clinical, regulatory, publication, or patient writing' },
  { num: 4, label: 'Build Portfolio', desc: 'Create 3–5 writing samples to showcase your work' },
  { num: 5, label: 'Self-Introduce', desc: 'Update LinkedIn and create your professional profile' },
];

const recommendedReading = [
  { title: 'ICH Guideline E6(R2): Good Clinical Practice', url: 'https://www.ich.org/page/efficacy-guidelines', note: 'Public ICH document' },
  { title: 'WHO Plain Language Guide', url: 'https://www.who.int/', note: 'WHO public resource' },
  { title: 'CONSORT Guidelines for Clinical Trial Reporting', url: 'http://www.consort-statement.org/', note: 'Public guideline' },
  { title: 'EQUATOR Network – Reporting Guidelines', url: 'https://www.equator-network.org/', note: 'Open access' },
  { title: 'NLM/NIH PubMed — Medical Literature Search', url: 'https://pubmed.ncbi.nlm.nih.gov/', note: 'Free access database' },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = resources.filter((r) => activeCategory === 'All' ? true : r.category === activeCategory);

  const handleDownload = (resource) => {
    alert(`"${resource.title}" is coming soon!\n\nThis resource will be available for download when we launch. Sign up via Join Now to be notified when resources are published.`);
  };

  return (
    <main>
      <PageHero
        title="Resources"
        subtitle="Practical tools, guides, templates, and references for medical writers at every level"
        breadcrumb={[{ label: 'Resources' }]}
        bgImage={resourcesHero}
        imagePosition="object-[center_45%]"
      />

      {/* Roadmap */}
      <section className="section-padding bg-white" id="roadmap">
        <div className="container-max">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">Start Here</div>
            <h2 className="section-heading">Beginner Roadmap</h2>
            <p className="section-subtext mx-auto">A step-by-step guide to your first steps in medical writing</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-center flex-wrap">
            {roadmapSteps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-3">
                <div className="flex flex-col items-center text-center max-w-[120px]">
                  <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center text-lg font-bold mb-2">
                    {step.num}
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{step.label}</div>
                  <div className="text-xs text-gray-500">{step.desc}</div>
                </div>
                {i < roadmapSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="section-padding bg-emerald-50" id="guides">
        <div className="container-max">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {resourceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-emerald-800 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-400 hover:text-emerald-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res) => (
              <div key={res.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl">
                    {res.icon}
                  </div>
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
                    {res.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{res.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{res.desc}</p>
                <button
                  onClick={() => handleDownload(res)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-emerald-800 border border-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download {res.type}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Learning */}
      <VideoSection
        title="Video Library"
        subtitle="Educational videos on medical writing, clinical research, and ethics from reputable public sources"
      />

      {/* Recommended Reading */}
      <section className="section-padding bg-emerald-50" id="reading">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="section-heading">Recommended Reading & Links</h2>
            <p className="section-subtext mx-auto">We link to publicly available resources only. We do not reproduce copyrighted content.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {recommendedReading.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
              >
                <div>
                  <div className="font-medium text-gray-800 group-hover:text-emerald-800 transition-colors">{item.title}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.note}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 transition-colors flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
