import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useMemo, useRef, useState } from "react";
import { getAllReviews, getReviewStats, saveReview, type Review } from "@/lib/reviews";

const ReviewsPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(getAllReviews());
  }, []);

  const stats = useMemo(() => getReviewStats(), [reviews]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const now = new Date().toISOString();
    const newReview: Review = {
      id: crypto.randomUUID(),
      name: (data.get("name") as string) || "Anonymous",
      email: (data.get("email") as string) || undefined,
      destinationOrHotel: (data.get("destination") as string) || "",
      type: ((data.get("type") as string) as Review["type"]) || "other",
      rating: Number(data.get("rating") || 5),
      comment: (data.get("comment") as string) || undefined,
      partySize: Number(data.get("partySize") || 1),
      date: now,
    };
    setSubmitting(true);
    saveReview(newReview);
    setReviews(getAllReviews());
    form.reset();
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription>
                  Your feedback helps other travelers and improves our services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name</Label>
                      <Input name="name" placeholder="Your name" />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input type="email" name="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Type</Label>
                      <select name="type" className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                        <option value="tour">Tour / Safari</option>
                        <option value="hotel">Hotel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label>Party Size</Label>
                      <Input type="number" name="partySize" min={1} defaultValue={2} />
                    </div>
                  </div>
                  <div>
                    <Label>Destination or Hotel</Label>
                    <Input name="destination" placeholder="e.g. Maasai Mara, Diani Sea Resort" />
                  </div>
                  <div>
                    <Label>Rating (1-5)</Label>
                    <Input type="number" name="rating" min={1} max={5} defaultValue={5} />
                  </div>
                  <div>
                    <Label>Review</Label>
                    <Textarea name="comment" placeholder="Tell us about your experience..." rows={4} />
                  </div>
                  <div className="pt-2">
                    <Button type="submit" variant="safari" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Review"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Highlights</CardTitle>
                <CardDescription>
                  Average rating and travelers count are used in the homepage hero.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">{stats.averageRating.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stats.totalTravelers.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Happy Travelers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{stats.totalReviews}</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>
                <div className="mt-6 space-y-4 max-h-[360px] overflow-auto pr-2">
                  {reviews.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No reviews yet. Be the first to share!</p>
                  ) : (
                    reviews.map((r) => (
                      <div key={r.id} className="border border-border rounded-md p-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{r.name}</span>
                          <span className="text-muted-foreground">{new Date(r.date).toLocaleDateString()}</span>
                        </div>
                        <div className="text-sm mt-1">Rating: {r.rating} / 5</div>
                        <div className="text-xs text-muted-foreground">
                          {r.type} • {r.destinationOrHotel || "—"} • Group: {r.partySize}
                        </div>
                        {r.comment ? (
                          <p className="text-sm mt-2">{r.comment}</p>
                        ) : null}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;





