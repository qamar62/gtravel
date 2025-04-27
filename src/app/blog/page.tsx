import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Living Sustainability: A Day In The Life Atrealar....",
    date: "24 Dec, 2024",
    comments: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Psychology Is A Broad Field So Consider Narrowing",
    date: "24 Dec, 2024",
    comments: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8a?auto=format&fit=crop&w=400&q=80",
    title: "Affordable Therapy Options For The People Need Help",
    date: "24 Dec, 2024",
    comments: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    title: "You Should See Things When Visiting Japan",
    date: "24 Dec, 2024",
    comments: 2,
  },
];

const categories = [
  "Adventure",
  "Destination",
  "Travel Guides",
  "Vacation",
  "Tourist Tours"
];

const latestPosts = [
  {
    image: blogPosts[0].image,
    title: "Desktop publishing sotware like aldus page",
    date: "12 Dec, 2022",
    author: "Robert Fox"
  },
  {
    image: blogPosts[1].image,
    title: "Desktop publishing sotware like aldus page",
    date: "12 Dec, 2022",
    author: "Robert Fox"
  },
  {
    image: blogPosts[2].image,
    title: "Desktop publishing sotware like aldus page",
    date: "12 Dec, 2022",
    author: "Robert Fox"
  },
];

const Blog = () => (
  <>
    <Header />
    <main className="bg-white min-h-screen py-12">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* Blog Posts Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <div className="flex items-center text-xs text-white/80 gap-4">
                  <span>📅 {post.date}</span>
                  <span>💬 {post.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-96 flex flex-col gap-8">
          {/* Search */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2">Find Your Blog</div>
            <div className="flex gap-2">
              <Input placeholder="Search key word" className="flex-1" />
              <Button className="bg-secondary text-primary">🔍</Button>
            </div>
          </div>
          {/* Categories */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2">News Categories</div>
            <ul className="flex flex-col gap-2">
              {categories.map((cat, idx) => (
                <li key={idx} className="bg-accent rounded px-3 py-2 flex items-center gap-2 text-secondary">
                  <span>✔️</span> {cat}
                </li>
              ))}
            </ul>
          </div>
          {/* Latest Posts */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold mb-2 border-l-4 border-secondary pl-2">Latest Posts</div>
            <ul className="flex flex-col gap-4">
              {latestPosts.map((post, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <img src={post.image} alt={post.title} className="w-14 h-14 rounded object-cover" />
                  <div>
                    <div className="text-sm font-medium text-secondary line-clamp-2">{post.title}</div>
                    <div className="text-xs text-muted-foreground">{post.date} · {post.author}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
    <Footer />
  </>
);

export default Blog;
