import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BOMItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  prototypePrice: number;
  massPrice: number;
  source: string;
  category: string;
}

const bomData: BOMItem[] = [
  { id: "L001", name: "Line Laser Module", description: "650nm 5mW Class II red line laser", quantity: 1, prototypePrice: 12.99, massPrice: 4.50, source: "AliExpress", category: "Optics" },
  { id: "C001", name: "Camera Module", description: "OV5647 5MP CMOS sensor board", quantity: 1, prototypePrice: 15.99, massPrice: 8.00, source: "Amazon", category: "Electronics" },
  { id: "M001", name: "Stepper Motor NEMA 17", description: "1.8° step angle, 42mm frame", quantity: 1, prototypePrice: 14.99, massPrice: 6.00, source: "StepperOnline", category: "Mechanical" },
  { id: "D001", name: "A4988 Driver Board", description: "Stepper motor driver with heatsink", quantity: 1, prototypePrice: 3.99, massPrice: 1.20, source: "Amazon", category: "Electronics" },
  { id: "B001", name: "Arduino Nano", description: "ATmega328P microcontroller board", quantity: 1, prototypePrice: 8.99, massPrice: 3.50, source: "Arduino Store", category: "Electronics" },
  { id: "P001", name: "Turntable Platform", description: "200mm aluminum/3D printed plate", quantity: 1, prototypePrice: 18.00, massPrice: 5.00, source: "Custom/3D Print", category: "Mechanical" },
  { id: "H001", name: "Housing Shell Set", description: "PLA/PETG 3D printed enclosure", quantity: 1, prototypePrice: 25.00, massPrice: 8.00, source: "3D Printed", category: "Housing" },
  { id: "W001", name: "Wiring & Connectors", description: "JST connectors, USB cable, wires", quantity: 1, prototypePrice: 8.00, massPrice: 2.50, source: "Various", category: "Electronics" },
  { id: "F001", name: "Fasteners Kit", description: "M3/M4 screws, nuts, standoffs", quantity: 1, prototypePrice: 6.00, massPrice: 1.50, source: "Hardware Store", category: "Hardware" },
  { id: "S001", name: "Power Supply", description: "12V 2A DC adapter", quantity: 1, prototypePrice: 9.99, massPrice: 3.00, source: "Amazon", category: "Electronics" },
];

const BillOfMaterials = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["all"]);
  const [pricingTier, setPricingTier] = useState<"prototype" | "mass">("prototype");

  const categories = [...new Set(bomData.map(item => item.category))];
  
  const totalPrototype = bomData.reduce((sum, item) => sum + (item.prototypePrice * item.quantity), 0);
  const totalMass = bomData.reduce((sum, item) => sum + (item.massPrice * item.quantity), 0);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary font-display text-sm tracking-widest uppercase">Cost Breakdown</span>
            <h2 className="text-3xl md:text-4xl font-display mt-4">
              Bill of <span className="gradient-text">Materials</span>
            </h2>
          </div>
          
          {/* Pricing Toggle */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 glass-card rounded-full p-1">
            <button
              onClick={() => setPricingTier("prototype")}
              className={`px-4 py-2 rounded-full text-sm font-display transition-all ${
                pricingTier === "prototype" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Prototype
            </button>
            <button
              onClick={() => setPricingTier("mass")}
              className={`px-4 py-2 rounded-full text-sm font-display transition-all ${
                pricingTier === "mass" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mass Production
            </button>
          </div>
        </div>

        {/* BOM Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground">Part ID</th>
                  <th className="text-left py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground">Component</th>
                  <th className="text-left py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground hidden md:table-cell">Description</th>
                  <th className="text-center py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground">Qty</th>
                  <th className="text-right py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground">Price</th>
                  <th className="text-left py-4 px-6 text-xs font-display uppercase tracking-wider text-muted-foreground hidden lg:table-cell">Source</th>
                </tr>
              </thead>
              <tbody>
                {bomData.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="py-4 px-6 font-display text-sm text-primary">{item.id}</td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground md:hidden">{item.description}</p>
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground hidden md:table-cell">{item.description}</td>
                    <td className="py-4 px-6 text-center font-display">{item.quantity}</td>
                    <td className="py-4 px-6 text-right font-display text-primary">
                      ${pricingTier === "prototype" ? item.prototypePrice.toFixed(2) : item.massPrice.toFixed(2)}
                    </td>
                    <td className="py-4 px-6 hidden lg:table-cell">
                      <span className="text-xs text-muted-foreground">{item.source}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-primary/10">
                  <td colSpan={4} className="py-4 px-6 text-right font-display font-bold">Total Cost:</td>
                  <td className="py-4 px-6 text-right font-display text-xl text-primary font-bold">
                    ${pricingTier === "prototype" ? totalPrototype.toFixed(2) : totalMass.toFixed(2)}
                  </td>
                  <td className="hidden lg:table-cell"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-display text-lg mb-2">Prototype Cost</h3>
            <p className="text-3xl font-display text-primary mb-2">${totalPrototype.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Single unit with retail pricing from accessible sources</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-display text-lg mb-2">Mass Production Cost</h3>
            <p className="text-3xl font-display text-primary mb-2">${totalMass.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Per unit at 1000+ volume with bulk sourcing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillOfMaterials;
