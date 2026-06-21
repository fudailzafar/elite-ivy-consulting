import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

const bricolage = Bricolage_Grotesque({ 
  subsets: ["latin"], 
  variable: "--font-bricolage", 
  weight: ["600", "700", "800"] 
});

const geist = Geist({ 
  subsets: ["latin"], 
  variable: "--font-geist", 
  weight: ["400", "500", "600"] 
});

export const metadata: Metadata = {
  title: "Elite Ivy Consultations | Dubai Study Abroad Admissions Counselors",
  description: "Bespoke UG and PG admissions advisory based in Dubai Marina, specializing in admissions to Ivy League, Russell Group, and top-tier global campuses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable}`}>
      <body suppressHydrationWarning>
        <Header />
        <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>
        <CtaBanner />
        <Footer />
      </body>
    </html>
  );
}
