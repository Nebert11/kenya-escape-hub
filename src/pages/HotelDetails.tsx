import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Star, Wifi, Car, Coffee, Waves, ArrowLeft } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";

import dish1 from "@/assets/hotel/dishes/dish1.jpg";
import dish2 from "@/assets/hotel/dishes/dish2.jpg";
import dish3 from "@/assets/hotel/dishes/dish3.jpg";
import dish4 from "@/assets/hotel/dishes/dish4.jpg";
import dish5 from "@/assets/hotel/dishes/dish5.jpg";
import dish6 from "@/assets/hotel/dishes/dish6.jpg";
import beach from "@/assets/hotel/venues/beach-bar.jpg";
import maasai from "@/assets/hotel/venues/maasai-bar.jpg";
import pool from "@/assets/hotel/venues/pool-bar.jpg";

import deluxe from "@/assets/deluxe-room.webp";
import family from "@/assets/family-suite.jpg"
import standard from "@/assets/standard-room.webp"
import standardPlus from "@/assets/standard-plus.webp"

import comfort from "@/assets/hotel/rooms/comfort-room.jpg"
import bahari from "@/assets/hotel/rooms/bahari-room.jpg"
import ocean from "@/assets/hotel/rooms/ocean-suite.jpg"
import familyRoom from "@/assets/hotel/rooms/family-room.jpg"

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

  //  Dishes
  const defaultDishes = [
    { name: "Swahili Coconut Curry", desc: "Aromatic curry with coastal spices, served with coconut rice.", image: dish1 },
    { name: "Grilled Tilapia", desc: "Fresh catch with lemon-herb butter and seasonal greens.", image: dish2 },
    { name: "Nyama Choma", desc: "Charcoal-grilled beef with kachumbari and ugali.", image: dish3 },
    { name: "Vegetarian Pilau", desc: "Fragrant rice pilaf with garden vegetables and spices.", image: dish1 },
    { name: "Chapati Wraps", desc: "Soft chapati with spiced chicken or veggies and chutney.", image: dish2 },
    { name: "Tropical Fruit Platter", desc: "Pineapple, mango, and passion fruit medley.", image: dish3 },
  ];

  const diningByHotel: Record<number, { name: string; desc: string; image: string }[]> = {
    1: [
      { name: "Nyama Choma (Mara Style)", desc: "Charcoal-grilled beef with kachumbari salsa by the campfire.", image: dish3 },
      { name: "Goat Pilau", desc: "Spiced rice with tender goat and coastal aromatics.", image: dish2 },
      { name: "Pumpkin Coconut Soup", desc: "Creamy soup with roasted pumpkin and coconut.", image: dish1 },
    ],
    2: [
      { name: "Kilimanjaro Tilapia", desc: "Pan-seared tilapia with lemon-herb butter.", image: dish2 },
      { name: "Coconut Vegetable Curry", desc: "Velvety curry with fresh garden vegetables.", image: dish1 },
      { name: "Masala Fries", desc: "Crispy fries tossed in tangy masala sauce.", image: dish3 },
    ],
    3: [
      { name: "Seafood Platter", desc: "Grilled prawns, calamari, and fish with tropical salsa.", image: dish2 },
      { name: "Tropical Ceviche", desc: "Citrus-cured fish with mango and passion fruit.", image: dish3 },
      { name: "Coconut Curry", desc: "Coastal curry with aromatic spices and coconut milk.", image: dish1 },
    ],
    4: [
      { name: "Signature Chicken Curry", desc: "Rich and creamy curry with house spices, served with basmati rice.", image: dish4 },
      { name: "Spicy Beef Sauté", desc: "PTender beef cubes simmered in a rich, spicy tomato sauce, garnished with chopped green onions and a fresh tomato rose.", image: dish2 },
      { name: "Golden Crusted Chicken Delight", desc: "Crispy battered chicken fillets served with a fresh vegetable salad and a creamy dipping sauce on a bed of cabbage.", image: dish3 },
      { name: "Village Feast Stew", desc: "A hearty medley of chicken, yams, corn, and plantains stewed in a savory broth, bringing traditional flavors to life.", image: dish1 },
      { name: "Plantains in Tomato Herb Sauce", desc: "Plantains coated in rich tomato sauce, garnished with herbs and served with a savory dip.", image: dish5 },
      { name: "Full Breakfast Platter", desc: "A hearty mix of eggs, sausage, bacon, vegetables, and boiled root crops for a filling breakfast.", image: dish6 },
    ]
  };

  const defaultVenues = [
    { name: "Savannah Restaurant", type: "All-day dining", hours: "6:30 AM - 10:30 PM", image: beach },
    { name: "Kilimanjaro Bar", type: "Cocktail lounge", hours: "4:00 PM - 1:00 AM", image: maasai },
    { name: "Coffee Lounge", type: "Café & pastries", hours: "7:00 AM - 9:00 PM", image: pool },
    { name: "Sunset Grill", type: "Poolside BBQ", hours: "12:00 PM - 8:00 PM", image: beach },
  ];

  const venuesByHotel: Record<number, { name: string; type: string; hours: string; image: string }[]> = {
    1: [
      { name: "Boma Bar", type: "Open-air lounge", hours: "5:00 PM - 12:00 AM", image: beach },
      { name: "River Deck", type: "Al fresco dining", hours: "12:00 PM - 10:00 PM", image: maasai },
      { name: "Savannah Restaurant", type: "All-day dining", hours: "6:30 AM - 10:30 PM", image: beach },
    ],
    2: [
      { name: "Summit Grill", type: "Steak & grill", hours: "12:00 PM - 10:30 PM", image: pool },
      { name: "Amboseli Lounge", type: "Cocktails & jazz", hours: "4:00 PM - 12:30 AM", image: beach },
      { name: "Pool Bar", type: "Snacks & smoothies", hours: "10:00 AM - 7:00 PM", image: maasai },
    ],
    3: [
      { name: "Beach Bar", type: "Food and Snacks", hours: "11:00 AM - 4:00 PM", image: beach },
      { name: "Maasai Bar", type: "Cocktails & Evening entertainment", hours: "6:00 PM - 11:00 PM", image: maasai },
      { name: "Pool Bar", type: "All soft drinks, local beers, cocktails, wine", hours: "11:00 AM - 1:00 AM", image: pool },
    ],
  };
  type Room = { name: string; beds: string; size: string; price: string; desc: string; image: string };
  const roomsByHotel: Record<number, Room[]> = {
    1: [
      { name: "Deluxe Room", beds: "1 King Bed", size: "35m²", price: hotel?.price || "$180", desc: "Elegant room with savannah-inspired decor and private veranda.", image: "https://source.unsplash.com/1200x800/?safari,lodge,room" },
      { name: "Family Suite", beds: "2 Queen Beds", size: "55m²", price: hotel?.price || "$180", desc: "Spacious suite ideal for families with separate lounge.", image: "https://source.unsplash.com/1200x800/?safari,family,room" },
      { name: "Panorama Suite", beds: "1 King Bed", size: "45m²", price: hotel?.price || "$180", desc: "Suite with sweeping plains views from the deck.", image: "https://source.unsplash.com/1200x800/?savannah,lodge,view" },
      { name: "Garden Cottage", beds: "1 King + Sofa Bed", size: "60m²", price: hotel?.price || "$180", desc: "Standalone cottage nestled among acacia trees.", image: "https://source.unsplash.com/1200x800/?cottage,africa,lodge" },
    ],
    2: [
      { name: "Comfort Room", beds: "1 King Bed", size: "35m²", price: hotel?.price || "$145", desc: "Modern room with views towards Kilimanjaro.", image: comfort },
      { name: "Family Suite", beds: "2 Queen Beds", size: "55m²", price: hotel?.price || "$145", desc: "Two-room suite with a cozy lounge area.", image: bahari },
      { name: "Summit Suite", beds: "1 King Bed", size: "45m²", price: hotel?.price || "$145", desc: "Premium suite with balcony and mountain vistas.", image: ocean },
      { name: "Garden Cottage", beds: "1 King + Sofa Bed", size: "60m²", price: hotel?.price || "$145", desc: "Cottage surrounded by tranquil gardens.", image: familyRoom },
    ],
    3: [
      { name: "Comfort Room", beds: "Single/Double Beds", size: "35m²", price: hotel?.price || "$200", desc: "Enjoy your surroundings on your balcony with a beautiful view of our lush gardens.", image: comfort},
      { name: "Bahari Room", beds: "1 King Bed", size: "55m²", price: hotel?.price || "$200", desc: "Relax a bit more. All Bahari are located closer to the beach and the pool.", image: bahari },
      { name: "Ocean Suite", beds: "Double bed", size: "45m²", price: hotel?.price || "$200", desc: "Enjoy the Indian Ocean from your sunbed on your large terrace on the third floor or ground floor.", image: ocean },
      { name: "Family Cottage", beds: "2 bedrooms ", size: "Single/Double beds", price: hotel?.price || "$200", desc: "Enjoy your surroundings on your balcony with a beautiful view of our lush gardens.", image: familyRoom },
    ],
    4: [
      { name: "Deluxe Room", beds: "1 King Bed", size: "35m²", price: hotel?.price || "$160", desc: "Relax in a king-size bed, enjoy smart TV , and take advantage of premium amenities for an unforgettable stay", image: deluxe },
      { name: "Family Suite", beds: "2 Queen Beds", size: "55m²", price: hotel?.price || "$160", desc: "Family room with separate sleeping areas and all the essentials for a cozy, connected stay.", image: family },
      { name: "Standard", beds: "1 King Bed", size: "45m²", price: hotel?.price || "$160", desc: "This en-suite standard room offers everything you need for a restful and productive stay.", image: standard },
      { name: "Standard Plus", beds: "1 King + Sofa Bed", size: "60m²", price: hotel?.price || "$160", desc: "Enjoy upgraded amenities, a spacious bathroom, smart TV, work area, mini fridge, and premium comfort for one or two guests", image: standardPlus },
    ],
  };

  const rooms = roomsByHotel[hotel?.id ?? -1] || [
    { name: "Deluxe Room", beds: "1 King Bed", size: "35m²", price: hotel?.price || "", desc: "Spacious room with city or garden views, ideal for couples and solo travelers.", image: hotel?.image || "" },
    { name: "Family Suite", beds: "2 Queen Beds", size: "55m²", price: hotel?.price || "", desc: "A two-room suite perfect for families, with a cozy lounge area.", image: hotel?.image || "" },
    { name: "Ocean View Suite", beds: "1 King Bed", size: "45m²", price: hotel?.price || "", desc: "Premium suite featuring panoramic views and a private balcony.", image: hotel?.image || "" },
    { name: "Garden Cottage", beds: "1 King + Sofa Bed", size: "60m²", price: hotel?.price || "", desc: "Standalone cottage surrounded by lush greenery for extra privacy.", image: hotel?.image || "" },
  ];

  const dining = diningByHotel[hotel?.id ?? -1] || defaultDishes;
  const venues = venuesByHotel[hotel?.id ?? -1] || [];

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

                <Tabs defaultValue="overview" className="mt-8">
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="rooms">Rooms</TabsTrigger>
                    <TabsTrigger value="dining">Dishes</TabsTrigger>
                    {venues.length > 0 && (
                    <TabsTrigger value="venues">Restaurants &amp; Bars</TabsTrigger>
                    )}
                  </TabsList>

                  <TabsContent value="overview">
                    <Card>
                      <CardHeader>
                        <CardTitle>About {hotel.name}</CardTitle>
                        <CardDescription>
                          Nestled in {hotel.location}, {hotel.name} offers an immersive stay blending comfort and local charm. Enjoy attentive service, thoughtfully designed spaces, and easy access to nearby attractions.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {!!hotel.amenities?.length && (
                          <div className="mt-2">
                            <p className="text-sm font-medium mb-2">Amenities</p>
                            <div className="flex flex-wrap gap-2">
                              {hotel.amenities.map((amenity, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded"
                                >
                                  {getAmenityIcon(amenity)}
                                  {amenity}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="rooms">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {rooms.map((room, i) => (
                        <Card key={i} className="overflow-hidden">
                          <img
                            src={room.image}
                            alt={`${room.name} at ${hotel.name}`}
                            className="w-full h-40 object-cover"
                            loading="lazy"
                          />
                          <CardHeader>
                            <CardTitle className="text-lg">{room.name}</CardTitle>
                            <CardDescription>
                              {room.beds} • {room.size} • From {room.price} / night
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{room.desc}</p>
                            <Button asChild variant="safari" size="sm">
                              <Link to={`/contact?type=hotel&id=${hotel.id}&name=${encodeURIComponent(hotel.name)}&room=${encodeURIComponent(room.name)}`}>
                                Book this room
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="dining">
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                      {dining.map((dish, i) => (
                        <Card key={i} className="overflow-hidden">
                          <img
                            src={dish.image}
                            alt={`${dish.name} at ${hotel.name}`}
                            className="w-full h-40 object-cover"
                            loading="lazy"
                          />
                          <CardHeader>
                            <CardTitle className="text-base">{dish.name}</CardTitle>
                            <CardDescription>{dish.desc}</CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  {venues.length > 0 && (
                  <TabsContent value="venues">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {venues.map((v, i) => (
                        <Card key={i} className="overflow-hidden">
                          <img
                            src={v.image}
                            alt={`${v.name} - ${v.type}`}
                            className="w-full h-40 object-cover"
                            loading="lazy"
                          />
                          <CardHeader>
                            <CardTitle className="text-base">{v.name}</CardTitle>
                            <CardDescription>{v.type} • {v.hours}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Enjoy signature specialties, friendly service, and a relaxed ambiance.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  )}
                </Tabs>

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
