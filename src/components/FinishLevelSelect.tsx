import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FinishLevelOption {
  value: string;
  label: string;
  description: string;
}

interface FinishLevelSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const finishLevels: FinishLevelOption[] = [
  {
    value: 'essentials',
    label: 'Essentials',
    description: 'Quality basics for a fresh update'
  },
  {
    value: 'premium',
    label: 'Premium',
    description: 'High-end materials and features'
  },
  {
    value: 'luxury',
    label: 'Luxury',
    description: 'Top-tier, exclusive finishes'
  }
];

export function FinishLevelSelect({ value, onChange }: FinishLevelSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = finishLevels.find(level => level.value === value);

  return (
    <div className="relative w-full" onBlur={() => setIsOpen(false)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full min-h-[80px] px-6 py-4 text-left rounded-xl",
          "bg-white/10 border-2 transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-opacity-50",
          isOpen
            ? "border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            : "border-white/30 hover:border-white/50 hover:bg-white/15"
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="finish-level-label"
      >
        <div className="flex items-center justify-between">
          <div>
            {selectedOption ? (
              <>
                <div className="text-xl font-bold text-white mb-1">{selectedOption.label}</div>
                <div className="text-sm text-white/80">{selectedOption.description}</div>
              </>
            ) : (
              <div className="text-xl text-white/80">Select finish level</div>
            )}
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 rounded-xl overflow-hidden bg-[#001F3D] border-2 border-[#D4AF37] shadow-xl"
            role="listbox"
            aria-labelledby="finish-level-label"
          >
            {finishLevels.map((level) => (
              <motion.button
                key={level.value}
                whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                onClick={() => {
                  onChange(level.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-6 py-4 text-left transition-colors",
                  "focus:outline-none focus:bg-[#D4AF37]/20",
                  value === level.value && "bg-[#D4AF37]/20"
                )}
                role="option"
                aria-selected={value === level.value}
              >
                <div className="text-xl font-bold text-white mb-1">{level.label}</div>
                <div className="text-sm text-white/80">{level.description}</div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}