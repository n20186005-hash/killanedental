export const clinic = {
  name: "Killane Dental Care",
  rating: 5.0,
  reviewCount: 343,
  address: "135 George's Street Lower, Dún Laoghaire, Dublin, A96 K825, Ireland",
  phone: "+353 1 663 8100",
  plusCode: "7VV5+X4 Dublin, Ireland",
  hours: [
    { day: "Monday", hours: "9AM–6PM" },
    { day: "Tuesday", hours: "9AM–7PM" },
    { day: "Wednesday", hours: "9AM–5PM" },
    { day: "Thursday", hours: "9AM–6PM" },
    { day: "Friday", hours: "9AM–3PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  mapEmbedHtml:
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38119.1162566683!2d-6.326763227772612!3d53.33529411557465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867062059abed2d%3A0x8561cde2a1285334!2sKillane%20Dental%20Care!5e0!3m2!1sen!2sus!4v1773814657582!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  mapUrl:
    "https://www.google.com/maps/place/Killane+Dental+Care/@53.2949715,-6.1421745,17z/data=!4m8!3m7!1s0x4867062059abed2d:0x8561cde2a1285334!8m2!3d53.2949715!4d-6.1421745!9m1!1b1!16s%2Fg%2F11bbr9hz9d",
} as const;

export const reviews = [
  {
    name: "Malgorzata K.",
    stars: 5,
    text:
      "I have been coming to Killane Dental Care for 18 years and couldn't be happier. Dr. Robert Killane is incredibly knowledgeable and has such a gentle touch, which makes every visit stress-free. The entire staff is professional and friendly.",
  },
  {
    name: "S.",
    stars: 5,
    text:
      "Wonderful experience as always. I dread dental appointments but all staff members are so friendly and helpful, putting me right at ease. Our whole family visits this surgery and we all think Robert and team do a fantastic job, thanks again!",
  },
  {
    name: "Justin L.",
    stars: 5,
    text:
      "Pleasant experience. The staff were incredibly friendly, and the dentist made me feel completely at ease. Highly recommend for anyone who is normally nervous about dental visits.",
  },
  {
    name: "Niall H.",
    stars: 5,
    text:
      "Like most people I never look forward to dental visits and was more anxious than usual about some upcoming routine procedures which required several appointments. With Rob’s reassurance and professionalism my concerns diminished after each visit. The work was completed over a few weeks and I am very happy with Rob’s excellent work.",
  },
  {
    name: "Laura O.",
    stars: 5,
    text:
      "Spotless surgery and waiting room. Very nice premises. Have always had professional treatment here by every member of staff. Advice, referrals and services performed have always been top quality.",
  },
  {
    name: "Jamie O.",
    stars: 5,
    text:
      "I have been going to Dr. Killane and his team for years. He is very friendly, professional and reassuring, something which is very welcome in a dental practitioner. Any work I have had done has been to the highest standards and I could not recommend the practice highly enough.",
  },
] as const;

export const services = [
  {
    title: "Preventive Dentistry",
    desc: "Routine exams and personalized guidance to keep your smile healthy.",
  },
  {
    title: "Hygiene & Cleaning",
    desc: "Professional cleaning and hygiene care designed for comfort.",
  },
  {
    title: "Restorative Care",
    desc: "Support for common dental needs with a calm, precise approach.",
  },
  {
    title: "Cosmetic Treatments",
    desc: "Options to enhance your smile—please call to confirm availability.",
  },
  {
    title: "Family Dentistry",
    desc: "A welcoming experience for adults and children alike.",
  },
] as const;

export const faqs = [
  {
    q: "Do you accept new patients?",
    a: "Please call the clinic to confirm current availability and booking options.",
  },
  {
    q: "Is there parking nearby?",
    a: "Parking availability can vary in the area. We recommend allowing extra time and checking local parking options before your visit.",
  },
  {
    q: "Do you offer emergency appointments?",
    a: "If you have an urgent issue, please call +353 1 663 8100 as soon as possible to discuss next steps.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Payment methods may vary—please call to confirm.",
  },
  {
    q: "Can I confirm opening hours before visiting?",
    a: "Yes—opening hours are listed on this page, but we recommend calling if you need to confirm a specific time.",
  },
] as const;
