import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Time to Visit Maasai Mara for the Great Migration",
      excerpt: "Discover the optimal months to witness the spectacular wildebeest migration and plan your safari adventure.",
      content: "The Great Migration is one of nature's most incredible spectacles...",
      author: "James Kariuki",
      date: "December 15, 2024",
      category: "Safari Tips",
      image: "/src/assets/masai-mara-hero.jpg",
      featured: true
    },
    {
      id: 2,
      title: "10 Must-Try Kenyan Dishes During Your Visit",
      excerpt: "Explore Kenya's rich culinary heritage with these traditional dishes that will tantalize your taste buds.",
      content: "Kenyan cuisine is a delightful fusion of African, Arab, and Indian influences...",
      author: "Sarah Wanjiku",
      date: "December 10, 2024",
      category: "Culture",
      image: "/src/assets/diani-beach.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Conservation Efforts in Amboseli National Park",
      excerpt: "Learn about the important conservation work being done to protect elephants and their habitat.",
      content: "Amboseli National Park is home to some of Africa's largest elephant herds...",
      author: "David Ochieng",
      date: "December 5, 2024",
      category: "Conservation",
      image: "/src/assets/amboseli-kilimanjaro.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Hidden Gems: Lesser-Known Beaches of the Kenyan Coast",
      excerpt: "Discover pristine, uncrowded beaches along Kenya's beautiful Indian Ocean coastline.",
      content: "While Diani Beach gets most of the attention, Kenya's coast hides many secrets...",
      author: "Sarah Wanjiku",
      date: "November 28, 2024",
      category: "Travel Tips",
      image: "/src/assets/diani-beach.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Tourism: How to Travel Responsibly in Kenya",
      excerpt: "Tips for minimizing your environmental impact while maximizing your positive contribution to local communities.",
      content: "Responsible tourism is about making better places for people to live in...",
      author: "James Kariuki",
      date: "November 20, 2024",
      category: "Sustainability",
      image: "/src/assets/masai-mara-hero.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Photography Tips for Your Kenya Safari",
      excerpt: "Capture stunning wildlife photos with these expert tips from professional safari photographers.",
      content: "Getting that perfect shot of a lion or elephant requires patience and technique...",
      author: "David Ochieng",
      date: "November 15, 2024",
      category: "Photography",
      image: "/src/assets/amboseli-kilimanjaro.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Safari Tips", "Culture", "Conservation", "Travel Tips", "Sustainability", "Photography"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-safari">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kenya Travel Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover travel tips, wildlife insights, and cultural stories from the heart of East Africa.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4">Featured Article</Badge>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {featuredPost.category}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl md:text-3xl mb-2">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <Button variant="safari" className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-safari text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest travel tips, safari insights, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-foreground"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;