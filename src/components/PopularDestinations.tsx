import React from "react";

const PopularDestinations = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-4">Popular Destinations</h2>
      <p className="mb-10 text-muted-foreground">Explore the most visited places in Georgia</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TODO: Map destinations here */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Tbilisi</h3>
          <p className="text-muted-foreground">The capital city with a blend of old and new.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Kazbegi</h3>
          <p className="text-muted-foreground">Majestic mountains and breathtaking views.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Batumi</h3>
          <p className="text-muted-foreground">A vibrant seaside city on the Black Sea coast.</p>
        </div>
      </div>
    </div>
  </section>
);

export default PopularDestinations;
