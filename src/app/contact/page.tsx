import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const infoCards = [
  {
    icon: "📍",
    title: "Office Address",
    desc: "3517 W. Gray St. Utica, Pennsylvania 57867"
  },
  {
    icon: "📞",
    title: "Phone Number",
    desc: "356 9999 8888\n456 6666 3333"
  },
  {
    icon: "✉️",
    title: "Email Address",
    desc: "example@gmail.com\nyourmail@gmail.com"
  },
  {
    icon: "💬",
    title: "Supports",
    desc: "24/7 any time support team ready for supports."
  }
];

const Contact = () => (
  <>
    <Header />
    <section className="min-h-screen bg-primary flex flex-col items-center py-8 md:py-16">
    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mb-12">
      {infoCards.map((card, idx) => (
        <div key={idx} className="rounded-xl bg-white shadow flex flex-col items-center p-6 text-center border-t-4 border-secondary">
          <div className="text-4xl mb-2">{card.icon}</div>
          <h3 className="font-bold text-lg text-secondary mb-1">{card.title}</h3>
          <p className="text-muted-foreground whitespace-pre-line text-sm">{card.desc}</p>
        </div>
      ))}
    </div>

    {/* Main Contact Section */}
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8">
      {/* Illustration/Photo Placeholder */}
      <div className="hidden md:flex flex-col items-center flex-1">
        {/* Replace with your own illustration or image */}
        <div className="w-72 h-72 bg-accent rounded-full flex items-center justify-center shadow-lg mb-4">
          <span className="text-[100px]">🧳</span>
        </div>
        <div className="text-secondary font-cursive text-xl">Contact Us</div>
      </div>
      {/* Contact Form */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">Get In Touch</h2>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Input type="text" placeholder="Full Name" className="flex-1" required />
            <Input type="email" placeholder="Email" className="flex-1" required />
          </div>
          <Textarea rows={5} placeholder="Message" required />
          <Button type="submit" className="w-full bg-secondary text-primary">Send Message</Button>
        </form>
      </div>
    </div>
    </section>
    <Footer />
  </>
);

export default Contact;
