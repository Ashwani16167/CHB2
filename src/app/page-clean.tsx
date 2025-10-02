export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-hindi text-orange-600 mb-4">
            छुपा हुआ भारत
          </h1>
          <p className="text-xl md:text-2xl font-hindi text-gray-700 dark:text-gray-300 mb-8">
            जहाँ भक्ति और विज्ञान का मिलन होता है
          </p>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
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
          <h2 className="text-2xl font-hindi text-center mb-8">हमसे जुड़ें</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a href="https://whatsapp.com/channel/0029VbB6DzRJf05bowVVfl23" target="_blank" className="flex items-center justify-center bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/chhupahuabharat?igsh=ZGc5aTg5OXRpdm83" target="_blank" className="flex items-center justify-center bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600 transition-colors">
              Instagram
            </a>
            <a href="https://youtube.com/@chhupahuabharat?si=9febVoyOzGb10MGe" target="_blank" className="flex items-center justify-center bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors">
              YouTube
            </a>
            <a href="https://open.spotify.com/show/06XoN5CPJllRhWW7YT4UU3?si=k2hjH_EYSViOUIXcs8977w" target="_blank" className="flex items-center justify-center bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
              Spotify
            </a>
            <a href="https://music.amazon.in/podcasts/b7b42549-18e4-4ddb-814a-5b5e91e97644/%F0%9F%8E%A7-chhupa-hua-bharat-%E2%80%93-bhakti-hi-vigyan" target="_blank" className="flex items-center justify-center bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700 transition-colors">
              Amazon Music
            </a>
            <a href="https://www.jiosaavn.com/shows/-chhupa-hua-bharat-%e2%80%93-bhakti-hi-vigyan.-/1/9yLYvynnX68_" target="_blank" className="flex items-center justify-center bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
              Jio Saavn
            </a>
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">पॉडकास्ट</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400">
              आध्यात्म और विज्ञान के अनूठे मेल को सुनें
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">ई-बुक्स</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400">
              प्राचीन ज्ञान और आधुनिक विज्ञान की पुस्तकें
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">लेख</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400">
              गहन अनुसंधान और विश्लेषण
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
