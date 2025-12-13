import { useState } from "react";
import { 
  Play, 
  Pause, 
  Square, 
  Power, 
  Gauge, 
  Camera,
  Settings,
  RotateCcw,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const ScannerDashboard = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [laserOn, setLaserOn] = useState(false);
  const [turntableSpeed, setTurntableSpeed] = useState([50]);
  const [resolution, setResolution] = useState<"low" | "medium" | "high">("medium");
  const [scanProgress, setScanProgress] = useState(0);

  const handleStart = () => {
    setIsScanning(true);
    setIsPaused(false);
    setLaserOn(true);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsScanning(false);
    setIsPaused(false);
    setScanProgress(0);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Module 3.1
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Scanner <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Main control interface for real-time scanner operation
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-background/80 border-b border-border/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isScanning ? (isPaused ? "bg-yellow-500" : "bg-green-500 animate-pulse") : "bg-muted"}`} />
              <span className="font-mono text-sm text-foreground">
                {isScanning ? (isPaused ? "PAUSED" : "SCANNING") : "READY"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="p-6 grid lg:grid-cols-2 gap-6">
            {/* Live Preview */}
            <div className="relative aspect-video bg-background rounded-xl border border-border/50 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-muted-foreground/50" />
              </div>
              {isScanning && !isPaused && (
                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-500 animate-pulse" style={{ boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)" }} />
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-background/80 text-xs font-mono text-foreground border border-border/50">
                  LIVE PREVIEW
                </span>
                <span className="px-3 py-1 rounded-full bg-background/80 text-xs font-mono text-muted-foreground border border-border/50">
                  1920x1080
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              {/* Scan Controls */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Scan Controls
                </h3>
                <div className="flex gap-3">
                  <Button
                    onClick={handleStart}
                    disabled={isScanning && !isPaused}
                    className="flex-1 gap-2"
                    variant={isScanning ? "secondary" : "default"}
                  >
                    <Play className="w-4 h-4" />
                    Start
                  </Button>
                  <Button
                    onClick={handlePause}
                    disabled={!isScanning}
                    variant="secondary"
                    className="flex-1 gap-2"
                  >
                    <Pause className="w-4 h-4" />
                    Pause
                  </Button>
                  <Button
                    onClick={handleStop}
                    disabled={!isScanning}
                    variant="destructive"
                    className="flex-1 gap-2"
                  >
                    <Square className="w-4 h-4" />
                    Stop
                  </Button>
                </div>
              </div>

              {/* Laser Control */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Laser Module
                </h3>
                <Button
                  onClick={() => setLaserOn(!laserOn)}
                  variant={laserOn ? "default" : "outline"}
                  className="w-full gap-2"
                >
                  <Power className={`w-4 h-4 ${laserOn ? "text-red-400" : ""}`} />
                  Laser {laserOn ? "ON" : "OFF"}
                  {laserOn && <Zap className="w-4 h-4 text-red-400 animate-pulse" />}
                </Button>
              </div>

              {/* Turntable Speed */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Turntable Speed
                  </h3>
                  <span className="font-mono text-primary">{turntableSpeed}%</span>
                </div>
                <Slider
                  value={turntableSpeed}
                  onValueChange={setTurntableSpeed}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Resolution Selector */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Scan Resolution
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {(["low", "medium", "high"] as const).map((res) => (
                    <button
                      key={res}
                      onClick={() => setResolution(res)}
                      className={`px-4 py-3 rounded-xl font-mono text-sm transition-all ${
                        resolution === res
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-border/50 text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {res.toUpperCase()}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {resolution === "low" && "Fast scan, ~0.5mm resolution"}
                  {resolution === "medium" && "Balanced, ~0.2mm resolution"}
                  {resolution === "high" && "Detailed, ~0.1mm resolution"}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {isScanning && (
            <div className="px-6 pb-6">
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-cyan-500 transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs font-mono text-muted-foreground">
                <span>Scanning in progress...</span>
                <span>{scanProgress}% complete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScannerDashboard;
