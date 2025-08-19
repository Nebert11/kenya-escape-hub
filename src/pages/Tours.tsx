import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

import masaiMara from "@/assets/masai-mara-hero.jpg"
import amboseli from "@/assets/amboseli-kilimanjaro.jpg"
import dianiBeach from "@/assets/diani-beach.jpg"

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Maasai Mara Safari Adventure",
      description: "Experience the Great Migration and witness the Big Five in Kenya's most famous game reserve.",
      duration: "3 Days",
      groupSize: "2-8 People",
      rating: 4.9,
      image: masaiMara,
      location: "Maasai Mara",
      category: "Safari"
    },
    {
      id: 2,
      title: "Amboseli Elephant Safari",
      description: "Get up close with elephants against the backdrop of Mount Kilimanjaro.",
      duration: "2 Days",
      groupSize: "2-6 People",
      rating: 4.8,
      image: amboseli,
      location: "Amboseli",
      category: "Safari"
    },
    {
      id: 3,
      title: "Diani Beach Getaway",
      description: "Relax on pristine white sand beaches and enjoy water sports on the Indian Ocean.",
      duration: "4 Days",
      groupSize: "2-10 People",
      rating: 4.7,
      image: dianiBeach,
      location: "Diani",
      category: "Beach"
    }
  ];

  // const tourPackages = [
  //   {
  //     id: 1,
  //     name: "Mashujaa Day Special",
  //     description: "3-day Maasai Mara adventure celebrating Kenya's heroes",
  //     price: "$450",
  //     duration: "3 Days",
  //     includes: ["Accommodation", "Game Drives", "All Meals"]
  //   },
  //   {
  //     id: 2,
  //     name: "Heritage Explorer",
  //     description: "Cultural and wildlife combination package",
  //     price: "$680",
  //     duration: "5 Days", 
  //     includes: ["2 Destinations", "Cultural Tours", "Safari Drives"]
  //   },
  //   {
  //     id: 3,
  //     name: "Beach & Safari Combo",
  //     description: "Best of both worlds - wildlife and coast",
  //     price: "$850",
  //     duration: "7 Days",
  //     includes: ["Maasai Mara", "Diani Beach", "All Transfers"]
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-safari">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Kenya's Wonders
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From thrilling safaris to pristine beaches, explore the best of Kenya with our carefully crafted tour packages.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All Tours</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Safari</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Beach</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Cultural</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Adventure</Badge>
            </div>
            <p className="text-muted-foreground">{tours.length} tours available</p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {tour.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {tour.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {tour.groupSize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="safari" asChild>
                        <Link to={`/tours/${tour.id}`} state={{ item: tour }}>
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

      {/* Tour Packages Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tour Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Special curated packages for unforgettable Kenya experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Package Includes:</p>
                      <ul className="space-y-1">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                            <Star className="w-3 h-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      <Button variant="safari">
                        Book Package
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Tours;