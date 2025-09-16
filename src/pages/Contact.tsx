import { useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const contextType = (params.get("type") || "").toLowerCase();
  const isHotel = contextType === "hotel";
  const isTour = contextType === "tour";
  const itemId = params.get("id") || "";
  const itemName = params.get("name") || "";
  const roomName = params.get("room") || "";

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const currentForm = form.current;
    if (!currentForm) {
      setSending(false);
      return;
    }

    //Send Email to sit owner
    emailjs
      .sendForm("service_xo6xgi2", "template_072nxxe", currentForm, "ntlMGLxV3PE4BHcM9")
      .then(() => {
        //Send auto-reply to sender
        emailjs.sendForm("service_xo6xgi2", "template_autoreply", currentForm, "ntlMGLxV3PE4BHcM9");
        setSending(false);
        setSent(true);
        alert("Booking submitted! We'll contact you shortly.");
        currentForm.reset();
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("There was a problem submitting the form.");
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {isHotel ? "Book Your Stay" : isTour ? "Book Your Safari" : "Enquire Now"}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          {isHotel
            ? "Complete your hotel booking request and our team will confirm availability."
            : isTour
            ? "Send your safari enquiry and we’ll help tailor your adventure."
            : "Plan your perfect Kenya adventure with our personalized service."}
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <form ref={form} onSubmit={sendEmail} className="space-y-8 bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-orange-600">Contact Details</h2>
            {/* Hidden fields for routing and context */}
            <input type="hidden" name="to" value="info.travelbuddiesafaris@gmail.com" />
            <input type="hidden" name="context_type" value={contextType || "general"} />
            <input type="hidden" name="item_id" value={itemId} />
            <input type="hidden" name="item_name" value={itemName} />
            {roomName ? <input type="hidden" name="room_name" value={roomName} /> : null}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>First Name *</Label>
                <Input type="text" name="first_name" required />
              </div>
              <div>
                <Label>Last Name *</Label>
                <Input type="text" name="last_name" required />
              </div>
              <div>
                <Label>Email *</Label>
                <Input type="email" name="email" required />
              </div>
              <div>
                <Label>Phone *</Label>
                <Input type="tel" name="phone" required />
              </div>
            </div>

            {isHotel ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label>Hotel *</Label>
                  <Input type="text" name="hotel_name" value={itemName} readOnly required />
                </div>
                {roomName ? (
                  <div className="md:col-span-2">
                    <Label>Room</Label>
                    <Input type="text" name="selected_room" value={roomName} readOnly />
                  </div>
                ) : null}
                <div>
                  <Label>Check-in Date *</Label>
                  <Input type="date" name="check_in" required />
                </div>
                <div>
                  <Label>Check-out Date *</Label>
                  <Input type="date" name="check_out" required />
                </div>
                <div>
                  <Label>Guests *</Label>
                  <Input type="number" name="guests" min={1} defaultValue={2} required />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label>{isTour ? "Tour" : "Experience"} *</Label>
                  <Input type="text" name="tour_name" value={itemName} readOnly={!!itemName} placeholder="e.g. Maasai Mara Safari" required />
                </div>
                <div>
                  <Label>{isTour ? "Preferred Start Date" : "Preferred Date"}</Label>
                  <Input type="date" name="start_date" />
                </div>
                <div>
                  <Label>Travelers</Label>
                  <Input type="number" name="travelers" min={1} defaultValue={2} />
                </div>
                <div className="md:col-span-2">
                  <Label>Type of Safari *</Label>
                  <Input type="text" name="safari_type" placeholder="e.g. Wildlife Safari" required />
                </div>
              </div>
            )}

            <div>
              <Label>Additional Information</Label>
              <Textarea name="message" rows={4} placeholder={isHotel ? "Special requests, arrival time, etc." : "Tell us more..."} />
            </div>

            <div className="text-center">
              <Button type="submit" variant="safari" disabled={sending}>
                {sending ? "Sending..." : "Submit Booking"}
              </Button>
            </div>

            {sent && (
              <p className="text-green-600 text-center mt-4">
                Thank you! Your enquiry has been received.
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
