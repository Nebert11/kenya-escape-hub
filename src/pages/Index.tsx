import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedTours />
      <Footer />
    </div>
  );
};

export default Index;
