import { Education, WorkExperience, CoreSkill, ToolCategory, Project } from './types';

export const personalInfo = {
  name: "KISHORE MATHIALAGAN",
  title: "Digital Marketer & Creative Specialist",
  subTitle: "B.Tech in Artificial Intelligence & Data Science",
  email: "kishoremathialagan@gmail.com",
  phone: "+91 99766 60363",
  location: "Coimbatore, Tamil Nadu, India",
  bio: "Creative and detail-oriented digital marketer skilled in social media management, poster design, and AI-assisted content creation. Experienced in building engaging visuals, planning content, and supporting brand growth across digital platforms by bridging the gap between analytical data science and high-conversion creative design."
};

export const education: Education = {
  institution: "KGISL Institute of Technology",
  degree: "B. Tech",
  field: "Artificial Intelligence and Data Science",
  location: "Coimbatore",
  period: "2022 - 2026"
};

export const workExperience: WorkExperience[] = [
  {
    role: "Digital Marketing & Creative Specialist",
    company: "Destiny Dive",
    location: "Coimbatore, Tamil Nadu",
    period: "Nov 2024 – Sep 2025",
    bullets: [
      "Managed Instagram, WhatsApp Business, and digital communication streams, successfully lifting organic brand engagement.",
      "Designed and produced high-quality posters, reels, and ad creatives tailored specifically for student and parent demographics.",
      "Formulated comprehensive weekly content calendars and executed audience-focused strategies to improve profile retention."
    ]
  }
];

export const coreSkills: CoreSkill[] = [
  { name: "Social Media Management", category: "Marketing", description: "Fostering community, running dynamic grids, and tracking engagement metrics.", proficiency: 5 },
  { name: "Poster Design & Brand Creatives", category: "Design", description: "Crafting modern, high-contrast, professional visual assets for online and offline campaigns.", proficiency: 5 },
  { name: "Digital Marketing Strategy", category: "Marketing", description: "Constructing funnel-based organic campaigns targeting niche demographics.", proficiency: 4 },
  { name: "AI Tools for Content & Automation", category: "Technology", description: "Streamlining copy, graphics generation, and video scripts using Gemini, ChatGPT, and Kling AI.", proficiency: 5 },
  { name: "Content Planning & Scheduling", category: "Marketing", description: "Developing content calendars, grid planning, and coordinating release timing.", proficiency: 5 },
  { name: "Copywriting for Ads & Campaigns", category: "Marketing", description: "Writing hooks, persuasive descriptions, and compelling calls-to-action.", proficiency: 4 },
  { name: "Analytical Thinking", category: "Technology", description: "Sifting through user analytics to optimize content delivery schedules.", proficiency: 4 },
  { name: "Trend Research & Reel Concepts", category: "Design", description: "Monitoring trending audio, transitions, and viral video formats for visual adaptation.", proficiency: 5 }
];

