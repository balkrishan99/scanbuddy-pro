import { 
  Smartphone, 
  Cpu, 
  Cable, 
  Bluetooth, 
  Wifi,
  Camera,
  Box,
  RotateCcw
} from "lucide-react";

const ConnectionDiagram = () => {
  const serialCommands = [
    { cmd: "L1", desc: "Laser ON" },
    { cmd: "L0", desc: "Laser OFF" },
    { cmd: "M90", desc: "Motor rotate 90°" },
    { cmd: "M360", desc: "Full rotation" },
    { cmd: "S50", desc: "Speed 50%" },
    { cmd: "CAL", desc: "Calibrate" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Section 6
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Connection <span className="gradient-text">Diagram</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical documentation: App ↔ Microcontroller communication
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl border border-border/50 mb-8">
          {/* Diagram */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {/* App Side */}
            <div className="glass-card p-6 rounded-xl border border-primary/30 w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">OpenScan3D App</h3>
                  <p className="text-xs text-muted-foreground">Mobile / PC</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-muted-foreground">Send commands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-muted-foreground">Receive camera feed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-muted-foreground">Process point cloud</span>
                </div>
              </div>
            </div>

            {/* Connection Methods */}
            <div className="flex lg:flex-col gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
                <Cable className="w-4 h-4 text-green-400" />
                <span className="text-xs font-mono text-foreground">USB Serial</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
                <Bluetooth className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-foreground">Bluetooth</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50">
                <Wifi className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-foreground">Wi-Fi</span>
              </div>
            </div>

            {/* MCU Side */}
            <div className="glass-card p-6 rounded-xl border border-orange-500/30 w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-orange-400" />
                <div>
                  <h3 className="font-semibold text-foreground">Microcontroller</h3>
                  <p className="text-xs text-muted-foreground">ESP32 / Arduino</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center p-2 rounded-lg bg-background/50">
                  <Box className="w-4 h-4 text-red-400 mb-1" />
                  <span className="text-[10px] text-muted-foreground">Laser</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-background/50">
                  <Camera className="w-4 h-4 text-blue-400 mb-1" />
                  <span className="text-[10px] text-muted-foreground">Camera</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-background/50">
                  <RotateCcw className="w-4 h-4 text-green-400 mb-1" />
                  <span className="text-[10px] text-muted-foreground">Motor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Serial Commands */}
        <div className="glass-card p-8 rounded-2xl border border-border/50">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Serial Command Protocol
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serialCommands.map((cmd) => (
              <div
                key={cmd.cmd}
                className="p-4 rounded-xl bg-background border border-border/50 text-center hover:border-primary/50 transition-colors"
              >
                <code className="text-lg font-mono text-primary block mb-1">
                  {cmd.cmd}
                </code>
                <span className="text-xs text-muted-foreground">{cmd.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-mono">Protocol:</span> All commands are ASCII-encoded, 
              terminated with newline (\n). Responses follow same format with ACK/NAK prefix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionDiagram;
