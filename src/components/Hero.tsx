import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

import masaiMaraHero from "@/assets/masai-mara-hero.jpg";
import bg1 from "@/assets/background/bg-1.jpg"
import bg2 from "@/assets/background/bg-2.jpg"
import bg3 from "@/assets/background/bg3.jpg"
import bg4 from "@/assets/background/bg-4.jpg"
import { useEffect, useState } from "react";

const Hero = () => {
  const images = [bg1, bg2, bg3, bg4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);



  const stats = [
    { icon: Users, value: "50K+", label: "Happy Travelers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[5000ms] ease-in-out transform ${
            index === current ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the Magic of
            <span className="block bg-gradient-to-r from-safari-gold to-sunset-red bg-clip-text text-transparent">
              Kenya
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Experience breathtaking safaris, pristine beaches, and authentic cultural encounters 
            in the heart of East Africa. Your unforgettable adventure awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/tours">
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/hotels">
                View Hotels
              </Link>
            </Button> 
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-safari-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;