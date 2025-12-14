import {
  Puzzle,
  Code,
  Package,
  Layers,
  Zap,
  GitBranch,
  Download,
  ExternalLink
} from "lucide-react";

const PluginArchitecture = () => {
  const pluginTypes = [
    {
      type: "Filters",
      icon: Layers,
      color: "text-blue-400",
      examples: ["Custom noise reduction", "Point density adjustment", "Hole filling algorithms"],
    },
    {
      type: "Reconstruction",
      icon: Zap,
      color: "text-purple-400",
      examples: ["Alternative meshing algorithms", "Surface smoothing", "Texture mapping"],
    },
    {
      type: "Export",
      icon: Download,
      color: "text-green-400",
      examples: ["Custom file formats", "CAD integration", "Cloud upload services"],
    },
    {
      type: "Hardware",
      icon: Package,
      color: "text-orange-400",
      examples: ["Custom camera drivers", "New laser modules", "Alternative motors"],
    },
  ];

  const apiExample = `// Example: Custom Filter Plugin
import { PluginAPI } from '@openscan3d/sdk';

export class MyNoiseFilter extends PluginAPI.Filter {
  name = "Advanced Denoise";
  version = "1.0.0";
  
  async process(pointCloud: PointCloud): Promise<PointCloud> {
    // Custom noise reduction algorithm
    const filtered = await this.applyGaussianSmoothing(
      pointCloud,
      { sigma: 0.5, iterations: 3 }
    );
    return filtered;
  }
}`;

  const roadmapItems = [
    { phase: "Phase 1", title: "Plugin API", status: "In Progress", desc: "Core extension interface" },
    { phase: "Phase 2", title: "Python Bindings", status: "Planned", desc: "Python scripting support" },
    { phase: "Phase 3", title: "Marketplace", status: "Future", desc: "Community plugin store" },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Extensibility
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Plugin & <span className="gradient-text">Extension</span> Architecture
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modular design for custom algorithms, formats, and integrations
          </p>
        </div>

        {/* Plugin Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pluginTypes.map((plugin) => (
            <div key={plugin.type} className="glass-card rounded-2xl border border-border/50 p-6">
              <div className={`p-3 rounded-xl bg-secondary/50 w-fit mb-4`}>
                <plugin.icon className={`w-6 h-6 ${plugin.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{plugin.type} Plugins</h3>
              <ul className="space-y-2">
                {plugin.examples.map((example, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${plugin.color.replace('text-', 'bg-')}`} />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* API Example */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Plugin API Example</h3>
            </div>
            <div className="p-4">
              <pre className="bg-background rounded-lg p-4 overflow-x-auto text-sm">
                <code className="text-foreground/80 font-mono">{apiExample}</code>
              </pre>
            </div>
          </div>

          {/* Scripting Support */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Scripting Interface</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🐍</span>
                  <span className="font-mono text-foreground">Python</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full Python bindings for custom processing pipelines. Access point clouds, meshes, and export functions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⚡</span>
                  <span className="font-mono text-foreground">C++ SDK</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  High-performance native extensions. Integrate custom algorithms with zero overhead.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📦</span>
                  <span className="font-mono text-foreground">npm/pip packages</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Publish and share plugins via standard package managers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extension Roadmap */}
        <div className="glass-card rounded-2xl border border-primary/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Puzzle className="w-6 h-6 text-primary" />
            <h3 className="font-display font-bold text-xl text-foreground">Extension Ecosystem Roadmap</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {roadmapItems.map((item) => (
              <div key={item.phase} className="relative">
                <div className={`px-3 py-1 rounded-full text-xs font-mono w-fit mb-3 ${
                  item.status === "In Progress" ? "bg-blue-500/20 text-blue-400" :
                  item.status === "Planned" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {item.status}
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-1">{item.phase}: {item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginArchitecture;
