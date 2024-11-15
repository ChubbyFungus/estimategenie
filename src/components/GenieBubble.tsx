import { motion } from 'framer-motion';

type GenieBubbleProps = {
  content: React.ReactNode;
};

export function GenieBubble({ content }: GenieBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-effect text-white rounded-lg p-8"
    >
      <div className="relative genie-message">
        {content}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-white/20 border-b-[10px] border-b-transparent"></div>
      </div>
    </motion.div>
  );
}