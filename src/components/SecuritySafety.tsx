import {
  Shield,
  AlertTriangle,
  Lock,
  Wifi,
  WifiOff,
  Users,
  Key,
  Eye,
  Download,
  CheckCircle2
} from "lucide-react";

const SecuritySafety = () => {
  const laserSafety = [
    { class: "Class II", power: "< 1mW", risk: "Low", desc: "Safe for incidental exposure", color: "text-green-400" },
    { class: "Class IIIa", power: "1-5mW", risk: "Medium", desc: "Avoid direct eye exposure", color: "text-yellow-400" },
    { class: "Class IIIb", power: "5-500mW", risk: "High", desc: "Not recommended - eye damage risk", color: "text-red-400" },
  ];

  const userRoles = [
    { role: "Operator", permissions: ["Start/stop scans", "View results", "Export basic formats"], icon: Users },
    { role: "Admin", permissions: ["All operator permissions", "Manage calibration", "System settings", "User management"], icon: Key },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Encrypted Communication",
      description: "AES-256 encryption for all wireless communication between app and scanner hardware.",
    },
    {
      icon: Download,
      title: "Secure Firmware Updates",
      description: "Signed firmware packages with checksum verification to prevent tampering.",
    },
    {
      icon: WifiOff,
      title: "Offline-Only Mode",
      description: "Complete air-gapped operation for sensitive environments. No external network required.",
    },
    {
      icon: Eye,
      title: "Audit Logging",
      description: "Complete activity logs for compliance. Track all user actions and system events.",
    },
  ];

  const safetyMeasures = [
    "Automatic laser shutoff when camera feed is interrupted",
    "Motion sensor integration for presence detection",
    "Emergency stop button support (hardware)",
    "Warning indicators during active scan",
    "Timed auto-shutdown for idle periods",
    "Child lock mode for unattended operation",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Safety & Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Security & <span className="gradient-text">Safety</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive safety measures and security protocols
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Laser Safety */}
          <div className="glass-card rounded-2xl border border-red-500/30 overflow-hidden">
            <div className="bg-red-500/10 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h3 className="font-display font-bold text-lg text-foreground">Laser Safety Classifications</h3>
            </div>
            <div className="p-6 space-y-4">
              {laserSafety.map((item) => (
                <div key={item.class} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono font-bold ${item.color}`}>{item.class}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.risk === "Low" ? "bg-green-500/20 text-green-400" :
                      item.risk === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {item.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Power: {item.power} — {item.desc}
                  </p>
                </div>
              ))}
              <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <p className="text-sm text-green-400">
                  <strong>Recommendation:</strong> Use Class II ({"<"}1mW) lasers for maximum safety. OpenScan3D is designed to work effectively with low-power lasers.
                </p>
              </div>
            </div>
          </div>

          {/* User Permissions */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">User Permission System</h3>
            </div>
            <div className="p-6 space-y-6">
              {userRoles.map((role) => (
                <div key={role.role}>
                  <div className="flex items-center gap-2 mb-3">
                    <role.icon className="w-5 h-5 text-primary" />
                    <span className="font-display font-bold text-foreground">{role.role}</span>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {role.permissions.map((perm, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {perm}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl border border-border/50 p-5">
              <feature.icon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Safety Measures */}
        <div className="glass-card rounded-2xl border border-border/50 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="font-display font-bold text-xl text-foreground">Built-in Safety Measures</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyMeasures.map((measure, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySafety;
