// Central data store for courses
export const courses = [
  {
    id: 1,
    title: 'Introduction to Medical Writing',
    level: 'Beginner',
    duration: '4 Weeks',
    category: ['Beginner'],
    icon: '📝',
    description:
      'Learn the foundations of medical writing — what it is, who does it, what documents are involved, and how to start a career in this field. Covers basic writing principles, document types, and professional conduct.',
    skills: ['Document Types', 'Professional Writing', 'Medical Terminology', 'Career Overview'],
  },
  {
    id: 2,
    title: 'Clinical Research Documentation Basics',
    level: 'Beginner–Intermediate',
    duration: '5 Weeks',
    category: ['Clinical Research', 'Beginner'],
    icon: '🔬',
    description:
      'Understand the types of documents used in clinical trials, including informed consent forms, study synopses, safety narratives, and clinical study report basics. Learn good documentation practices.',
    skills: ['Clinical Trial Documents', 'ICF Basics', 'Safety Narratives', 'GDocP'],
  },
  {
    id: 3,
    title: 'Scientific Manuscript Writing',
    level: 'Intermediate',
    duration: '6 Weeks',
    category: ['Intermediate'],
    icon: '📖',
    description:
      'Learn to structure and write scientific manuscripts, abstracts, case reports, review articles, and posters for academic journals and conferences. Covers IMRAD structure, referencing, and journal submission basics.',
    skills: ['IMRAD Structure', 'Abstract Writing', 'Case Reports', 'Referencing'],
  },
  {
    id: 4,
    title: 'Patient Education Writing',
    level: 'Beginner',
    duration: '3 Weeks',
    category: ['Beginner'],
    icon: '🤝',
    description:
      'Learn how to write patient-friendly health information, medication guides, disease awareness content, and healthcare leaflets. Covers plain language principles, readability, and health literacy.',
    skills: ['Plain Language', 'Health Literacy', 'Medication Guides', 'Patient Leaflets'],
  },
  {
    id: 5,
    title: 'Regulatory Writing Fundamentals',
    level: 'Intermediate',
    duration: '6 Weeks',
    category: ['Intermediate'],
    icon: '📋',
    description:
      'Introduction to regulatory document concepts for pharmaceutical submissions. Covers document types in drug development, quality and structure principles, and good writing practices in a regulated environment.',
    skills: ['Regulatory Documents', 'ICH Guidelines Basics', 'Structured Writing', 'Quality Documentation'],
    disclaimer:
      'This course introduces regulatory writing concepts for educational purposes. It does not provide regulatory advice or submission guidance.',
  },
  {
    id: 6,
    title: 'Freelance Medical Writing Skills',
    level: 'All Levels',
    duration: '4 Weeks',
    category: ['Freelance'],
    icon: '💼',
    description:
      'Learn how to launch and grow a freelance medical writing career — portfolio building, finding clients, setting rates, professional communication, project management, and professional conduct as an independent writer.',
    skills: ['Portfolio Building', 'Client Communication', 'Pricing', 'Project Management'],
  },
  {
    id: 7,
    title: 'Ethics in Healthcare Communication',
    level: 'All Levels',
    duration: '3 Weeks',
    category: ['Ethics'],
    icon: '⚖️',
    description:
      'Understand the ethical responsibilities of medical writers — accuracy, transparency, plagiarism prevention, proper attribution, conflict of interest, patient privacy, and responsible communication practices.',
    skills: ['Research Integrity', 'Plagiarism Prevention', 'Conflict of Interest', 'Patient Privacy'],
  },
  {
    id: 8,
    title: 'Medical Editing & Proofreading',
    level: 'Beginner–Intermediate',
    duration: '4 Weeks',
    category: ['Editing', 'Beginner'],
    icon: '✏️',
    description:
      'Learn the process of reviewing and improving medical documents — grammar, spelling, consistency, reference checking, style guidelines, and document quality review workflow.',
    skills: ['Grammar & Style', 'Consistency Review', 'Reference Checking', 'Quality Control'],
  },
];

