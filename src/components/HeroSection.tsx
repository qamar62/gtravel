import React from "react";

const HeroSection = () => (
  <section className="relative bg-primary overflow-hidden py-16 md:py-28">
    {/* Top left travel doodle and circle image */}
    <div className="absolute left-8 top-8 hidden md:block">
      <div className="mb-2"><span role="img" aria-label="plane">✈️</span></div>
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center shadow-lg">
        <span className="text-muted-foreground font-semibold">Image</span>
      </div>
    </div>
    {/* Top right circle image */}
    <div className="absolute right-8 top-8 hidden md:block">
      <div className="w-20 h-28 rounded-full bg-muted flex items-center justify-center shadow-lg">
        <span className="text-muted-foreground font-semibold">Image</span>
      </div>
    </div>
    {/* Bottom left circle image */}
    <div className="absolute left-8 bottom-24 hidden md:block">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shadow-lg">
        <span className="text-muted-foreground font-semibold">Image</span>
      </div>
    </div>
    {/* Bottom right circle image */}
    <div className="absolute right-8 bottom-16 hidden md:block">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shadow-lg">
        <span className="text-muted-foreground font-semibold">Image</span>
      </div>
    </div>
    {/* Hot air balloon doodle */}
    <div className="absolute right-24 top-1/2 hidden md:block">
      <span role="img" aria-label="balloon">🎈</span>
    </div>
    {/* Main content */}
    <div className="relative z-10 flex flex-col items-center justify-center">
      <div className="mb-4 text-lg text-pink-600 font-semibold">Welcome to Travel Vibe</div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-4 leading-tight">Adventure &<br className="hidden md:block" /> Experience The Travel</h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl text-center">Explore amazing Georgia tours Online and book your next adventure</p>
      {/* Search bar */}
      <div className="bg-primary rounded-xl shadow-lg px-4 py-3 flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl mb-10">
        <input type="text" placeholder="Location | Where to next" className="flex-1 min-w-[120px] p-3 rounded-md border border-border" />
        <input type="text" placeholder="Type | Booking Type" className="flex-1 min-w-[120px] p-3 rounded-md border border-border" />
        <input type="date" className="flex-1 min-w-[120px] p-3 rounded-md border border-border" />
        <input type="number" min="1" placeholder="Guests 02" className="flex-1 min-w-[80px] p-3 rounded-md border border-border" />
        <button className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold shadow">Search</button>
      </div>
      {/* Bottom doodle/line art placeholder */}
      <div className="w-full flex justify-center">
        <div className="h-12 w-full max-w-4xl bg-accent rounded-t-lg flex items-center justify-center text-gray-400 text-sm italic">[Landmarks doodle placeholder]</div>
      </div>
    </div>
  </section>
);

export default HeroSection;
