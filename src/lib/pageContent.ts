export interface ContentSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LandingPageContent {
  path: string;
  navLabel: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  summary: string;
  sections: ContentSection[];
  faqs: Array<{ q: string; a: string }>;
  ctaTitle: string;
  ctaText: string;
}

export const landingPages: Record<string, LandingPageContent> = {
  medicalCard: {
    path: "/medical-card-dentist-dun-laoghaire",
    navLabel: "Medical Card",
    title: "Medical Card Dentist Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Looking for a medical card dentist in Dún Laoghaire? Killane Dental Care accepts Medical Card patients. Call to confirm eligibility, covered treatment and appointment availability.",
    eyebrow: "Medical Card",
    h1: "Medical Card Dentist in Dún Laoghaire",
    intro:
      "Killane Dental Care accepts Medical Card patients in Dún Laoghaire. Because cover can depend on your eligibility, treatment type and current HSE rules, we recommend calling before your visit so the team can explain what applies in your case.",
    summary:
      "Clear guidance on Medical Card eligibility, what to bring, and how to book at the clinic on George's Street Lower.",
    sections: [
      {
        title: "What this page is for",
        paragraphs: [
          "If you are searching for a medical card dentist near Dún Laoghaire, this page is designed to answer the practical questions most patients have before booking.",
          "That includes whether the clinic accepts Medical Card patients, what information you should have ready, and when it is best to call ahead before attending.",
        ],
      },
      {
        title: "What to have ready before you call",
        bullets: [
          "Your PPS details or any information used to confirm eligibility",
          "A short summary of the treatment or problem you need help with",
          "Any referral, letter, or previous dental information that may be relevant",
          "A preferred day or time for your appointment",
        ],
      },
      {
        title: "Treatment cover can vary",
        paragraphs: [
          "Medical Card and DTSS cover is not the same for every patient or every treatment. The easiest way to avoid confusion is to contact the clinic before booking so the team can explain the current position and what documents to bring.",
          "If a treatment is outside the covered scope, the clinic can let you know what the next step may be before you attend.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you accept Medical Card patients?",
        a: "Yes. Killane Dental Care accepts Medical Card patients. Please call before booking so the clinic can confirm eligibility and the most suitable appointment type.",
      },
      {
        q: "Does the Medical Card cover every dental treatment?",
        a: "Cover depends on current eligibility rules and the type of treatment needed. The clinic can explain what applies when you contact them.",
      },
      {
        q: "What should I bring to my appointment?",
        a: "Please bring any relevant Medical Card details, referral information, and anything else the clinic asks you to have ready when you book.",
      },
    ],
    ctaTitle: "Need to check Medical Card eligibility?",
    ctaText:
      "Call the clinic and the team can talk you through the current booking process, eligibility questions and the information you should bring.",
  },
  preventive: {
    path: "/preventive-dentistry-dun-laoghaire",
    navLabel: "Preventive",
    title: "Preventive Dentistry Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Preventive dentistry in Dún Laoghaire with a calm, patient-first approach. Book routine dental check-ups and oral health guidance at Killane Dental Care.",
    eyebrow: "Preventive Dentistry",
    h1: "Preventive Dentistry in Dún Laoghaire",
    intro:
      "Preventive care is about keeping small concerns from turning into larger problems. At Killane Dental Care, that means careful examinations, clear explanations and practical advice you can actually use between visits.",
    summary:
      "Routine check-ups, tailored advice and a calm, precise approach to long-term oral health.",
    sections: [
      {
        title: "Why preventive care matters",
        paragraphs: [
          "Regular dental visits help identify changes early, often before they become painful or disruptive.",
          "Preventive appointments also give you a chance to ask questions, review home care habits and understand what your teeth and gums need now, not just when something goes wrong.",
        ],
      },
      {
        title: "What your visit may include",
        bullets: [
          "A routine examination and discussion of any symptoms or concerns",
          "Advice on brushing, flossing and daily maintenance",
          "A review of areas that may need monitoring over time",
          "A plan for follow-up care if anything needs attention",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should I have a dental check-up?",
        a: "That depends on your oral health and history. The clinic can advise on the right recall interval after your examination.",
      },
      {
        q: "Can preventive appointments help if I have no pain?",
        a: "Yes. Preventive visits are especially useful when you have no pain, because they can help catch issues early.",
      },
    ],
    ctaTitle: "Stay ahead of dental problems",
    ctaText:
      "If it has been a while since your last check-up, the clinic can help you plan the right next step.",
  },
  hygiene: {
    path: "/dental-hygiene-dun-laoghaire",
    navLabel: "Hygiene",
    title: "Dental Hygiene Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Book dental hygiene and teeth cleaning in Dún Laoghaire. Killane Dental Care offers calm, professional hygiene appointments and oral health support.",
    eyebrow: "Hygiene",
    h1: "Dental Hygiene in Dún Laoghaire",
    intro:
      "Professional hygiene appointments can help you keep your teeth cleaner, your gums healthier and your mouth feeling fresher. Killane Dental Care takes a gentle, straightforward approach so you know what to expect before treatment begins.",
    summary:
      "Professional teeth cleaning, gum health support and practical oral hygiene advice in Dún Laoghaire.",
    sections: [
      {
        title: "When to consider a hygiene appointment",
        bullets: [
          "You want a professional clean and polish",
          "You have staining or a build-up that is difficult to manage at home",
          "Your gums bleed when brushing or flossing",
          "You want tailored advice on home care",
        ],
      },
      {
        title: "A calm approach to cleaning appointments",
        paragraphs: [
          "Many patients put off hygiene visits because they expect discomfort or worry about being judged. The focus here is on clear communication and steady, patient-first care.",
          "If you are nervous, let the clinic know when booking so the team can make the visit easier for you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I book a hygiene appointment if I am nervous?",
        a: "Yes. Let the clinic know when you book and the team can help make the appointment feel more manageable.",
      },
      {
        q: "Will I get advice on home care as well?",
        a: "Yes. Hygiene visits are a good opportunity to ask about brushing, flossing and daily oral care habits.",
      },
    ],
    ctaTitle: "Ready for a cleaner, fresher smile?",
    ctaText:
      "Call the clinic to ask about hygiene appointment availability and the most suitable type of visit for you.",
  },
  restorative: {
    path: "/restorative-dentistry-dun-laoghaire",
    navLabel: "Restorative",
    title: "Restorative Dentistry Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Restorative dentistry in Dún Laoghaire with clear guidance and patient-first care. Contact Killane Dental Care to discuss common restorative dental needs.",
    eyebrow: "Restorative Care",
    h1: "Restorative Dentistry in Dún Laoghaire",
    intro:
      "When a tooth needs attention, clear explanations matter. Killane Dental Care offers restorative care with a calm and measured approach, so you understand the issue, the options and the next step before treatment begins.",
    summary:
      "Clear, steady support for common restorative dental concerns in Dún Laoghaire.",
    sections: [
      {
        title: "What restorative care can help with",
        paragraphs: [
          "Restorative dentistry is a broad category that can include repairing or managing common dental problems that affect comfort, function or appearance.",
          "Because every case is different, the right treatment depends on an examination and a discussion of your symptoms.",
        ],
      },
      {
        title: "What to expect",
        bullets: [
          "A review of the problem you are experiencing",
          "A clear explanation of the condition and possible options",
          "Advice on timing, follow-up care and whether referral is needed",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I call before booking if I am unsure what treatment I need?",
        a: "Yes. If you are not sure what type of appointment you need, call the clinic and the team can guide you.",
      },
      {
        q: "Will the dentist explain the options clearly?",
        a: "Yes. Clear communication and patient-first care are a core part of the clinic's approach.",
      },
    ],
    ctaTitle: "Need advice on a dental problem?",
    ctaText:
      "If something does not feel right, contact the clinic so they can recommend the most appropriate next step.",
  },
  cosmetic: {
    path: "/cosmetic-dentistry-dun-laoghaire",
    navLabel: "Cosmetic",
    title: "Cosmetic Dentistry Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Explore cosmetic dentistry in Dún Laoghaire at Killane Dental Care. Call to confirm current cosmetic treatment availability and discuss your smile goals.",
    eyebrow: "Cosmetic Treatments",
    h1: "Cosmetic Dentistry in Dún Laoghaire",
    intro:
      "If you want to improve the look of your smile, the first step is a clear conversation about what you would like to change and which treatment options may be suitable. Killane Dental Care offers cosmetic treatment enquiries in a calm, low-pressure setting.",
    summary:
      "A measured, patient-first starting point for cosmetic dentistry enquiries in Dún Laoghaire.",
    sections: [
      {
        title: "Start with the right conversation",
        paragraphs: [
          "Cosmetic dentistry is never one-size-fits-all. The best starting point is to talk through your goals, ask questions and understand what is realistic for your teeth and smile.",
          "If you are specifically asking about a treatment type, call the clinic first so the team can confirm current availability.",
        ],
      },
      {
        title: "Why patients value a calm cosmetic consultation",
        bullets: [
          "You can talk through your goals without pressure",
          "You get clear advice on what may or may not suit you",
          "You can ask about timing, expectations and next steps",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I ask about cosmetic treatment before booking?",
        a: "Yes. Call the clinic and explain what you are hoping to improve so the team can advise on the most suitable next step.",
      },
      {
        q: "Do you offer every cosmetic treatment?",
        a: "Treatment availability can vary. Please call the clinic to confirm what is currently offered.",
      },
    ],
    ctaTitle: "Thinking about cosmetic treatment?",
    ctaText:
      "Call the clinic to discuss your goals and confirm which cosmetic treatment options are currently available.",
  },
  family: {
    path: "/family-dentist-dun-laoghaire",
    navLabel: "Family",
    title: "Family Dentist Dún Laoghaire | Killane Dental Care",
    metaDescription:
      "Looking for a family dentist in Dún Laoghaire? Killane Dental Care offers calm, welcoming dental care for adults, children and families.",
    eyebrow: "Family Dentistry",
    h1: "Family Dentist in Dún Laoghaire",
    intro:
      "A good family dentist makes dental visits feel manageable for everyone. Killane Dental Care focuses on calm communication, careful treatment and a welcoming experience for adults, children and families visiting together.",
    summary:
      "Welcoming family dental care built around trust, patience and clear communication.",
    sections: [
      {
        title: "Why families choose a local dentist",
        paragraphs: [
          "Families often want a clinic that feels consistent, reassuring and easy to return to over time.",
          "Having one trusted local practice can make routine appointments, questions and long-term care simpler to manage.",
        ],
      },
      {
        title: "What matters most to family patients",
        bullets: [
          "A calm and friendly environment",
          "Clear explanations for both adults and children",
          "A patient-first approach for nervous family members",
          "Convenient local access in Dún Laoghaire",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you see both adults and children?",
        a: "Yes. Killane Dental Care provides family dentistry in a welcoming local setting.",
      },
      {
        q: "Can nervous family members mention that before the appointment?",
        a: "Yes. The clinic encourages patients to share concerns in advance so the visit can be planned with that in mind.",
      },
    ],
    ctaTitle: "Looking for a trusted family dentist?",
    ctaText:
      "Contact the clinic to book a visit for yourself or your family and ask any questions before you attend.",
  },
  nervousPatients: {
    path: "/nervous-patients",
    navLabel: "Nervous Patients",
    title: "Gentle Dental Care for Nervous Patients | Killane Dental Care",
    metaDescription:
      "Gentle dental care for nervous and anxious patients in Dún Laoghaire. Killane Dental Care focuses on calm visits, clear communication and patient-first support.",
    eyebrow: "Gentle Care",
    h1: "Gentle Dental Care for Nervous Patients",
    intro:
      "If you feel anxious about the dentist, you are not alone. Many of the clinic's patient reviews mention fear, dread or past bad experiences, and the common thread is the same: clear communication and a steady, reassuring approach can make a big difference.",
    summary:
      "A calm, respectful approach for anxious patients who want a dentist in Dún Laoghaire they can feel more comfortable returning to.",
    sections: [
      {
        title: "What helps anxious patients most",
        bullets: [
          "Being listened to before treatment begins",
          "Knowing what will happen next",
          "Having time to ask questions",
          "A gentle, patient-first atmosphere instead of feeling rushed",
        ],
      },
      {
        title: "What to tell the clinic when you book",
        paragraphs: [
          "If you are nervous, the best thing you can do is say so early. That gives the clinic a chance to plan your appointment with your comfort in mind.",
          "You can also explain if there is a particular part of dental treatment that worries you most so the team understands how to support you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I tell the clinic that I am anxious before my visit?",
        a: "Yes. Please mention it when you book so the team can make the appointment feel calmer and more manageable.",
      },
      {
        q: "Do other nervous patients attend the clinic?",
        a: "Yes. Patient reviews frequently mention feeling nervous before treatment and more comfortable after being cared for by the clinic.",
      },
    ],
    ctaTitle: "You do not need to push through dental anxiety alone",
    ctaText:
      "Call the clinic, mention that you are nervous, and the team can help you plan a calmer first step.",
  },
  newPatients: {
    path: "/new-patients",
    navLabel: "New Patients",
    title: "Dentist Accepting New Patients | Killane Dental Care",
    metaDescription:
      "Killane Dental Care is accepting new patients in Dún Laoghaire. Call to arrange your first visit and get practical information before your appointment.",
    eyebrow: "New Patients",
    h1: "Accepting New Patients in Dún Laoghaire",
    intro:
      "If you are looking for a new dentist in Dún Laoghaire, Killane Dental Care is accepting new patients. The clinic aims to make your first visit straightforward, with clear communication about booking, timing and what to bring.",
    summary:
      "Simple guidance for new patients booking with Killane Dental Care for the first time.",
    sections: [
      {
        title: "What first-time patients usually want to know",
        bullets: [
          "How to book an appointment",
          "Where the clinic is located",
          "What time to arrive",
          "What information to have ready when calling",
        ],
      },
      {
        title: "Before your first visit",
        paragraphs: [
          "If you have not visited the clinic before, it can help to call with a short summary of why you want to book and whether you have any specific concerns.",
          "If you are a nervous patient or you are booking with a Medical Card, mention that at the start so the team can guide you appropriately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you accepting new patients?",
        a: "Yes. Killane Dental Care is accepting new patients. Please call the clinic to arrange the most suitable appointment.",
      },
      {
        q: "Can new patients book by phone?",
        a: "Yes. Calling the clinic is the best way to discuss appointment options and any questions you may have before attending.",
      },
    ],
    ctaTitle: "Ready to book your first visit?",
    ctaText:
      "Call the clinic to arrange your first appointment and get clear guidance before you come in.",
  },
  aboutDoctor: {
    path: "/about/dr-robert-killane",
    navLabel: "Dr. Robert Killane",
    title: "Dr. Robert Killane | Killane Dental Care",
    metaDescription:
      "Learn more about Dr. Robert Killane and the patient-first approach at Killane Dental Care in Dún Laoghaire.",
    eyebrow: "About",
    h1: "Dr. Robert Killane",
    intro:
      "Dr. Robert Killane leads Killane Dental Care in Dún Laoghaire. Across the clinic's patient feedback, the same qualities are repeated again and again: calm care, professionalism, reassurance and clear communication.",
    summary:
      "A patient-first local dentist known for calm, careful treatment in Dún Laoghaire.",
    sections: [
      {
        title: "What patients consistently say",
        bullets: [
          "He helps anxious patients feel more at ease",
          "He explains treatment clearly",
          "He is professional, reassuring and calm",
          "Families return to the clinic over many years",
        ],
      },
      {
        title: "Professional information",
        paragraphs: [
          "If you need up-to-date information about professional registration, referrals or treatment suitability, please contact the clinic directly so the team can provide the most accurate current details.",
          "This page is intended to help patients understand the clinic's approach and the type of experience they can expect when booking with Dr. Robert Killane.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is the dentist at Killane Dental Care?",
        a: "The clinic is led by Dr. Robert Killane in Dún Laoghaire.",
      },
      {
        q: "What do patients highlight most about Dr. Robert Killane?",
        a: "Patient reviews often mention professionalism, reassurance, a gentle manner and clear communication.",
      },
    ],
    ctaTitle: "Want to book with Dr. Robert Killane?",
    ctaText:
      "Call the clinic to arrange an appointment or ask questions before your visit.",
  },
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Medical Card", href: landingPages.medicalCard.path },
  { label: "New Patients", href: landingPages.newPatients.path },
  { label: "Nervous Patients", href: landingPages.nervousPatients.path },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;
