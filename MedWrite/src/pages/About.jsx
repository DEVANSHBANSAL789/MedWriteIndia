import { Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';

const values = [
  { icon: '🎯', title: 'Accuracy', desc: 'Every piece of medical content must be truthful and evidence-based' },
  { icon: '💡', title: 'Clarity', desc: 'Complex information should be communicated simply and clearly' },
  { icon: '⚖️', title: 'Ethics', desc: 'Responsible, transparent, and patient-safe communication always' },
  { icon: '🛠️', title: 'Practical Learning', desc: 'Skills that can be used from day one' },
  { icon: '📈', title: 'Professional Growth', desc: 'Resources that help careers at every stage' },
  { icon: '🔬', title: 'Research Integrity', desc: 'Honest, unbiased, and properly referenced writing' },
];

const audiences = [
  { icon: '🎓', title: 'Pharmacy Students', desc: 'Medical writing offers pharmacy graduates a structured career path beyond dispensing — into pharmaceutical documentation, regulatory submissions, and medical communications.' },
  { icon: '🧪', title: 'Life Science Graduates', desc: 'BSc and MSc graduates in Biology, Biochemistry, and Biotechnology have the scientific foundation needed for clinical research writing, manuscript writing, and publication support.' },
  { icon: '🏥', title: 'Medical Students & Interns', desc: 'Medical students and interns who develop strong writing skills alongside clinical training are well-positioned for careers in healthcare communication and publication writing.' },
  { icon: '👨‍⚕️', title: 'Doctors & Dentists', desc: 'Qualified doctors and dentists seeking alternative career paths will find medical writing particularly aligned with their clinical knowledge — especially in regulatory writing, medical affairs, and safety narratives.' },
  { icon: '🩺', title: 'Nurses & Allied Health Professionals', desc: 'Nursing and allied health backgrounds are valuable in patient education writing, health information content, and disease awareness communication.' },
  { icon: '📊', title: 'Clinical Research Professionals', desc: 'CRAs, CRCs, data managers, and study coordinators working in clinical trials can enhance their career profile by developing formal clinical research documentation skills.' },
];

const indiaStats = [
  { value: '3rd', label: 'Largest pharmaceutical market globally' },
  { value: '20%+', label: 'Share of global generic medicine production' },
  { value: '1,500+', label: 'Clinical trials registered annually in India' },
  { value: 'Growing', label: 'Demand for medical writers across India\'s pharma hubs' },
];

const whyPoints = [
  'India is one of the world\'s top pharmaceutical markets',
  'India runs a significant share of global clinical trials',
  'Medical communication agencies are expanding rapidly in Hyderabad, Bengaluru, Mumbai, Pune, Chennai, and Delhi',
  'Indian pharma companies increasingly seek qualified medical writers for regulatory and publication work',
  'Remote working has opened international opportunities for skilled medical writers based in India',
];

export default function About() {
  return (
    <main>
      <PageHero
        title="About MedWrite India Academy"
        subtitle="Our story, mission, values, and the reason we built a platform specifically for India's growing medical writing community."
        breadcrumb={[{ label: 'About' }]}
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=90&auto=format&fit=crop"
      />

      {/* 2.1 Our Story */}
      <section className="section-padding bg-white" id="story">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-4">Our Story</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Why We Built MedWrite India Academy</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We created this platform because medical writing as a career is still relatively unknown to many qualified healthcare and science graduates in India, despite massive demand from pharmaceutical, clinical research, and health communication industries.</p>
                <p>Our goal is to make practical medical writing education accessible, clear, and actionable for Indian learners and professionals. We believe that every science graduate, doctor, pharmacist, and healthcare worker who wants to explore medical writing deserves access to structured, honest, and ethical learning.</p>
                <p>MedWrite India Academy was built to address the gap between India's massive pharmaceutical workforce and the lack of structured, India-specific medical writing education.</p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=90&auto=format&fit=crop"
                  alt="Medical professional at work"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 Mission & Vision */}
      <section className="section-padding bg-emerald-50" id="mission">
        <div className="container-max">
          <div className="inline-block text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-4 text-center w-full">Purpose</div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm">
              <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make medical writing education simple, practical, ethical, and accessible for learners across India and beyond. We provide structured, honest, career-relevant content that helps healthcare and science graduates understand and enter the field of medical writing.
              </p>
            </div>
            <div className="bg-emerald-800 p-8 rounded-2xl shadow-sm text-white">
              <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🔭</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-emerald-100 leading-relaxed">
                To build a respected professional community of healthcare communicators who explain medical and scientific information with clarity, accuracy, and integrity — and to position India as a centre of excellence for medical writing talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 Values */}
      <section className="section-padding bg-white" id="why">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subtext mx-auto">The principles that guide everything we create and teach at MedWrite India Academy</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-emerald-800 transition-colors">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.4 Who We Help */}
      <section className="section-padding bg-emerald-50" id="for">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-heading">Who We Help</h2>
            <p className="section-subtext mx-auto">MedWrite India Academy serves a diverse range of healthcare and science professionals</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 India Focus */}
      <section className="section-padding bg-emerald-800 text-white" id="india">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-4">India Focus</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Medical Writing in India</h2>
              <p className="text-emerald-100 leading-relaxed mb-8">
                India's pharmaceutical industry is one of the world's largest. India runs a significant share of global clinical trials. The demand for qualified medical writers, regulatory writers, and clinical research communicators is growing rapidly across major cities. Yet structured, India-specific medical writing education remains limited. MedWrite India Academy addresses this gap directly.
              </p>
              <div className="space-y-3 mb-8">
                {whyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-100 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <MapPin className="w-4 h-4" />
                Mumbai · Hyderabad · Bengaluru · Pune · Chennai · Delhi · Ahmedabad
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {indiaStats.map((stat) => (
                <div key={stat.label} className="bg-emerald-900/50 border border-emerald-700 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-emerald-300 text-sm">{stat.label}</div>
                </div>
              ))}
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90&auto=format&fit=crop"
                  alt="India pharmaceutical research"
                  className="w-full h-40 object-cover rounded-xl opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.6 Disclaimer */}
      <section className="section-padding bg-white" id="disclaimer">
        <div className="container-max max-w-4xl mx-auto">
          <div className="notice-box">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <h3 className="font-bold text-emerald-800 mb-3">Important Disclaimer</h3>
                <p className="text-emerald-700 text-sm leading-relaxed">
                  This platform is an independent educational resource. It is not affiliated with AMWA, EMWA, CITI Program, or any other professional association. All content is original and for general educational and career guidance purposes. It does not replace formal medical, regulatory, legal, or institutional training or certification. Learning acknowledgements provided on this platform are not formally accredited qualifications and do not confer any regulatory, professional, or legal status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
