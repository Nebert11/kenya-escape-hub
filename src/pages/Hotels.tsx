import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Car, Coffee, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import buraha from "@/assets/buraha-zenoni.jpg"
import diani from "@/assets/diani-sea.jpg"
import kilimanjaro from "@/assets/kilimanjaro-resort.webp"

const Hotels = () => {
  const hotels = [
    // {
    //   id: 1,
    //   name: "Safari Lodge Maasai Mara",
    //   description: "Luxury tented camp overlooking the Mara River with game viewing from your deck.",
    //   location: "Maasai Mara",
    //   rating: 4.8,
    //   image: "/src/assets/masai-mara-hero.jpg",
    //   amenities: ["Free WiFi", "Game Drives", "Restaurant", "Bar"],
    //   category: "Safari Lodge"
    // },
    {
      id: 2,
      name: "Kilimanjaro Mountain Resort",
      description: "Stunning views of Mount Kilimanjaro with modern amenities and wildlife viewing.",
      location: "Amboseli",
      rating: 4.7,
      image: kilimanjaro,
      amenities: ["Pool", "Spa", "Restaurant", "Free Parking"],
      category: "Resort"
    },
    {
      id: 3,
      name: "Diani Sea Resort",
      description: "Beachfront paradise with pristine white sand beaches and crystal clear waters.",
      location: "Diani Beach",
      rating: 4.9,
      image: diani,
      amenities: ["Beach Access", "Water Sports", "Pool", "Restaurant"],
      category: "Beach Resort"
    },
    {
      id: 4,
      name: "Buraha Zenoni Hotel & Resort",
      description: "Idyllic oasis of tranquility in Nakuru, conveniently located near Lake Elementaita with modern amenities.",
      location: "Nakuru",
      rating: 4.6,
      image: buraha,
      amenities: ["Free WiFi", "Restaurant", "Bar", "24-hour Front Desk", "Airport Transfers", "Kids Club"],
      category: "City Hotel"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "free wifi":
        return <Wifi className="w-4 h-4" />;
      case "free parking":
        return <Car className="w-4 h-4" />;
      case "restaurant":
        return <Coffee className="w-4 h-4" />;
      case "beach access":
      case "water sports":
        return <Waves className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-safari">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Luxury Accommodations
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay in comfort and style at Kenya's finest hotels, lodges, and resorts.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All Hotels</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Safari Lodge</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Beach Resort</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">City Hotel</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Luxury</Badge>
            </div>
            <p className="text-muted-foreground">{hotels.length} properties available</p>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {hotel.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{hotel.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {hotel.location}
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Amenities:</p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            {getAmenityIcon(amenity)}
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <Button variant="safari" asChild>
                        <Link to={`/hotels/${hotel.id}`} state={{ item: hotel }}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;