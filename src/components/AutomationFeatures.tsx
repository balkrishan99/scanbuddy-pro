import { 
  Wand2, 
  Ruler, 
  Gauge, 
  Sun,
  Zap,
  ArrowRight
} from "lucide-react";

const AutomationFeatures = () => {
  const automations = [
    {
      icon: Ruler,
      title: "Auto Object Height Detection",
      description: "Camera-based measurement automatically determines scan volume and optimizes capture range",
      status: "Auto",
    },
    {
      icon: Gauge,
      title: "Auto Turntable Speed",
      description: "Dynamically adjusts rotation speed based on object complexity and scan resolution",
      status: "Smart",
    },
    {
      icon: Sun,
      title: "Auto Laser Intensity",
      description: "Automatic brightness adjustment based on surface reflectivity and ambient light",
      status: "Adaptive",
    },
    {
      icon: Zap,
      title: "One-Click Workflow",
      description: "Complete pipeline: Scan → Clean → Export in a single automated sequence",
      status: "Express",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Module 3.5
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">Automation</span> Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Optional intelligent automation for streamlined scanning workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {automations.map((auto) => (
            <div
              key={auto.title}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <auto.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {auto.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-mono">
                      {auto.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {auto.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* One-Click Workflow Diagram */}
        <div className="glass-card p-8 rounded-2xl border border-primary/30 glow-effect">
          <div className="flex items-center gap-3 mb-8">
            <Wand2 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              One-Click Express Mode
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              { label: "SCAN", desc: "Auto capture" },
              { label: "CLEAN", desc: "AI processing" },
              { label: "EXPORT", desc: "Multi-format" },
            ].map((step, index) => (
              <div key={step.label} className="flex items-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl font-mono font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground">{step.label}</span>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
                {index < 2 && (
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Average processing time: <span className="text-primary font-mono">~2-5 minutes</span> depending on scan complexity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFeatures;
