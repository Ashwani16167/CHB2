export default function PodcastsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-hindi text-orange-600 mb-4">
            पॉडकास्ट
          </h1>
          <p className="text-lg font-hindi text-gray-600 dark:text-gray-400">
            आध्यात्म और विज्ञान के अनूठे मेल को सुनें
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">हनुमान जी की शक्तियों का वैज्ञानिक विश्लेषण</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              भक्ति और वैज्ञानिक दृष्टिकोण का अनूठा मेल
            </p>
            <div className="flex gap-2">
              <a href="https://youtube.com/@chhupahuabharat" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                YouTube
              </a>
              <a href="https://open.spotify.com/show/06XoN5CPJllRhWW7YT4UU3" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Spotify
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">प्राचीन भारतीय गणित के चमत्कार</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              कैसे हमारे पूर्वजों ने गणित में नई खोजें कीं
            </p>
            <div className="flex gap-2">
              <a href="https://youtube.com/@chhupahuabharat" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                YouTube
              </a>
              <a href="https://open.spotify.com/show/06XoN5CPJllRhWW7YT4UU3" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Spotify
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-hindi font-bold mb-4">सनातन धर्म और खगोल विज्ञान</h3>
            <p className="font-hindi text-gray-600 dark:text-gray-400 mb-4">
              वेदों में छुपे खगोलीय रहस्य
            </p>
            <div className="flex gap-2">
              <a href="https://youtube.com/@chhupahuabharat" target="_blank" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                YouTube
              </a>
              <a href="https://open.spotify.com/show/06XoN5CPJllRhWW7YT4UU3" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Spotify
              </a>
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
