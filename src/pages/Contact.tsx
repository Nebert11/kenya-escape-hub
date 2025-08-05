import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 712 345 678", "+254 720 123 456"],
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@kenyaescapehub.com", "bookings@kenyaescapehub.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Nairobi CBD", "Kimathi Street, 3rd Floor"],
      description: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+254 712 345 678"],
      description: "Quick responses for urgent inquiries"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-safari">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ready to plan your Kenya adventure? We're here to help make your dream trip a reality.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-medium text-foreground">{detail}</p>
                    ))}
                  </div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+254 700 000 000" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      rows={6}
                    />
                  </div>
                  
                  <Button variant="safari" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-3">
                    If you're currently on a tour with us and need immediate assistance:
                  </p>
                  <div className="space-y-2">
                    <p className="font-bold text-orange-800">24/7 Emergency Hotline:</p>
                    <p className="text-lg font-bold text-orange-800">+254 700 SAFARI (700-723274)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Need a Quick Response?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For faster responses, reach out to us on WhatsApp or call us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="https://wa.me/254712345678?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Us
                      </a>
                    </Button>
                    <Button variant="safari" className="flex-1" asChild>
                      <a href="tel:+254712345678">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Kenya Escape Hub</p>
                    <p className="text-muted-foreground">Kimathi Street, 3rd Floor</p>
                    <p className="text-muted-foreground">Nairobi CBD, Kenya</p>
                    <p className="text-muted-foreground">P.O. Box 12345-00100</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How far in advance should I book?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We recommend booking at least 2-3 months in advance, especially for peak season (July-September and December-January).
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in tour packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Most packages include accommodation, meals, transport, park fees, and guide services. Specific inclusions vary by package.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom itineraries?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! We specialize in creating personalized itineraries based on your interests, budget, and time constraints.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your cancellation policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cancellations 30+ days before: full refund. 15-29 days: 50% refund. Less than 15 days: no refund, subject to force majeure.
                </CardDescription>
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