import React from "react";

const Partners = () => (
  <section className="py-12 bg-muted">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-8">Our Partners</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* TODO: Add partner logos */}
        <div className="h-16 w-32 bg-gray-200 rounded"></div>
        <div className="h-16 w-32 bg-gray-200 rounded"></div>
        <div className="h-16 w-32 bg-gray-200 rounded"></div>
        <div className="h-16 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  </section>
);

export default Partners;
