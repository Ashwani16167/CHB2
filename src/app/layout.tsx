import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "छुपा हुआ भारत - जहाँ भक्ति और विज्ञान का मिलन होता है",
    template: "%s | छुपा हुआ भारत"
  },
  description: "प्राचीन ज्ञान और आधुनिक विज्ञान के सुंदर मेल के माध्यम से भारत के छुपे हुए खजानों की खोज करें।",
  keywords: [
    "भारत", "अध्यात्म", "विज्ञान", "पॉडकास्ट", "ई-बुक्स", "वीरू विश्वकर्मा",
    "India", "spirituality", "science", "podcasts", "ebooks", "Veeru Vishwakarma"
  ],
  authors: [{ name: "Veeru Vishwakarma" }],
  creator: "Veeru Vishwakarma",
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://chhupahuabharat.com',
    title: 'छुपा हुआ भारत',
    description: 'प्राचीन ज्ञान और आधुनिक विज्ञान के सुंदर मेल के माध्यम से भारत के छुपे हुए खजानों की खोज करें।',
    siteName: 'छुपा हुआ भारत',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen text-black dark:text-white">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
