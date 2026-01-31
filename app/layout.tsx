import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Climate Uganda",
  description: "A beginner-friendly climate change learning hub focused on Uganda."
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
      </body>
    </html>
  );
}
