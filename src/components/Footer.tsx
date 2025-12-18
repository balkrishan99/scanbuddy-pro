import { Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold">SP</span>
            </div>
            <span className="font-display text-lg">ScanBuddy-Pro</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#specs" className="hover:text-foreground transition-colors">Specs</a>
            <a href="#assembly" className="hover:text-foreground transition-colors">Assembly</a>
            <a href="#bom" className="hover:text-foreground transition-colors">BOM</a>
            <a href="#downloads" className="hover:text-foreground transition-colors">Downloads</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Open-source hardware project. Licensed under CERN-OHL-S v2.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
