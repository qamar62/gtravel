import React from "react";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Georgia Highlights",
    image: "https://placehold.co/400x250?text=Georgia+Highlights",
    duration: "7 days, 6 nights",
    price: "$899",
    description: "Explore the best of Georgia with our guided highlights tour.",
  },
  {
    id: 2,
    title: "Wine & Culinary Tour",
    image: "https://placehold.co/400x250?text=Wine+Tour",
    duration: "5 days, 4 nights",
    price: "$699",
    description: "Taste the flavors of Georgia's wine country and cuisine.",
  },
  {
    id: 3,
    title: "Adventure in Svaneti",
    image: "https://placehold.co/400x250?text=Svaneti+Adventure",
    duration: "6 days, 5 nights",
    price: "$799",
    description: "Mountains, hiking, and ancient towers await in Svaneti.",
  },
];

const TourList = () => (
  <section className="py-16 bg-background min-h-[80vh]">
    <div className="container mx-auto">
      <h1 className="section-title mb-8 text-center">All Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tours.map(tour => (
          <div key={tour.id} className="bg-white rounded-lg shadow p-6 flex flex-col">
            <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2">{tour.title}</h3>
            <div className="text-muted-foreground mb-2">{tour.duration}</div>
            <div className="font-semibold text-primary mb-2">{tour.price}</div>
            <p className="text-muted-foreground flex-1">{tour.description}</p>
            <Link href={`/tours/${tour.id}`}>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TourList;
