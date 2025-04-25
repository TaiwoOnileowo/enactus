import Navbar from "@/components/navigation/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enactus CU | Empowering Communities Through Entrepreneurial Action",
  description: "Empowering Communities Through Entrepreneurial Action",
  alternates: {
    canonical: {
      title: "Enactus",
      url: "https://enactuscu.com",
    },
  },
  openGraph: {
    title: "Enactus CU | Empowering Communities Through Entrepreneurial Action",
    description: "Empowering Communities Through Entrepreneurial Action",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Enactus CU",
      },
    ],
    url: "https://enactuscu.com",
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
