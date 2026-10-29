import { motion } from 'motion/react';
import { useState } from 'react';

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

interface InteractiveCirclesProps {
  trends: Trend[];
  onNavigate: (id: number) => void;
}

export default function InteractiveCircles({ trends, onNavigate }: InteractiveCirclesProps) {
  const [hoveredTrend, setHoveredTrend] = useState<number | null>(null);
  const [hoveredSubtopic, setHoveredSubtopic] = useState<string | null>(null);

  // Calculate positions for trends (inner circle)
  const getTrendPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radius = 25; // percentage from center
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  // Calculate positions for subtopics (outer circle)
  const getSubtopicPosition = (trendIndex: number, subtopicIndex: number, totalTrends: number, subtopicsPerTrend: number) => {
    // Calculate global index for this subtopic
    const globalSubtopicIndex = trendIndex * subtopicsPerTrend + subtopicIndex;
    const totalSubtopics = totalTrends * subtopicsPerTrend;
    
    // Distribute evenly around the full circle
    const angle = (globalSubtopicIndex * 360) / totalSubtopics - 90; // Start from top
    const radius = 42; // percentage from center
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, angle };
  };

  // Get connection lines between subtopic and other trends
  const getConnectionLines = (currentTrendId: number, subtopicId: string) => {
    const lines: Array<{ from: { x: number; y: number }; to: { x: number; y: number } }> = [];
    
    const currentTrendIndex = currentTrendId - 1;
    const subtopicIndex = parseInt(subtopicId.split('.')[1]) - 1;
    const fromPos = getSubtopicPosition(currentTrendIndex, subtopicIndex, trends.length, 2);

    // Connect to all other trends
    trends.forEach((trend, index) => {
      if (trend.id !== currentTrendId) {
        const toPos = getTrendPosition(index, trends.length);
        lines.push({
          from: { x: fromPos.x, y: fromPos.y },
          to: { x: toPos.x, y: toPos.y }
        });
      }
    });

    return lines;
  };

  return (
    <div className="relative w-full max-w-3xl aspect-square mx-auto">
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <radialGradient id="lineGradient">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Outer circle guide */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="42%"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.15"
          strokeDasharray="4 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner circle guide */}
        <circle
          cx="50%"
          cy="50%"
          r="25%"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />

        {/* Connection lines when hovering subtopic */}
        {hoveredSubtopic && trends.map((trend) => {
          const [trendIdStr, subtopicIdStr] = hoveredSubtopic.split('-');
          const trendId = parseInt(trendIdStr);
          
          if (trend.id === trendId) {
            const lines = getConnectionLines(trendId, hoveredSubtopic.replace(`${trendId}-`, ''));
            return lines.map((line, idx) => (
              <motion.line
                key={`connection-${hoveredSubtopic}-${idx}`}
                x1={`${line.from.x}%`}
                y1={`${line.from.y}%`}
                x2={`${line.to.x}%`}
                y2={`${line.to.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              />
            ));
          }
          return null;
        })}

        {/* Mesh pattern - connecting nearby elements */}
        {trends.map((trend, trendIdx) => 
          trend.subtopics.map((subtopic, subIdx) => {
            const fromPos = getSubtopicPosition(trendIdx, subIdx, trends.length, 2);
            const trendPos = getTrendPosition(trendIdx, trends.length);
            
            return (
              <motion.line
                key={`mesh-${trend.id}-${subtopic.id}`}
                x1={`${fromPos.x}%`}
                y1={`${fromPos.y}%`}
                x2={`${trendPos.x}%`}
                y2={`${trendPos.y}%`}
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                strokeDasharray="2 4"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: hoveredTrend === trend.id ? 1 : 0.3,
                  strokeOpacity: hoveredTrend === trend.id ? 0.3 : 0.1
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })
        )}
      </svg>

      {/* Trends (inner circle) */}
      {trends.map((trend, index) => {
        const pos = getTrendPosition(index, trends.length);
        
        return (
          <motion.div
            key={trend.id}
            className="absolute cursor-pointer group"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
            onMouseEnter={() => setHoveredTrend(trend.id)}
            onMouseLeave={() => setHoveredTrend(null)}
            onClick={() => onNavigate(trend.id)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              style={{
                width: '70px',
                height: '70px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%'
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ 
                opacity: hoveredTrend === trend.id ? 0.2 : 0,
                scale: hoveredTrend === trend.id ? 1.5 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Main circle */}
            <motion.div
              className="relative bg-black border-2 border-white rounded-full flex items-center justify-center"
              style={{ width: '70px', height: '70px' }}
              whileHover={{ scale: 1.15 }}
              animate={{
                borderColor: hoveredTrend === trend.id ? '#ffffff' : 'rgba(255,255,255,0.6)',
                backgroundColor: hoveredTrend === trend.id ? '#ffffff' : '#000000'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-3xl"
                animate={{
                  color: hoveredTrend === trend.id ? '#000000' : '#ffffff',
                  scale: hoveredTrend === trend.id ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {trend.id}
              </motion.span>
            </motion.div>

            {/* Trend title on hover */}
            <motion.div
              className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: 1,
                y: 0
              }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              style={{ pointerEvents: 'none' }}
            >
              <motion.div 
                className="px-4 py-2 text-sm max-w-xs text-center"
                animate={{
                  backgroundColor: hoveredTrend === trend.id ? '#ffffff' : 'transparent',
                  color: hoveredTrend === trend.id ? '#000000' : '#ffffff'
                }}
                transition={{ duration: 0.3 }}
              >
                {trend.title}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Subtopics (outer circle) */}
      {trends.map((trend, trendIndex) =>
        trend.subtopics.map((subtopic, subtopicIndex) => {
          const pos = getSubtopicPosition(trendIndex, subtopicIndex, trends.length, trend.subtopics.length);
          const subtopicKey = `${trend.id}-${subtopic.id}`;
          
          return (
            <motion.div
              key={subtopicKey}
              className="absolute cursor-pointer group"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 5
              }}
              onMouseEnter={() => {
                setHoveredSubtopic(subtopicKey);
                setHoveredTrend(trend.id);
              }}
              onMouseLeave={() => {
                setHoveredSubtopic(null);
                setHoveredTrend(null);
              }}
              onClick={() => onNavigate(trend.id)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + trendIndex * 0.1 + subtopicIndex * 0.05, duration: 0.5 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                style={{
                  width: '50px',
                  height: '50px',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%'
                }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: hoveredSubtopic === subtopicKey ? 0.15 : 0,
                  scale: hoveredSubtopic === subtopicKey ? 1.6 : 1
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Main circle */}
              <motion.div
                className="relative bg-neutral-900 border border-white rounded-full flex items-center justify-center"
                style={{ width: '50px', height: '50px' }}
                whileHover={{ scale: 1.2 }}
                animate={{
                  borderColor: hoveredSubtopic === subtopicKey ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  borderWidth: hoveredSubtopic === subtopicKey ? '2px' : '1px'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-xs"
                  animate={{
                    opacity: hoveredSubtopic === subtopicKey ? 1 : 0.6
                  }}
                >
                  {subtopic.id}
                </motion.span>
              </motion.div>

              {/* Subtopic title on hover */}
              <motion.div
                className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: (hoveredSubtopic === subtopicKey) || (!hoveredSubtopic && hoveredTrend === trend.id) ? 1 : 0,
                  y: (hoveredSubtopic === subtopicKey) || (!hoveredSubtopic && hoveredTrend === trend.id) ? 0 : -10
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: 'none', width: '200px' }}
              >
                <motion.div 
                  className="px-3 py-2 text-xs text-center"
                  animate={{
                    backgroundColor: hoveredSubtopic === subtopicKey ? '#ffffff' : 'transparent',
                    color: hoveredSubtopic === subtopicKey ? '#000000' : '#ffffff'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {subtopic.title}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })
      )}

      {/* Center point */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 20 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Main Title in Center */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl tracking-tighter mb-1 leading-none"
            animate={{ 
              letterSpacing: ['0.05em', '-0.05em', '0.05em']
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            BONAFONT
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl tracking-wider opacity-60"
            style={{ fontWeight: 200 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
          >
            trends <span style={{ fontWeight: 600 }}>2026</span>
          </motion.h2>
        </motion.div>
        
        {/* Pulsating dot behind text */}
        <motion.div
          className="absolute w-3 h-3 bg-black rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}