import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fairfax Partners | Strategic Business Solutions",
  description:
    "Fairfax Partners delivers innovative strategic business solutions, consulting, and technology services to help companies grow and succeed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
