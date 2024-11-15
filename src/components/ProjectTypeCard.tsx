import { motion } from 'framer-motion';
import { UtensilsCrossed, Bath, ChevronRight } from 'lucide-react';

interface ProjectTypeCardProps {
  type: 'kitchen' | 'bathroom';
  isSelected: boolean;
  onSelect: () => void;
}

export function ProjectTypeCard({ type, isSelected, onSelect }: ProjectTypeCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`
        w-full p-6 rounded-xl cursor-pointer transition-all duration-200
        ${isSelected 
          ? 'bg-[#D4AF37] border-2 border-white shadow-[0_0_20px_rgba(212,175,55,0.5)]' 
          : 'bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50'}
        flex items-center justify-between group
      `}
    >
      <div className="flex items-center space-x-6">
        <div className={`
          p-4 rounded-full 
          ${isSelected ? 'bg-white/20' : 'bg-white/10 group-hover:bg-white/15'}
        `}>
          {type === 'kitchen' ? (
            <UtensilsCrossed className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-[#D4AF37] group-hover:text-white'}`} />
          ) : (
            <Bath className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-[#D4AF37] group-hover:text-white'}`} />
          )}
        </div>
        <div className="text-left">
          <h3 className={`text-2xl font-bold mb-2 ${isSelected ? 'text-[#00305A]' : 'text-white'}`}>
            {type === 'kitchen' ? 'Kitchen' : 'Bathroom'}
          </h3>
          <p className={`text-lg ${isSelected ? 'text-[#00305A]/80' : 'text-white/80'}`}>
            {type === 'kitchen' 
              ? 'Full kitchen remodeling' 
              : 'Complete bathroom renovation'}
          </p>
        </div>
      </div>
      <ChevronRight className={`
        w-8 h-8 transition-transform duration-200
        ${isSelected ? 'text-[#00305A]' : 'text-white/50'}
        group-hover:translate-x-2
      `} />
    </motion.button>
  );
}