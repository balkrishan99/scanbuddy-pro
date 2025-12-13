import { Box, Camera, RotateCcw, Cpu, Layers, Sparkles, Download, Share2 } from "lucide-react";

const AppArchitecture = () => {
  const hardwareComponents = [
    { icon: Box, name: "Laser Module", color: "text-red-400" },
    { icon: Camera, name: "Camera", color: "text-blue-400" },
    { icon: RotateCcw, name: "Turntable Motor", color: "text-green-400" },
    { icon: Cpu, name: "ESP32 / Arduino", color: "text-yellow-400" },
  ];

  const appModules = [
    { icon: Layers, name: "Calibration Module", desc: "Alignment & setup" },
    { icon: Box, name: "Scan Control", desc: "Hardware operation" },
    { icon: Cpu, name: "Data Processing", desc: "Point cloud generation" },
    { icon: Sparkles, name: "AI Noise Reduction", desc: "ML-assisted filtering" },
    { icon: Download, name: "Export & Sharing", desc: ".OBJ, .STL, .PLY" },
  ];

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            System Design
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            App <span className="gradient-text">Architecture</span>
          </h2>
        </div>

        <div className="relative">
          {/* Hardware Section */}
          <div className="glass-card p-8 rounded-2xl border border-border/50 mb-8">
            <div className="text-center mb-6">
              <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 font-mono text-sm border border-orange-500/20">
                3D Scanner Hardware
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hardwareComponents.map((comp) => (
                <div
                  key={comp.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <comp.icon className={`w-8 h-8 ${comp.color}`} />
                  <span className="text-sm text-foreground text-center">{comp.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-primary" />
              <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <span className="text-primary font-mono text-xs">
                  USB / Bluetooth / Wi-Fi
                </span>
              </div>
              <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-cyan-500" />
            </div>
          </div>

          {/* App Section */}
          <div className="glass-card p-8 rounded-2xl border border-primary/30 glow-effect">
            <div className="text-center mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/20">
                OpenScan3D App
              </span>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {appModules.map((module, index) => (
                <div
                  key={module.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <div className="relative">
                    <module.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-mono">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {module.name}
                  </span>
                  <span className="text-xs text-muted-foreground text-center">
                    {module.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Flow Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-muted-foreground">Hardware Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Software Layer</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span className="text-muted-foreground">Cloud Export (Optional)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppArchitecture;
