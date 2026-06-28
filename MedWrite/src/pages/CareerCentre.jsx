import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import careerHero from '../assets/career-hero.png';

const jobRoles = [
  { title: 'Medical Writer', sector: 'Pharma / CRO / MedComms', level: 'Entry–Senior', desc: 'Produces clinical study reports, regulatory documents, manuscripts, and healthcare content across pharmaceutical and research settings.' },
  { title: 'Regulatory Writer', sector: 'Pharmaceutical / Regulatory Affairs', level: 'Intermediate–Senior', desc: 'Specialises in regulatory submission documents — CTD, IMPD, DSURs, and label documents for drug approval processes.' },
  { title: 'Publication Writer', sector: 'Medical Affairs / Publication Planning', level: 'Intermediate–Senior', desc: 'Works on scientific manuscripts, abstracts, posters, and conference materials for peer-reviewed journals and medical conferences.' },
  { title: 'Patient Education Writer', sector: 'Healthcare / Patient Comms', level: 'Entry–Intermediate', desc: 'Creates plain-language health information, disease awareness leaflets, medication guides, and digital health content for patient audiences.' },
  { title: 'Clinical Research Documentation Specialist', sector: 'CRO / Pharma', level: 'Entry–Intermediate', desc: 'Focuses on informed consent forms, study protocols, safety narratives, and clinical trial management documentation.' },
  { title: 'Medical Editor', sector: 'Pharma / Publishing / MedComms', level: 'Entry–Senior', desc: 'Reviews and improves medical documents for grammar, style, consistency, referencing, and quality — often working across multiple therapeutic areas.' },
  { title: 'Medical Communications Specialist', sector: 'MedComms Agency', level: 'Intermediate–Senior', desc: 'Develops a broad range of healthcare communication materials across advisory boards, symposia, slide decks, e-learning, and digital platforms.' },
  { title: 'Freelance Medical Writer', sector: 'Self-employed / Multiple Clients', level: 'All Levels', desc: 'Works independently across multiple clients — offering writing, editing, or communication services to pharma, CRO, hospitals, and medical education companies.' },
];

const resumeTips = [
  'Highlight scientific or clinical background prominently — this differentiates you from non-science content writers',
  'List document types you have written or studied — e.g., "Informed Consent Forms, Patient Leaflets, Case Reports"',
  'Include any published work — even undergraduate dissertations or practitioner-authored articles',
  'Add a skills section: Medical Terminology, Literature Search, Reference Management, MS Word, Regulatory Writing Awareness',
  'Keep your LinkedIn profile updated and aligned with your CV — recruiters in India and globally search LinkedIn first',
  'A writing portfolio link is as important as your CV in medical writing — include it prominently',
];

const interviewTips = [
  { q: 'Tell me about your writing background', a: 'Prepare a clear answer linking your educational/professional background to medical writing. Mention specific document types you have written, even if academic.' },
  { q: 'How do you ensure accuracy in your writing?', a: 'Discuss your process: literature review, cross-checking sources, reference management, editing rounds, and peer review.' },
  { q: 'What do you know about GCP / ICH guidelines?', a: 'For clinical research roles, be prepared to discuss ICH E6 GCP basics and how they apply to clinical documentation.' },
  { q: 'How do you handle revisions from multiple reviewers?', a: 'Demonstrate project management awareness: version control, tracking changes, reviewer matrices, and professional communication.' },
  { q: 'Why do you want to transition to medical writing?', a: 'Be specific and honest — reference your scientific background, your interest in communication, and the career growth opportunities you have researched.' },
];

const skills = [
  { category: 'Writing & Language', items: ['Scientific writing', 'Plain language writing', 'Grammar & style', 'Editing & proofreading', 'Referencing & citation'] },
  { category: 'Scientific Knowledge', items: ['Medical terminology', 'Clinical research basics', 'Drug development awareness', 'Literature search skills', 'Statistical reading basics'] },
  { category: 'Professional Skills', items: ['Document formatting (MS Word)', 'Reference management tools', 'Project communication', 'Deadline management', 'Attention to detail'] },
];

