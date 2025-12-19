import { Check, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

const DesignJustification = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase">Design Rationale</span>
          <h2 className="text-3xl md:text-4xl font-display mt-4">
            Why This <span className="gradient-text">Design</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Key Points */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Why It's Low-Cost</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Utilizes commodity components (Arduino, standard camera modules, NEMA steppers) 
                    available globally. 3D printed housing eliminates expensive injection molding. 
                    Streamlined licensing keeps software costs predictable.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Who It Benefits</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Makers, hobbyists, and small businesses needing affordable 3D scanning. 
                    Educational institutions for STEM programs. Artists and designers for 
                    digitizing physical models. Researchers requiring custom scanning solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Scalability & Adoption</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Modular design allows easy upgrades. Community-driven improvements via 
                    shared reference builds. Mass production reduces cost to ~$45/unit. 
                    Compatible with existing 3D printing and modeling workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Specifications */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl mb-6">Expected Performance</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="text-sm font-display text-primary">0.1 - 0.3 mm</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Scan Resolution</span>
                  <span className="text-sm font-display text-primary">0.5 mm point spacing</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "75%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Scan Time (full 360°)</span>
                  <span className="text-sm font-display text-primary">45 - 90 seconds</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "70%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Max Object Size</span>
                  <span className="text-sm font-display text-primary">200 × 200 × 200 mm</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-display text-sm text-muted-foreground mb-4">Potential Applications</h4>
              <div className="flex flex-wrap gap-2">
                {["Product Design", "Reverse Engineering", "3D Printing", "Art & Sculpture", "Education", "Quality Control", "Game Assets"].map((app) => (
                  <span 
                    key={app}
                    className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignJustification;
