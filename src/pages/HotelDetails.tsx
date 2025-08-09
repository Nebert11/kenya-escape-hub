import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Star, Wifi, Car, Coffee, Waves, ArrowLeft } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

interface Hotel {
  id: number;
  name: string;
  description: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  amenities: string[];
  category?: string;
}

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

const HotelDetails = () => {
  const { state } = useLocation() as { state?: { item?: Hotel } };
  const { id } = useParams();
  const hotel = state?.item;

  // SEO: title, meta description, and canonical
  useEffect(() => {
    const title = hotel ? `${hotel.name} | Hotel Details` : "Hotel Details";
    document.title = title;

    const desc = hotel?.description?.slice(0, 150) ||
      "Explore hotel details, rooms, dining, restaurants & bars.";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, [hotel]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {!hotel ? (
          <section className="py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">Hotel not found</h1>
              <p className="text-muted-foreground mb-6">We couldn't find details for this property (ID: {id}). Please go back and select a hotel again.</p>
              <Button asChild variant="outline">
                <Link to="/hotels">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hotels
                </Link>
              </Button>
            </div>
          </section>
        ) : (
          <article>
            <header className="relative">
              <img
                src={hotel.image}
                alt={`${hotel.name} image`}
                className="w-full h-[360px] md:h-[480px] object-cover"
                loading="lazy"
              />
              {hotel.category ? (
                <Badge className="absolute top-6 left-6 bg-primary/90">{hotel.category}</Badge>
              ) : null}
            </header>

            <section className="py-10">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{hotel.name}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{hotel.price}</div>
                    <div className="text-muted-foreground text-sm">per night</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {hotel.location}</div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-safari-gold" /> {hotel.rating}</div>
                </div>

                <p className="mt-6 text-lg text-muted-foreground max-w-3xl">{hotel.description}</p>

                {!!hotel.amenities?.length && (
                  <div className="mt-6">
                    <p className="text-sm font-medium mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="safari" size="lg" asChild>
                    <Link to={`/contact?type=hotel&id=${hotel.id}&name=${encodeURIComponent(hotel.name)}`}>
                      Book Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/hotels">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hotels
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </article>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetails;
