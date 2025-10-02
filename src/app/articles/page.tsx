export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "मंदिर वास्तुकला में छुपे वैज्ञानिक रहस्य",
      excerpt: "कैसे प्राचीन मंदिरों की वास्तुकला में आधुनिक भौतिक विज्ञान के सिद्धांत छुपे हैं...",
      date: "15 दिसंबर 2024",
      readTime: "5 मिनट",
      category: "वास्तुकला",
      image: "🏛️"
    },
    {
      id: 2,
      title: "आयुर्वेद और आधुनिक चिकित्सा का तालमेल",
      excerpt: "प्राचीन आयुर्वेदिक सिद्धांतों की आधुनिक वैज्ञानिक पुष्टि...",
      date: "10 दिसंबर 2024",
      readTime: "7 मिनट",
      category: "चिकित्सा",
      image: "🌿"
    },
    {
      id: 3,
      title: "सूर्य नमस्कार का वैज्ञानिक आधार",
      excerpt: "योग की इस प्राचीन पद्धति के स्वास्थ्य पर वैज्ञानिक प्रभाव...",
      date: "5 दिसंबर 2024",
      readTime: "4 मिनट",
      category: "योग",
      image: "☀️"
    },
    {
      id: 4,
      title: "वेद और क्वांटम फिजिक्स के समानताएं",
      excerpt: "प्राचीन वैदिक ज्ञान और आधुनिक भौतिक विज्ञान के चमत्कारी संयोग...",
      date: "1 दिसंबर 2024",
      readTime: "8 मिनट",
      category: "विज्ञान",
      image: "⚛️"
    },
    {
      id: 5,
      title: "प्राचीन भारतीय खगोल विज्ञान की उपलब्धियां",
      excerpt: "आर्यभट्ट से लेकर ब्रह्मगुप्त तक - भारतीय खगोल विज्ञान की महान परंपरा...",
      date: "25 नवंबर 2024",
      readTime: "6 मिनट",
      category: "खगोल विज्ञान",
      image: "🌟"
    },
    {
      id: 6,
      title: "संस्कृत भाषा और कंप्यूटर प्रोग्रामिंग",
      excerpt: "क्यों NASA और अन्य संस्थान संस्कृत को सबसे उपयुक्त प्रोग्रामिंग भाषा मानते हैं...",
      date: "20 नवंबर 2024",
      readTime: "5 मिनट",
      category: "तकनीक",
      image: "💻"
    }
  ];

  const categories = ["सभी", "वास्तुकला", "चिकित्सा", "योग", "विज्ञान", "खगोल विज्ञान", "तकनीक"];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-hindi text-orange-600 mb-4">
            लेख और शोध
          </h1>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400">
            प्राचीन ज्ञान की आधुनिक व्याख्या
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-hindi border border-orange-300 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-6xl">{article.image}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-100 text-orange-600 text-xs font-hindi px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs font-hindi">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-hindi font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="font-hindi text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs font-hindi">
                    {article.date}
                  </span>
                  <button className="text-orange-500 hover:text-orange-600 font-hindi text-sm font-bold">
                    पूरा पढ़ें →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors mb-4">
            और लेख लोड करें
          </button>
          <br />
          <a href="/" className="text-orange-500 hover:text-orange-600 font-bold font-hindi">
            ← वापस होम
          </a>
        </div>
      </div>
    </main>
  );
}
