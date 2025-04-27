import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PopularDestinations from "@/components/PopularDestinations";
import TopTours from "@/components/TopTours";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Partners from "@/components/Partners";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularDestinations />
      <TopTours />
      <Features />
      <Testimonials />
      <BlogSection />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

