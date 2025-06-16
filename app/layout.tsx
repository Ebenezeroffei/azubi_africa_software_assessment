import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/misc/Header";
import Footer from "@/components/misc/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Azubi Africa Software Assessment | %s",
    default: "Azubi Africa Software Assessment"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
