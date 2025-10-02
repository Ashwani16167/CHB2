import Background3D from '../components/Background3D'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <main 
      className="min-h-screen relative chb-spiritual-background" 
      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <Background3D />
      <div className="relative z-10 container mx-auto">
        <Hero />
        
        <div className="px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/podcasts" className="chb-btn-saffron font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              🎧 पॉडकास्ट सुनें
            </a>
            <a href="/ebooks" className="chb-btn-green font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              📚 ई-बुक्स पढ़ें
            </a>
            <a href="/contact" className="chb-btn-outline font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              संपर्क करें
            </a>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl text-center mb-8 text-gray-800 dark:text-white">हमसे जुड़ें</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://chat.whatsapp.com/DQQdqhLp12t18k0Bfj8BaK" target="_blank" rel="noopener noreferrer" 
               className="chb-btn-green px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              WhatsApp 💬
            </a>
            <a href="https://www.instagram.com/chhupahuabharat/" target="_blank" rel="noopener noreferrer"
               className="chb-btn-saffron px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              Instagram 📷
            </a>
            <a href="https://www.youtube.com/@ChhupaHuaBharat" target="_blank" rel="noopener noreferrer"
               className="chb-btn-saffron px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              YouTube 📺
            </a>
            <a href="https://open.spotify.com/show/2lU5VLDmjg44tMa7pP1GhF" target="_blank" rel="noopener noreferrer"
               className="chb-btn-green px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              Spotify 🎵
            </a>
            <a href="https://music.amazon.in/podcasts/a63dd832-5e05-4dcd-8a2c-3e9a6fd10e5c/chhupa-hua-bharat" target="_blank" rel="noopener noreferrer"
               className="chb-btn-navy px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              Amazon Music 🎶
            </a>
            <a href="https://www.jiosaavn.com/shows/chhupa-hua-bharat/1/K3pWhtIE58w_" target="_blank" rel="noopener noreferrer"
               className="chb-btn-navy px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
              JioSaavn 🎧
            </a>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="feature-card glass-card bg-white/90 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 p-6 rounded-xl shadow-xl">
            <div className="text-4xl mb-4">🎙️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">पॉडकास्ट</h3>
            <p className="text-gray-700 dark:text-gray-300">
              साप्ताहिक पॉडकास्ट में सुनें भारतीय ज्ञान और आधुनिक विज्ञान की गहरी चर्चा
            </p>
          </div>
          
          <div className="feature-card glass-card bg-white/90 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 p-6 rounded-xl shadow-xl">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">ई-बुक्स</h3>
            <p className="text-gray-700 dark:text-gray-300">
              गहन शोध पर आधारित पुस्तकें और ग्रंथ पढ़ें
            </p>
          </div>
          
          <div className="feature-card glass-card bg-white/90 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-white/20 p-6 rounded-xl shadow-xl">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">लेख</h3>
            <p className="text-gray-700 dark:text-gray-300">
              नियमित लेख और शोध पत्र पढ़ें
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
