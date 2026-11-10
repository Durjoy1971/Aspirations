import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UserSideBar from "@/components/UserSideBar";
import AdminSideBar from "@/components/AdminSideBar";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aspiration.edu"),
  title: "Aspiration",
  description: "Online courses, video tutorials, and kids learning platform",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <UserProvider>
          <Toaster richColors position="top-right" />
          <Navigation />
          <UserSideBar />
          <AdminSideBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
