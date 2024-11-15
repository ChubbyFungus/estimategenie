import { motion } from 'framer-motion';

export function GenieCharacter() {
  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="w-full h-full"
        >
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%204-uw2kNtRDRcFcrwUfyAoZ5thT5ahKSO.png"
            alt="Estimate Genie" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}