import explodedView from "@/assets/exploded-view.jpg";
import { useState } from "react";

const components = [
  { id: 1, name: "Laser Module", description: "650nm Class II red line laser, 5mW output", position: "top-[15%] left-[20%]" },
  { id: 2, name: "Camera Sensor", description: "5MP CMOS sensor with 2592×1944 resolution", position: "top-[35%] left-[15%]" },
  { id: 3, name: "Stepper Motor", description: "NEMA 17 for precise 360° rotation control", position: "top-[65%] left-[25%]" },
  { id: 4, name: "Controller Board", description: "Arduino-based MCU with USB connectivity", position: "top-[50%] right-[25%]" },
  { id: 5, name: "Turntable", description: "200mm diameter platform, 0.1° precision", position: "bottom-[20%] left-[40%]" },
  { id: 6, name: "Housing Shell", description: "3D printed PLA/PETG enclosure", position: "top-[25%] right-[15%]" },
];

const AssemblyViewer = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest uppercase">Internal Assembly</span>
          <h2 className="text-3xl md:text-4xl font-display mt-4">
            Exploded <span className="gradient-text">View</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interactive component diagram showing the internal mechanical layout and hardware geometry
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Component List */}
          <div className="lg:col-span-2 space-y-3">
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => setActiveComponent(activeComponent === component.id ? null : component.id)}
                className={`w-full text-left glass-card rounded-xl p-4 transition-all duration-300 ${
                  activeComponent === component.id 
                    ? "border-primary/50 bg-primary/5" 
                    : "hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display text-sm ${
                    activeComponent === component.id 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {component.id}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{component.name}</p>
                    <p className="text-xs text-muted-foreground">{component.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Exploded View Image */}
          <div className="lg:col-span-3 relative">
            <div className="glass-card rounded-2xl p-4 overflow-hidden">
              <img
                src={explodedView}
                alt="Exploded view of 3D scanner components"
                className="w-full h-auto rounded-xl"
              />
              
              {/* Component markers */}
              {components.map((component) => (
                <div
                  key={component.id}
                  className={`absolute ${component.position} w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-display cursor-pointer transition-all duration-300 ${
                    activeComponent === component.id
                      ? "bg-primary border-primary text-primary-foreground scale-125"
                      : "bg-background/80 border-primary/50 text-primary hover:scale-110"
                  }`}
                  onClick={() => setActiveComponent(activeComponent === component.id ? null : component.id)}
                >
                  {component.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssemblyViewer;
