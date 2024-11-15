import { motion, AnimatePresence } from 'framer-motion';

interface SpeechBubbleProps {
  content: React.ReactNode;
  isVisible: boolean;
}

export function SpeechBubble({ content, isVisible }: SpeechBubbleProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="speech-bubble"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
}