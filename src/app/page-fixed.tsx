export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
            छुपा हुआ भारत
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            जहाँ भक्ति और विज्ञान का मिलन होता है
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            प्राचीन ज्ञान और आधुनिक विज्ञान के सुंदर मेल के माध्यम से भारत के छुपे हुए खजानों की खोज करें।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/podcasts" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              🎧 पॉडकास्ट सुनें
            </a>
            <a href="/ebooks" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              📚 ई-बुक्स पढ़ें
            </a>
            <a href="/contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
              संपर्क करें
            </a>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-16">
          <h2 className="text-2xl text-center mb-8">हमसे जुड़ें</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://chat.whatsapp.com/DQQdqhLp12t18k0Bfj8BaK" target="_blank" rel="noopener noreferrer" 
               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
              WhatsApp 💬
            </a>
            <a href="https://www.instagram.com/chhupahuabharat/" target="_blank" rel="noopener noreferrer"
               className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors">
              Instagram 📷
            </a>
            <a href="https://www.youtube.com/@ChhupaHuaBharat" target="_blank" rel="noopener noreferrer"
               className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors">
              YouTube 📺
            </a>
            <a href="https://open.spotify.com/show/2lU5VLDmjg44tMa7pP1GhF" target="_blank" rel="noopener noreferrer"
               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              Spotify 🎵
            </a>
            <a href="https://music.amazon.in/podcasts/a63dd832-5e05-4dcd-8a2c-3e9a6fd10e5c/chhupa-hua-bharat" target="_blank" rel="noopener noreferrer"
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              Amazon Music 🎶
            </a>
            <a href="https://www.jiosaavn.com/shows/chhupa-hua-bharat/1/K3pWhtIE58w_" target="_blank" rel="noopener noreferrer"
               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
              JioSaavn 🎧
            </a>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎙️</div>
            <h3 className="text-xl font-bold mb-4">पॉडकास्ट</h3>
            <p className="text-gray-600 dark:text-gray-400">
              साप्ताहिक पॉडकास्ट में सुनें भारतीय ज्ञान और आधुनिक विज्ञान की गहरी चर्चा
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">ई-बुक्स</h3>
            <p className="text-gray-600 dark:text-gray-400">
              गहन शोध पर आधारित पुस्तकें और ग्रंथ पढ़ें
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-4">लेख</h3>
            <p className="text-gray-600 dark:text-gray-400">
              नियमित लेख और शोध पत्र पढ़ें
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
