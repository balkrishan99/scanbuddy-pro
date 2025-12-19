import { FileText, Download, FileCode, File } from "lucide-react";
import { Button } from "@/components/ui/button";

const addBase = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
};

const files = [
  { name: "External Shell CAD", format: "STEP", size: "1.4 KB", icon: FileCode, category: "CAD Files", file: "external-shell.step" },
  { name: "Internal Layout", format: "STEP", size: "1.4 KB", icon: FileCode, category: "CAD Files", file: "internal-layout.step" },
  { name: "Exploded Assembly", format: "STEP", size: "1.5 KB", icon: FileCode, category: "CAD Files", file: "exploded-assembly.step" },
  { name: "Housing Top", format: "STL", size: "1.5 KB", icon: File, category: "3D Print Files", file: "housing-top.stl" },
  { name: "Housing Bottom", format: "STL", size: "1.5 KB", icon: File, category: "3D Print Files", file: "housing-bottom.stl" },
  { name: "Turntable Mount", format: "STL", size: "0.5 KB", icon: File, category: "3D Print Files", file: "turntable-mount.stl" },
  { name: "Wiring Schematic", format: "MD", size: "2.1 KB", icon: FileText, category: "Documentation", file: "wiring-schematic.md" },
  { name: "Assembly Guide", format: "MD", size: "3.7 KB", icon: FileText, category: "Documentation", file: "assembly-guide.md" },
  { name: "Calibration Manual", format: "MD", size: "4.1 KB", icon: FileText, category: "Documentation", file: "calibration-manual.md" },
];

const categories = [...new Set(files.map(f => f.category))];

const DownloadSection = () => {
  return (
    <section id="downloads" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase">Design Files</span>
          <h2 className="text-3xl md:text-4xl font-display mt-4">
            Download <span className="gradient-text">Package</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Complete CAD files, 3D print files, and technical documentation for building your own scanner
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-display text-lg text-muted-foreground mb-4">{category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {files
                  .filter(f => f.category === category)
                  .map((file) => (
                    <a
                      key={file.name}
                      href={addBase(`downloads/${file.file}`)}
                      download={file.file}
                      className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-primary/50 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <file.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.format} • {file.size}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="xl">
            <Download className="w-5 h-5" />
            Download Complete Package (52 MB)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
