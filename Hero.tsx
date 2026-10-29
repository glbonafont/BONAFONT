import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import InteractiveCircles from './InteractiveCircles';

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

interface HeroProps {
  trends: Trend[];
  translations: any;
}

export default function Hero({ trends, translations }: HeroProps) {
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      const videoId = isMobile ? 'K0MyX5CikZo' : '_Sl8diqCAFw';
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.setPlaybackRate(0.6);
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isMobile]);

  const scrollToTrend = (id: number) => {
    const element = document.getElementById(`trend-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Rotating Earth Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ filter: 'grayscale(100%)' }}>
          <div
            id="youtube-player"
            ref={iframeRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              transform: 'scale(1.5)'
            }}
          />
        </div>
        
       
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Interactive Circles Index */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full z-10 hidden min-[600px]:block"
      >
        <InteractiveCircles trends={trends} onNavigate={scrollToTrend} />
      </motion.div>

      {/* Main Title - Visible on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-10 text-center min-[600px]:hidden"
      >
        <h1 className="text-7xl tracking-tighter mb-4">
          BONAFONT
        </h1>
        <p className="text-2xl text-white/40 tracking-wider" style={{ fontWeight: 200 }}>
          trends 2026
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-12 z-10"
      >
        <a href="#trend-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <span className="text-white/40 text-sm tracking-widest">{translations.hero.explore}</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}