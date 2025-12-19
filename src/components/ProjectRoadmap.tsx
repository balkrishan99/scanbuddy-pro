import {
  Milestone,
  CheckCircle2,
  Clock,
  Rocket,
  Sparkles,
  Users,
  Cloud,
  Cpu
} from "lucide-react";

const ProjectRoadmap = () => {
  const roadmap = [
    {
      version: "v1.0",
      title: "Core Scanning & Processing",
      status: "current",
      date: "Q1 2025",
      features: [
        "Basic laser scanning workflow",
        "Point cloud generation",
        "Mesh reconstruction",
        "STL/OBJ/PLY export",
        "Manual calibration system",
      ],
    },
    {
      version: "v1.5",
      title: "Texture Mapping",
      status: "next",
      date: "Q2 2025",
      features: [
        "RGB camera support",
        "Texture capture during scan",
        "UV mapping generation",
        "Material definition export",
        "Photo-realistic output",
      ],
    },
    {
      version: "v2.0",
      title: "Multi-Camera Support",
      status: "planned",
      date: "Q3 2025",
      features: [
        "Dual camera triangulation",
        "Stereo depth enhancement",
        "Increased scan speed",
        "Improved accuracy",
        "Synchronized capture",
      ],
    },
    {
      version: "v2.5",
      title: "Cloud Processing",
      status: "planned",
      date: "Q4 2025",
      features: [
        "Cloud mesh reconstruction",
        "Collaborative projects",
        "Remote access",
        "GPU-accelerated processing",
        "Model library",
      ],
    },
    {
      version: "v3.0",
      title: "AI-Assisted Mesh Repair",
      status: "future",
      date: "2026",
      features: [
        "Automatic hole filling",
        "Surface completion AI",
        "Detail enhancement",
        "Noise prediction models",
        "One-click optimization",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current": return <Rocket className="w-5 h-5 text-emerald-400" />;
      case "next": return <Clock className="w-5 h-5 text-blue-400" />;
      case "planned": return <Sparkles className="w-5 h-5 text-yellow-400" />;
      default: return <Milestone className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "border-emerald-500/50 bg-emerald-500/5";
      case "next": return "border-blue-500/50 bg-blue-500/5";
      case "planned": return "border-yellow-500/50 bg-yellow-500/5";
      default: return "border-border/50";
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Future Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Project <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our development timeline for OpenScan3D
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <div key={item.version} className="relative">
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 shrink-0 justify-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      item.status === "current" ? "bg-emerald-500 border-emerald-400" :
                      item.status === "next" ? "bg-blue-500 border-blue-400" :
                      item.status === "planned" ? "bg-yellow-500 border-yellow-400" :
                      "bg-muted border-muted-foreground"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 glass-card rounded-2xl border ${getStatusColor(item.status)} p-6`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <span className="font-mono text-primary text-lg font-bold">{item.version}</span>
                          <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                          item.status === "current" ? "bg-emerald-500/20 text-emerald-400" :
                          item.status === "next" ? "bg-blue-500/20 text-blue-400" :
                          item.status === "planned" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {item.status === "current" ? "In Development" :
                           item.status === "next" ? "Up Next" :
                           item.status === "planned" ? "Planned" : "Future"}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">{item.date}</span>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 glass-card rounded-2xl border border-primary/30 p-8 text-center">
          <h3 className="font-display font-bold text-2xl text-foreground mb-4">Long-Term Vision</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            OpenScan3D aims to democratize 3D scanning technology, making professional-quality 3D capture accessible to everyone — from students and makers to researchers and small businesses. Our commitment to open collaboration ensures continuous innovation driven by community needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectRoadmap;
