import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fairfax Partners Inc. | Connecting Capital & Ideas",
  description:
    "Integrated investor relations, venture capital, and corporate finance for public and pre-public companies. Core IR, MyIR, Essential IR, and Momentum IR — powered by FAIR.",
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
