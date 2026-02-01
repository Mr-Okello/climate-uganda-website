import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Climate Uganda",
  description: "A beginner-friendly climate change learning hub focused on Uganda."
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SessionProvider from "./components/SessionProvider";

export const metadata: Metadata = {
  title: "Climate Uganda Classroom",
  description: "A beginner-friendly climate change education hub for Uganda."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="container py-10">{children}</main>
        <Footer />
      <body>
        <SessionProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
