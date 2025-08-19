import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "Travel Buddies";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedTours />
      
      {/* Holiday Packages Advert Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Special Holiday Packages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Mombasa Holiday Destination
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the coastal paradise of Mombasa with our exclusive holiday packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Main Advert Card */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="/src/assets/diani-beach.jpg" 
                    alt="Mombasa Holiday Packages"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Travel Buddies</h3>
                    <p className="text-lg opacity-90">Explore • Experience • Enjoy</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Package Cards */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Mombasa</span>
                </div>
                <CardTitle className="text-xl">Day Tour</CardTitle>
                <div className="text-3xl font-bold">$155</div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-center mb-4">
                  Complete Mombasa experience in one day
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Old Town exploration</li>
                  <li>• Spice Market visit</li>
                  <li>• Haller Park</li>
                  <li>• Private transport</li>
                  <li>• All fees included</li>
                </ul>
                <div className="flex flex-col gap-2">
                  <Button variant="safari" asChild>
                    <Link to="/holiday-packages">View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+254743327540">
                      <Phone className="w-4 h-4 mr-2" />
                      Quick Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">VIP Experience</span>
                </div>
                <CardTitle className="text-xl">Nightlife Tour</CardTitle>
                <div className="text-3xl font-bold">$80</div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-center mb-4">
                  Experience Mombasa's vibrant nightlife
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Pick-up & drop-off</li>
                  <li>• 2 beers included</li>
                  <li>• VIP entry to top spots</li>
                  <li>• Professional guide</li>
                  <li>• Safe transport</li>
                </ul>
                <div className="flex flex-col gap-2">
                  <Button variant="safari" asChild>
                    <Link to="/holiday-packages">Book Adventure</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+254743327540">
                      <Phone className="w-4 h-4 mr-2" />
                      Quick Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/holiday-packages">
                View All Holiday Packages
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