export default function CareerCentre() {
  return (
    <main>
      <PageHero
        title="Career Centre"
        subtitle="Your complete guide to building a career in medical writing and healthcare communication"
        breadcrumb={[{ label: 'Career Centre' }]}
        bgImage={careerHero}
        imagePosition="object-[center_30%]"
      />

      {/* Career Roadmap */}
      <section className="section-padding bg-white" id="roadmap">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">Start Here</div>
            <h2 className="section-heading">Career Roadmap</h2>
            <p className="section-subtext mx-auto">A practical guide for moving from healthcare or science into medical writing</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&q=90&auto=format&fit=crop"
                alt="Career planning and professional development"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Assess Your Background', desc: 'Identify your scientific or healthcare knowledge, existing writing experience, and the area of medical writing that best matches your background.' },
                { step: '02', title: 'Build Foundational Knowledge', desc: 'Complete Introduction to Medical Writing and relevant specialization courses. Understand document types, medical terminology, and industry standards.' },
                { step: '03', title: 'Create Writing Samples', desc: 'Develop 3–5 practical writing samples — summaries, rewritten patient leaflets, practice case reports, or other documents relevant to your chosen specialization.' },
                { step: '04', title: 'Build Your Professional Profile', desc: 'Update your LinkedIn profile, create a portfolio, join MedWrite India\'s Professional Network, and connect with others in the field.' },
                { step: '05', title: 'Apply & Grow', desc: 'Apply to entry-level positions, take on freelance projects, contribute to community discussions, and continuously develop your knowledge and portfolio.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-800 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Roles */}
      <section className="section-padding bg-emerald-50" id="roles">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Job Roles in Medical Writing</h2>
            <p className="section-subtext mx-auto">The main career tracks available to medical writers in India and globally</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {jobRoles.map((role) => (
              <div key={role.title} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
                <h3 className="font-bold text-gray-800 mb-1 text-sm group-hover:text-emerald-800 transition-colors">{role.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-emerald text-xs">{role.level}</span>
                </div>
                <p className="text-xs text-emerald-700 mb-2 font-medium">{role.sector}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Tips */}
      <section className="section-padding bg-white" id="resume">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Resume & Portfolio Tips</h2>
            <p className="section-subtext mx-auto">Stand out in your medical writing job applications</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {resumeTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{tip}</p>
                </div>
              ))}
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Portfolio Quick-Start</h3>
              <p className="text-sm text-gray-600 mb-6">Don't wait for a job to build your portfolio. Start now with these practice piece ideas:</p>
              <ul className="space-y-3">
                {[
                  'Rewrite a publicly available patient leaflet in clearer language',
                  'Summarize a recent clinical trial abstract (publicly available on PubMed)',
                  'Write a disease awareness article using public health information',
                  'Create a mock informed consent form based on a published trial',
                  'Write a structured case report using a publicly known medical case',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-emerald-800 text-white rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Prep */}
      <section className="section-padding bg-emerald-50" id="interview">
        <div className="container-max max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Interview Preparation</h2>
            <p className="section-subtext mx-auto">Common medical writing interview questions and how to approach them</p>
          </div>
          <div className="space-y-5">
            {interviewTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 bg-emerald-800 text-white rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0">Q</span>
                  {tip.q}
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0">A</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Assessment */}
      <section className="section-padding bg-white" id="skills">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Key Skills for Medical Writers</h2>
            <p className="section-subtext mx-auto">Core competencies to develop at every stage of your career</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-800 mb-4 pb-3 border-b border-gray-100">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Opportunities */}
      <section className="section-padding bg-emerald-800 text-white" id="opportunities">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Opportunities</h2>
              <p className="text-emerald-100 leading-relaxed mb-8">
                Medical writing opportunities in India are found through multiple channels. Here are the primary places to search for roles and freelance projects.
              </p>
              <div className="space-y-4">
                {[
                  { platform: 'LinkedIn', desc: 'Primary platform for pharmaceutical and healthcare jobs in India. Follow medical writing hashtags and set up job alerts.' },
                  { platform: 'Naukri & Shine', desc: 'India-specific job boards where pharma and CRO companies post medical writer, regulatory writer, and clinical research documentation roles.' },
                  { platform: 'Company Websites', desc: 'Major CROs (IQVIA, Syneos, ICON, Covance, Labcorp) and pharma companies (Sun Pharma, Dr Reddy\'s, Cipla, Lupin) post roles directly.' },
                  { platform: 'Freelance Platforms', desc: 'Upwork and LinkedIn freelance marketplace for international clients. Build a profile and portfolio first before bidding.' },
                ].map((item) => (
                  <div key={item.platform} className="flex gap-4 bg-emerald-900/50 rounded-xl p-4 border border-emerald-700">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-semibold text-white mb-1">{item.platform}</div>
                      <div className="text-emerald-200 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Join Our Network</h3>
                <p className="text-emerald-100 text-sm text-center mb-8">
                  Register with MedWrite India Academy's Professional Network to connect with opportunities, professionals, and resources in the Indian medical writing community.
                </p>
                <Link to="/network#join" className="w-full btn-white justify-center">
                  Create Your Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
