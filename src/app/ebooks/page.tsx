export default function EbooksPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-hindi text-orange-600 mb-4">
            ई-बुक्स और किताबें
          </h1>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400">
            प्राचीन ज्ञान और आधुनिक विज्ञान की पुस्तकें
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-6xl">📚</span>
            </div>
            <h3 className="text-xl font-hindi font-bold mb-2">सनातन विज्ञान के रहस्य</h3>
            <p className="text-sm font-hindi text-gray-500 mb-2">लेखक: वीरू विश्वकर्मा</p>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              प्राचीन भारतीय ज्ञान और आधुनिक विज्ञान के बीच के संबंधों की खोज
            </p>
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                डाउनलोड करें
              </button>
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Preview
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-6xl">🧘</span>
            </div>
            <h3 className="text-xl font-hindi font-bold mb-2">भक्ति और बुद्धि का मेल</h3>
            <p className="text-sm font-hindi text-gray-500 mb-2">लेखक: वीरू विश्वकर्मा</p>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              कैसे आध्यात्म और तर्क एक साथ चल सकते हैं
            </p>
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                डाउनलोड करें
              </button>
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Preview
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white text-6xl">🔬</span>
            </div>
            <h3 className="text-xl font-hindi font-bold mb-2">वैदिक गणित की आधुनिक व्याख्या</h3>
            <p className="text-sm font-hindi text-gray-500 mb-2">लेखक: वीरू विश्वकर्मा</p>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              प्राचीन गणितीय सूत्रों का आधुनिक विज्ञान में प्रयोग
            </p>
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                डाउनलोड करें
              </button>
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                Preview
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            ← वापस होम
          </a>
        </div>
      </div>
    </main>
  );
}
