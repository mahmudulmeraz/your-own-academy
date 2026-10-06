import { FacilityItem, AcademicProgram, GalleryItem, TestimonialItem, NewsItem, FaqItem } from '../types';

export const INSTITUTION_INFO = {
  name: "Your Own Academy",
  shortName: "Your Own Academy",
  tagline: "Inspiring Excellence, Building Futures",
  motto: "Virtus • Sapientia • Excellentia",
  founded: 1998,
  affiliation: "Cambridge Assessment International Education & CBSE Board Accredited",
  address: "Cambridge Campus, 450 Heritage Way, Riverdale District, MA 02458",
  phone: "+1 (800) 482-9920",
  secondaryPhone: "+1 (617) 555-0194",
  email: "admissions@yourown.edu",
  generalEmail: "info@yourown.edu",
  visitingHours: "Mon – Sat: 8:00 AM – 4:30 PM",
  admissionCycle: "2026–2027 Academic Year",
};

export const HIGHLIGHT_STRIP_ITEMS = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    subtitle: 'Technology-enabled learning',
    description: '4K interactive touch surfaces, dual projection & digital collaborative hubs in every room.',
    iconName: 'Laptop',
  },
  {
    id: 'experienced-faculty',
    title: 'Experienced Faculty',
    subtitle: 'Qualified mentors who inspire',
    description: 'Over 92% holding advanced Master’s & Doctoral credentials with personalized pastoral care.',
    iconName: 'GraduationCap',
  },
  {
    id: 'safe-transport',
    title: 'Safe Transit Fleet',
    subtitle: 'GPS-enabled & secured buses',
    description: 'Air-conditioned transit fleet with real-time app tracking, speed limiters & trained female attendants.',
    iconName: 'Bus',
  },
  {
    id: 'holistic-dev',
    title: 'Holistic Development',
    subtitle: 'Mind • Body • Values',
    description: 'Comprehensive athletic training, debate societies, symphonic music & ethical leadership training.',
    iconName: 'Sparkles',
  },
  {
    id: 'modern-labs',
    title: 'Modern Research Labs',
    subtitle: 'Practical inquiry spaces',
    description: 'Specialized biotech, mechanics, robotics, optical physics and computational research studios.',
    iconName: 'FlaskConical',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'foundation',
    title: 'Early Years & Foundation Stage',
    grades: 'Pre-K to Grade II (Ages 3–7)',
    tagline: 'Igniting curiosity through guided exploration and foundational joy',
    description: 'A nurturing bilingual setting combining Reggio-Emilia inquiry and Montessori numeracy to foster joyful foundational literacy and sensory agility.',
    highlights: ['Phonemic Awareness', 'Kinesthetic Numeracy', 'Nature Discovery Yard', 'Expressive Arts'],
    icon: 'BookOpen',
  },
  {
    id: 'middle',
    title: 'Preparatory & Middle School',
    grades: 'Grades III to VIII (Ages 8–13)',
    tagline: 'Cultivating critical reasoning, collaboration and intellectual depth',
    description: 'Transitioning from concrete knowledge to abstract conceptual understanding through project-based STEM investigations, classical rhetoric, and world languages.',
    highlights: ['Interdisciplinary STEM', 'World Languages (French/Spanish)', 'Digital Citizenship', 'Forensic & Debate Club'],
    icon: 'Layers',
  },
  {
    id: 'senior',
    title: 'Senior Secondary & Honors',
    grades: 'Grades IX to XII (Ages 14–18)',
    tagline: 'Rigorous pre-university scholarship and global university preparation',
    description: 'Comprehensive dual-stream programs (STEM Honors, Business Economics, and Liberal Humanities) aligned with Cambridge International A-Levels and National Boards.',
    highlights: ['Cambridge A-Levels & Advanced Placement', 'University Guidance Cell', 'Peer Tutoring Cohorts', 'Capstone Research Thesis'],
    icon: 'Award',
  },
  {
    id: 'leadership',
    title: 'Civic Leadership & Global Citizenship',
    grades: 'All Enrolled Scholars',
    tagline: 'Fostering ethical character, social action and empathetic stewardship',
    description: 'Signature extracurricular program engaging scholars in Model United Nations, community philanthropy, environmental conservation, and social enterprise design.',
    highlights: ['Model United Nations (MUN)', 'Eco-Stewardship Initiative', 'Social Impact Residencies', 'Student Government Senate'],
    icon: 'Compass',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'smart-classrooms',
    title: 'Next-Gen Smart Classrooms',
    category: 'Academic Infrastructure',
    description: 'Interactive smart-screen boards, ergonomic acoustic zoning, and high-speed synchronized learning tablets.',
    detailedOverview: 'All 72 classrooms are equipped with BenQ 4K multi-touch interactive panels, whisper-quiet air filtration, natural daylight optimization, and mobile collaborative student workstations.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    features: ['4K Interactive Digital Displays', 'Ergonomic Height-Adjustable Desks', 'Acoustic Soundproofing', 'Individual Digital Lockers'],
    capacity: '24 students per classroom',
  },
  {
    id: 'science-labs',
    title: 'Integrated Science & Robotics Labs',
    category: 'STEM Innovation',
    description: 'Dedicated biotechnology, physics observation, automated robotics, and chemistry experimental bays.',
    detailedOverview: 'Spanning over 14,000 sq. ft., our science complex features advanced spectrophotometers, laminar air flow hoods, 3D printers, and industry-grade electronic testing stations.',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    features: ['VEX & Arduino Robotics Arenas', 'Fume Hoods & Safety Eye-Wash', 'Binocular Compound Microscopes', 'VR Physics Simulation Gear'],
    capacity: '32 students per laboratory bay',
  },
  {
    id: 'heritage-library',
    title: 'Atheneum Memorial Library',
    category: 'Scholarly Resources',
    description: 'Over 38,000 physical volumes, private study carrels, and access to JSTOR and Oxford Academic databases.',
    detailedOverview: 'A cathedral-style two-story quiet library flooded with natural light, featuring climate-controlled rare manuscript archives, audio-book listening stations, and university research terminals.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    features: ['38,000+ Curated Volumes', 'Quiet Independent Study Carrels', 'JSTOR & ProQuest Terminals', 'Young Readers Story Nook'],
    capacity: '180 readers simultaneous seating',
  },
  {
    id: 'safe-transit',
    title: 'GPS-Monitored Transit Fleet',
    category: 'Campus Safety',
    description: 'Modern fleet of 45 climate-controlled buses servicing all major metropolitan and suburban residential routes.',
    detailedOverview: 'Engineered for absolute safety with real-time GPS fleet tracking accessible to parents via mobile app, speed-governed engines, dual CCTV cameras, fire suppression, and first-aid trained personnel.',
    imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=1200&q=80',
    features: ['Parent Mobile GPS Tracking App', 'Speed Limiter & CCTV Surveillance', 'Certified Female Attendants', 'Automated RFID Attendance Ping'],
    capacity: '45 Dedicated Luxury Buses',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Inter-Collegiate Track & Field Meet',
    category: 'Athletics',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: 'Varsity track athletes securing first place in the Regional Relay Invitational 2025.',
  },
  {
    id: 'g2',
    title: 'Annual Youth Philharmonic Symphony',
    category: 'Arts & Music',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
    caption: 'Student string ensemble performing Vivaldi at the Your Own Academy Performing Arts Auditorium.',
  },
  {
    id: 'g3',
    title: 'Robotics & Artificial Intelligence Lab',
    category: 'STEM & Innovation',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Senior engineering cohort assembling competitive autonomous rovers for the Global VEX Challenge.',
  },
  {
    id: 'g4',
    title: 'Traditional Martial Arts & Karate Do',
    category: 'Athletics',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    aspect: 'square',
    caption: 'Building core discipline, mental focus, and respectful defense during morning dojo practice.',
  },
  {
    id: 'g5',
    title: 'Model United Nations General Assembly',
    category: 'Leadership',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80',
    aspect: 'wide',
    caption: 'Student delegates debating global climate accords in our formal parliamentary assembly chamber.',
  },
  {
    id: 'g6',
    title: 'Collaborative Open-Air Courtyard Study',
    category: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    aspect: 'tall',
    caption: 'Scholars collaborating on literature seminars in the shaded cloister quadrangle.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    icon: 'GraduationCap',
    title: 'Distinguished & Caring Mentors',
    description: 'Faculty selected through competitive global vetting, with regular pedagogical workshops at Cambridge and Harvard educational hubs.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Individualized Student Care',
    description: 'With a 1:12 teacher-student ratio, every child receives an individualized development pathway and assigned academic tutor.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe, Gated 25-Acre Sanctuary',
    description: 'Biometric gate access, round-the-clock patrol, dedicated infirmary with resident doctors, and eco-certified green spaces.',
  },
  {
    icon: 'Cpu',
    title: 'Immersive Modern Infrastructure',
    description: 'High-speed fiber connectivity, interactive classrooms, Olympic-size swimming pool, synthetic athletic turf, and maker-studios.',
  },
  {
    icon: 'Globe',
    title: 'Global University Pathways',
    description: 'Graduates consistently achieve top placements at Harvard, Oxford, Stanford, MIT, McGill, and premier national institutes.',
  },
  {
    icon: 'Compass',
    title: 'Ethical & Character Cultivation',
    description: 'We prioritize timeless moral principles: integrity, empathy, civic responsibility, and resilient mental health alongside intellectual brilliance.',
  },
];

