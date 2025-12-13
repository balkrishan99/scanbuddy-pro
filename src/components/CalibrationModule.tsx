import { useState } from "react";
import { 
  Target, 
  Camera, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  Grid3X3,
  Crosshair,
  Focus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CalibrationModule = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepStatus, setStepStatus] = useState<("pending" | "success" | "error")[]>([
    "pending",
    "pending",
    "pending",
  ]);

  const steps = [
    {
      id: 1,
      title: "Laser Alignment",
      description: "Align the laser plane with the scanning axis",
      icon: Target,
      instructions: [
        "Position calibration target",
        "Activate laser module",
        "Adjust until line is straight",
        "Confirm alignment",
      ],
    },
    {
      id: 2,
      title: "Camera Focus",
      description: "Calibrate camera intrinsic parameters",
      icon: Focus,
      instructions: [
        "Place checkerboard pattern",
        "Capture multiple angles",
        "Auto-compute focal length",
        "Verify distortion correction",
      ],
    },
    {
      id: 3,
      title: "Turntable Center",
      description: "Detect and lock turntable rotation axis",
      icon: RotateCcw,
      instructions: [
        "Clear turntable surface",
        "Run 360° rotation test",
        "Measure axis deviation",
        "Apply correction offset",
      ],
    },
  ];

  const completeStep = () => {
    const newStatus = [...stepStatus];
    newStatus[currentStep] = "success";
    setStepStatus(newStatus);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Module 3.2
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">Calibration</span> Module
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step-by-step guided setup with augmented reality overlay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AR Preview */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-background/80 border-b border-border/50 px-4 py-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-foreground">AR Calibration Display</span>
            </div>
            <div className="relative aspect-video bg-background">
              {/* Grid Overlay */}
              <div className="absolute inset-0 grid-bg opacity-50" />
              
              {/* Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Crosshair className="w-24 h-24 text-primary/30" />
              </div>

              {/* Alignment Grid Overlay */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225">
                {/* Center lines */}
                <line x1="200" y1="0" x2="200" y2="225" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" strokeDasharray="4 4" />
                <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" strokeDasharray="4 4" />
                
                {/* Laser plane indicator */}
                {currentStep === 0 && (
                  <line x1="200" y1="20" x2="200" y2="205" stroke="currentColor" strokeWidth="2" className="text-red-500" style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8))" }} />
                )}

                {/* Focus points */}
                {currentStep === 1 && (
                  <>
                    <circle cx="100" cy="75" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <circle cx="300" cy="75" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <circle cx="100" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <circle cx="300" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                  </>
                )}

                {/* Rotation indicator */}
                {currentStep === 2 && (
                  <circle cx="200" cy="112.5" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400" strokeDasharray="8 4">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 112.5"
                      to="360 200 112.5"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </svg>

              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1.5 rounded-full font-mono text-xs flex items-center gap-2 ${
                  stepStatus[currentStep] === "success" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}>
                  {stepStatus[currentStep] === "success" ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      ALIGNED
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3" />
                      ADJUSTING
                    </>
                  )}
                </div>
              </div>

              {/* Step indicator */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-background/80 text-xs font-mono text-foreground border border-border/50">
                  Step {currentStep + 1} / {steps.length}
                </span>
              </div>
            </div>
          </div>

          {/* Calibration Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`glass-card p-6 rounded-xl border transition-all cursor-pointer ${
                  index === currentStep
                    ? "border-primary/50 bg-primary/5"
                    : stepStatus[index] === "success"
                    ? "border-green-500/30 bg-green-500/5"
                    : "border-border/50"
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    stepStatus[index] === "success"
                      ? "bg-green-500/20"
                      : index === currentStep
                      ? "bg-primary/20"
                      : "bg-muted/50"
                  }`}>
                    {stepStatus[index] === "success" ? (
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    ) : (
                      <step.icon className={`w-6 h-6 ${
                        index === currentStep ? "text-primary" : "text-muted-foreground"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground">
                        STEP {step.id}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    {index === currentStep && (
                      <div className="space-y-2 mb-4">
                        {step.instructions.map((instruction, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-primary" />
                            <span className="text-foreground/80">{instruction}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {index === currentStep && stepStatus[index] !== "success" && (
                      <Button onClick={completeStep} size="sm" className="gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Complete Step
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Calibration Complete */}
            {stepStatus.every((s) => s === "success") && (
              <div className="glass-card p-6 rounded-xl border border-green-500/30 bg-green-500/5">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold">Calibration Complete!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Scanner is ready for use. Calibration data saved.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrationModule;
