import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Camera,
  Zap,
  RotateCcw,
  Thermometer,
  Wifi,
  Download,
  RefreshCw,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorDiagnostics = () => {
  const [isRunning, setIsRunning] = useState(false);

  const healthMetrics = [
    { name: "Camera Connection", status: "ok", value: "1080p @ 30fps", icon: Camera },
    { name: "Laser Module", status: "ok", value: "5mW Active", icon: Zap },
    { name: "Turntable Motor", status: "warning", value: "Slight vibration", icon: RotateCcw },
    { name: "Temperature", status: "ok", value: "42°C", icon: Thermometer },
    { name: "USB Bandwidth", status: "ok", value: "320 MB/s", icon: Wifi },
  ];

  const calibrationScores = [
    { name: "Laser Plane Alignment", score: 94, threshold: 80 },
    { name: "Camera Intrinsics", score: 98, threshold: 90 },
    { name: "Turntable Axis", score: 87, threshold: 85 },
    { name: "Overall Confidence", score: 93, threshold: 85 },
  ];

  const warnings = [
    { type: "info", message: "Ambient light detected - recommend dimming room lights", time: "2 min ago" },
    { type: "warning", message: "Minor turntable vibration - check mounting screws", time: "5 min ago" },
    { type: "success", message: "Calibration completed successfully", time: "12 min ago" },
  ];

  const diagnosticFeatures = [
    {
      title: "Real-time Hardware Monitoring",
      description: "Continuous monitoring of all connected hardware components with instant status updates.",
      items: ["Camera feed quality analysis", "Laser intensity monitoring", "Motor step accuracy", "Temperature tracking"]
    },
    {
      title: "Fault Detection System",
      description: "Automatic detection of hardware issues before they affect scan quality.",
      items: ["Camera disconnect alerts", "Laser degradation warning", "Motor stall detection", "Overheating protection"]
    },
    {
      title: "Calibration Quality Scoring",
      description: "Numerical confidence scores (0-100%) for each calibration parameter.",
      items: ["Per-step confidence display", "Threshold-based warnings", "Recalibration recommendations", "Historical trend analysis"]
    },
    {
      title: "User Warning System",
      description: "Proactive alerts to prevent common scanning errors.",
      items: ["Misalignment detection", "Vibration sensitivity alerts", "Ambient light warnings", "Object placement guides"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Reliability & Safety
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Error Handling & <span className="gradient-text">Diagnostics</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time hardware monitoring and intelligent fault detection
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Live Health Monitor */}
          <div className="lg:col-span-2 glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold text-lg text-foreground">Live Health Monitor</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsRunning(!isRunning)}
                className="gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isRunning ? "animate-spin" : ""}`} />
                {isRunning ? "Monitoring..." : "Run Diagnostics"}
              </Button>
            </div>
            <div className="p-6 space-y-4">
              {healthMetrics.map((metric) => (
                <div key={metric.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <metric.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">{metric.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-muted-foreground">{metric.value}</span>
                    {metric.status === "ok" && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {metric.status === "warning" && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
                    {metric.status === "error" && <XCircle className="w-5 h-5 text-red-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calibration Quality */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Calibration Quality</h3>
            </div>
            <div className="p-6 space-y-4">
              {calibrationScores.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className={`font-mono text-sm ${
                      item.score >= item.threshold ? "text-emerald-400" : "text-yellow-400"
                    }`}>
                      {item.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        item.score >= item.threshold ? "bg-emerald-500" : "bg-yellow-500"
                      }`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warnings Log */}
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden mb-12">
          <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <h3 className="font-display font-bold text-lg text-foreground">System Notifications</h3>
            </div>
            <Button variant="ghost" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export Logs
            </Button>
          </div>
          <div className="p-4 space-y-2">
            {warnings.map((warning, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  warning.type === "warning" ? "bg-yellow-500/10" :
                  warning.type === "info" ? "bg-blue-500/10" :
                  "bg-emerald-500/10"
                }`}
              >
                {warning.type === "warning" && <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />}
                {warning.type === "info" && <Activity className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />}
                {warning.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm text-foreground">{warning.message}</p>
                  <span className="text-xs text-muted-foreground">{warning.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {diagnosticFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl border border-border/50 p-6">
              <h4 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErrorDiagnostics;
