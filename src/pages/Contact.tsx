import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ success/fail feedback

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = new FormData();
    form.append("access_key", "4193d627-82a3-4818-813e-be04eef2678f"); // ⬅️ replace with Chess Club Web3Forms key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Something went wrong ❌: " + data.message);
    }
  };

  return (
    <div className="min-h-screen bg-club-black">
      {/* Header Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-club-red/20 to-transparent"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Mail className="mx-auto h-14 w-14 text-club-red mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Get in touch with the Forsyth Central Chess Club. We’d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-club-black border-club-red/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-club-red" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form and we’ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="bg-club-black border-gray-600 text-white placeholder:text-gray-400 focus:border-club-red"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-club-black border-gray-600 text-white placeholder:text-gray-400 focus:border-club-red"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What’s this about?"
                    className="bg-club-black border-gray-600 text-white placeholder:text-gray-400 focus:border-club-red"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your message here..."
                    className="bg-club-black border-gray-600 text-white placeholder:text-gray-400 focus:border-club-red resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-club-red hover:bg-club-red/90 text-white font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>

              {/* ✅ Status message */}
              {status && (
                <p className="mt-4 text-center text-gray-300">{status}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