export const toolCategories: ToolCategory[] = [
  {
    category: "Design & Visuals",
    tools: [
      { name: "Canva", level: "Advanced", iconName: "Palette" },
      { name: "Lightroom", level: "Intermediate", iconName: "Image" },
      { name: "Photoshop", level: "Basic", iconName: "Layers" }
    ]
  },
  {
    category: "AI & Content Generation",
    tools: [
      { name: "Gemini AI", level: "Advanced", iconName: "Sparkles" },
      { name: "ChatGPT", level: "Advanced", iconName: "MessageSquareText" },
      { name: "Freepik", level: "Intermediate", iconName: "Compass" },
      { name: "Kling AI", level: "Intermediate", iconName: "Film" }
    ]
  },
  {
    category: "Analytics & Systems",
    tools: [
      { name: "Meta Business Suite", level: "Advanced", iconName: "Globe" },
      { name: "Power BI", level: "Intermediate", iconName: "BarChart3" },
      { name: "MySQL", level: "Intermediate", iconName: "Database" },
      { name: "Python", level: "Intermediate", iconName: "Code2" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Clinic & Gym Tie-Up Campaign",
    client: "Physio One (Physiotherapy Clinic)",
    description: "Designed a series of localized promotional posters and digital flyers highlighting active recovery, targeted physical therapy, and fitness tie-ups.",
    category: "Poster Design",
    outcome: "Boosted localized gym referral traffic by 24% over 2 months through cohesive brand representation across partner facilities.",
    tags: ["Canva", "Local SEO", "B2B Marketing", "Print Design"],
    mockImageUrl: "https://picsum.photos/seed/physio/800/600"
  },
  {
    id: "proj-2",
    title: "Instagram Visual Aesthetic Overhaul",
    client: "Scandy Saravanampatti",
    description: "Developed modern, engaging ad concepts for reels and static posts, and maintained the official Instagram business page with high-quality visual layouts.",
    category: "Digital Strategy",
    outcome: "Increased follower growth by 35% and active engagement rates by 18% using content scheduling and high-hook visual formatting.",
    tags: ["Meta Business Suite", "Reel Concepts", "Grid Styling", "Lightroom"],
    mockImageUrl: "https://picsum.photos/seed/scandy/800/600"
  },
  {
    id: "proj-3",
    title: "Student-Parent Outreach Drive",
    client: "Destiny Dive Startup Launch",
    description: "Designed multi-channel digital communications, including informative carousel slides and interactive WhatsApp broadcasts to bridge communications between parents and student programs.",
    category: "Reel Concept",
    outcome: "Achieved a 92% broadcast open rate and secured over 150 target signups in under 3 weeks.",
    tags: ["Copywriting", "WhatsApp Marketing", "Gemini AI", "Audience Slicing"],
    mockImageUrl: "https://picsum.photos/seed/destiny/800/600"
  }
];

export const mockNiches = [
  { id: "physio", label: "Physiotherapy & Health", value: "Physiotherapy Clinic" },
  { id: "gym", label: "Fitness & Gyms", value: "Premium Fitness Center" },
  { id: "cafe", label: "Cafes & Dining", value: "Boutique Artisan Cafe" },
  { id: "education", label: "Education & Tech", value: "EdTech Startup / Coaching" }
];

export const mockAudiences = [
  { id: "students", label: "College Students", description: "Ages 18-24, looking for affordability, community, trends." },
  { id: "parents", label: "Busy Parents", description: "Ages 30-48, focusing on safety, growth, value, health." },
  { id: "professionals", label: "Young Professionals", description: "Ages 22-35, focusing on convenience, recovery, lifestyle." },
  { id: "athletes", label: "Local Athletes", description: "All ages, focusing on performance, longevity, expert care." }
];

export const mockObjectives = [
  { id: "hook", label: "High-Engagement Hook", desc: "Short video scripts and hooks to trigger direct comments or shares." },
  { id: "leads", label: "B2B / Cross-Promo Flyer", desc: "Co-branded concept ideas for offline tie-ups or posters." },
  { id: "brand", label: "Instagram Grid Launch", desc: "A 3-post storytelling sequence with visual layouts and copy templates." }
];

// Presets for the campaign simulator so it feels deeply authentic and detailed
export const campaignPresets: Record<string, Record<string, Record<string, any>>> = {
  "Physiotherapy Clinic": {
    "Busy Parents": {
      "High-Engagement Hook": {
        hook: "🚨 Parents: Are you carrying stress, or is that schoolbag posture getting contagious?",
        copy: "As parents, we're always picking up toys, lifting toddlers, and working desk jobs. Your neck pain isn't a permanent badge of honor! 🩺\n\nAt Physio One, we specialize in helping busy parents regain their pain-free mobility so they can focus on what matters most. Book a quick 15-minute diagnostic posture consult today!\n\n👉 Comment 'MOVE' below and we'll send a direct scheduling link to your inbox!",
        visualConcept: "A high-quality split reel. On the left: a parent rubbing their neck while lifting a backpack. On the right: a physical therapist doing a gentle, professional neck relief stretch with a happy client. Text overlay: 'Neck Pain Isn't Normal. Let's Fix It.'",
        hashtags: ["#BusyParents", "#ParentWellness", "#PhysioOne", "#Ergonomics", "#CoimbatoreMoms", "#PainRelief"],
        posterDesignPrompt: "A high-contrast clean poster, minimalist split design. Left side: Warm charcoal gray with elegant bold typography: 'RESTORE MOBILITY. EMBRACE MOTION.' Right side: Focused photo of a parent stretching comfortably in a bright wellness room. Amber accent line separation.",
        suggestedTools: ["Canva", "Lightroom", "Gemini AI"]
      },
      "B2B / Cross-Promo Flyer": {
        hook: "🤝 Physio One x local schools & preschools: Protecting growing spines together.",
        copy: "Is your child's backpack weighing them down? Heavy school bags can lead to permanent posture changes during development. 🎒\n\nPhysio One is partnering with local educational facilities to offer free Spinal Health checks this Saturday. Let's make sure our kids are moving light, balanced, and pain-free!\n\n📍 Drop by our booth inside the courtyard. Safe exercises sheets provided!",
        visualConcept: "A warm, family-focused static post. Modern illustrations of balanced posture vs. heavy backpack lean, with clear checklist points.",
        hashtags: ["#SchoolSpines", "#ChildPosture", "#PhysioOne", "#ParentingTips", "#CoimbatoreSchools"],
        posterDesignPrompt: "Minimalist infographic flyer on a cream and deep charcoal background. Bold heading 'The 10% Rule: How Heavy Is Too Heavy?'. A sleek diagram of a backpack paired with friendly icons.",
        suggestedTools: ["Canva", "Photoshop", "ChatGPT"]
      },
      "Instagram Grid Launch": {
        hook: "✨ Reclaiming Your Energy: A 3-Step Movement Blueprint.",
        copy: "Post 1: 'The Silent Load' - Addressing the physical toll of multitasking. \nPost 2: 'The 1-Minute Desk Release' - 3 easy movements for neck relief. \nPost 3: 'Your Recovery Partner' - Introducing the personalized posture plans at Physio One.",
        visualConcept: "A beautiful 3-part aesthetic grid. Soft warm lighting, clear, modern text callouts with ample white space, and professional clinical branding.",
        hashtags: ["#PosturalAlignment", "#ParentStress", "#CoimbatorePhysio", "#SelfCareTips", "#InstagramGrid"],
        posterDesignPrompt: "A cohesive set of 3 minimal grid templates. Matte-black background, crisp beige typography, subtle warm glow, abstract geometric lines depicting joints.",
        suggestedTools: ["Canva", "Lightroom", "Meta Business Suite"]
      }
    },
    "Local Athletes": {
      "High-Engagement Hook": {
        hook: "🏃‍♂️ Stop resting 'soreness'. It might be a mobility blockage waiting to sideline you.",
        copy: "Athletes don't just train; they restore. If you are masking localized tightness with extra pre-workout, you are limiting your power output.\n\nAt Physio One, we treat athletes like elite machines. We analyze biomechanics, pinpoint muscle firing deficiencies, and get you back to 100% capacity.\n\n💥 Tap the link in our bio to book an athlete assessment session and smash your next PR!",
        visualConcept: "A fast-paced, high-energy transition reel. Starts with a runner clutching their hamstring in slow-mo, transitioning into dynamic physical therapy movements with bands. Text overlay: 'Pain Limits Power. Optimize Biomechanics.'",
        hashtags: ["#AthleteRecovery", "#SportsPhysio", "#MobilityDrills", "#CoimbatoreAthletes", "#PhysioOne", "#PRSeason"],
        posterDesignPrompt: "Bold, modern athletic poster. Pitch black background with dual amber neon lines. Massive display font: 'RESTORE. OPTIMIZE. PERFORM.' centered, overlapping a high-contrast black-and-white photo of a sprinter.",
        suggestedTools: ["Canva", "Kling AI", "Photoshop"]
      }
    }
  },
  "Premium Fitness Center": {
    "College Students": {
      "High-Engagement Hook": {
        hook: "🎓 Semester stress is heavy. This lifting session is heavier (and feels way better).",
        copy: "Ditch the library slump! Endorphins are the ultimate brain booster. 🧠🔥\n\nGet fit, build a strong community, and blow off study stress. Show your student ID at the desk for an exclusive 40% OFF annual memberships this week. \n\n💪 Tag your gym partner in the comments - if they don't reply in 5 minutes, they owe you a workout!",
        visualConcept: "Upbeat, energetic montage. Relatable student life clip (typing sleepily on laptop) cutting instantly to a clean, modern gym with high-tempo bass music and students high-fiving. Text overlay: 'Study Hard. Lift Harder.'",
        hashtags: ["#StudentFitness", "#CoimbatoreStudents", "#CollegeGym", "#EndorphinBoost", "#GymPartner", "#KGiSLTech"],
        posterDesignPrompt: "Vibrant, youthful gym poster. Dark textured background, bold yellow-orange brush stroke accents, large energetic font: 'REDEFINE YOUR SEMESTER. 40% STUDENT DISCOUNT.'",
        suggestedTools: ["Canva", "Lightroom", "Kling AI"]
      }
    }
  },
  "Boutique Artisan Cafe": {
    "Young Professionals": {
      "High-Engagement Hook": {
        hook: "☕️ Your home office has terrible coffee. Swap your desk for our smelling-fresh-beans patio today.",
        copy: "Why work from a boring cubicle when you can brainstorm over a freshly brewed, single-origin pour-over? 💻✨\n\nWe have lightning-fast Wi-Fi, ergonomic corner tables, and the perfect calm playlist to double your productivity. Fuel your focus with our signature espresso shots.\n\n📍 Visit us today on Saravanampatti Road, Coimbatore.",
        visualConcept: "A comforting first-person perspective (POV) reel. Pouring steamed oat milk into rich espresso, opening a clean silver laptop, and taking a warm sip on a sunny modern patio. Text: 'Upgrade Your Workday.'",
        hashtags: ["#WorkFromCafe", "#ArtisanCoffee", "#CoimbatoreCafes", "#ProductivityHack", "#EspressoLove", "#Saravanampatti"],
        posterDesignPrompt: "Editorial lifestyle flyer, warm earthy tones. Centered photographic circle of coffee art. Elegant serif typography: 'COFFEE. CONVERSATION. CONCEPT.' with generous line spacing.",
        suggestedTools: ["Canva", "Lightroom", "ChatGPT"]
      }
    }
  }
};

// Generates fallback concepts when specific preset isn't fully defined
export function generateCampaign(niche: string, audience: string, objective: string): any {
  // Check if preset exists
  if (campaignPresets[niche]?.[audience]?.[objective]) {
    return campaignPresets[niche][audience][objective];
  }

  // Fallback generation based on general knowledge structures
  const baseHooks = [
    `🎯 Calling all ${audience}! If you are tired of generic solutions, this is for you.`,
    `💡 Here is the ultimate truth about ${niche} that they aren't telling you.`,
    `🔥 Quick check: Are you making this #1 critical mistake with your daily routine?`
  ];

  const baseCopy = `We know how challenging it can be to find tailored solutions. Whether you are balancing a hectic schedule or aiming for top performance, we've got you covered. ✨\n\nOur specialized ${niche} plans are built around what you need most. Let's make progress simple, approachable, and highly rewarding.\n\n👉 Send us a DM with 'READY' to unlock our exclusive starter guide!`;

  const baseVisual = `A minimalist, high-contrast carousel post. Slide 1: Strong, clear question text on deep charcoal gray background. Slide 2: Explaining the common issue. Slide 3: Providing a simple, clear solution.`;

  const basePrompt = `Professional promotional poster, elegant minimalism. Dark charcoal gray background with sharp white typography and subtle amber/golden light accents. Centered layout with geometric frame detailing.`;

  const baseHashtags = [`#${niche.replace(/\s+/g, '')}`, `#${audience.replace(/\s+/g, '')}`, "#Coimbatore", "#DigitalMarketing", "#CreativeAd", "#BrandCampaign"];

  return {
    hook: baseHooks[Math.floor(Math.random() * baseHooks.length)],
    copy: baseCopy,
    visualConcept: baseVisual,
    hashtags: baseHashtags,
    posterDesignPrompt: basePrompt,
    suggestedTools: ["Canva", "ChatGPT", "Meta Business Suite"]
  };
}
