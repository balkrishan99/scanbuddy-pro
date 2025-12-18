import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "Specs", href: "#specs" },
    { label: "Assembly", href: "#assembly" },
    { label: "BOM", href: "#bom" },
    { label: "Downloads", href: "#downloads" },
    { label: "System Requirements", href: "#system-requirements" },
    { label: "Error Diagnostics", href: "#error-diagnostics" },
    { label: "Data Management", href: "#data-management" },
    { label: "Export Interop", href: "#export-interoperability" },
    { label: "Security", href: "#security-safety" },
    { label: "Plugin Architecture", href: "#plugin-architecture" },
    { label: "Validation", href: "#validation-testing" },
    { label: "Roadmap", href: "#project-roadmap" },
    { label: "Licensing", href: "#licensing-deployment" },
    { label: "Glossary", href: "#glossary-references" },
    { label: "Rationale", href: "#justification" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="ScanBuddy-Pro logo"
              className="w-10 h-10 rounded-lg border border-primary/40"
            />
            <span className="font-display text-lg hidden sm:block">ScanBuddy-Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display"
              >
                {link.label}
              </a>
            ))}
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display"
                >
                  {link.label}
                </a>
              ))}
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
