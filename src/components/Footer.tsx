import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:mharikrishnan.pro@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harikrishnan-m-83a67535a/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mharikrishnanpro", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:glow-primary transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Harikrishnan M. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:text-primary"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
