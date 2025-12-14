import {
  FlaskConical,
  Target,
  BarChart3,
  Ruler,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from "lucide-react";

const ValidationTesting = () => {
  const testObjects = [
    { name: "Calibration Sphere", diameter: "50.00 mm", tolerance: "±0.01 mm", use: "Accuracy verification" },
    { name: "Step Cylinder", dimensions: "Multi-step", tolerance: "±0.02 mm", use: "Resolution testing" },
    { name: "Gauge Block Set", range: "10-100 mm", tolerance: "Grade 1", use: "Dimensional accuracy" },
    { name: "Surface Roughness Standard", type: "Ra samples", tolerance: "Certified", use: "Detail capture" },
  ];

  const repeatabilityTests = [
    { test: "Same Object, Same Position", runs: 10, deviation: "±0.05 mm", status: "pass" },
    { test: "Same Object, Repositioned", runs: 10, deviation: "±0.08 mm", status: "pass" },
    { test: "Different Lighting", runs: 5, deviation: "±0.12 mm", status: "warning" },
    { test: "After Recalibration", runs: 5, deviation: "±0.06 mm", status: "pass" },
  ];

  const accuracyData = [
    { distance: "50mm", error: 0.08 },
    { distance: "100mm", error: 0.12 },
    { distance: "150mm", error: 0.18 },
    { distance: "200mm", error: 0.25 },
    { distance: "250mm", error: 0.35 },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Quality Assurance
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Validation & <span className="gradient-text">Accuracy Testing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rigorous testing methodology with ground truth comparison
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Test Objects */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <Ruler className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Reference Test Objects</h3>
            </div>
            <div className="p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-3 py-2 text-muted-foreground">Object</th>
                    <th className="text-left px-3 py-2 text-muted-foreground">Spec</th>
                    <th className="text-left px-3 py-2 text-muted-foreground">Use</th>
                  </tr>
                </thead>
                <tbody>
                  {testObjects.map((obj) => (
                    <tr key={obj.name} className="border-b border-border/20">
                      <td className="px-3 py-3 text-foreground">{obj.name}</td>
                      <td className="px-3 py-3 font-mono text-primary text-xs">{obj.tolerance}</td>
                      <td className="px-3 py-3 text-muted-foreground text-xs">{obj.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Repeatability Tests */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <FlaskConical className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Repeatability Tests</h3>
            </div>
            <div className="p-4 space-y-3">
              {repeatabilityTests.map((test) => (
                <div key={test.test} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div>
                    <p className="text-sm text-foreground">{test.test}</p>
                    <p className="text-xs text-muted-foreground">{test.runs} runs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-primary">{test.deviation}</span>
                    {test.status === "pass" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accuracy Chart */}
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden mb-12">
          <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-foreground">Accuracy vs Distance</h3>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-end justify-around gap-4">
              {accuracyData.map((data) => (
                <div key={data.distance} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-12 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all hover:from-primary/80"
                    style={{ height: `${data.error * 600}px` }}
                  />
                  <span className="text-xs font-mono text-muted-foreground">{data.distance}</span>
                  <span className="text-xs font-mono text-primary">±{data.error}mm</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Error increases with distance from optimal scanning range (100-150mm)
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="glass-card rounded-2xl border border-primary/30 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="font-display font-bold text-xl text-foreground">Testing Methodology</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-mono text-primary mb-2">Ground Truth Comparison</h4>
              <p className="text-sm text-muted-foreground">
                CMM (Coordinate Measuring Machine) verified reference objects provide true dimensions for error calculation.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-primary mb-2">Error Heatmaps</h4>
              <p className="text-sm text-muted-foreground">
                Visual representation of deviation across the scanned surface identifies systematic errors and problem areas.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-primary mb-2">Statistical Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Mean, standard deviation, and 95% confidence intervals calculated for all measurements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationTesting;
