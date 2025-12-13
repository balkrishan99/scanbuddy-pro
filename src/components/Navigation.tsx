import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-sm">LS</span>
            </div>
            <span className="font-display text-lg hidden sm:block">LowCost3DScanner</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              Specs
            </a>
            <a href="#assembly" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              Assembly
            </a>
            <a href="#bom" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              BOM
            </a>
            <a href="#downloads" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              Downloads
            </a>
            <a href="#justification" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              Rationale
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
                Specs
              </a>
              <a href="#assembly" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
                Assembly
              </a>
              <a href="#bom" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
                BOM
              </a>
              <a href="#downloads" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
                Downloads
              </a>
              <a href="#justification" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
                Rationale
              </a>
              <Button variant="hero" size="sm" className="w-full mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
