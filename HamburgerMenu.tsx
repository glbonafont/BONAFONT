import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../translations';

interface HamburgerMenuProps {
  trends: Array<{ id: number; title: string }>;
  onAboutClick: () => void;
  onLanguageChange: (language: Language) => void;
  currentLanguage: Language;
  translations: any;
}

export default function HamburgerMenu({ trends, onAboutClick, onLanguageChange, currentLanguage, translations }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: number) => {
    const element = document.getElementById(`trend-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    setIsOpen(false);
    onAboutClick();
  };

  const handleLanguageChange = (language: Language) => {
    setIsOpen(false);
    onLanguageChange(language);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 border border-white"
        aria-label="Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            <nav className="text-center">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={scrollToTop}
                className="block w-full mb-8 text-4xl md:text-6xl tracking-tighter hover:text-white/50 transition-colors duration-300"
                style={{ fontWeight: 200 }}
              >
                Home
              </motion.button>

              {trends.map((trend, index) => (
                <motion.button
                  key={trend.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => scrollToSection(trend.id)}
                  className="block w-full mb-8 text-4xl md:text-6xl tracking-tighter hover:text-white/50 transition-colors duration-300"
                  style={{ fontWeight: 200 }}
                >
                  <span className="text-white/40 mr-4">{String(trend.id).padStart(2, '0')}</span>
                  {trend.title}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + trends.length * 0.1 }}
                onClick={handleAboutClick}
                className="block w-full mb-8 text-4xl md:text-6xl tracking-tighter hover:text-white/50 transition-colors duration-300"
                style={{ fontWeight: 200 }}
              >
                {translations.menu.about}
              </motion.button>

              {/* Torna a l'índex de Bonafont Trends (tots els anys) */}
              <motion.a
                href="../"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (trends.length + 1) * 0.1 }}
                className="block w-full mb-8 text-4xl md:text-6xl tracking-tighter hover:text-white/50 transition-colors duration-300"
                style={{ fontWeight: 200 }}
              >
                {translations.menu.years}
              </motion.a>

              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (trends.length + 2) * 0.1 }}
                className="mt-16 pt-8 border-t border-white/20"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Globe size={20} className="text-white/40" />
                  <span className="text-xl text-white/40 tracking-wider">{translations.menu.language}</span>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => handleLanguageChange('ca')}
                    className={`text-2xl tracking-wider transition-all duration-300 ${
                      currentLanguage === 'ca' 
                        ? 'text-white scale-110' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    CAT
                  </button>
                  <div className="w-px h-8 bg-white/20" />
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`text-2xl tracking-wider transition-all duration-300 ${
                      currentLanguage === 'es' 
                        ? 'text-white scale-110' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    ESP
                  </button>
                  <div className="w-px h-8 bg-white/20" />
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`text-2xl tracking-wider transition-all duration-300 ${
                      currentLanguage === 'en' 
                        ? 'text-white scale-110' 
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}