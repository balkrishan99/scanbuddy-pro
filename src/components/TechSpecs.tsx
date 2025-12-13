import { Box, Cpu, Zap, Wifi, RotateCcw, FileCode } from "lucide-react";

const specs = [
  { icon: Box, label: "Scan Volume", value: "200 × 200 × 200 mm" },
  { icon: Cpu, label: "Resolution", value: "0.1 mm accuracy" },
  { icon: Zap, label: "Scan Speed", value: "< 60 seconds" },
  { icon: Wifi, label: "Connectivity", value: "USB / Bluetooth" },
  { icon: RotateCcw, label: "Rotation", value: "360° turntable" },
  { icon: FileCode, label: "Export", value: ".OBJ .STL .PLY" },
];

const TechSpecs = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase">Technical Specifications</span>
          <h2 className="text-3xl md:text-4xl font-display mt-4">
            Precision <span className="gradient-text">Engineering</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specs.map((spec, index) => (
            <div
              key={spec.label}
              className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground text-xs font-display uppercase tracking-wider mb-1">{spec.label}</p>
              <p className="text-foreground font-medium text-sm">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