export const faqItems = [
  {
    question: 'What is MedWrite India Academy?',
    answer:
      'MedWrite India Academy is an independent educational platform dedicated to medical writing and healthcare communication education for learners in India. We provide structured learning modules, career resources, and community tools for students, professionals, and freelancers in pharmacy, life sciences, medicine, and related fields.',
  },
  {
    question: 'Who can join this platform?',
    answer:
      'Anyone interested in medical writing can join — including pharmacy students, life science graduates, doctors, nurses, clinical research professionals, pharma employees, science journalists, and content writers transitioning to healthcare communication.',
  },
  {
    question: 'Are the courses free?',
    answer:
      'Our learning resources and educational content are designed to be accessible. Course enrollment details including pricing and access models will be published when we launch. Sign up for early access to stay informed.',
  },
  {
    question: 'Do I get a certificate after completing a course?',
    answer:
      'MedWrite India Academy provides structured Learning Pathways and completion acknowledgements for learning progress. These are not formally accredited qualifications. They do not replace professional certifications, medical degrees, or regulatory training requirements.',
  },
  {
    question: 'I am a doctor/pharmacist — can I learn medical writing?',
    answer:
      'Absolutely. Doctors and pharmacists are among the most valuable contributors to medical writing. Your clinical knowledge combined with writing skills is highly sought after by pharmaceutical companies, CROs, and health communication agencies.',
  },
  {
    question: 'What is the difference between medical writing and content writing?',
    answer:
      'Medical writing is a specialized field focused on creating accurate, evidence-based documents for healthcare, pharmaceutical, and research purposes — such as clinical study reports, regulatory submissions, patient information, and scientific manuscripts. Content writing is broader and often less technical. Medical writing requires scientific knowledge and adherence to specific standards and guidelines.',
  },
  {
    question: 'Can I become a freelance medical writer from India?',
    answer:
      'Yes. India has a growing demand for freelance medical writers, particularly from pharmaceutical companies, CROs, medical education agencies, and health communication companies. Many international clients also work with Indian medical writers remotely. Our Freelance Centre section provides practical guidance on getting started.',
  },
  {
    question: 'What is clinical research writing?',
    answer:
      'Clinical research writing involves creating the documents used in clinical trials — including informed consent forms, study synopses, clinical study reports, safety narratives, and regulatory submission documents. It requires understanding of clinical trial processes, GCP guidelines, and regulatory requirements.',
  },
  {
    question: 'How do I join the Professional Network?',
    answer:
      'We are currently building our network. Use the "Join Now" button on our website to register your interest. You will be among the first to receive updates when membership opens, and you can become a founding member of the MedWrite India Professional Network.',
  },
  {
    question: 'How can I suggest a webinar topic or contribute content?',
    answer:
      'We welcome suggestions from the community. Visit our Events page to submit a webinar topic suggestion, or contact us directly at info@medwriteindia.com with your content contribution ideas.',
  },
];

export const pathways = [
  {
    title: 'Beginner Medical Writer',
    color: 'from-blue-600 to-blue-700',
    icon: '🎯',
    steps: ['Medical Writing Basics', 'Scientific Reading Skills', 'Medical Terminology', 'Writing Practice', 'Editing & Referencing', 'Portfolio Project'],
    outcome: 'Confidence in medical writing foundations and a first portfolio piece',
  },
  {
    title: 'Clinical Research Writer',
    color: 'from-purple-600 to-purple-700',
    icon: '🔬',
    steps: ['Clinical Research Basics', 'Trial Document Types', 'Regulatory Awareness', 'Safety Narratives', 'Research Communication', 'Final Assessment'],
    outcome: 'Practical understanding of clinical research writing and documentation',
  },
  {
    title: 'Freelance Medical Writer',
    color: 'from-emerald-700 to-emerald-800',
    icon: '💼',
    steps: ['Portfolio Building', 'Finding Clients', 'Pricing Strategy', 'Client Communication', 'Contracts Basics', 'Launch Your Profile'],
    outcome: 'Ready to launch as an independent medical writer',
  },
];

export const membershipTiers = [
  {
    icon: '🎓',
    title: 'Student Member',
    who: 'Students from pharmacy, life sciences, medicine, dentistry, nursing, biotechnology, and related healthcare fields who want to learn medical writing.',
    benefits: 'Access to learning resources, webinar invitations, community updates, beginner career guidance',
    cta: 'Join as Student',
  },
  {
    icon: '💼',
    title: 'Professional Member',
    who: 'Medical writers, editors, clinical research professionals, doctors, researchers, pharma professionals, and healthcare communicators.',
    benefits: 'Member profile listing (with consent), professional networking, webinar access, resource library, career tools',
    cta: 'Join as Professional',
    featured: true,
  },
  {
    icon: '🖊️',
    title: 'Freelance Member',
    who: 'Independent medical writers, editors, translators, publication writers, regulatory writers, and healthcare content specialists.',
    benefits: 'Freelance directory listing, portfolio visibility, client connection opportunities, freelance resource access',
    cta: 'Join as Freelance Member',
  },
  {
    icon: '🏢',
    title: 'Corporate Member',
    who: 'Pharmaceutical companies, CROs, hospitals, medical communication agencies, health-tech companies, and academic institutions.',
    benefits: 'Brand visibility, access to member network, webinar sponsorship opportunities, talent connection',
    cta: 'Enquire About Corporate Membership',
  },
];

export const sampleProfiles = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Freelance Medical Writer',
    location: 'Mumbai, Maharashtra',
    specialization: 'Clinical Research Writing, Safety Narratives',
    experience: '5+ years',
    services: ['Clinical Study Reports', 'Safety Narratives', 'Medical Summaries'],
    availability: 'Available for projects',
    initials: 'PS',
  },
  {
    name: 'Rahul Mehta',
    role: 'Freelance Scientific Writer',
    location: 'Hyderabad, Telangana',
    specialization: 'Publication Writing, Manuscript Editing',
    experience: '3 years',
    services: ['Manuscripts', 'Abstracts', 'Case Reports', 'Editing'],
    availability: 'Limited availability',
    initials: 'RM',
  },
  {
    name: 'Anita Krishnamurthy',
    role: 'Healthcare Communication Specialist',
    location: 'Bengaluru, Karnataka',
    specialization: 'Patient Education, Regulatory Writing',
    experience: '7 years',
    services: ['Patient Leaflets', 'Disease Awareness', 'Regulatory Documents'],
    availability: 'Open to enquiries',
    initials: 'AK',
  },
];
