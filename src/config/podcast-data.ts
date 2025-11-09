interface PodcastEpisode {
  id: string;
  title: {
    hi: string;
    en: string;
  };
  description: {
    hi: string;
    en: string;
  };
  spotifyUrl: string;
  youtubeUrl?: string;
  date: string;
  duration: string;
  category: string;
  episode: number;
  season: number;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "dharti-kaise-bani",
    title: {
      hi: "धरती कैसे बनी – साइंस + सनातन विज्ञान",
      en: "Dharti Kaise Bani – Science + Sanatan Vigyan"
    },
    description: {
      hi: "पृथ्वी की उत्पत्ति को समझें - मॉडर्न साइंस और सनातन विज्ञान के नज़रिए से। पंचमहाभूत और भूदेवी की अवधारणा से जुड़े वैज्ञानिक तथ्य।",
      en: "Explore Earth's formation through modern science and Sanatan perspective. Learn about Panchmahabhoot and the scientific concept of Bhoodevi."
    },
    spotifyUrl: "https://open.spotify.com/episode/2kEaXMApqhar0eOy7fpgko",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-09-01",
    duration: "5:00",
    category: "science-spirituality",
    episode: 7,
    season: 1
  },
  {
    id: "sagun-nirgun",
    title: {
      hi: "सगुण और निर्गुण रूप में क्या अंतर है?",
      en: "What's the Difference Between Sagun and Nirgun Forms?"
    },
    description: {
      hi: "सगुण और निर्गुण रूप की गहन समझ, शिव शक्ति का परम सत्य, और वेदों में वर्णित नाद ब्रह्म का विज्ञान।",
      en: "Deep understanding of Sagun and Nirgun forms, the ultimate truth of Shiv Shakti, and the science of Naad Brahma as described in Vedas."
    },
    spotifyUrl: "https://open.spotify.com/episode/14xZcTys1H6xpx1UfNP4HG",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-08-20",
    duration: "6:00",
    category: "spirituality",
    episode: 6,
    season: 1
  },
  {
    id: "tridev-ki-utpatti",
    title: {
      hi: "त्रिदेव की उत्पत्ति कैसे हुई?",
      en: "How was Tridev Created?"
    },
    description: {
      hi: "त्रिदेव (ब्रह्मा, विष्णु, महेश) की उत्पत्ति का बिग बैंग थ्योरी और कॉस्मिक एनर्जी से संबंध। वैदिक ज्ञान और आधुनिक विज्ञान का समन्वय।",
      en: "The connection between Tridev (Brahma, Vishnu, Mahesh) creation, Big Bang Theory, and Cosmic Energy. A synthesis of Vedic knowledge and modern science."
    },
    spotifyUrl: "https://open.spotify.com/episode/7DcZYShSo1nvXQ7kjcdT5k",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-08-15",
    duration: "5:00",
    category: "science-spirituality",
    episode: 5,
    season: 1
  },
  {
    id: "devi-urja",
    title: {
      hi: "क्या देवी ही है ब्रह्मांड की मूल ऊर्जा?",
      en: "Is Devi the Fundamental Energy of the Universe?"
    },
    description: {
      hi: "आदि शक्ति और क्वांटम साइंस का संबंध, कुंडलिनी जागरण के वैज्ञानिक लक्षण, और ऊर्जा विज्ञान का रहस्य।",
      en: "The connection between Adi Shakti and Quantum Science, scientific symptoms of Kundalini awakening, and the mystery of energy science."
    },
    spotifyUrl: "https://open.spotify.com/episode/05UATn2ob9Fr6RzYoFtdW8",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-08-08",
    duration: "4:00",
    category: "science-spirituality",
    episode: 4,
    season: 1
  },
  {
    id: "om-big-bang",
    title: {
      hi: "क्या ॐ ही बिग बैंग था?",
      en: "Was OM the Big Bang?"
    },
    description: {
      hi: "वेद, क्वांटम फिजिक्स और नासा के डेटा के ज़रिए ब्रह्मांड के जन्म का अद्भुत रहस्य। सनातन विज्ञान और आधुनिक साइंस का मिलन।",
      en: "The amazing mystery of universe creation through Vedas, Quantum Physics, and NASA data. A union of Sanatan science and modern science."
    },
    spotifyUrl: "https://open.spotify.com/episode/2h3w9gAWBjHVO5qVOCLqOB",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-07-31",
    duration: "4:00",
    category: "science-spirituality",
    episode: 3,
    season: 1
  },
  {
    id: "sankh-science",
    title: {
      hi: "शंख बजाने के वैज्ञानिक कारण और फायदे",
      en: "Scientific Reasons and Benefits of Blowing Shankh"
    },
    description: {
      hi: "शंख की ध्वनि का शरीर, मन और वातावरण पर प्रभाव। सोनिक थेरेपी और पॉजिटिव एनर्जी का संबंध।",
      en: "Effects of Shankh sound on body, mind, and environment. The connection between sonic therapy and positive energy."
    },
    spotifyUrl: "https://open.spotify.com/episode/34kckPvf8AxrotVePAKY4d",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-07-11",
    duration: "3:00",
    category: "science-spirituality",
    episode: 2,
    season: 1
  },
  {
    id: "dopamine-detox",
    title: {
      hi: "डोपामाइन डिटॉक्स: रील्स – मनोरंजन या माइंड कंट्रोल?",
      en: "Dopamine Detox: Reels – Entertainment or Mind Control?"
    },
    description: {
      hi: "इंस्टाग्राम रील्स का दिमाग पर प्रभाव, डोपामाइन एडिक्शन और डिजिटल डिस्ट्रैक्शन। सनातन भारत का ध्यान और विज्ञान।",
      en: "Impact of Instagram Reels on the mind, dopamine addiction, and digital distraction. Meditation and science of Sanatan Bharat."
    },
    spotifyUrl: "https://open.spotify.com/episode/2D34FME3vEpuXBapBpp5vr",
    youtubeUrl: "https://youtube.com/@chhupahuabharat",
    date: "2023-07-01",
    duration: "3:00",
    category: "modern-lifestyle",
    episode: 1,
    season: 1
  }
];

export const podcastCategories = {
  "science-spirituality": {
    hi: "विज्ञान और अध्यात्म",
    en: "Science and Spirituality"
  },
  "spirituality": {
    hi: "अध्यात्म",
    en: "Spirituality"
  },
  "modern-lifestyle": {
    hi: "आधुनिक जीवनशैली",
    en: "Modern Lifestyle"
  }
};