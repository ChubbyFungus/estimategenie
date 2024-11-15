import { motion } from 'framer-motion';
import { Switch } from "@/components/ui/switch";

interface LayoutChangeToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  projectType: 'kitchen' | 'bathroom';
}

export function LayoutChangeToggle({ value, onChange, projectType }: LayoutChangeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          Would you like to change the layout of your {projectType}?
        </h2>
        <p className="text-lg text-white/80">
          Layout changes involve moving walls, plumbing, or electrical elements. 
          This typically increases the cost but allows for a completely new design.
        </p>
      </div>

      <div className="p-6 bg-white/10 rounded-xl border-2 border-white/30 hover:bg-white/15 transition-colors">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Layout Change</h3>
            <p className="text-white/80">Modify the current floor plan</p>
          </div>
          <Switch
            checked={value}
            onCheckedChange={onChange}
            className="data-[state=checked]:bg-[#D4AF37]"
          />
        </div>
      </div>
    </motion.div>
  );
}