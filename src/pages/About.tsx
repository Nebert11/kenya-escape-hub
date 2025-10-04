import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Users, Heart } from "lucide-react";

import amboseli from "@/assets/amboseli-kilimanjaro.jpg";

const About = () => {
  const stats = [
    { number: "100+", label: "Happy Travelers", icon: Users },
    { number: "20+", label: "Tour Packages", icon: MapPin },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Customer Satisfaction", icon: Heart }
  ];

  const team = [
    {
      name: "Yvonne Gatwiri",
      role: "Founder & CEO",
      description: "Born and raised in Kenya, Yvonne has over 5 years of experience in tourism and hospitality. She is a professional safari guide with extensive knowledge of Kenya's wildlife and national parks.",
      image: "/placeholder.svg"
    },
    // {
    //   name: "Nebert Ngari",                                                                                                                                                                                                                                                                                                        
    //   role: "Co-Founder",
    //   description: "",
    //   image: "/placeholder.svg"
    // },                                                                                                               
    {
      name: "Nebert Ngari",
      role: "Co-Founder & Customer Experience Manager",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      description: "Ensures every guest has an unforgettable experience during their stay in Kenya.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-safari">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Travel Buddies
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your trusted partner for authentic Kenyan adventures and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Passionate About Kenya's Beauty
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014, Travel Buddies was born from a deep love for Kenya's incredible landscapes, 
                  diverse wildlife, and rich cultural heritage. Our mission is to share the magic of Kenya with 
                  travelers from around the world while supporting local communities.
                </p>
                <p>
                  We believe that travel should be transformative, sustainable, and authentic. That's why we work 
                  closely with local guides, communities, and conservation efforts to ensure our tours benefit 
                  both visitors and the places they explore.
                </p>
                <p>
                  From the vast savannas of the Maasai Mara to the pristine beaches of the Indian Ocean coast, 
                  we curate experiences that showcase the very best of Kenya while respecting its natural beauty 
                  and cultural traditions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={amboseli}
                alt="Kenya landscape"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Authentic Experiences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We create genuine connections between travelers and Kenya's people, wildlife, and landscapes, 
                  ensuring every experience is meaningful and memorable.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Community Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We partner with local communities, employing local guides and supporting conservation efforts 
                  to ensure tourism benefits everyone involved.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Excellence
                </CardTitle> 
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From carefully selected accommodations to expertly guided tours, we maintain the highest 
                  standards in everything we do to exceed your expectations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Meet the People Behind the Magic
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
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

export default About;