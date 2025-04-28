// app/layout.tsx
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google"; // Import the font
import "./globals.css"; // Import global styles

// Configure the font
const interTight = Inter_Tight({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter-tight', // Optional: if you want to use it as a CSS variable
  // Add weights and styles you need from the Google Font link
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "APEX Exercise", // Default title, page can override
  description: "AI-Driven Network Segmentation Analysis Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font className to the body */}
      <body className={interTight.className}>
        {children}
      </body>
    </html>
  );
}