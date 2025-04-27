import React from "react";

const Features = () => (
  <section className="py-16 bg-muted">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-4">Why Choose Us</h2>
      <p className="mb-10 text-muted-foreground">Experience the difference with Georgia Tours</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-16 w-16 mx-auto bg-primary rounded-full mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Expert Guides</h3>
          <p className="text-muted-foreground">Knowledgeable & friendly local guides.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-16 w-16 mx-auto bg-primary rounded-full mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Custom Itineraries</h3>
          <p className="text-muted-foreground">Tours tailored to your interests.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-16 w-16 mx-auto bg-primary rounded-full mb-4"></div>
          <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
          <p className="text-muted-foreground">We're here whenever you need us.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-16 w-16 mx-auto bg-primary rounded-full mb-4"></div>
          <h3 className="font-bold text-lg mb-2">Best Price Guarantee</h3>
          <p className="text-muted-foreground">Unbeatable value for your adventures.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
