import Home from "@/components/home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Aspiration",
};

export default function RootPage() {
  return <Home />;
}
