import { motion } from 'framer-motion';

interface GenieLampProps {
  onClick: () => void;
}

export function GenieLamp({ onClick }: GenieLampProps) {
  return (
    <motion.div 
      className="relative w-64 h-64 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%205%20(1)-eeYu4rd90otvNkNxphnx97WLIrrwCJ.png"
        alt="Estimate Genie Lamp" 
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </motion.div>
  );
}