export const STATS_HIGHLIGHTS = [
  { value: '99.4%', label: 'Board Distinction Rate', subtext: 'Consistent top percentile regional rank' },
  { value: '1:12', label: 'Faculty-Student Ratio', subtext: 'Personalized attention in every lesson' },
  { value: '14,500+', label: 'Distinguished Alumni', subtext: 'Serving in 42 nations worldwide' },
  { value: '28 Years', label: 'Of Academic Heritage', subtext: 'Established 1998 in educational excellence' },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Dr. Eleanor Vance, MD',
    role: 'Parent of Class XI Cambridge Scholar',
    relationship: 'Cardiologist & Parent Association Chair',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Sending our daughter to Your Own Academy was the best decision we ever made. The teachers do not simply coach for tests—they cultivate insatiable curiosity, ethical courage, and profound self-confidence.',
    yearOrGrade: 'Class XI • Enrolled 7 Years',
  },
  {
    id: 't2',
    name: 'Julian Montgomery',
    role: 'Alumnus, Class of 2021',
    relationship: 'Now Software Engineer & MIT Graduate',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote: 'The robotics lab and debate team at Your Own Academy gave me an extraordinary foundation. When I arrived at MIT, I found myself thoroughly prepared for both the rigorous mathematical rigor and collaborative team leadership.',
    yearOrGrade: 'Class of 2021 • Cambridge Valedictorian',
  },
  {
    id: 't3',
    name: 'Robert & Sunita Sterling',
    role: 'Parents of Middle School Scholars',
    relationship: 'Entrepreneurs & Community Patrons',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'The warm, respectful campus culture is palpable the second you walk through the gates. The faculty truly know each child’s heart and mind, providing equal enthusiasm for academics, arts, and sports.',
    yearOrGrade: 'Grades VI & VIII • Enrolled 4 Years',
  },
];

