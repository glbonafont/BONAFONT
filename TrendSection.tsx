import { motion, useTransform, MotionValue } from 'motion/react';
import { useRef, useState } from 'react';
import ImpactModal from './ImpactModal';
import SignalsModal from './SignalsModal';

interface Subtopic {
  id: string;
  title: string;
  description: string;
}

interface Trend {
  id: number;
  title: string;
  image: string;
  subtopics: Subtopic[];
}

interface TrendSectionProps {
  trend: Trend;
  index: number;
  scrollProgress: MotionValue<number>;
  translations: any;
}

export default function TrendSection({ trend, index, scrollProgress, translations }: TrendSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [openSignalsModalId, setOpenSignalsModalId] = useState<string | null>(null);

  // Calculate parallax values based on section position
  const inputRange = [
    (index * 0.25),
    (index * 0.25) + 0.125,
    (index * 0.25) + 0.25
  ];

  const imageY = useTransform(scrollProgress, inputRange, [100, 0, -100]);
  const imageScale = useTransform(scrollProgress, inputRange, [1.2, 1, 0.9]);
  const opacity = useTransform(scrollProgress, inputRange, [0, 1, 0.3]);

  return (
    <section
      id={`trend-${trend.id}`}
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center border-t border-white/10 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${trend.image})`,
            filter: 'grayscale(100%) contrast(1.2)',
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32">
        {/* Trend Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Number */}
          <div className="relative mb-12">
            <motion.div
              className="absolute -left-4 top-0 text-[20vw] opacity-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              {trend.id}
            </motion.div>
            
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-7xl md:text-9xl opacity-40 relative z-10"
            >
              {trend.id}
            </motion.span>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[8vw] md:text-[6vw] leading-none tracking-tighter max-w-5xl"
          >
            {trend.title}
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-white mt-12 origin-left"
            style={{ width: '40%' }}
          />
        </motion.div>

        {/* Subtopics Grid */}
        <div className="space-y-32">
          {trend.subtopics.map((subtopic, subIndex) => {
            const subtopicIsEven = subIndex % 2 === 0;
            
            return (
              <motion.div
                key={subtopic.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: subIndex * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  subtopicIsEven ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Subtopic Content */}
                <div className={subtopicIsEven ? 'md:col-start-1' : 'md:col-start-2'}>
                  {/* Subtopic Number */}
                  <motion.div
                    initial={{ opacity: 0, x: subtopicIsEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                  >
                    <span className="text-5xl md:text-6xl opacity-30">
                      {subtopic.id}
                    </span>
                  </motion.div>

                  {/* Subtopic Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: subtopicIsEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-5xl leading-tight tracking-tight mb-8"
                  >
                    {subtopic.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                      {subtopic.description}
                    </p>
                  </motion.div>

                  {/* Signals Button - Hidden for now */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="mt-8"
                  >
                    <button
                      onClick={() => setOpenSignalsModalId(subtopic.id)}
                      className="flex flex-col items-start gap-4 cursor-pointer hover:opacity-70 transition-opacity group"
                    >
                      <span className="text-white/40 text-sm tracking-widest group-hover:text-white/60 transition-colors">
                        {translations.signalsButton || 'SENYALS'}
                      </span>
                      <motion.div 
                        className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                        animate={{ scaleY: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </button>
                  </motion.div> */}

                  {/* Impact Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-8"
                  >
                    <button
                      onClick={() => setOpenModalId(subtopic.id)}
                      className="flex flex-col items-start gap-4 cursor-pointer hover:opacity-70 transition-opacity group"
                    >
                      <span className="text-white/40 text-sm tracking-widest group-hover:text-white/60 transition-colors">
                        {translations.impactButton}
                      </span>
                      <motion.div 
                        className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                        animate={{ scaleY: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </button>
                  </motion.div>

                  {/* Decorative Element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className={`h-px bg-white/20 mt-8 ${
                      subtopicIsEven ? 'origin-left' : 'origin-right'
                    }`}
                    style={{ width: '60%' }}
                  />
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`${subtopicIsEven ? 'md:col-start-2' : 'md:col-start-1'} relative`}
                >
                  <div className="relative aspect-square">
                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border border-white/20"
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="text-center">
                        <motion.div
                          className="text-8xl md:text-9xl opacity-10"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {subtopic.id}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-32 origin-center"
        />
      </div>

      {/* Floating Number Indicator */}
      
      {/* Modals for each subtopic */}
      {trend.subtopics.map((subtopic) => (
        <ImpactModal
          key={subtopic.id}
          isOpen={openModalId === subtopic.id}
          onClose={() => setOpenModalId(null)}
          subtopicId={subtopic.id}
          subtopicTitle={subtopic.title}
          translations={translations}
        />
      ))}
      {trend.subtopics.map((subtopic) => (
        <SignalsModal
          key={subtopic.id}
          isOpen={openSignalsModalId === subtopic.id}
          onClose={() => setOpenSignalsModalId(null)}
          subtopicId={subtopic.id}
          subtopicTitle={subtopic.title}
          translations={translations}
        />
      ))}
    </section>
  );
}