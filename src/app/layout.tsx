import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Georgia Tours - Explore the Beautiful Country of Georgia",
  description: "Discover the beauty of Georgia with our guided tours. Experience unique adventures and authentic Georgian culture with experienced guides.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geologica.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
