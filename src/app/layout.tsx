import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "فروشگاه درسمن",
  description: "بهترین فروشگاه آنلاین ایران",
  keywords: "",
  icons: "/public/images/logo/favicon.ico",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
