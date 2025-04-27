import React from "react";

const HeroSection = () => (
  <section className="relative bg-primary py-20 text-center text-white" style={{
  backgroundImage: 'url(/images/hero-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>
    <div className="container mx-auto bg-black bg-opacity-40 rounded-lg p-6">
      <h1 className="text-5xl font-bold mb-4">Discover Georgia</h1>
      <p className="text-xl mb-8">Book unforgettable tours & experiences in the heart of the Caucasus</p>
      {/* TODO: Add search form */}
      <div className="max-w-2xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input type="text" placeholder="Where to?" className="flex-1 p-3 rounded-md text-black" />
          <input type="date" className="p-3 rounded-md text-black" />
          <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-md font-semibold">Search</button>
        </form>
      </div>
    </div>
  </section>
);

export default HeroSection;
