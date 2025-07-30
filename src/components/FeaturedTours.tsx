import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin } from "lucide-react";
import amboseliKilimanjaro from "@/assets/amboseli-kilimanjaro.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: "Maasai Mara Safari Adventure",
      description: "Witness the Great Migration and encounter the Big Five in Kenya's most famous game reserve.",
      image: amboseliKilimanjaro,
      duration: "5 Days",
      groupSize: "Max 8",
      rating: 4.9,
      price: "$1,250",
      badges: ["Popular", "Wildlife"],
      location: "Maasai Mara"
    },
    {
      id: 2,
      title: "Coastal Paradise Getaway",
      description: "Relax on pristine white sand beaches and explore vibrant coral reefs at Diani Beach.",
      image: dianiBeach,
      duration: "7 Days",
      groupSize: "Max 12",
      rating: 4.8,
      price: "$890",
      badges: ["Beach", "Relaxation"],
      location: "Diani Beach"
    },
    {
      id: 3,
      title: "Mount Kenya Expedition",
      description: "Challenge yourself with a trek to Africa's second-highest peak through diverse ecosystems.",
      image: amboseliKilimanjaro,
      duration: "6 Days",
      groupSize: "Max 6",
      rating: 4.7,
      price: "$1,650",
      badges: ["Adventure", "Hiking"],
      location: "Mount Kenya"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover Kenya's most spectacular destinations with our carefully curated tour experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-2 bg-card border-border overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {tour.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-safari-gold mr-1" />
                    {tour.rating}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {tour.groupSize}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  {tour.price}
                  <span className="text-sm font-normal text-muted-foreground">/person</span>
                </div>
                <Button variant="safari" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;