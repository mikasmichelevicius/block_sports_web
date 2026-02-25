import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Block Sports",
  description: "Boxing, strength training, and performance — in the heart of Vilnius.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
