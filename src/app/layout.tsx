import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "MM Matric Higher Secondary School, Pattanamangalam",
  description:
    "Official website of MM Matric Higher Secondary School, Pattanamangalam. Empowering students to Learn, Lead and Serve since decades.",
  keywords: "MM Matric, Higher Secondary School, Pattanamangalam, CBSE, Admissions",
  openGraph: {
    title: "MM Matric Higher Secondary School",
    description: "Learn · Lead · Serve — Official School Website",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
