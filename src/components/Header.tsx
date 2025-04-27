"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 w-full bg-background shadow-sm">
      {/* Top Info Bar */}
      <div className="hidden border-b border-gray-100 bg-secondary py-2 text-xs text-white md:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Tbilisi, Georgia</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:info@georgiatours.com">info@georgiatours.com</a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🕒</span>
              <span>Operating Hours: 9:00am - 6:00pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" className="text-white hover:text-primary">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-primary">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="text-white hover:text-primary">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <div className="relative h-12 w-40">
            <div className="flex items-center">
              <span className="font-cursive text-2xl font-bold text-primary">Georgia</span>
              <span className="ml-1 font-bold text-secondary">Tours</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-sm font-medium text-secondary hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-secondary hover:text-primary">
                  Tours
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/tours">All Tours</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/tours/wine-tours">Wine Tours</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/tours/mountain-tours">Mountain Tours</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/tours/cultural-tours">Cultural Tours</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-secondary hover:text-primary">
                  Destinations
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/destinations/tbilisi">Tbilisi</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/destinations/batumi">Batumi</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/destinations/kakheti">Kakheti</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/destinations/kazbegi">Kazbegi</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-secondary hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm font-medium text-secondary hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-secondary hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden rounded-full p-2 text-secondary hover:bg-gray-100 md:block">
            <Search className="h-5 w-5" />
          </button>
          <Button className="hidden md:inline-flex">Book Now</Button>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-2 text-secondary hover:bg-gray-100 lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 z-50 w-full border-t border-gray-100 bg-white pb-6 pt-2 shadow-lg lg:hidden">
          <div className="container">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="py-2 text-sm font-medium text-secondary hover:text-primary">
                Home
              </Link>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-medium text-secondary hover:text-primary">
                  Tours
                  <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link href="/tours" className="py-1 text-sm text-secondary hover:text-primary">
                    All Tours
                  </Link>
                  <Link href="/tours/wine-tours" className="py-1 text-sm text-secondary hover:text-primary">
                    Wine Tours
                  </Link>
                  <Link href="/tours/mountain-tours" className="py-1 text-sm text-secondary hover:text-primary">
                    Mountain Tours
                  </Link>
                  <Link href="/tours/cultural-tours" className="py-1 text-sm text-secondary hover:text-primary">
                    Cultural Tours
                  </Link>
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-medium text-secondary hover:text-primary">
                  Destinations
                  <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link href="/destinations/tbilisi" className="py-1 text-sm text-secondary hover:text-primary">
                    Tbilisi
                  </Link>
                  <Link href="/destinations/batumi" className="py-1 text-sm text-secondary hover:text-primary">
                    Batumi
                  </Link>
                  <Link href="/destinations/kakheti" className="py-1 text-sm text-secondary hover:text-primary">
                    Kakheti
                  </Link>
                  <Link href="/destinations/kazbegi" className="py-1 text-sm text-secondary hover:text-primary">
                    Kazbegi
                  </Link>
                </div>
              </details>
              <Link href="/about" className="py-2 text-sm font-medium text-secondary hover:text-primary">
                About
              </Link>
              <Link href="/blog" className="py-2 text-sm font-medium text-secondary hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium text-secondary hover:text-primary">
                Contact
              </Link>
              <Button className="mt-2 w-full">Book Now</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
