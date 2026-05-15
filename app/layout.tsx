import type { Metadata, Viewport } from "next";
import { Inter, Crimson_Pro, Oswald } from "next/font/google";
import Script from "next/script";
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

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWCRW8191S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWCRW8191S');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${crimsonPro.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
