import {
  Target,
  Camera,
  RotateCcw,
  BookOpen,
  Lightbulb,
  Calculator
} from "lucide-react";

const CalibrationMethodology = () => {
  const methodologies = [
    {
      id: 1,
      title: "Laser Plane Detection",
      icon: Target,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      description: "The laser plane equation is computed from multiple line observations to establish the scanning geometry.",
      theory: [
        "The laser projects a plane of light described by the equation:",
        "The plane coefficients (a, b, c, d) are computed using SVD on multiple laser line observations.",
        "At least 3 non-collinear points are required to define the plane uniquely."
      ],
      formula: {
        main: "ax + by + cz + d = 0",
        subFormulas: [
          { label: "Normal vector", value: "n̂ = (a, b, c) / ||n||" },
          { label: "Point-to-plane distance", value: "D = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)" },
          { label: "Plane fit error (RMS)", value: "ε = √(Σᵢ Dᵢ² / N)" }
        ]
      },
      steps: [
        "Position calibration target at multiple heights",
        "Capture laser line at each position",
        "Extract 2D line coordinates using edge detection",
        "Fit 3D plane using least-squares optimization",
        "Validate with reprojection error < 0.5mm"
      ]
    },
    {
      id: 2,
      title: "Camera Intrinsic Calibration",
      icon: Camera,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      description: "Camera intrinsic parameters model the internal geometry including focal length, principal point, and lens distortion.",
      theory: [
        "The pinhole camera model relates 3D world coordinates to 2D image coordinates.",
        "Lens distortion is modeled using radial (k₁, k₂, k₃) and tangential (p₁, p₂) coefficients.",
        "Zhang's calibration method uses multiple checkerboard images to solve for all parameters."
      ],
      formula: {
        main: "s · [u, v, 1]ᵀ = K · [R | t] · [X, Y, Z, 1]ᵀ",
        subFormulas: [
          { label: "Intrinsic matrix K", value: "K = [[fₓ, 0, cₓ], [0, fᵧ, cᵧ], [0, 0, 1]]" },
          { label: "Radial distortion", value: "r² = x² + y², x' = x(1 + k₁r² + k₂r⁴ + k₃r⁶)" },
          { label: "Reprojection error", value: "E = Σᵢⱼ ||pᵢⱼ - π(K, kₙ, Rᵢ, tᵢ, Pⱼ)||²" }
        ]
      },
      steps: [
        "Print 9×6 checkerboard pattern (25mm squares)",
        "Capture 15-20 images at various angles",
        "Detect corner points with sub-pixel accuracy",
        "Run OpenCV calibrateCamera() function",
        "Verify reprojection error < 0.5 pixels"
      ]
    },
    {
      id: 3,
      title: "Turntable Axis Calculation",
      icon: RotateCcw,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      description: "The turntable rotation axis must be precisely determined to correctly align point clouds from different angles.",
      theory: [
        "The rotation axis is computed by tracking feature points across multiple rotational positions.",
        "Circle fitting in 3D space determines the axis direction and center point.",
        "Axis alignment error directly impacts final scan accuracy."
      ],
      formula: {
        main: "P(θ) = C + r·cos(θ)·û + r·sin(θ)·v̂",
        subFormulas: [
          { label: "Axis direction", value: "â = (û × v̂) / ||û × v̂||" },
          { label: "Circle center", value: "C = (1/N) · Σᵢ Pᵢ" },
          { label: "Axis deviation", value: "δ = arccos(â · ẑ) where ẑ = [0, 0, 1]ᵀ" }
        ]
      },
      steps: [
        "Place vertical calibration rod at turntable center",
        "Rotate turntable in 10° increments (36 positions)",
        "Track rod position in each frame",
        "Fit 3D circle to tracked positions",
        "Extract axis vector and center point"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Technical Documentation
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gradient-text">Calibration</span> Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mathematical foundations and algorithms behind scanner calibration
          </p>
        </div>

        <div className="space-y-12">
          {methodologies.map((method, index) => (
            <div
              key={method.id}
              className="glass-card rounded-2xl border border-border/50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-4">
                <div className={`p-3 rounded-xl ${method.bgColor}`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase">
                    Method {method.id}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {method.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/80 mb-6 text-lg">
                  {method.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Theory & Formulas */}
                  <div className="space-y-6">
                    {/* Theory */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <h4 className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                          Theory
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {method.theory.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-foreground/80">
                            <span className="text-primary shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Main Formula */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calculator className="w-4 h-4 text-primary" />
                        <h4 className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                          Key Equations
                        </h4>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                        <div className="text-center mb-4">
                          <code className="text-xl font-mono text-primary">
                            {method.formula.main}
                          </code>
                        </div>
                        <div className="space-y-2">
                          {method.formula.subFormulas.map((sub, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm">
                              <span className="text-muted-foreground shrink-0 w-40">
                                {sub.label}:
                              </span>
                              <code className="font-mono text-foreground/80">
                                {sub.value}
                              </code>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Steps */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <h4 className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
                        Implementation Steps
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {method.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30"
                        >
                          <div className={`w-6 h-6 rounded-full ${method.bgColor} flex items-center justify-center shrink-0`}>
                            <span className={`text-xs font-mono ${method.color}`}>{i + 1}</span>
                          </div>
                          <span className="text-sm text-foreground/80">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Diagram */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                    <svg className="w-full h-48" viewBox="0 0 800 200">
                      {index === 0 && (
                        // Laser Plane Diagram
                        <g>
                          <rect x="50" y="40" width="40" height="25" rx="2" className="fill-red-500/30 stroke-red-500" strokeWidth="2" />
                          <text x="70" y="57" textAnchor="middle" className="fill-red-400 text-xs font-mono">LASER</text>
                          
                          <polygon points="90,52 400,20 400,180 90,52" className="fill-red-500/10 stroke-red-400/50" strokeWidth="1" strokeDasharray="4 2" />
                          
                          <line x1="90" y1="52" x2="600" y2="100" className="stroke-red-500" strokeWidth="2" />
                          
                          <circle cx="200" cy="65" r="4" className="fill-primary" />
                          <circle cx="350" cy="85" r="4" className="fill-primary" />
                          <circle cx="500" cy="95" r="4" className="fill-primary" />
                          
                          <text x="200" y="55" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">P₁</text>
                          <text x="350" y="75" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">P₂</text>
                          <text x="500" y="85" textAnchor="middle" className="fill-muted-foreground text-xs font-mono">P₃</text>
                          
                          <text x="650" y="100" className="fill-foreground text-sm font-mono">ax + by + cz + d = 0</text>
                        </g>
                      )}
                      {index === 1 && (
                        // Camera Calibration Diagram
                        <g>
                          <rect x="600" y="60" width="60" height="40" rx="4" className="fill-card stroke-border" strokeWidth="2" />
                          <circle cx="630" cy="80" r="12" className="fill-blue-500/30 stroke-blue-400" strokeWidth="2" />
                          <text x="630" y="115" textAnchor="middle" className="fill-foreground text-xs font-mono">CAMERA</text>
                          
                          <rect x="100" y="50" width="120" height="100" className="fill-none stroke-muted-foreground" strokeWidth="2" />
                          {[...Array(6)].map((_, i) => (
                            <line key={`h-${i}`} x1="100" y1={50 + i * 20} x2="220" y2={50 + i * 20} className="stroke-muted-foreground/30" strokeWidth="1" />
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <line key={`v-${i}`} x1={100 + i * 24} y1="50" x2={100 + i * 24} y2="150" className="stroke-muted-foreground/30" strokeWidth="1" />
                          ))}
                          
                          <polygon points="600,80 220,50 220,150 600,80" className="fill-blue-500/5 stroke-blue-400/30" strokeWidth="1" />
                          
                          <text x="350" y="180" className="fill-foreground text-sm font-mono">K = [[fₓ, 0, cₓ], [0, fᵧ, cᵧ], [0, 0, 1]]</text>
                        </g>
                      )}
                      {index === 2 && (
                        // Turntable Axis Diagram
                        <g>
                          <ellipse cx="400" cy="160" rx="150" ry="30" className="fill-secondary/50 stroke-border" strokeWidth="2" />
                          
                          <line x1="400" y1="20" x2="400" y2="160" className="stroke-green-400" strokeWidth="2" strokeDasharray="8 4" />
                          <circle cx="400" cy="20" r="5" className="fill-green-400" />
                          
                          <ellipse cx="400" cy="90" rx="80" ry="20" className="fill-none stroke-primary/30" strokeWidth="2" strokeDasharray="4 2" />
                          
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                            const rad = (angle * Math.PI) / 180;
                            const x = 400 + Math.cos(rad) * 80;
                            const y = 90 + Math.sin(rad) * 20;
                            return <circle key={i} cx={x} cy={y} r="4" className="fill-primary" />;
                          })}
                          
                          <text x="480" y="25" className="fill-green-400 text-xs font-mono">â (axis)</text>
                          <text x="550" y="90" className="fill-primary text-xs font-mono">tracked points</text>
                          
                          <text x="650" y="160" className="fill-foreground text-sm font-mono">P(θ) = C + r·cos(θ)·û</text>
                        </g>
                      )}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 glass-card rounded-2xl border border-primary/30 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Calibration Accuracy Targets
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div>
                  <span className="text-sm text-muted-foreground">Laser Plane Error</span>
                  <p className="text-2xl font-mono text-red-400">{"< 0.5mm"}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Camera Reprojection</span>
                  <p className="text-2xl font-mono text-blue-400">{"< 0.5px"}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Axis Deviation</span>
                  <p className="text-2xl font-mono text-green-400">{"< 1.0mm"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalibrationMethodology;
