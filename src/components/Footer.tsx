import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://chat.whatsapp.com/DQQdqhLp12t18k0Bfj8BaK",
      icon: "💬"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/chhupahuabharat/",
      icon: "📷"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ChhupaHuaBharat", 
      icon: "📺"
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/2lU5VLDmjg44tMa7pP1GhF",
      icon: "🎵"
    }
  ]

  const quickLinks = [
    { href: '/podcasts', label: 'पॉडकास्ट' },
    { href: '/ebooks', label: 'ई-बुक्स' },
    { href: '/articles', label: 'लेख' },
    { href: '/about', label: 'हमारे बारे में' },
    { href: '/contact', label: 'संपर्क' }
  ]

  return (
    <footer className="bg-gray-900 text-white" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-2xl font-bold text-orange-500">
                छुपा हुआ भारत
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              प्राचीन भारतीय ज्ञान और संस्कृति के छुपे हुए रत्नों को उजागर करना। 
              वैज्ञानिक दृष्टिकोण के साथ हमारी महान विरासत को समझना।
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-orange-500 transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-500">
              संपर्क जानकारी
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                ईमेल: contact@chhupahuabharat.com
              </p>
              <p>
                सहयोग: collaborate@chhupahuabharat.com
              </p>
              <p>
                उत्तर का समय: 24-48 घंटे
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} छुपा हुआ भारत। सभी अधिकार सुरक्षित।
            </p>
            <p className="text-gray-400 text-center md:text-right mt-2 md:mt-0">
              वीरू विश्वकर्मा द्वारा निर्मित
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
