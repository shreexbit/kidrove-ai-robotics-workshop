import {
  Users, Clock, Wifi, IndianRupee, Calendar,
  Cpu, Wrench, Zap, Trophy,
  ShieldCheck, Heart, Star,
} from "lucide-react";

/* Robot assistant rotating messages */
export const ROBOT_MESSAGES = [
  "Beep boop! I'm Circuit, your guide today 🤖",
  "Did you know? You'll build a real robot brain in Week 2!",
  "Only ₹2,999 for 4 weeks of pure robot magic ⚡",
  "Seats are filling fast — enroll before 15 July!",
  "Click 'Explore Curriculum' to see what we'll build together!",
];

/* Workshop quick-facts cards */
export const DETAILS = [
  { icon: Users, label: "Age Group", value: "8 – 14 Years" },
  { icon: Clock, label: "Duration", value: "4 Weeks" },
  { icon: Wifi, label: "Mode", value: "Online (Live)" },
  { icon: IndianRupee, label: "Fee", value: "₹2,999" },
  { icon: Calendar, label: "Start Date", value: "15 July 2026" },
];

/* Curriculum timeline */
export const WEEKS = [
  {
    week: "Week 1",
    title: "AI Fundamentals",
    desc: "What is AI? Kids explore machine thinking, pattern recognition, and train their first mini AI model through games.",
    icon: Cpu,
  },
  {
    week: "Week 2",
    title: "Robotics & Sensors",
    desc: "Hands-on with motors, sensors, and circuits — understanding how robots see, feel, and move in the real world.",
    icon: Wrench,
  },
  {
    week: "Week 3",
    title: "Smart Projects",
    desc: "Combine AI + robotics to build smart mini-projects: line-following bots, voice-triggered actions, and more.",
    icon: Zap,
  },
  {
    week: "Week 4",
    title: "Showcase Day",
    desc: "Every young engineer presents their own AI-robot creation live to parents, mentors, and fellow inventors.",
    icon: Trophy,
  },
];

/* Learning outcomes */
export const OUTCOMES = [
  "Understand core AI concepts like pattern recognition and machine learning, explained simply.",
  "Build and program a working robot using motors, sensors, and microcontrollers.",
  "Develop computational thinking and problem-solving through hands-on challenges.",
  "Gain confidence presenting ideas through the live Showcase Day demo.",
  "Learn to debug, iterate, and improve — the real engineering mindset.",
  "Collaborate with peers from across the country in a guided live online classroom.",
];

/* Trust / "why parents love this" cards */
export const TRUST_CARDS = [
  { icon: ShieldCheck, title: "Safe & Moderated", desc: "Live sessions led by verified mentors with small group sizes." },
  { icon: Heart, title: "Loved by Kids", desc: "Game-based, hands-on lessons that keep curiosity at the center." },
  { icon: Users, title: "Expert Mentors", desc: "Taught by engineers and educators experienced with young learners." },
  { icon: Star, title: "Proven Results", desc: "Every child builds and presents a real working robot project." },
];

/* FAQs */
export const FAQS = [
  {
    q: "Does my child need any prior coding or robotics experience?",
    a: "No prior experience is needed. The workshop starts from the basics and is designed specifically for first-time learners aged 8–14.",
  },
  {
    q: "What equipment or kit is required for the sessions?",
    a: "A laptop or desktop with internet access is required. Details about an optional robotics kit will be shared after enrollment via email.",
  },
  {
    q: "What happens if my child misses a live session?",
    a: "Every session is recorded and shared within 24 hours, so your child can catch up anytime without falling behind.",
  },
];