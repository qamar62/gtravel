import React from "react";

const BlogSection = () => (
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="section-title mb-4">From Our Blog</h2>
      <p className="mb-10 text-muted-foreground">Travel tips, stories, and news from Georgia</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TODO: Map blog posts here */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">10 Must-See Places in Georgia</h3>
          <p className="text-muted-foreground">A quick guide to the top attractions in Georgia.</p>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded">Read More</button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Georgian Cuisine: What to Eat</h3>
          <p className="text-muted-foreground">Explore the delicious flavors of Georgian food.</p>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded">Read More</button>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <h3 className="font-bold text-xl mb-2">Best Time to Visit</h3>
          <p className="text-muted-foreground">Tips on when to plan your adventure in Georgia.</p>
          <button className="mt-4 bg-secondary text-white px-4 py-2 rounded">Read More</button>
        </div>
      </div>
    </div>
  </section>
);

export default BlogSection;
