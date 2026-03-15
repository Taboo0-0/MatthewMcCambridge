import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew - Developer Portfolio",
  description: "Premium portfolio of Matthew, a computer science student and developer specializing in elegant software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
