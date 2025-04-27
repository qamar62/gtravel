import React from "react";

const Preloader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white w-full h-full">
    {/* Logo */}
    <img src="/logo.png" alt="Georgia Tours Logo" className="w-24 h-24 mb-4 animate-bounce" />
    {/* Georgia Flag */}
    <img src="/georgia-flag.png" alt="Georgia Flag" className="w-20 h-12 mb-4 rounded shadow" />
    {/* Spinner */}
    <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    <span className="mt-4 text-secondary font-semibold text-lg">Loading...</span>
  </div>
);

export default Preloader;
