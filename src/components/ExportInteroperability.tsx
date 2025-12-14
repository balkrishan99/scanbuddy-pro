import {
  FileBox,
  Download,
  CheckCircle2,
  Layers,
  Image,
  Code,
  ExternalLink,
  Zap
} from "lucide-react";

const ExportInteroperability = () => {
  const formats = {
    mesh: [
      { ext: ".STL", name: "Stereolithography", use: "3D Printing", color: "text-orange-400" },
      { ext: ".OBJ", name: "Wavefront OBJ", use: "3D Modeling", color: "text-blue-400" },
      { ext: ".FBX", name: "Filmbox", use: "Animation", color: "text-purple-400" },
      { ext: ".GLTF", name: "GL Transmission", use: "Web/AR/VR", color: "text-green-400" },
    ],
    pointCloud: [
      { ext: ".PLY", name: "Polygon File", use: "Raw Data", color: "text-cyan-400" },
      { ext: ".LAS", name: "LIDAR Data", use: "Survey/GIS", color: "text-yellow-400" },
      { ext: ".XYZ", name: "Point Cloud", use: "CAD Import", color: "text-red-400" },
      { ext: ".PCD", name: "Point Cloud Data", use: "PCL Library", color: "text-pink-400" },
    ],
    texture: [
      { ext: ".PNG", name: "Texture Maps", use: "High Quality", color: "text-emerald-400" },
      { ext: ".JPG", name: "Compressed", use: "File Size", color: "text-amber-400" },
      { ext: ".MTL", name: "Material Library", use: "OBJ Materials", color: "text-indigo-400" },
    ],
  };

  const softwarePresets = [
    {
      name: "Blender",
      icon: "🎨",
      formats: [".OBJ", ".FBX", ".GLTF"],
      description: "Optimized for Blender import with materials and scale",
    },
    {
      name: "Fusion 360",
      icon: "⚙️",
      formats: [".STL", ".OBJ", ".STEP"],
      description: "CAD-ready with proper units and orientation",
    },
    {
      name: "SolidWorks",
      icon: "🔧",
      formats: [".STL", ".OBJ"],
      description: "Engineering-ready with metric units",
    },
    {
      name: "Unity",
      icon: "🎮",
      formats: [".FBX", ".GLTF"],
      description: "Game-ready with LOD support",
    },
    {
      name: "Unreal Engine",
      icon: "🎬",
      formats: [".FBX", ".GLTF"],
      description: "Optimized for real-time rendering",
    },
    {
      name: "Cura / PrusaSlicer",
      icon: "🖨️",
      formats: [".STL", ".3MF"],
      description: "Print-ready with repair options",
    },
  ];

  const exportFeatures = [
    { icon: Zap, title: "One-Click Presets", desc: "Pre-configured export settings for popular software" },
    { icon: Layers, title: "Multi-Resolution", desc: "Export at different LOD levels for various use cases" },
    { icon: Code, title: "Batch Export", desc: "Export multiple formats simultaneously" },
    { icon: CheckCircle2, title: "Validation", desc: "Automatic mesh validation before export" },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            File Formats
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Export & <span className="gradient-text">Interoperability</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-standard formats with optimized presets for major 3D software
          </p>
        </div>

        {/* Format Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Mesh Formats */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-orange-500/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <FileBox className="w-5 h-5 text-orange-400" />
              <h3 className="font-display font-bold text-foreground">Mesh Formats</h3>
            </div>
            <div className="p-4 space-y-3">
              {formats.mesh.map((format) => (
                <div key={format.ext} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div>
                    <span className={`font-mono font-bold ${format.color}`}>{format.ext}</span>
                    <p className="text-xs text-muted-foreground">{format.name}</p>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded text-foreground/60">{format.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Point Cloud Formats */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-cyan-500/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display font-bold text-foreground">Point Cloud Formats</h3>
            </div>
            <div className="p-4 space-y-3">
              {formats.pointCloud.map((format) => (
                <div key={format.ext} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div>
                    <span className={`font-mono font-bold ${format.color}`}>{format.ext}</span>
                    <p className="text-xs text-muted-foreground">{format.name}</p>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded text-foreground/60">{format.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Texture Formats */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-emerald-500/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Image className="w-5 h-5 text-emerald-400" />
              <h3 className="font-display font-bold text-foreground">Texture & Materials</h3>
            </div>
            <div className="p-4 space-y-3">
              {formats.texture.map((format) => (
                <div key={format.ext} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div>
                    <span className={`font-mono font-bold ${format.color}`}>{format.ext}</span>
                    <p className="text-xs text-muted-foreground">{format.name}</p>
                  </div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded text-foreground/60">{format.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Software Presets */}
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden mb-12">
          <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
            <ExternalLink className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-foreground">Direct Export Presets</h3>
          </div>
          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softwarePresets.map((preset) => (
              <div key={preset.name} className="p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{preset.icon}</span>
                  <h4 className="font-display font-bold text-foreground">{preset.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{preset.description}</p>
                <div className="flex flex-wrap gap-1">
                  {preset.formats.map((fmt) => (
                    <span key={fmt} className="text-xs font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exportFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl border border-border/50 p-5 text-center">
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-display font-bold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportInteroperability;
