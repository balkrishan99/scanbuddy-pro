import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Settings2,
  Zap,
  Box,
  Layers,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ScanSimulation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scanPhase, setScanPhase] = useState<"idle" | "scanning" | "processing" | "complete">("idle");
  const [pointCount, setPointCount] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && scanPhase === "scanning") {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + (0.5 * speed);
          if (newProgress >= 100) {
            setScanPhase("processing");
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
        setRotation((prev) => (prev + (1.8 * speed)) % 360);
        setPointCount((prev) => prev + Math.floor(Math.random() * 500 + 200));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, scanPhase, speed]);

  useEffect(() => {
    if (scanPhase === "processing") {
      const timeout = setTimeout(() => {
        setScanPhase("complete");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [scanPhase]);

  const startScan = () => {
    setScanPhase("scanning");
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetScan = () => {
    setProgress(0);
    setRotation(0);
    setPointCount(0);
    setScanPhase("idle");
    setIsPlaying(false);
  };

  const phases = [
    { id: "idle", label: "Ready", icon: Box },
    { id: "scanning", label: "Scanning", icon: Zap },
    { id: "processing", label: "Processing", icon: Settings2 },
    { id: "complete", label: "Complete", icon: Layers },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Live Preview
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">Scan</span> Simulation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interactive visualization of the laser scanning process
          </p>
        </div>

        {/* Phase Indicator */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                scanPhase === phase.id
                  ? "bg-primary/20 text-primary border border-primary/50"
                  : phases.findIndex(p => p.id === scanPhase) > index
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                  : "bg-secondary text-muted-foreground border border-border/50"
              }`}>
                <phase.icon className="w-4 h-4" />
                <span className="text-sm font-mono">{phase.label}</span>
              </div>
              {index < phases.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Visualization */}
          <div className="lg:col-span-2 glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-background/80 border-b border-border/50 px-4 py-3 flex items-center justify-between">
              <span className="font-mono text-sm text-foreground">3D Scanner Simulation</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">Speed:</span>
                {[0.5, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                      speed === s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            <div className="relative aspect-video bg-background overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              
              {/* SVG Animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
                {/* Background glow */}
                <defs>
                  <radialGradient id="scanGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(185, 70%, 50%)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Turntable Base */}
                <ellipse cx="400" cy="380" rx="180" ry="50" className="fill-secondary/50 stroke-border" strokeWidth="2" />
                <ellipse cx="400" cy="370" rx="160" ry="40" className="fill-card stroke-border/50" strokeWidth="1" />
                
                {/* Rotation indicator */}
                <g transform={`rotate(${rotation}, 400, 370)`}>
                  <line x1="400" y1="370" x2="560" y2="370" className="stroke-primary/30" strokeWidth="2" strokeDasharray="8 4" />
                  <circle cx="560" cy="370" r="4" className="fill-primary/50" />
                </g>

                {/* Object on turntable */}
                <g transform={`rotate(${rotation}, 400, 300)`}>
                  {/* 3D object representation - vase shape */}
                  <path
                    d="M370 350 Q350 300 360 250 Q365 200 380 180 Q400 160 420 180 Q435 200 440 250 Q450 300 430 350"
                    className="fill-muted stroke-muted-foreground"
                    strokeWidth="2"
                  />
                  <ellipse cx="400" cy="175" rx="25" ry="10" className="fill-muted stroke-muted-foreground" strokeWidth="1" />
                  <ellipse cx="400" cy="350" rx="35" ry="12" className="fill-secondary stroke-muted-foreground" strokeWidth="1" />
                </g>

                {/* Laser Module */}
                <g>
                  <rect x="80" y="100" width="60" height="40" rx="4" className="fill-card stroke-border" strokeWidth="2" />
                  <rect x="85" y="110" width="10" height="20" rx="2" className="fill-red-500/50" />
                  <text x="110" y="125" textAnchor="middle" className="fill-foreground text-xs font-mono">LASER</text>
                  
                  {/* Laser beam */}
                  {(scanPhase === "scanning" || scanPhase === "processing") && (
                    <g filter="url(#glow)">
                      <line 
                        x1="140" 
                        y1="120" 
                        x2="400" 
                        y2={180 + (progress * 1.7)}
                        className="stroke-red-500" 
                        strokeWidth="3"
                        strokeOpacity="0.8"
                      >
                        <animate 
                          attributeName="stroke-opacity" 
                          values="0.5;1;0.5" 
                          dur="0.5s" 
                          repeatCount="indefinite" 
                        />
                      </line>
                      <circle 
                        cx="400" 
                        cy={180 + (progress * 1.7)}
                        r="6" 
                        className="fill-red-500"
                      >
                        <animate 
                          attributeName="r" 
                          values="4;8;4" 
                          dur="0.3s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                    </g>
                  )}
                </g>

                {/* Camera */}
                <g>
                  <rect x="660" y="80" width="70" height="50" rx="4" className="fill-card stroke-border" strokeWidth="2" />
                  <circle cx="695" cy="105" r="15" className="fill-blue-500/30 stroke-blue-400" strokeWidth="2" />
                  <circle cx="695" cy="105" r="8" className="fill-blue-500/50" />
                  <text x="695" y="145" textAnchor="middle" className="fill-foreground text-xs font-mono">CAMERA</text>
                  
                  {/* Camera view cone */}
                  {(scanPhase === "scanning" || scanPhase === "processing") && (
                    <path
                      d="M660 105 L400 180 L400 350 L660 105"
                      className="fill-blue-500/10 stroke-blue-400/30"
                      strokeWidth="1"
                    />
                  )}
                </g>

                {/* Point cloud visualization */}
                {scanPhase !== "idle" && (
                  <g>
                    {[...Array(Math.min(Math.floor(progress / 2), 50))].map((_, i) => {
                      const angle = (i * 7.2 + rotation) * (Math.PI / 180);
                      const r = 30 + Math.sin(i * 0.3) * 20;
                      const y = 180 + (i * 3.4);
                      return (
                        <circle
                          key={i}
                          cx={400 + Math.cos(angle) * r}
                          cy={y}
                          r="2"
                          className="fill-primary"
                          opacity={0.6}
                        />
                      );
                    })}
                  </g>
                )}

                {/* Scan line indicator */}
                {scanPhase === "scanning" && (
                  <line
                    x1="350"
                    y1={180 + (progress * 1.7)}
                    x2="450"
                    y2={180 + (progress * 1.7)}
                    className="stroke-primary"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0.5;1;0.5" 
                      dur="0.5s" 
                      repeatCount="indefinite" 
                    />
                  </line>
                )}

                {/* Progress arc */}
                <circle
                  cx="400"
                  cy="370"
                  r="190"
                  fill="none"
                  className="stroke-secondary"
                  strokeWidth="4"
                />
                <circle
                  cx="400"
                  cy="370"
                  r="190"
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="4"
                  strokeDasharray={`${progress * 11.94} 1194`}
                  strokeLinecap="round"
                  transform="rotate(-90, 400, 370)"
                />
              </svg>

              {/* Status overlay */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="px-3 py-1.5 rounded-full bg-background/80 border border-border/50 font-mono text-xs">
                  <span className="text-muted-foreground">Rotation: </span>
                  <span className="text-primary">{rotation.toFixed(1)}°</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-background/80 border border-border/50 font-mono text-xs">
                  <span className="text-muted-foreground">Progress: </span>
                  <span className="text-primary">{progress.toFixed(1)}%</span>
                </div>
              </div>

              {/* Processing overlay */}
              {scanPhase === "processing" && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <span className="font-mono text-lg text-primary">Processing Point Cloud...</span>
                  </div>
                </div>
              )}

              {/* Complete overlay */}
              {scanPhase === "complete" && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                  <div className="text-center glass-card p-8 rounded-2xl border border-emerald-500/30">
                    <Layers className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">Scan Complete!</h3>
                    <p className="text-muted-foreground mb-4">{pointCount.toLocaleString()} points captured</p>
                    <Button onClick={resetScan} variant="outline" className="gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Start New Scan
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-4 bg-secondary/30 border-t border-border/50 flex items-center justify-center gap-4">
              {scanPhase === "idle" ? (
                <Button onClick={startScan} className="gap-2 px-8">
                  <Play className="w-4 h-4" />
                  Start Scan
                </Button>
              ) : scanPhase === "scanning" ? (
                <>
                  <Button onClick={togglePlayPause} variant="outline" className="gap-2">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pause" : "Resume"}
                  </Button>
                  <Button onClick={resetScan} variant="ghost" className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                </>
              ) : scanPhase === "complete" ? (
                <Button onClick={resetScan} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Reset Simulation
                </Button>
              ) : null}
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="glass-card rounded-2xl border border-border/50 p-6">
              <h3 className="font-display font-bold text-lg mb-4">Scan Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Points Captured</span>
                  <span className="font-mono text-primary">{pointCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Rotation</span>
                  <span className="font-mono text-primary">{rotation.toFixed(1)}°</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Progress</span>
                  <span className="font-mono text-primary">{progress.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Status</span>
                  <span className={`font-mono text-sm px-2 py-0.5 rounded ${
                    scanPhase === "idle" ? "bg-muted text-muted-foreground" :
                    scanPhase === "scanning" ? "bg-blue-500/20 text-blue-400" :
                    scanPhase === "processing" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-emerald-500/20 text-emerald-400"
                  }`}>
                    {scanPhase.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="glass-card rounded-2xl border border-border/50 p-6">
              <h3 className="font-display font-bold text-lg mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-mono text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Laser Projects Line</p>
                    <p className="text-xs text-muted-foreground">A thin laser line is projected onto the object surface</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-400 font-mono text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Camera Captures</p>
                    <p className="text-xs text-muted-foreground">Camera captures the laser line deformation on the object</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <span className="text-green-400 font-mono text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Turntable Rotates</p>
                    <p className="text-xs text-muted-foreground">Object rotates 360° while capturing frames continuously</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-mono text-sm">4</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Point Cloud Generated</p>
                    <p className="text-xs text-muted-foreground">Triangulation converts 2D positions to 3D coordinates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanSimulation;
