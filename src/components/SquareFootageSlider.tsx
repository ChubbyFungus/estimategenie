import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from "@/components/ui/slider";

interface SquareFootageSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function SquareFootageSlider({
  value,
  onChange,
  min = 50,
  max = 500,
  step = 10
}: SquareFootageSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(isDragging);
    }, 100);

    return () => clearTimeout(timer);
  }, [isDragging]);

  return (
    <div className="relative pt-6 pb-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-2 left-0 right-0 flex justify-center"
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="bg-[#00305A] text-white px-3 py-1.5 rounded-md text-sm font-medium shadow-lg">
              {value} sq ft
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative"
        onMouseEnter={() => setIsDragging(true)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(values) => onChange(values[0])}
          aria-label="Adjust square footage"
          className="cursor-pointer"
        />
      </div>

      <div className="flex justify-between mt-2 text-sm text-white/60">
        <span>{min} sq ft</span>
        <span>{max} sq ft</span>
      </div>
    </div>
  );
}