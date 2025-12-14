import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechSpecs from "@/components/TechSpecs";
import AssemblyViewer from "@/components/AssemblyViewer";
import BillOfMaterials from "@/components/BillOfMaterials";
import DownloadSection from "@/components/DownloadSection";
import DesignJustification from "@/components/DesignJustification";
import Footer from "@/components/Footer";
import AppOverview from "@/components/AppOverview";
import AppArchitecture from "@/components/AppArchitecture";
import ScannerDashboard from "@/components/ScannerDashboard";
import CalibrationModule from "@/components/CalibrationModule";
import CalibrationWizard from "@/components/CalibrationWizard";
import CalibrationMethodology from "@/components/CalibrationMethodology";
import ScanWorkflow from "@/components/ScanWorkflow";
import ScanSimulation from "@/components/ScanSimulation";
import AINoiseReduction from "@/components/AINoiseReduction";
import AutomationFeatures from "@/components/AutomationFeatures";
import SustainabilitySection from "@/components/SustainabilitySection";
import UIScreens from "@/components/UIScreens";
import ConnectionDiagram from "@/components/ConnectionDiagram";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <section id="specs">
          <TechSpecs />
        </section>
        <section id="assembly">
          <AssemblyViewer />
        </section>
        <section id="bom">
          <BillOfMaterials />
        </section>
        <section id="downloads">
          <DownloadSection />
        </section>
        
        {/* App Documentation */}
        <section id="app-overview">
          <AppOverview />
        </section>
        <section id="architecture">
          <AppArchitecture />
        </section>
        <section id="dashboard">
          <ScannerDashboard />
        </section>
        <section id="calibration">
          <CalibrationModule />
        </section>
        <section id="calibration-wizard">
          <CalibrationWizard />
        </section>
        <section id="calibration-methodology">
          <CalibrationMethodology />
        </section>
        <section id="workflow">
          <ScanWorkflow />
        </section>
        <section id="scan-simulation">
          <ScanSimulation />
        </section>
        <section id="ai-processing">
          <AINoiseReduction />
        </section>
        <section id="automation">
          <AutomationFeatures />
        </section>
        <section id="sustainability">
          <SustainabilitySection />
        </section>
        <section id="ui-screens">
          <UIScreens />
        </section>
        <section id="connection">
          <ConnectionDiagram />
        </section>
        
        <section id="justification">
          <DesignJustification />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
