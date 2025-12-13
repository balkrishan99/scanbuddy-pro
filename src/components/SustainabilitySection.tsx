import { 
  Leaf, 
  Smartphone, 
  Laptop, 
  Recycle,
  Code,
  Users
} from "lucide-react";

const SustainabilitySection = () => {
  const points = [
    {
      icon: Code,
      title: "Open-Source Software",
      description: "Free app reduces barriers to entry and encourages community contributions",
    },
    {
      icon: Smartphone,
      title: "Existing Hardware",
      description: "Runs on phones & laptops users already own — no expensive dedicated devices",
    },
    {
      icon: Laptop,
      title: "Minimal Processing Hardware",
      description: "Reduces need for expensive onboard processors on scanner device",
    },
    {
      icon: Recycle,
      title: "DIY & Recycled Builds",
      description: "Supports scanner construction from recycled materials and salvaged parts",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-400 font-mono text-sm tracking-wider uppercase flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4" />
            Section 4
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="text-green-400">Sustainability</span> & Low-Cost
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            How the app contributes to an accessible, eco-friendly scanning solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="glass-card p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <point.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-green-500/10 border border-green-500/30">
            <Users className="w-6 h-6 text-green-400" />
            <div className="text-left">
              <p className="font-semibold text-foreground">Community Driven</p>
              <p className="text-sm text-muted-foreground">Open to contributions & improvements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
