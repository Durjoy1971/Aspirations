import type { Metadata } from "next";
import { Poppins, DM_Sans, Rubik, Josefin_Sans, League_Spartan } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UserSideBar from "@/components/UserSideBar";
import AdminSideBar from "@/components/AdminSideBar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aspiration",
  description: "Online courses, video tutorials, and kids learning platform",
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
    <html
      lang="en"
      className={`${poppins.variable} ${dmSans.variable} ${rubik.variable} ${josefinSans.variable} ${leagueSpartan.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <UserProvider>
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
