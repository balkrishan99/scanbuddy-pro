import heroScanner from "@/assets/hero-scanner.jpg";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileCode } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0" />
      
      {/* Glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-display tracking-wider">
                PROFESSIONAL SCANNER PLATFORM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
                ScanBuddy-Pro
                <br />
                <span className="gradient-text">3D Laser Scanner</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                A functional, prototype-ready 3D laser scanner designed for accessibility, 
                precision, and sustainability. Complete with CAD files, BOM, and assembly documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a href="#downloads" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CAD Files
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#app-overview" className="inline-flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Documentation
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-display text-primary">$150</p>
                <p className="text-xs text-muted-foreground">Prototype Cost</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-display text-primary">0.1mm</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-display text-primary">60s</p>
                <p className="text-xs text-muted-foreground">Scan Time</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative animate-float">
              <img
                src={heroScanner}
                alt="3D Laser Scanner Device"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute inset-x-0 h-1 scan-line opacity-60" />
              </div>
            </div>
            
            {/* Floating badge */}
            <Button
              asChild
              variant="glass"
              size="lg"
              className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 flex items-center gap-3 text-left transition-transform hover:-translate-y-1"
            >
              <a href="#downloads">
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-primary" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">Export Ready</span>
                    <span className="text-xs text-muted-foreground">.STL .OBJ .PLY</span>
                  </span>
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
