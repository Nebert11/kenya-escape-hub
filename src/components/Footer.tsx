import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "/about" },
      { name: "Tour Packages", href: "/tours" },
      { name: "Hotel Booking", href: "/hotels" },
      { name: "Blog", href: "/blog" },
    ],
    "Destinations": [
      { name: "Maasai Mara", href: "/tours/masai-mara" },
      { name: "Amboseli", href: "/tours/amboseli" },
      { name: "Diani Beach", href: "/tours/diani" },
      { name: "Mount Kenya", href: "/tours/mount-kenya" },
    ],
    "Support": [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-safari-gold" />
              <span className="text-2xl font-bold">Mambo Safaris</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for unforgettable Kenyan adventures. Experience the best of wildlife, 
              culture, and natural beauty with our expert-guided tours and premium accommodations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-safari-gold" />
                <span>+254711278366</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-safari-gold" />
                <span>info@mambosafaris.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-safari-gold" />
                <span>Westlands, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-safari-gold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-safari-gold">Stay Updated</h3>
              <p className="text-primary-foreground/80">Get travel tips and exclusive offers straight to your inbox</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-md text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-safari-gold"
              />
              <Button variant="sunset" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 bg-white/10 rounded-full hover:bg-safari-gold/20 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-primary-foreground/60">
            © 2024 Mambo Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;