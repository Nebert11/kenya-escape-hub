import { useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const currentForm = form.current;
    if (!currentForm) {
      setSending(false);
      return;
    }

    emailjs
      .sendForm("service_xo6xgi2", "template_072nxxe", currentForm, "ntlMGLxV3PE4BHcM9")
      .then(() => {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Enquire Now</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Plan your perfect Kenya adventure with our personalized service.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <form ref={form} onSubmit={sendEmail} className="space-y-8 bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-orange-600">Contact Details</h2>

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

            <div>
              <Label>Type of Safari *</Label>
              <Input type="text" name="safari_type" placeholder="e.g. Wildlife Safari" required />
            </div>

            <div>
              <Label>Preferred Start Date</Label>
              <Input type="date" name="start_date" />
            </div>

            <div>
              <Label>Additional Information</Label>
              <Textarea name="message" rows={4} placeholder="Tell us more..." />
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
