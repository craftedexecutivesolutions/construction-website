import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 cursor-pointer px-3 py-2 rounded-md">
              <Building2 className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight">
                  Pacific Stone Builders
                </span>
                <span className="text-xs opacity-90">Building Tomorrow's CNMI, Today</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}>
                <Button
                  variant="ghost"
                  className={`text-primary-foreground hover:text-primary-foreground ${
                    location === link.href ? "bg-white/20" : ""
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" data-testid="button-quote">
              <Button className="ml-2 bg-[#FF6B4A] hover:bg-[#FF6B4A] text-white border border-[#E85539]">
                Get a Quote
              </Button>
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-primary-foreground hover:text-primary-foreground ${
                      location === link.href ? "bg-white/20" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="w-full bg-[#FF6B4A] hover:bg-[#FF6B4A] text-white border border-[#E85539]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
