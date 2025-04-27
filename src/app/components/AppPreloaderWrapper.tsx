"use client";
import React, { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";
import ClientBody from "../ClientBody";

export default function AppPreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && <ClientBody>{children}</ClientBody>}
    </>
  );
}
