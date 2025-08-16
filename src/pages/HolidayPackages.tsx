import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const HolidayPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Mombasa Day Tour",
      price: "$155",
      duration: "Full Day",
      location: "Mombasa",
      rating: 4.8,
      image: "/lovable-uploads/4d1c0734-00b8-4c17-b196-8f7073efb5d0.png",
      description: "Experience the best of Mombasa in a single day with our comprehensive tour package.",
      highlights: [
        "Old Town exploration",
        "Spice Market visit", 
        "Haller Park wildlife sanctuary",
        "Private transport",
        "Professional guide",
        "All fees included"
      ],
      includes: [
        "Professional local guide",
        "Private transportation",
        "Entry fees to all attractions",
        "Bottled water",
        "Traditional Swahili lunch"
      ]
    },
    {
      id: 2,
      title: "Mombasa Nightlife Tour",
      price: "$80",
      duration: "4-6 Hours",
      location: "Mombasa",
      rating: 4.6,
      image: "/lovable-uploads/4d1c0734-00b8-4c17-b196-8f7073efb5d0.png",
      description: "Discover Mombasa's vibrant nightlife scene with pick-up and drop-off service.",
      highlights: [
        "Pick-up & drop-off service",
        "2 complimentary beers included",
        "VIP entry to top spots",
        "Local nightlife guide",
        "Safe and secure transport"
      ],
      includes: [
        "Round-trip transportation",
        "2 beers per person",
        "VIP club entries",
        "Professional guide",
        "Safety escort"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Local Guides",
      description: "Real experiences with authentic local knowledge"
    },
    {
      title: "Day & Night Tours",
      description: "Comprehensive experiences covering all aspects of Mombasa"
    },
    {
      title: "Small Groups",
      description: "Intimate tours with personalized attention"
    },
    {
      title: "Big Memories",
      description: "Unforgettable experiences that last a lifetime"
    },
    {
      title: "Full Service",
      description: "We handle everything - just show up and enjoy!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mombasa Holiday Destination
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore • Experience • Enjoy the coastal paradise of Mombasa
          </p>
          <Badge className="bg-white/20 text-white text-lg px-6 py-2">
            Travel Buddies - Your Local Experience Partners
          </Badge>
        </div>
      </section>

      {/* Featured Package Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/4d1c0734-00b8-4c17-b196-8f7073efb5d0.png" 
              alt="Mombasa Holiday Packages"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Holiday Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully curated Mombasa experiences designed to give you the best of coastal Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-teal-50">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Badge variant="outline" className="bg-white">
                      <MapPin className="w-4 h-4 mr-1" />
                      {pkg.location}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </Badge>
                    <Badge variant="outline" className="bg-white">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {pkg.rating}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Tour Highlights:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Package Includes:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 pt-4">
                      <Button variant="safari" size="lg" asChild>
                        <Link to="/contact">Book Your Adventure!</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="tel:+254711278366">
                          <Phone className="w-4 h-4 mr-2" />
                          +254 711 278 366
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to reserve your spot or get more information about our packages
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <p className="text-white/90">+254 711 278 366</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-white/90">travelbuddies@gmail.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Location</p>
              <p className="text-white/90">Mombasa, Kenya</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://wa.me/254711278366" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayPackages;