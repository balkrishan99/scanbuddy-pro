import { 
  Smartphone, 
  Home, 
  Target, 
  Scan,
  Cpu,
  FolderOpen,
  Settings
} from "lucide-react";

const UIScreens = () => {
  const screens = [
    {
      id: 1,
      name: "Splash Screen",
      icon: Smartphone,
      description: "App launch with logo animation",
      preview: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-12 h-12 rounded-2xl bg-primary/30 flex items-center justify-center mb-3">
            <Scan className="w-6 h-6 text-primary" />
          </div>
          <span className="font-mono text-xs text-foreground">OpenScan3D</span>
          <div className="mt-4 w-16 h-1 rounded-full bg-primary/30 overflow-hidden">
            <div className="w-1/2 h-full bg-primary animate-pulse" />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Home,
      description: "Main control interface",
      preview: (
        <div className="p-2 h-full flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-2 rounded bg-primary/30" />
            <div className="w-4 h-4 rounded-full bg-green-500/30" />
          </div>
          <div className="flex-1 rounded-lg bg-muted/30 mb-2 flex items-center justify-center">
            <div className="w-0.5 h-12 bg-red-500/50" />
          </div>
          <div className="flex gap-1">
            <div className="flex-1 h-6 rounded bg-primary/30" />
            <div className="flex-1 h-6 rounded bg-muted/30" />
            <div className="flex-1 h-6 rounded bg-muted/30" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Calibration",
      icon: Target,
      description: "AR overlay calibration",
      preview: (
        <div className="p-2 h-full flex flex-col">
          <div className="flex-1 rounded-lg bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border border-primary/50 rounded-full" />
              <div className="absolute w-16 h-0.5 bg-primary/30" />
              <div className="absolute h-16 w-0.5 bg-primary/30" />
            </div>
            <div className="absolute top-1 right-1 w-8 h-3 rounded-full bg-green-500/30" />
          </div>
          <div className="mt-2 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="w-2 h-2 rounded-full bg-muted/50" />
            <div className="w-2 h-2 rounded-full bg-muted/50" />
          </div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Scan Preview",
      icon: Scan,
      description: "Real-time point capture",
      preview: (
        <div className="p-2 h-full flex flex-col">
          <div className="flex-1 rounded-lg bg-muted/30 relative overflow-hidden flex items-center justify-center">
            {/* Simulated point cloud */}
            <svg viewBox="0 0 50 50" className="w-16 h-16">
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={25 + Math.cos(i * 0.5) * (8 + i * 0.3)}
                  cy={25 + Math.sin(i * 0.5) * (8 + i * 0.3)}
                  r="1"
                  fill="currentColor"
                  className="text-primary"
                />
              ))}
            </svg>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-muted/30 overflow-hidden">
            <div className="w-2/3 h-full bg-primary" />
          </div>
        </div>
      ),
    },
    {
      id: 5,
      name: "Processing",
      icon: Cpu,
      description: "AI noise reduction",
      preview: (
        <div className="p-2 h-full flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-2 animate-pulse">
            <Cpu className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1 w-full">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="flex-1 h-1.5 rounded bg-muted/30" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="flex-1 h-1.5 rounded bg-muted/30" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <div className="flex-1 h-1.5 rounded bg-muted/30" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      name: "File Manager",
      icon: FolderOpen,
      description: "Export & share models",
      preview: (
        <div className="p-2 h-full flex flex-col">
          <div className="flex items-center gap-1 mb-2">
            <FolderOpen className="w-3 h-3 text-primary" />
            <span className="text-[8px] text-foreground">Models</span>
          </div>
          <div className="space-y-1">
            {[".PLY", ".OBJ", ".STL"].map((ext) => (
              <div key={ext} className="flex items-center gap-1 p-1 rounded bg-muted/20">
                <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                  <span className="text-[6px] text-primary font-mono">{ext}</span>
                </div>
                <div className="flex-1 h-1.5 rounded bg-muted/30" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      name: "Settings",
      icon: Settings,
      description: "Laser, camera, motor config",
      preview: (
        <div className="p-2 h-full flex flex-col">
          <div className="flex items-center gap-1 mb-2">
            <Settings className="w-3 h-3 text-primary" />
            <span className="text-[8px] text-foreground">Settings</span>
          </div>
          <div className="space-y-2">
            {["Laser", "Camera", "Motor"].map((setting) => (
              <div key={setting} className="space-y-1">
                <span className="text-[6px] text-muted-foreground">{setting}</span>
                <div className="h-1.5 rounded-full bg-muted/30 overflow-hidden">
                  <div className="w-2/3 h-full bg-primary/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Section 5
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            App <span className="gradient-text">UI Screens</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wireframe previews of the mobile application interface
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {screens.map((screen) => (
            <div key={screen.id} className="group">
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ width: "160px" }}>
                <div className="aspect-[9/16] rounded-3xl bg-background border-4 border-foreground/20 overflow-hidden shadow-xl group-hover:border-primary/50 transition-colors">
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-foreground/20" />
                  {/* Screen Content */}
                  <div className="pt-5 pb-4 px-1 h-full">
                    {screen.preview}
                  </div>
                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-foreground/20" />
                </div>
              </div>
              
              {/* Label */}
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <screen.icon className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground text-sm">{screen.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIScreens;
