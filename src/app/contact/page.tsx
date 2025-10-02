export default function ContactPage() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://chat.whatsapp.com/DQQdqhLp12t18k0Bfj8BaK",
      description: "समुदाय में जुड़ें और चर्चा करें"
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://www.instagram.com/chhupahuabharat/",
      description: "दैनिक अपडेट और तस्वीरें"
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "https://www.youtube.com/@ChhupaHuaBharat",
      description: "वीडियो और लाइव सत्र"
    },
    {
      name: "Spotify",
      icon: "🎵",
      url: "https://open.spotify.com/show/2lU5VLDmjg44tMa7pP1GhF",
      description: "पॉडकास्ट सुनें"
    },
    {
      name: "Amazon Music",
      icon: "🎶",
      url: "https://music.amazon.in/podcasts/a63dd832-5e05-4dcd-8a2c-3e9a6fd10e5c/chhupa-hua-bharat",
      description: "Amazon पर पॉडकास्ट"
    },
    {
      name: "JioSaavn",
      icon: "🎧",
      url: "https://www.jiosaavn.com/shows/chhupa-hua-bharat/1/K3pWhtIE58w_",
      description: "JioSaavn पर सुनें"
    }
  ];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-hindi text-orange-600 mb-4">
            संपर्क करें
          </h1>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400">
            हमसे जुड़ें और अपने विचार साझा करें
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-6">
              संदेश भेजें
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-hindi text-gray-700 dark:text-gray-300 mb-2">
                    नाम *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                    placeholder="अपना नाम लिखें"
                    required
                  />
                </div>
                <div>
                  <label className="block font-hindi text-gray-700 dark:text-gray-300 mb-2">
                    ईमेल *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                    placeholder="आपका ईमेल पता"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-hindi text-gray-700 dark:text-gray-300 mb-2">
                  विषय *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                  placeholder="संदेश का विषय"
                  required
                />
              </div>
              
              <div>
                <label className="block font-hindi text-gray-700 dark:text-gray-300 mb-2">
                  संदेश *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                  placeholder="अपना संदेश लिखें..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                संदेश भेजें
              </button>
            </form>
          </div>
          
          {/* Social Media Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-6">
              सोशल मीडिया पर फॉलो करें
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 hover:shadow-md transition-all"
                >
                  <div className="text-3xl">{link.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200">
                      {link.name}
                    </h3>
                    <p className="text-sm font-hindi text-gray-600 dark:text-gray-400">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-6">
              त्वरित संपर्क
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">📧</span>
                </div>
                <h3 className="font-hindi font-bold text-lg mb-2">ईमेल</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@chhupahuabharat.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">⏰</span>
                </div>
                <h3 className="font-hindi font-bold text-lg mb-2">उत्तर का समय</h3>
                <p className="font-hindi text-gray-600 dark:text-gray-400">
                  24-48 घंटे में
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-2xl">🗣️</span>
                </div>
                <h3 className="font-hindi font-bold text-lg mb-2">भाषा</h3>
                <p className="font-hindi text-gray-600 dark:text-gray-400">
                  हिंदी और अंग्रेजी
                </p>
              </div>
            </div>
          </div>
          
          {/* Collaboration */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-hindi font-bold mb-4">
              सहयोग के लिए आमंत्रण
            </h2>
            <p className="font-hindi text-lg mb-6">
              यदि आप भी भारतीय संस्कृति और ज्ञान के बारे में शोध करते हैं, तो हमसे जुड़ें। 
              साथ मिलकर हम भारत की महान विरासत को आगे बढ़ा सकते हैं।
            </p>
            <a
              href="mailto:collaborate@chhupahuabharat.com"
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              सहयोग के लिए संपर्क करें
            </a>
          </div>
          
          <div className="text-center mt-8">
            <a href="/" className="text-orange-500 hover:text-orange-600 font-bold font-hindi">
              ← वापस होम
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
