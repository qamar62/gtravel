import React from "react";

const Testimonials = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-4">What Our Clients Say</h2>
      <p className="mb-10 text-muted-foreground">Hear from travelers who explored Georgia with us</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TODO: Map testimonials here */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <p className="italic mb-2">“An unforgettable journey! The guides were amazing.”</p>
          <h4 className="font-semibold">Anna K.</h4>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <p className="italic mb-2">“Loved every moment. Highly recommend Georgia Tours!”</p>
          <h4 className="font-semibold">John D.</h4>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
          <p className="italic mb-2">“Best travel experience ever. Will come back!”</p>
          <h4 className="font-semibold">Mariam G.</h4>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
