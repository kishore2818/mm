import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SitePopup from "@/components/layout/SitePopup";

export const metadata: Metadata = {
  title: "M.M.MATRICULATION HR.SEC SCHOOL, Patemanagaram",
  description:
    "Official website of M.M.MATRICULATION HR.SEC SCHOOL, Patemanagaram. Empowering students to Learn, Lead and Serve since decades.",
  keywords: "M.M.MATRICULATION HR.SEC SCHOOL, Higher Secondary School, Patemanagaram, CBSE, Admissions",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "M.M.MATRICULATION HR.SEC SCHOOL",
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
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
