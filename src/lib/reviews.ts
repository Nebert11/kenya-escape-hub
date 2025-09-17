export type Review = {
  id: string;
  name: string;
  email?: string;
  destinationOrHotel: string;
  type: "tour" | "hotel" | "other";
  rating: number; // 1-5
  comment?: string;
  partySize: number; // travelers in the group
  date: string; // ISO
};

const STORAGE_KEY = "keh_reviews_v1";

export function getAllReviews(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Review[];
  } catch {
    return [];
  }
}

export function saveReview(review: Review): void {
  const existing = getAllReviews();
  existing.unshift(review);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function clearReviews(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getReviewStats(): { averageRating: number; totalTravelers: number; totalReviews: number } {
  const reviews = getAllReviews();
  if (reviews.length === 0) {
    return { averageRating: 4.9, totalTravelers: 100, totalReviews: 0 };
  }
  const totalRating = reviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0);
  const totalTravelers = reviews.reduce((sum, r) => sum + (Number(r.partySize) || 0), 0);
  const averageRating = Math.round((totalRating / reviews.length) * 10) / 10;
  return { averageRating, totalTravelers, totalReviews: reviews.length };
}


