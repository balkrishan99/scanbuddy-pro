import {
  FolderTree,
  Database,
  GitBranch,
  Save,
  Clock,
  FileText,
  HardDrive,
  Layers,
  Settings,
  RefreshCw
} from "lucide-react";

const DataManagement = () => {
  const fileStructure = [
    {
      name: "OpenScan3D Projects",
      type: "folder",
      children: [
        {
          name: "Project_001_Vase",
          type: "folder",
          children: [
            { name: "raw/", type: "folder", desc: "Raw point cloud captures" },
            { name: "processed/", type: "folder", desc: "Cleaned & filtered data" },
            { name: "exports/", type: "folder", desc: "Final output files" },
            { name: "calibration.json", type: "file", desc: "Calibration settings" },
            { name: "metadata.json", type: "file", desc: "Scan parameters" },
          ]
        },
        {
          name: "Project_002_Sculpture",
          type: "folder",
          children: []
        }
      ]
    }
  ];

  const features = [
    {
      icon: FolderTree,
      title: "Project-Based Storage",
      description: "Each scan is organized into a dedicated project folder with structured subdirectories for raw data, processed results, and exports.",
    },
    {
      icon: GitBranch,
      title: "Scan Versioning",
      description: "Automatic version control for each scan iteration. Compare versions, rollback changes, and maintain complete scan history.",
    },
    {
      icon: Layers,
      title: "Raw vs Processed Separation",
      description: "Clear separation between original capture data and processed outputs. Never lose original data during post-processing.",
    },
    {
      icon: Save,
      title: "Auto-Save & Recovery",
      description: "Continuous auto-save during scanning with crash recovery. Resume interrupted scans without data loss.",
    },
    {
      icon: FileText,
      title: "Rich Metadata",
      description: "Comprehensive metadata including timestamps, scan settings, calibration used, hardware configuration, and processing history.",
    },
    {
      icon: Database,
      title: "Efficient Storage",
      description: "Compressed storage formats with optional cloud backup. Typical scan: 50-200 MB raw, 5-20 MB processed.",
    },
  ];

  const metadataFields = [
    { field: "scan_id", example: "SCN_20241201_143022", desc: "Unique scan identifier" },
    { field: "timestamp", example: "2024-12-01T14:30:22Z", desc: "ISO 8601 datetime" },
    { field: "duration_sec", example: "187", desc: "Total scan duration" },
    { field: "resolution", example: "high", desc: "Quality preset used" },
    { field: "rotation_steps", example: "360", desc: "Number of turntable steps" },
    { field: "point_count", example: "2847563", desc: "Total points captured" },
    { field: "calibration_id", example: "CAL_20241130", desc: "Reference to calibration" },
    { field: "hardware_config", example: "{...}", desc: "Camera, laser, motor settings" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Data Organization
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Data Management & <span className="gradient-text">File Structure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Organized, versioned, and recoverable data storage system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* File Structure Visualization */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <FolderTree className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Project File Structure</h3>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <FolderTree className="w-4 h-4" />
                  <span>OpenScan3D Projects/</span>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 text-foreground">
                    <FolderTree className="w-4 h-4 text-yellow-400" />
                    <span>Project_001_Vase/</span>
                  </div>
                  <div className="ml-6 space-y-1 text-muted-foreground">
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FolderTree className="w-4 h-4 text-blue-400" />
                      <span>raw/</span>
                      <span className="text-xs text-muted-foreground/60">— Raw point clouds (.ply)</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FolderTree className="w-4 h-4 text-green-400" />
                      <span>processed/</span>
                      <span className="text-xs text-muted-foreground/60">— Cleaned data</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FolderTree className="w-4 h-4 text-purple-400" />
                      <span>exports/</span>
                      <span className="text-xs text-muted-foreground/60">— STL, OBJ output</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FileText className="w-4 h-4 text-orange-400" />
                      <span>calibration.json</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span>metadata.json</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <FileText className="w-4 h-4 text-pink-400" />
                      <span>thumbnail.png</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <FolderTree className="w-4 h-4 text-yellow-400/60" />
                    <span>Project_002_Sculpture/</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Schema */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Database className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Metadata Schema</h3>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-3 py-2 font-mono text-muted-foreground">Field</th>
                    <th className="text-left px-3 py-2 font-mono text-muted-foreground">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {metadataFields.map((item) => (
                    <tr key={item.field} className="border-b border-border/20">
                      <td className="px-3 py-2 font-mono text-primary">{item.field}</td>
                      <td className="px-3 py-2 font-mono text-foreground/80">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl border border-border/50 p-6">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataManagement;
