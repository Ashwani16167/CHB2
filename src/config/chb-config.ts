// CHB Configuration - Central config for Chhupa Hua Bharat Next.js website
export const chbConfig = {
  site: {
    name: {
      hi: "छुपा हुआ भारत",
      en: "Chhupa Hua Bharat"
    },
    tagline: {
      hi: "जहाँ भक्ति और विज्ञान का मिलन होता है",
      en: "Where Devotion Meets Science"
    },
    description: {
      hi: "प्राचीन ज्ञान और आधुनिक विज्ञान के सुंदर मेल के माध्यम से भारत के छुपे हुए खजानों की खोज करें।",
      en: "Discover the hidden treasures of India through the perfect blend of ancient wisdom and modern science."
    },
    author: "Veeru Vishwakarma",
    url: "https://chhupahuabharat.com",
    keywords: {
      hi: "भारत, अध्यात्म, विज्ञान, पॉडकास्ट, ई-बुक्स, वीरू विश्वकर्मा, सनातन धर्म, योग, ध्यान",
      en: "India, spirituality, science, podcasts, ebooks, Veeru Vishwakarma, Sanatan dharma, yoga, meditation"
    }
  },

  // Social Media Links
  socialLinks: {
    whatsapp: {
      url: "https://whatsapp.com/channel/0029VbB6DzRJf05bowVVfl23",
      name: { hi: "व्हाट्सऐप चैनल", en: "WhatsApp Channel" },
      icon: "MessageCircle"
    },
    instagram: {
      url: "https://www.instagram.com/chhupahuabharat?igsh=ZGc5aTg5OXRpdm83",
      name: { hi: "इंस्टाग्राम", en: "Instagram" },
      icon: "Instagram"
    },
    youtube: {
      url: "https://youtube.com/@chhupahuabharat?si=9febVoyOzGb10MGe",
      name: { hi: "यूट्यूब", en: "YouTube" },
      icon: "Youtube"
    },
    spotify: {
      url: "https://open.spotify.com/show/06XoN5CPJllRhWW7YT4UU3?si=k2hjH_EYSViOUIXcs8977w",
      name: { hi: "स्पॉटिफाई", en: "Spotify" },
      icon: "Music"
    },
    amazon: {
      url: "https://music.amazon.in/podcasts/b7b42549-18e4-4ddb-814a-5b5e91e97644/%F0%9F%8E%A7-chhupa-hua-bharat-%E2%80%93-bhakti-hi-vigyan",
      name: { hi: "अमेज़न म्यूज़िक", en: "Amazon Music" },
      icon: "Music2"
    },
    jiosaavn: {
      url: "https://www.jiosaavn.com/shows/-chhupa-hua-bharat-%e2%80%93-bhakti-hi-vigyan.-/1/9yLYvynnX68_",
      name: { hi: "जियो सावन", en: "Jio Saavn" },
      icon: "Radio"
    }
  },

  // Navigation
  navigation: [
    { 
      href: "/", 
      key: "home",
      text: { hi: "होम", en: "Home" },
      icon: "Home"
    },
    { 
      href: "/podcasts", 
      key: "podcasts",
      text: { hi: "पॉडकास्ट", en: "Podcasts" },
      icon: "Headphones"
    },
    { 
      href: "/ebooks", 
      key: "ebooks",
      text: { hi: "ई-बुक्स", en: "E-Books" },
      icon: "Book"
    },
    { 
      href: "/articles", 
      key: "articles",
      text: { hi: "लेख", en: "Articles" },
      icon: "FileText"
    },
    { 
      href: "/about", 
      key: "about",
      text: { hi: "परिचय", en: "About" },
      icon: "User"
    },
    { 
      href: "/contact", 
      key: "contact",
      text: { hi: "संपर्क", en: "Contact" },
      icon: "Phone"
    }
  ],

  // Colors (matching your brand)
  colors: {
    primary: {
      saffron: "#FF9933",
      white: "#FFFFFF", 
      green: "#138808"
    },
    accent: {
      gold: "#FFD700",
      cosmic: "#6B46C1",
      navy: "#000080"
    }
  },

  // Content Categories
  categories: {
    science: { 
      hi: "विज्ञान", 
      en: "Science", 
      color: "#3B82F6",
      icon: "Atom"
    },
    spirituality: { 
      hi: "आध्यात्म", 
      en: "Spirituality", 
      color: "#8B5CF6",
      icon: "Heart"
    },
    history: { 
      hi: "इतिहास", 
      en: "History", 
      color: "#F59E0B",
      icon: "Clock"
    },
    philosophy: { 
      hi: "दर्शन", 
      en: "Philosophy", 
      color: "#10B981",
      icon: "Brain"
    },
    meditation: { 
      hi: "ध्यान", 
      en: "Meditation", 
      color: "#EC4899",
      icon: "Lotus"
    },
    wellness: { 
      hi: "कल्याण", 
      en: "Wellness", 
      color: "#06B6D4",
      icon: "Sparkles"
    }
  }
} as const;

export type Locale = 'hi' | 'en';
export type SocialPlatform = keyof typeof chbConfig.socialLinks;
export type Category = keyof typeof chbConfig.categories;
