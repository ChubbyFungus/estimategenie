import { useState } from 'react';
import { ProjectTypeCard } from '@/components/ProjectTypeCard';
import { SquareFootageSlider } from '@/components/SquareFootageSlider';
import { FinishLevelSelect } from '@/components/FinishLevelSelect';
import { LayoutChangeToggle } from '@/components/LayoutChangeToggle';
import { GenieModel } from '@/components/GenieModel';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [projectType, setProjectType] = useState<'kitchen' | 'bathroom' | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [squareFootage, setSquareFootage] = useState(100);
  const [finishLevel, setFinishLevel] = useState('');
  const [layoutChange, setLayoutChange] = useState(false);

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#00305A] p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#00305A]/80 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
            Estimate Genie
          </h1>

          <div className="mb-8">
            <GenieModel />
          </div>

          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-xl text-white">
                  Welcome! I'm your personal estimation assistant. Let's create a detailed estimate for your remodeling project.
                </p>
                <p className="text-xl text-white">
                  First, please select the type of project you're planning:
                </p>
              </div>

              <div className="space-y-4">
                {['kitchen', 'bathroom'].map((type) => (
                  <ProjectTypeCard
                    key={type}
                    type={type as 'kitchen' | 'bathroom'}
                    isSelected={projectType === type}
                    onSelect={() => {
                      setProjectType(type as 'kitchen' | 'bathroom');
                      setCurrentStep(1);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl text-white">
                  Great choice! Now, let's determine the size of your {projectType} remodel.
                </p>
                <p className="text-xl text-white">
                  Please use the slider to indicate the square footage:
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Square Footage: {squareFootage} sq ft
                </h2>
                
                <div className="p-6 bg-white/10 rounded-xl border-2 border-white/30">
                  <SquareFootageSlider
                    value={squareFootage}
                    onChange={setSquareFootage}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <ChevronLeft className="mr-2 h-5 w-5" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-[#D4AF37] hover:bg-[#B8860B] text-[#00305A]"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl text-white">
                  Excellent! Now, let's select the level of finishes you'd like for your {projectType} remodel.
                </p>
                <p className="text-xl text-white">
                  Choose the quality level that best matches your vision:
                </p>
              </div>

              <div className="space-y-6">
                <FinishLevelSelect
                  value={finishLevel}
                  onChange={setFinishLevel}
                />

                <div className="flex gap-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <ChevronLeft className="mr-2 h-5 w-5" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(3)}
                    disabled={!finishLevel}
                    className="flex-1 bg-[#D4AF37] hover:bg-[#B8860B] text-[#00305A] disabled:opacity-50"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && projectType && (
            <div className="space-y-8">
              <LayoutChangeToggle
                value={layoutChange}
                onChange={setLayoutChange}
                projectType={projectType}
              />

              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
                <Button
                  onClick={() => setCurrentStep(4)}
                  className="flex-1 bg-[#D4AF37] hover:bg-[#B8860B] text-[#00305A]"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}