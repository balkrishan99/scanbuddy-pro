import { 
  Sparkles, 
  Waves, 
  Trash2, 
  Circle,
  Shield,
  Cpu,
  CheckCircle2
} from "lucide-react";

const AINoiseReduction = () => {
  const features = [
    {
      icon: Waves,
      title: "Point Cloud Smoothing",
      description: "Gaussian filtering to reduce high-frequency noise while preserving geometric features",
      technique: "Statistical outlier removal + bilateral filtering",
    },
    {
      icon: Trash2,
      title: "Outlier Removal",
      description: "Intelligent detection and removal of erroneous scan points",
      technique: "K-nearest neighbor density analysis",
    },
    {
      icon: Circle,
      title: "Hole Filling",
      description: "Automatic interpolation of missing data in scan gaps",
      technique: "Poisson surface reconstruction",
    },
    {
      icon: Shield,
      title: "Edge Preservation",
      description: "Maintains sharp edges and fine details during noise reduction",
      technique: "Adaptive thresholding + edge detection",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Module 3.4
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">AI-Assisted</span> Noise Reduction
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lightweight, explainable ML-assisted filtering for cleaner 3D models
          </p>
        </div>

        {/* Tech Stack Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-foreground">
              OpenCV + TensorFlow Lite (Optional)
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400">Rule-based ML</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-background/50 text-xs font-mono text-primary border border-primary/20">
                      {feature.technique}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Visualization */}
        <div className="glass-card p-8 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Processing Pipeline
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Raw Input */}
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-background border border-border/50 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                {/* Simulated noisy point cloud */}
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={30 + Math.random() * 40 + Math.sin(i) * 10}
                      cy={30 + Math.random() * 40 + Math.cos(i) * 10}
                      r="1.5"
                      fill="currentColor"
                      className="text-red-400/60"
                    />
                  ))}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <circle
                      key={`outlier-${i}`}
                      cx={Math.random() * 100}
                      cy={Math.random() * 100}
                      r="1"
                      fill="currentColor"
                      className="text-red-500"
                    />
                  ))}
                </svg>
              </div>
              <span className="font-mono text-sm text-muted-foreground">RAW SCAN</span>
              <p className="text-xs text-red-400 mt-1">Noise + Outliers</p>
            </div>

            {/* Processing */}
            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <span className="font-mono text-sm text-primary">AI PROCESSING</span>
              <div className="mt-4 space-y-2">
                {["Smoothing", "Outlier Removal", "Edge Detection"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Output */}
            <div className="text-center">
              <div className="aspect-square rounded-xl bg-background border border-green-500/30 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                {/* Simulated clean point cloud */}
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const angle = (i / 40) * Math.PI * 2;
                    const r = 25 + Math.sin(angle * 3) * 5;
                    return (
                      <circle
                        key={i}
                        cx={50 + Math.cos(angle) * r}
                        cy={50 + Math.sin(angle) * r}
                        r="1.5"
                        fill="currentColor"
                        className="text-green-400"
                      />
                    );
                  })}
                </svg>
              </div>
              <span className="font-mono text-sm text-muted-foreground">CLEANED</span>
              <p className="text-xs text-green-400 mt-1">Ready for Export</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AINoiseReduction;
