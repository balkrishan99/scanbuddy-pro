import { FileText, Download, FileCode, File } from "lucide-react";
import { Button } from "@/components/ui/button";

const files = [
  { name: "External Shell CAD", format: "STEP", size: "12.4 MB", icon: FileCode, category: "CAD Files" },
  { name: "Internal Layout", format: "STEP", size: "8.7 MB", icon: FileCode, category: "CAD Files" },
  { name: "Exploded Assembly", format: "STEP", size: "15.2 MB", icon: FileCode, category: "CAD Files" },
  { name: "Housing Top", format: "STL", size: "4.2 MB", icon: File, category: "3D Print Files" },
  { name: "Housing Bottom", format: "STL", size: "5.8 MB", icon: File, category: "3D Print Files" },
  { name: "Turntable Mount", format: "STL", size: "2.1 MB", icon: File, category: "3D Print Files" },
  { name: "Wiring Schematic", format: "PDF", size: "1.2 MB", icon: FileText, category: "Documentation" },
  { name: "Assembly Guide", format: "PDF", size: "3.5 MB", icon: FileText, category: "Documentation" },
  { name: "Calibration Manual", format: "PDF", size: "0.8 MB", icon: FileText, category: "Documentation" },
];

const categories = [...new Set(files.map(f => f.category))];

const DownloadSection = () => {
  return (
    <section className="py-20 bg-card/30">
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
                    <div
                      key={file.name}
                      className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-primary/50 transition-all duration-300"
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
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
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
