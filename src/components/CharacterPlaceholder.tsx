import { motion } from 'framer-motion';
import { useState } from 'react';

interface CharacterPlaceholderProps {
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export function CharacterPlaceholder({ isVisible, onToggleVisibility }: CharacterPlaceholderProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          y: isHovered ? -10 : 0
        }}
        transition={{ duration: 0.3 }}
        className="character-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="character-platform" />
        <div className="character-animation-area" />
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">🧞‍♂️</div>
            <p className="text-lg font-semibold mb-2">3D Character</p>
            <div className="loading-dots character-idle">Coming soon</div>
          </div>
        </div>
      </motion.div>
      
      <button
        onClick={onToggleVisibility}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all"
        aria-label={isVisible ? "Hide character" : "Show character"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isVisible ? (
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          ) : (
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          )}
        </svg>
      </button>
    </div>
  );
}