export const NEWS_EVENTS_DATA: NewsItem[] = [
  {
    id: 'n1',
    title: 'Your Own Academy Scholars Win 1st Place at National STEM & Robotics Olympiad',
    category: 'Student Achievement',
    date: 'March 2, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our senior robotics squad secured top national honors with their autonomous flood-relief delivery drone project.',
    readTime: '4 min read',
  },
  {
    id: 'n2',
    title: 'Spring Campus Open House & Interactive Discovery Tours Announced',
    category: 'Admissions',
    date: 'February 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Prospective families are warmly invited to meet faculty deans, tour modern labs, and experience student demonstrations.',
    readTime: '3 min read',
  },
  {
    id: 'n3',
    title: 'Cambridge Assessment International Board Recognizes 14 Academy Toppers',
    category: 'Academic',
    date: 'February 10, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Fourteen scholars earned Outstanding Cambridge Learner Awards for achieving the highest marks globally and nationally.',
    readTime: '5 min read',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'f1',
    category: 'Admissions',
    question: 'What is the admission timeline for the 2026–2027 academic year?',
    answer: 'Admissions for the 2026–2027 academic cycle are currently open. We review applications on a rolling admissions basis until seats in each grade tier are filled. We strongly encourage prospective parents to complete an online enquiry or schedule an on-campus tour between October and April.',
  },
  {
    id: 'f2',
    category: 'Academics',
    question: 'Which educational curriculum and examination boards are offered?',
    answer: 'Your Own Academy is dual-accredited, offering the Cambridge Assessment International Education (CAIE / IGCSE / A-Levels) curriculum alongside the National CBSE Board. Our holistic methodology blends international inquiry standards with rigorous foundational core literacy, mathematical mastery, and scientific discovery.',
  },
  {
    id: 'f3',
    category: 'Campus & Safety',
    question: 'What measures are in place for student security and bus transit?',
    answer: 'Student safety is our paramount institutional priority. Our 25-acre campus is surrounded by secure perimeter fencing, 24/7 monitored HD surveillance, biometric access, and a full-time medical health center with resident nurses. All academy buses are air-conditioned, equipped with real-time GPS tracking accessible to parents on mobile, and staffed with certified attendants.',
  },
  {
    id: 'f4',
    category: 'Academics',
    question: 'What is the average class size and faculty-to-student ratio?',
    answer: 'We maintain an intentional cap of 22 to 24 students per classroom, supported by an overall institution-wide teacher-to-student ratio of 1:12. This ensures that every scholar receives dedicated individual mentorship, customized academic feedback, and meaningful pastoral support.',
  },
  {
    id: 'f5',
    category: 'Tuition & Aid',
    question: 'Are merit scholarships or sibling concessions available?',
    answer: 'Yes. Your Own Academy honors intellectual excellence, exceptional athletic achievement, and artistic prowess through the Your Own Academy Merit Scholarship Fund, awarding tuition grants of up to 75% for qualifying candidates. A 10% sibling tuition concession is also extended to enrolled families.',
  },
  {
    id: 'f6',
    category: 'Campus & Safety',
    question: 'Can prospective families schedule an individual campus tour?',
    answer: 'Absolutely. We host private guided family tours Monday through Saturday from 8:30 AM to 3:30 PM. You can book directly through our online "Book a Visit" portal or by contacting the Admissions Office at +1 (800) 482-9920.',
  },
];
