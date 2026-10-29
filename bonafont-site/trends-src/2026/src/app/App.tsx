import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import TrendSection from './components/TrendSection';
import HamburgerMenu from './components/HamburgerMenu';
import AboutPage from './components/AboutPage';
import { translations, Language } from './translations';

const trendImages = [
  'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGNvbW11bmljYXRpb24lMjBsZXR0ZXJzfGVufDF8fHx8MTc2NTAyNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1708519428320-2966405aa6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpdml0eSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUwMjY0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1757860090557-2196e39d3bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1MDI3MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1622503247445-cfe020cd0e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjQ5NzcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [showAbout, setShowAbout] = useState(false);
  const [language, setLanguage] = useState<Language>('ca');

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language') as Language;
    if (currentLanguage) {
      setLanguage(currentLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = translations[language];
  const trends = t.trends.map((trend, index) => ({
    ...trend,
    image: trendImages[index]
  }));

  return (
    <div ref={containerRef} className="bg-black text-white">
      <HamburgerMenu 
        trends={trends} 
        onAboutClick={() => setShowAbout(true)} 
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
        translations={t}
      />
      
      <Hero trends={trends} translations={t} />
      
      {trends.map((trend, index) => (
        <TrendSection 
          key={trend.id} 
          trend={trend} 
          index={index}
          scrollProgress={scrollYProgress}
          translations={t}
        />
      ))}

      {/* Footer */}
      <footer className="min-h-screen flex items-center justify-center border-t border-white/10">
        <div className="text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl mb-8 tracking-tighter">
              BONAFONT
            </h2>
            <p className="text-2xl md:text-3xl text-white/40 tracking-wider" style={{ fontWeight: 200 }}>
              {t.footer.subtitle}
            </p>
          </motion.div>
        </div>
      </footer>

      <AnimatePresence>
        {showAbout && <AboutPage onClose={() => setShowAbout(false)} translations={t} />}
      </AnimatePresence>
    </div>
  );
}