import React from "react";
import TourDetailClient from "@/components/TourDetailClient";

const tour = {
  id: 1,
  title: "Georgia Highlights",
  image: "https://placehold.co/800x400?text=Georgia+Highlights",
  duration: "7 days, 6 nights",
  price: "$899",
  description: `Explore the best of Georgia with our guided highlights tour. This package includes visits to Tbilisi, Kazbegi, Batumi, and more. Enjoy authentic cuisine, breathtaking landscapes, and expert local guides.`,
  itinerary: [
    "Day 1: Arrival in Tbilisi, city tour",
    "Day 2: Mtskheta & Uplistsikhe",
    "Day 3: Kazbegi & Gergeti Trinity Church",
    "Day 4: Kakheti wine region",
    "Day 5: Batumi, Black Sea coast",
    "Day 6: Free day in Batumi",
    "Day 7: Departure",
  ],
  features: [
    "Hotel accommodation",
    "Daily breakfast",
    "Airport transfers",
    "All entrance fees",
    "Professional guide",
  ],
  reviews: [
    {
      name: "Anna K.",
      comment: "An unforgettable journey! The guides were amazing.",
    },
    {
      name: "John D.",
      comment: "Loved every moment. Highly recommend Georgia Tours!",
    },
  ],
};

const TourDetail = () => <TourDetailClient tour={tour} />;


export default TourDetail;
