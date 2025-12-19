import {
  Scale,
  Code,
  Cpu,
  DollarSign,
  Users,
  Building,
  CheckCircle2,
  Github
} from "lucide-react";

const LicensingDeployment = () => {
  const licenses = [
    {
      component: "App Software",
      license: "MIT License",
      type: "Software License",
      icon: Code,
      details: "Free to use, modify, and distribute. Attribution required.",
    },
    {
      component: "Hardware Designs",
      license: "CERN OHL v2",
      type: "Hardware License",
      icon: Cpu,
      details: "Hardware license requiring derivative designs to stay shareable.",
    },
    {
      component: "Documentation",
      license: "CC BY-SA 4.0",
      type: "Creative Commons",
      icon: Scale,
      details: "Share and adapt with attribution. Same license for derivatives.",
    },
  ];

  const tiers = [
    {
      name: "Community",
      price: "Free",
      icon: Users,
      color: "text-emerald-400",
      features: [
        "Full scanning functionality",
        "All export formats",
        "Basic processing",
        "Community support",
        "Core platform access",
      ],
      target: "Makers, Students, Hobbyists",
    },
    {
      name: "Pro",
      price: "$49/year",
      icon: DollarSign,
      color: "text-blue-400",
      features: [
        "Everything in Community",
        "Priority support",
        "Advanced AI filters",
        "Batch processing",
        "Cloud backup (10GB)",
      ],
      target: "Professionals, Small Businesses",
    },
    {
      name: "Enterprise",
      price: "Custom",
      icon: Building,
      color: "text-purple-400",
      features: [
        "Everything in Pro",
        "On-premise deployment",
        "Custom integrations",
        "SLA support",
        "Training & onboarding",
      ],
      target: "Organizations, Education Institutions",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Distribution Model
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Licensing & <span className="gradient-text">Deployment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible access with optional premium support tiers
          </p>
        </div>

        {/* Licenses */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {licenses.map((license) => (
            <div key={license.component} className="glass-card rounded-2xl border border-border/50 p-6">
              <license.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{license.component}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-sm text-primary">{license.license}</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">{license.type}</span>
              </div>
              <p className="text-sm text-muted-foreground">{license.details}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <h3 className="font-display font-bold text-2xl text-foreground text-center mb-8">Optional Support Tiers</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`glass-card rounded-2xl border p-6 ${
                index === 1 ? "border-primary/50 relative" : "border-border/50"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-full">
                  Recommended
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <tier.icon className={`w-6 h-6 ${tier.color}`} />
                <h4 className="font-display font-bold text-xl text-foreground">{tier.name}</h4>
              </div>
              <div className="mb-4">
                <span className={`text-3xl font-mono font-bold ${tier.color}`}>{tier.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Best for: {tier.target}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Access Assurance */}
        <div className="glass-card rounded-2xl border border-emerald-500/30 p-8 text-center">
          <Github className="w-12 h-12 text-foreground mx-auto mb-4" />
          <h3 className="font-display font-bold text-xl text-foreground mb-2">Core Access Guarantee</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential scanning, processing, and export capabilities remain available without a subscription. 
            Paid tiers fund continued development while unlocking enhanced automation, support, and collaboration tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicensingDeployment;
