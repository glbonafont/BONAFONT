import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import profileImage from 'figma:asset/9a7958c8317da03501c6210919b2c201ed87d8ab.png';

interface AboutPageProps {
  onClose: () => void;
  translations: any;
}

export default function AboutPage({ onClose, translations }: AboutPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 overflow-y-auto"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onClose}
        className="fixed top-8 left-8 z-10 flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
      >
        <ArrowLeft size={24} />
        <span className="text-sm tracking-widest">{translations.about.back}</span>
      </motion.button>

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-4xl w-full">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-[12vw] md:text-[8vw] leading-none tracking-tighter mb-8">
              {translations.about.title}
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-white origin-left"
              style={{ width: '40%' }}
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-12"
          >
            {/* Image and Name Section - Two columns */}
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
              {/* Left Column: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative h-full overflow-hidden"
              >
                <img
                  src={profileImage}
                  alt={translations.about.name}
                  className="w-full h-full object-cover grayscale rounded-[20px]"
                />
                
              </motion.div>

              {/* Right Column: Name */}
              <div>
                <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
                  {translations.about.name}
                </h2>
                <p className="text-xl md:text-2xl text-white/40 leading-relaxed" style={{ fontWeight: 200 }}>
                  {translations.about.title_role}
                </p>
                <div className="h-px bg-white/20 w-1/3 mt-6" />
              </div>
            </div>

            {/* Bio Text - Full width */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-white/80 leading-relaxed">
                {translations.about.bio1}
              </p>

              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                {translations.about.bio2}
              </p>

              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                {translations.about.bio3}
              </p>

              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                {translations.about.bio4}
              </p>

              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                {translations.about.bio5}
              </p>

              {translations.about.bio6 && (
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                  {translations.about.bio6}
                </p>
              )}

              {/* Innovation Section */}
              <div className="pt-12 mt-8 border-t border-white/10">
                <h3 className="text-3xl md:text-4xl tracking-tight mb-8">
                  {translations.about.innovationTitle}
                </h3>
                
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-6">
                  {translations.about.innovationIntro}
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="text-xl md:text-2xl text-white/60 leading-relaxed pl-8 relative">
                    <span className="absolute left-0">•</span>
                    {translations.about.innovationPoint1}
                  </li>
                  <li className="text-xl md:text-2xl text-white/60 leading-relaxed pl-8 relative">
                    <span className="absolute left-0">•</span>
                    {translations.about.innovationPoint2}
                  </li>
                  <li className="text-xl md:text-2xl text-white/60 leading-relaxed pl-8 relative">
                    <span className="absolute left-0">•</span>
                    {translations.about.innovationPoint3}
                  </li>
                </ul>

                <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                  {translations.about.innovationConclusion}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="pt-16 mt-12 border-t border-white/10"
          >
            <h3 className="text-3xl md:text-4xl tracking-tight mb-8">
              {translations.about.contactTitle}
            </h3>
            <p className="text-xl text-white/60 mb-8">
              {translations.about.contactText}
            </p>
            <a
              href="https://wa.me/34626692782"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="text-lg tracking-wider">{translations.about.contactButton}</span>
              <motion.div
                className="w-px h-6 bg-white/40 group-hover:bg-black transition-colors"
                animate={{ scaleY: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}