import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImpactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtopicId: string;
  subtopicTitle: string;
  translations: any;
}

export default function ImpactModal({ isOpen, onClose, subtopicId, subtopicTitle, translations }: ImpactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <span className="text-2xl text-white/40 mb-4 block">{subtopicId}</span>
                  <h3 className="text-4xl md:text-5xl tracking-tight leading-tight">
                    {subtopicTitle}
                  </h3>
                </div>

                {/* Decorative line */}
                <div className="h-px bg-white/20 w-1/2" />

                {/* Impact text */}
                <div className="space-y-6">
                  <h4 className="text-2xl md:text-3xl tracking-tight text-white/80">
                    {translations.modal.title}
                  </h4>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {translations.modal.text1}
                  </p>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                    {translations.modal.text2}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="https://wa.me/34626692782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 border border-white/40 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <span className="text-lg tracking-wider">{translations.modal.contactButton}</span>
                    <motion.div
                      className="w-px h-6 bg-white/40 group-hover:bg-black transition-colors"
                      animate={{ scaleY: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}