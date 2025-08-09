import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Clock, Users, Star, ArrowLeft } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import masaiHero from "@/assets/masai-mara-hero.jpg";
import amboseliImg from "@/assets/amboseli-kilimanjaro.jpg";
import dianiImg from "@/assets/diani-beach.jpg";

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  price: string;
  rating: number;
  image: string;
  location: string;
  category?: string;
}

const TourDetails = () => {
  const { state } = useLocation() as { state?: { item?: Tour } };
  const { id } = useParams();
  const tour = state?.item;

  // SEO: title, meta description, and canonical
  useEffect(() => {
    const title = tour ? `${tour.title} | Tour Details` : "Tour Details";
    document.title = title;

    const desc = tour?.description?.slice(0, 150) ||
      "Explore tour images and destination highlights.";

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
  }, [tour]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {!tour ? (
          <section className="py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">Tour not found</h1>
              <p className="text-muted-foreground mb-6">We couldn't find details for this tour (ID: {id}). Please go back and select a tour again.</p>
              <Button asChild variant="outline">
                <Link to="/tours">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tours
                </Link>
              </Button>
            </div>
          </section>
        ) : (
          <article>
            <header className="relative">
              <img
                src={tour.image}
                alt={`${tour.title} tour image`}
                className="w-full h-[360px] md:h-[480px] object-cover"
                loading="lazy"
              />
              {tour.category ? (
                <Badge className="absolute top-6 left-6 bg-primary/90">{tour.category}</Badge>
              ) : null}
            </header>

            <section className="py-10">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{tour.title}</h1>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{tour.price}</div>
                    <div className="text-muted-foreground text-sm">per person</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tour.location}</div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {tour.duration}</div>
                  <div className="flex items-center gap-1"><Users className="w-4 h-4" /> {tour.groupSize}</div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-safari-gold" /> {tour.rating}</div>
                </div>

                <p className="mt-6 text-lg text-muted-foreground max-w-3xl">{tour.description}</p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="safari" size="lg" asChild>
                    <Link to={`/contact?type=tour&id=${tour.id}&name=${encodeURIComponent(tour.title)}`}>
                      Book Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/tours">
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tours
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

export default TourDetails;
