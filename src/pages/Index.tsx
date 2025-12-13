import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechSpecs from "@/components/TechSpecs";
import AssemblyViewer from "@/components/AssemblyViewer";
import BillOfMaterials from "@/components/BillOfMaterials";
import DownloadSection from "@/components/DownloadSection";
import DesignJustification from "@/components/DesignJustification";
import Footer from "@/components/Footer";

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
        <section id="justification">
          <DesignJustification />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
