import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/misc/Header";
import Footer from "@/components/misc/Footer";
import ModalProvider from "@/providers/ModalProvider";
import ContextProvider from "@/providers/ContextProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Azubi Africa Software Assessment | %s",
    default: "Azubi Africa Software Assessment"
  },
  icons: {
    icon: '/assets/favicon.png',
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
        <ToastContainer />
        <ContextProvider>
          <ModalProvider />
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
