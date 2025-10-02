export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-hindi text-orange-600 mb-4">
            हमारे बारे में
          </h1>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400">
            छुपा हुआ भारत - प्राचीन ज्ञान की आधुनिक खोज
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-4">
              हमारा मिशन
            </h2>
            <p className="font-hindi text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              "छुपा हुआ भारत" का उद्देश्य भारत की प्राचीन सभ्यता, ज्ञान और संस्कृति के उन पहलुओं को उजागर करना है जो आज के युग में भी उतने ही प्रासंगिक हैं। हम वैज्ञानिक दृष्टिकोण के साथ प्राचीन ज्ञान का अध्ययन करते हैं।
            </p>
            <p className="font-hindi text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              हमारा लक्ष्य है कि हर भारतीय अपनी महान विरासत को समझे और गर्व के साथ आगे बढ़े।
            </p>
          </div>
          
          {/* About Veeru */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-5xl">👨‍🏫</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-4">
                  वीरू विश्वकर्मा
                </h2>
                <p className="font-hindi text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  मैं वीरू विश्वकर्मा हूँ, और मेरा जुनून है भारत की प्राचीन सभ्यता और ज्ञान को आधुनिक संदर्भ में समझना। 
                  मैं एक शोधकर्ता, लेखक और पॉडकास्टर हूँ जो वैदिक विज्ञान, आयुर्वेद, योग, और भारतीय दर्शन पर काम करता हूँ।
                </p>
                <p className="font-hindi text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  मेरा मानना है कि भारत के पास वह ज्ञान है जो आज की दुनिया की समस्याओं का समाधान कर सकता है। 
                  "छुपा हुआ भारत" के माध्यम से मैं इसी ज्ञान को आपके साथ साझा करता हूँ।
                </p>
              </div>
            </div>
          </div>
          
          {/* What We Do */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-6">
              हम क्या करते हैं
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-orange-600 text-2xl">🎙️</span>
                </div>
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">पॉडकास्ट</h3>
                  <p className="font-hindi text-gray-600 dark:text-gray-400">
                    नियमित पॉडकास्ट एपिसोड में प्राचीन ज्ञान की चर्चा
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-orange-600 text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">पुस्तकें</h3>
                  <p className="font-hindi text-gray-600 dark:text-gray-400">
                    गहन शोध पर आधारित पुस्तकों का प्रकाशन
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-orange-600 text-2xl">✍️</span>
                </div>
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">लेख</h3>
                  <p className="font-hindi text-gray-600 dark:text-gray-400">
                    नियमित लेख और शोध पत्र
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <span className="text-orange-600 text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">शिक्षा</h3>
                  <p className="font-hindi text-gray-600 dark:text-gray-400">
                    कार्यशालाएं और ऑनलाइन कोर्स
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-hindi font-bold text-orange-600 mb-6">
              हमारे सिद्धांत
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <p className="font-hindi text-lg text-gray-700 dark:text-gray-300">
                  <strong>वैज्ञानिक दृष्टिकोण:</strong> हर बात को तर्क और प्रमाण के साथ समझाना
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <p className="font-hindi text-lg text-gray-700 dark:text-gray-300">
                  <strong>सत्य की खोज:</strong> केवल सत्यापित जानकारी साझा करना
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <p className="font-hindi text-lg text-gray-700 dark:text-gray-300">
                  <strong>समावेशिता:</strong> सभी धर्म और विचारधाराओं का सम्मान
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <p className="font-hindi text-lg text-gray-700 dark:text-gray-300">
                  <strong>व्यावहारिकता:</strong> आज के युग में उपयोगी ज्ञान
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors mr-4">
              संपर्क करें
            </a>
            <a href="/" className="text-orange-500 hover:text-orange-600 font-bold font-hindi">
              ← वापस होम
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
