import { useState } from "react";
import {
  Target,
  Camera,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  RotateCw,
  Crosshair,
  Focus,
  Ruler,
  Settings2,
  Eye,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CalibrationWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [stepCompleted, setStepCompleted] = useState<boolean[]>([false, false, false, false, false]);

  const steps = [
    {
      id: 1,
      title: "Hardware Setup",
      subtitle: "Prepare your scanner",
      icon: Settings2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      description: "Ensure all hardware components are properly connected and powered on.",
      instructions: [
        { text: "Connect the laser module to GPIO pin 4", done: true },
        { text: "Mount camera at 30° angle facing the turntable center", done: true },
        { text: "Verify turntable motor connection (STEP/DIR pins)", done: false },
        { text: "Power on the microcontroller (5V/2A recommended)", done: false },
      ],
      visualGuide: "hardware",
      tips: ["Use shielded cables to reduce noise", "Ensure stable power supply"],
    },
    {
      id: 2,
      title: "Laser Alignment",
      subtitle: "Calibrate laser plane",
      icon: Target,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      description: "Align the laser line to be perfectly vertical and intersect the turntable center.",
      instructions: [
        { text: "Activate laser module using dashboard controls", done: false },
        { text: "Place calibration target on turntable center", done: false },
        { text: "Adjust laser mount until line aligns with vertical axis", done: false },
        { text: "Verify laser hits center point at multiple heights", done: false },
      ],
      visualGuide: "laser",
      tips: ["Use a spirit level for initial alignment", "Work in dim lighting for better visibility"],
    },
    {
      id: 3,
      title: "Camera Calibration",
      subtitle: "Intrinsic parameters",
      icon: Camera,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      description: "Calibrate camera lens distortion and focal length for accurate measurements.",
      instructions: [
        { text: "Print the 9x6 checkerboard pattern (25mm squares)", done: false },
        { text: "Capture 15-20 images at various angles", done: false },
        { text: "App will auto-compute intrinsic matrix", done: false },
        { text: "Verify reprojection error < 0.5 pixels", done: false },
      ],
      visualGuide: "camera",
      tips: ["Keep checkerboard flat and rigid", "Cover the entire frame with different orientations"],
    },
    {
      id: 4,
      title: "Turntable Center",
      subtitle: "Rotation axis detection",
      icon: RotateCcw,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      description: "Detect the exact rotation axis of the turntable for proper point cloud alignment.",
      instructions: [
        { text: "Place a thin vertical rod at turntable center", done: false },
        { text: "Run 360° rotation with laser active", done: false },
        { text: "App tracks rod position throughout rotation", done: false },
        { text: "Axis deviation should be < 1mm", done: false },
      ],
      visualGuide: "turntable",
      tips: ["Ensure turntable is level", "Use a well-lit object for tracking"],
    },
    {
      id: 5,
      title: "Verification",
      subtitle: "Final validation",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      description: "Run a test scan to verify all calibration parameters are correct.",
      instructions: [
        { text: "Place calibration sphere (known diameter)", done: false },
        { text: "Run quick verification scan", done: false },
        { text: "Compare measured vs actual diameter", done: false },
        { text: "Save calibration profile", done: false },
      ],
      visualGuide: "verification",
      tips: ["Acceptable error: ±0.3mm for prototype", "Re-calibrate if error exceeds threshold"],
    },
  ];

  const currentStepData = steps[currentStep];

  const renderVisualGuide = () => {
    switch (currentStepData.visualGuide) {
      case "hardware":
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <rect x="150" y="200" width="100" height="60" rx="4" className="fill-secondary stroke-border" strokeWidth="2" />
            <text x="200" y="235" textAnchor="middle" className="fill-foreground text-xs font-mono">ESP32</text>
            
            <rect x="50" y="60" width="60" height="30" rx="2" className="fill-red-500/30 stroke-red-500" strokeWidth="2" />
            <text x="80" y="80" textAnchor="middle" className="fill-red-400 text-xs font-mono">LASER</text>
            
            <rect x="290" y="60" width="60" height="40" rx="2" className="fill-blue-500/30 stroke-blue-500" strokeWidth="2" />
            <text x="320" y="85" textAnchor="middle" className="fill-blue-400 text-xs font-mono">CAM</text>
            
            <ellipse cx="200" cy="130" rx="50" ry="15" className="fill-green-500/30 stroke-green-500" strokeWidth="2" />
            <text x="200" y="135" textAnchor="middle" className="fill-green-400 text-xs font-mono">MOTOR</text>
            
            <line x1="110" y1="75" x2="150" y2="200" className="stroke-red-400/50" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="290" y1="80" x2="250" y2="200" className="stroke-blue-400/50" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="200" y1="145" x2="200" y2="200" className="stroke-green-400/50" strokeWidth="1" strokeDasharray="4 2" />
          </svg>
        );
      case "laser":
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <ellipse cx="200" cy="220" rx="80" ry="25" className="fill-secondary/50 stroke-border" strokeWidth="2" />
            
            <line x1="200" y1="40" x2="200" y2="200" className="stroke-red-500" strokeWidth="3">
              {isAnimating && (
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
              )}
            </line>
            <circle cx="200" cy="40" r="8" className="fill-red-500">
              {isAnimating && (
                <animate attributeName="r" values="6;10;6" dur="0.5s" repeatCount="indefinite" />
              )}
            </circle>
            
            <line x1="160" y1="120" x2="240" y2="120" className="stroke-primary/40" strokeWidth="1" strokeDasharray="4 2" />
            <text x="250" y="125" className="fill-primary/60 text-xs font-mono">CENTER</text>
            
            <rect x="180" y="160" width="40" height="60" rx="2" className="fill-muted stroke-border" strokeWidth="1" />
            <text x="200" y="195" textAnchor="middle" className="fill-foreground/60 text-xs font-mono">OBJ</text>
            
            {isAnimating && (
              <circle cx="200" cy="200" r="20" className="fill-none stroke-red-500/30" strokeWidth="40">
                <animate attributeName="r" values="0;80" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>
        );
      case "camera":
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <rect x="140" y="80" width="120" height="120" className="fill-none stroke-blue-400" strokeWidth="2" />
            
            {[...Array(6)].map((_, i) => (
              <line key={`h-${i}`} x1="140" y1={80 + i * 24} x2="260" y2={80 + i * 24} className="stroke-blue-400/30" strokeWidth="1" />
            ))}
            {[...Array(6)].map((_, i) => (
              <line key={`v-${i}`} x1={140 + i * 24} y1="80" x2={140 + i * 24} y2="200" className="stroke-blue-400/30" strokeWidth="1" />
            ))}
            
            {[[0, 0], [5, 0], [0, 5], [5, 5], [2, 2], [3, 3]].map(([x, y], i) => (
              <circle key={i} cx={152 + x * 24} cy={92 + y * 24} r="4" className="fill-cyan-400">
                {isAnimating && (
                  <animate attributeName="r" values="3;5;3" dur="0.5s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
                )}
              </circle>
            ))}
            
            <path d="M300 140 L380 80 L380 200 Z" className="fill-blue-500/30 stroke-blue-400" strokeWidth="2" />
            <circle cx="300" cy="140" r="15" className="fill-blue-500/50 stroke-blue-400" strokeWidth="2" />
            
            <text x="200" y="240" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">9x6 CHECKERBOARD PATTERN</text>
          </svg>
        );
      case "turntable":
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <ellipse cx="200" cy="220" rx="100" ry="30" className="fill-secondary/50 stroke-border" strokeWidth="2">
              {isAnimating && (
                <animateTransform attributeName="transform" type="rotate" from="0 200 220" to="360 200 220" dur="4s" repeatCount="indefinite" />
              )}
            </ellipse>
            
            <line x1="200" y1="60" x2="200" y2="220" className="stroke-green-400" strokeWidth="2" strokeDasharray="8 4">
              {isAnimating && (
                <animateTransform attributeName="transform" type="rotate" from="0 200 220" to="360 200 220" dur="4s" repeatCount="indefinite" />
              )}
            </line>
            
            <circle cx="200" cy="60" r="6" className="fill-green-400" />
            
            <path d="M200 220 L180 140 L220 140 Z" className="fill-muted/50 stroke-muted-foreground" strokeWidth="1">
              {isAnimating && (
                <animateTransform attributeName="transform" type="rotate" from="0 200 220" to="360 200 220" dur="4s" repeatCount="indefinite" />
              )}
            </path>
            
            <circle cx="200" cy="220" r="60" className="fill-none stroke-primary/30" strokeWidth="1" strokeDasharray="4 2" />
            
            <text x="280" y="100" className="fill-green-400/80 text-xs font-mono">AXIS</text>
            <line x1="200" y1="100" x2="270" y2="100" className="stroke-green-400/40" strokeWidth="1" />
          </svg>
        );
      case "verification":
        return (
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <ellipse cx="200" cy="220" rx="80" ry="25" className="fill-secondary/50 stroke-border" strokeWidth="2" />
            
            <circle cx="200" cy="140" r="50" className="fill-emerald-500/20 stroke-emerald-400" strokeWidth="2" />
            <ellipse cx="200" cy="140" rx="50" ry="20" className="fill-none stroke-emerald-400/40" strokeWidth="1" />
            <ellipse cx="200" cy="140" rx="20" ry="50" className="fill-none stroke-emerald-400/40" strokeWidth="1" />
            
            <line x1="200" y1="80" x2="200" y2="200" className="stroke-primary/40" strokeWidth="1" strokeDasharray="4 2" />
            <line x1="140" y1="140" x2="260" y2="140" className="stroke-primary/40" strokeWidth="1" strokeDasharray="4 2" />
            
            <text x="270" y="100" className="fill-emerald-400 text-xs font-mono">Ø 50mm</text>
            <line x1="255" y1="100" x2="260" y2="140" className="stroke-emerald-400/50" strokeWidth="1" />
            
            {isAnimating && (
              <g>
                <line x1="100" y1="40" x2="100" y2="200" className="stroke-red-500" strokeWidth="2">
                  <animateTransform attributeName="transform" type="rotate" from="-30 200 140" to="30 200 140" dur="2s" repeatCount="indefinite" />
                </line>
              </g>
            )}
            
            <rect x="280" y="200" width="100" height="60" rx="4" className="fill-card stroke-border" strokeWidth="1" />
            <text x="330" y="225" textAnchor="middle" className="fill-emerald-400 text-xs font-mono">MEASURED</text>
            <text x="330" y="245" textAnchor="middle" className="fill-foreground text-sm font-mono">49.85 mm</text>
          </svg>
        );
      default:
        return null;
    }
  };

  const completeStep = () => {
    const newCompleted = [...stepCompleted];
    newCompleted[currentStep] = true;
    setStepCompleted(newCompleted);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsAnimating(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setIsAnimating(false);
    }
  };

  const completedCount = stepCompleted.filter(Boolean).length;
  const progress = (completedCount / steps.length) * 100;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Interactive Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">Calibration</span> Wizard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step-by-step visual guide to perfectly calibrate your 3D laser scanner
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-muted-foreground">Calibration Progress</span>
            <span className="text-sm font-mono text-primary">{completedCount}/{steps.length} Complete</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => { setCurrentStep(index); setIsAnimating(false); }}
                className={`flex flex-col items-center gap-2 transition-all ${
                  index === currentStep ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  stepCompleted[index] 
                    ? "bg-emerald-500/20 border-2 border-emerald-500"
                    : index === currentStep
                    ? `${step.bgColor} border-2 border-current ${step.color}`
                    : "bg-secondary border-2 border-border"
                }`}>
                  {stepCompleted[index] ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <step.icon className={`w-5 h-5 ${index === currentStep ? step.color : "text-muted-foreground"}`} />
                  )}
                </div>
                <span className={`text-xs font-mono hidden md:block ${
                  index === currentStep ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visual Guide */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-background/80 border-b border-border/50 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground">Visual Guide</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAnimating(!isAnimating)}
                className="gap-2"
              >
                {isAnimating ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Animate
                  </>
                )}
              </Button>
            </div>
            <div className="relative aspect-[4/3] bg-background p-4">
              <div className="absolute inset-0 grid-bg opacity-30" />
              {renderVisualGuide()}
            </div>
            <div className="p-4 bg-secondary/30 border-t border-border/50">
              <div className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-medium text-foreground">Pro Tips:</span>
                  <ul className="text-sm text-muted-foreground mt-1">
                    {currentStepData.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions Panel */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl border border-border/50 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${currentStepData.bgColor}`}>
                  <currentStepData.icon className={`w-8 h-8 ${currentStepData.color}`} />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {currentStepData.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{currentStepData.subtitle}</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                {currentStepData.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  Instructions
                </h4>
                {currentStepData.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                      instruction.done ? "bg-emerald-500/10" : "bg-secondary/50"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      instruction.done ? "bg-emerald-500/20" : "bg-primary/20"
                    }`}>
                      {instruction.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <span className="text-xs font-mono text-primary">{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-sm ${instruction.done ? "text-emerald-400" : "text-foreground/80"}`}>
                      {instruction.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                onClick={completeStep}
                disabled={stepCompleted[currentStep]}
                className={`gap-2 ${stepCompleted[currentStep] ? "bg-emerald-500/20 text-emerald-400" : ""}`}
              >
                {stepCompleted[currentStep] ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Mark Complete
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Completion Message */}
            {completedCount === steps.length && (
              <div className="glass-card p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
                <div className="flex items-center gap-3 text-emerald-400 mb-2">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold text-lg">Calibration Complete!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All calibration steps have been completed. Your scanner is now ready for high-precision 3D scanning.
                  Calibration profile has been saved automatically.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrationWizard;
