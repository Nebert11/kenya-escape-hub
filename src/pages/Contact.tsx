import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Enquire Now */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enquire Now
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Plan your perfect Kenya adventure with our personalized service
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-8">
                
                {/* Tell us about yourself Section */}
                <div className="space-y-6">
                  <div className="border-b border-orange-200 pb-4">
                    <h2 className="text-2xl font-bold text-orange-600 mb-2">Tell us about yourself</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                      <Input 
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                      <Input 
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="mt-1"
                      />
                    </div>
                  </div>

                </div>

                {/* What are your Travel Plans Section */}
                <div className="space-y-6">
                  <div className="border-b border-orange-200 pb-4">
                    <h2 className="text-2xl font-bold text-orange-600 mb-2">What are your Travel Plans</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="travelType" className="text-sm font-medium">Type of Safari *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select safari type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                          <SelectItem value="cultural">Cultural Safari</SelectItem>
                          <SelectItem value="beach">Beach Safari</SelectItem>
                          <SelectItem value="adventure">Adventure Safari</SelectItem>
                          <SelectItem value="luxury">Luxury Safari</SelectItem>
                          <SelectItem value="budget">Budget Safari</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration" className="text-sm font-medium">Duration *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 Days</SelectItem>
                          <SelectItem value="4-7">4-7 Days</SelectItem>
                          <SelectItem value="8-14">8-14 Days</SelectItem>
                          <SelectItem value="15+">15+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="checkIn" className="text-sm font-medium">Preferred Start Date</Label>
                      <Input 
                        id="checkIn"
                        type="date"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="text-sm font-medium">Number of Guests *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3-5">3-5 Guests</SelectItem>
                          <SelectItem value="6-10">6-10 Guests</SelectItem>
                          <SelectItem value="10+">10+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium">Budget Range (USD) *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="accommodation" className="text-sm font-medium">Accommodation Preference</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select accommodation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury">Luxury Lodge</SelectItem>
                          <SelectItem value="mid-range">Mid-range Hotel</SelectItem>
                          <SelectItem value="budget">Budget Accommodation</SelectItem>
                          <SelectItem value="camping">Camping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Add a bit more detail Section */}
                <div className="space-y-6">
                  <div className="border-b border-orange-200 pb-4">
                    <h2 className="text-2xl font-bold text-orange-600 mb-2">Add a bit more detail</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="destinations" className="text-sm font-medium">Preferred Destinations (Select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {['Maasai Mara', 'Amboseli', 'Tsavo', 'Samburu', 'Lake Nakuru', 'Aberdares', 'Mount Kenya', 'Diani Beach', 'Malindi', 'Lamu'].map((destination) => (
                          <div key={destination} className="flex items-center space-x-2">
                            <Checkbox id={destination} />
                            <Label htmlFor={destination} className="text-sm">{destination}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interests" className="text-sm font-medium">Special Interests</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {['Big Five', 'Bird Watching', 'Photography', 'Cultural Experiences', 'Hot Air Balloon', 'Walking Safaris', 'Night Game Drives', 'Community Visits'].map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox id={interest} />
                            <Label htmlFor={interest} className="text-sm">{interest}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo" className="text-sm font-medium">Additional Information</Label>
                      <Textarea 
                        id="additionalInfo"
                        placeholder="Tell us anything else that would help us plan your perfect safari..."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for travel tips and special offers
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button variant="safari" size="lg" className="px-12 py-3 text-lg">
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h2>
            <p className="text-muted-foreground">Our team is ready to help you plan your adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-3">Available 24/7</p>
                <Button variant="outline" asChild>
                  <a href="tel:+254711278366">+254 711 278 366</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">Quick responses</p>
                <Button variant="outline" asChild>
                  <a href="https://wa.me/254711278366" target="_blank" rel="noopener noreferrer">Chat Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">We respond within 2 hours</p>
                <Button variant="outline" asChild>
                  <a href="mailto:info@mambosafaris.com">info@mambosafaris.com</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;