import React from "react";

const TopTours = () => (
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-4">Top Tours & Packages</h2>
      <p className="mb-10 text-muted-foreground">Handpicked tours for an authentic experience</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TODO: Map tours here */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Georgia Highlights</h3>
          <p className="text-muted-foreground">7 days, 6 nights - Explore the best of Georgia.</p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">View Details</button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Wine & Culinary Tour</h3>
          <p className="text-muted-foreground">Taste the flavors of Georgia's wine country.</p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">View Details</button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Adventure in Svaneti</h3>
          <p className="text-muted-foreground">Mountains, hiking, and ancient towers await.</p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">View Details</button>
        </div>
      </div>
    </div>
  </section>
);

export default TopTours;
