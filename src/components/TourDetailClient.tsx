"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import BookingForm from "@/components/BookingForm";

const MapItinerary = dynamic(() => import("@/components/MapItinerary"), { ssr: false });

interface TourDetailClientProps {
  tour: {
    id: number;
    title: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    features: string[];
    reviews: { name: string; comment: string }[];
  };
}

const TourDetailClient: React.FC<TourDetailClientProps> = ({ tour }) => {
  const [showBooking, setShowBooking] = useState(false);
  return (
    <section className="py-10 bg-background min-h-[80vh]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Tour image and info */}
            <div className="bg-white rounded-lg shadow p-6">
              <img src={tour.image} alt={tour.title} className="w-full h-80 object-cover rounded-lg shadow mb-6" />
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded text-sm font-semibold">{tour.duration}</span>
                <span className="inline-block bg-secondary text-white px-3 py-1 rounded text-sm font-semibold">{tour.price}</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{tour.title}</h1>
              <p className="text-muted-foreground mb-4">{tour.description}</p>
            </div>
            {/* Interactive Map & Itinerary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Itinerary & Map</h2>
              <MapItinerary />
            </div>
            {/* Features */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {tour.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            {/* Reviews */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {tour.reviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded">
                    <div className="font-bold mb-1">{review.name}</div>
                    <div className="italic text-muted-foreground">“{review.comment}”</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Booking Form (right side on desktop) */}
          <div className="hidden lg:block">
            <BookingForm price={570} />
          </div>
        </div>
        {/* Mobile/Tablet booking bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow p-3 flex items-center justify-center lg:hidden">
          <button
            onClick={() => setShowBooking(true)}
            className="w-full max-w-xs bg-primary text-white py-3 rounded-full font-semibold text-lg"
          >
            Book Now
          </button>
        </div>
        {/* Modal for booking form on mobile/tablet */}
        {showBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm mx-auto relative animate-fade-in">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl font-bold"
                onClick={() => setShowBooking(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <BookingForm price={570} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourDetailClient;
