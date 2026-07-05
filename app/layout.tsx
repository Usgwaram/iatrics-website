import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Iatrics | Healthcare Without Borders";
const description =
  "Iatrics is a Nigerian telemedicine platform connecting patients with licensed doctors through secure video consultations, appointment booking, prescriptions, and follow-up care.";

export const metadata: Metadata = {
  metadataBase: new URL("https://iatrics.ng"),
  title,
  description,
  applicationName: "Iatrics",
  keywords: [
    "Iatrics",
    "telemedicine Nigeria",
    "online doctor Nigeria",
    "video consultation",
    "digital prescriptions",
    "healthcare technology",
  ],
  authors: [{ name: "Iatrics" }],
  creator: "Iatrics",
  publisher: "Iatrics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://iatrics.ng",
    siteName: "Iatrics",
    title,
    description,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
