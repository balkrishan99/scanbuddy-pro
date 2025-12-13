import { Smartphone, Monitor, Cpu, Wifi, Bluetooth, Usb } from "lucide-react";

const AppOverview = () => {
  const platforms = [
    {
      icon: Smartphone,
      name: "Mobile App",
      platforms: "Android / iOS",
      description: "Scanner control & live preview",
    },
    {
      icon: Monitor,
      name: "Desktop App",
      platforms: "Windows / Linux",
      description: "High-quality processing & export",
    },
  ];

  const purposes = [
    "Controls hardware components",
    "Guides calibration process",
    "Captures scan data in real-time",
    "Processes point clouds",
    "Exports 3D models (.OBJ, .STL, .PLY)",
  ];

  const connections = [
    { icon: Usb, name: "USB", desc: "Prototype" },
    { icon: Bluetooth, name: "Bluetooth", desc: "Mobile" },
    { icon: Wifi, name: "Wi-Fi", desc: "PC Workflow" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Software
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">OpenScan3D</span> App
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cross-platform control & processing application — the brain of your 3D laser scanner
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <platform.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-primary font-mono text-sm mb-2">
                    {platform.platforms}
                  </p>
                  <p className="text-muted-foreground">{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Purpose Section */}
        <div className="glass-card p-8 rounded-2xl border border-border/50 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Core Functionality
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-sm">
                  {index + 1}
                </div>
                <span className="text-foreground/90">{purpose}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Options */}
        <div className="flex flex-wrap justify-center gap-6">
          {connections.map((conn) => (
            <div
              key={conn.name}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/50 border border-border/50"
            >
              <conn.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{conn.name}</span>
              <span className="text-muted-foreground text-sm">({conn.desc})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppOverview;
