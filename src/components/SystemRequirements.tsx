import {
  Cpu,
  HardDrive,
  Monitor,
  Camera,
  Zap,
  Clock,
  Target,
  Layers,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const SystemRequirements = () => {
  const pcSpecs = {
    minimum: [
      { label: "OS", value: "Windows 10 / Ubuntu 20.04 / macOS 11", icon: Monitor },
      { label: "CPU", value: "Intel i5-8400 / AMD Ryzen 5 2600", icon: Cpu },
      { label: "RAM", value: "8 GB DDR4", icon: HardDrive },
      { label: "GPU", value: "Intel UHD 630 / AMD Vega 8", icon: Monitor },
      { label: "Storage", value: "2 GB + 500 MB per scan", icon: HardDrive },
    ],
    recommended: [
      { label: "OS", value: "Windows 11 / Ubuntu 22.04 / macOS 13", icon: Monitor },
      { label: "CPU", value: "Intel i7-10700 / AMD Ryzen 7 3700X", icon: Cpu },
      { label: "RAM", value: "16 GB DDR4", icon: HardDrive },
      { label: "GPU", value: "NVIDIA GTX 1660 / AMD RX 580", icon: Monitor },
      { label: "Storage", value: "SSD with 10 GB+ free space", icon: HardDrive },
    ],
  };

  const hardwareSpecs = [
    { label: "Camera Resolution", min: "1920×1080 @ 30fps", recommended: "4K @ 60fps" },
    { label: "Laser Wavelength", min: "650nm (Red)", recommended: "520nm (Green)" },
    { label: "Laser Power", min: "5mW Class IIIa", recommended: "1mW Class II" },
    { label: "Turntable Precision", min: "1.8° step", recommended: "0.9° step" },
    { label: "USB Interface", min: "USB 2.0", recommended: "USB 3.0+" },
  ];

  const performanceTargets = [
    { metric: "Scan Accuracy", value: "±0.1 mm", icon: Target, color: "text-emerald-400" },
    { metric: "Resolution", value: "0.05 mm", icon: Layers, color: "text-blue-400" },
    { metric: "Scan Time", value: "2-5 min", icon: Clock, color: "text-yellow-400" },
    { metric: "Point Density", value: "50K pts/sec", icon: Zap, color: "text-primary" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Technical Specifications
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            System <span className="gradient-text">Requirements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hardware and software requirements for optimal scanner performance
          </p>
        </div>

        {/* Performance Targets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {performanceTargets.map((target) => (
            <div key={target.metric} className="glass-card rounded-xl p-6 text-center border border-border/50">
              <target.icon className={`w-8 h-8 ${target.color} mx-auto mb-3`} />
              <div className="text-2xl font-mono font-bold text-foreground mb-1">
                {target.value}
              </div>
              <div className="text-sm text-muted-foreground">{target.metric}</div>
            </div>
          ))}
        </div>

        {/* PC Requirements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Minimum */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-yellow-500/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <h3 className="font-display font-bold text-lg text-foreground">Minimum Requirements</h3>
            </div>
            <div className="p-6 space-y-4">
              {pcSpecs.minimum.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <spec.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{spec.label}</span>
                  </div>
                  <span className="font-mono text-sm text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden">
            <div className="bg-primary/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Recommended Specs</h3>
            </div>
            <div className="p-6 space-y-4">
              {pcSpecs.recommended.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <spec.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{spec.label}</span>
                  </div>
                  <span className="font-mono text-sm text-primary">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hardware Specifications */}
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
          <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
            <Camera className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-foreground">Scanner Hardware Specifications</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left px-6 py-3 text-sm font-mono text-muted-foreground">Component</th>
                  <th className="text-left px-6 py-3 text-sm font-mono text-yellow-400">Minimum</th>
                  <th className="text-left px-6 py-3 text-sm font-mono text-primary">Recommended</th>
                </tr>
              </thead>
              <tbody>
                {hardwareSpecs.map((spec, index) => (
                  <tr key={spec.label} className={index !== hardwareSpecs.length - 1 ? "border-b border-border/30" : ""}>
                    <td className="px-6 py-4 text-foreground">{spec.label}</td>
                    <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{spec.min}</td>
                    <td className="px-6 py-4 font-mono text-sm text-foreground">{spec.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
