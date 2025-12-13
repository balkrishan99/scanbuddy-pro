import { 
  Box, 
  Gauge, 
  RotateCcw, 
  Scan, 
  Layers,
  Download,
  FileType,
  CheckCircle2
} from "lucide-react";

const ScanWorkflow = () => {
  const workflowSteps = [
    {
      step: 1,
      title: "Place Object",
      description: "Position your object at the center of the turntable",
      icon: Box,
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      step: 2,
      title: "Select Quality",
      description: "Choose scan resolution based on detail requirements",
      icon: Gauge,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
    },
    {
      step: 3,
      title: "Auto Rotation",
      description: "App rotates turntable, capturing laser line frame-by-frame",
      icon: RotateCcw,
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
    {
      step: 4,
      title: "Point Cloud",
      description: "Raw point cloud generated from laser detection",
      icon: Scan,
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
    },
    {
      step: 5,
      title: "Mesh Generation",
      description: "Convert points to triangulated mesh surface",
      icon: Layers,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/20",
    },
    {
      step: 6,
      title: "Export",
      description: "Download in your preferred 3D format",
      icon: Download,
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
  ];

  const exportFormats = [
    { ext: ".PLY", desc: "Raw point cloud", use: "Processing", color: "text-green-400" },
    { ext: ".OBJ", desc: "Textured mesh", use: "Rendering", color: "text-blue-400" },
    { ext: ".STL", desc: "Solid model", use: "3D Printing", color: "text-orange-400" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Module 3.3
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Scan <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Digital pipeline from object placement to 3D model export
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-primary to-cyan-500 hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="glass-card p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all text-center h-full">
                  <div className={`w-12 h-12 mx-auto rounded-xl ${step.bgColor} flex items-center justify-center mb-3 relative z-10`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                    <span className="text-xs font-mono text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Formats */}
        <div className="glass-card p-8 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <FileType className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Supported Export Formats
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {exportFormats.map((format) => (
              <div
                key={format.ext}
                className="p-6 rounded-xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl font-mono font-bold ${format.color}`}>
                    {format.ext}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-foreground font-medium mb-1">{format.desc}</p>
                <p className="text-sm text-muted-foreground">Best for: {format.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanWorkflow;
