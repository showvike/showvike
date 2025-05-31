import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Showvike's Showcase",
  description: "Portfolio of Showvike Mondal Ovi, Software Engineer",
  openGraph: {
    title: "Showvike's Showcase",
    description: "Portfolio of Showvike Mondal Ovi, Software Engineer",
    url: "https://showvike.vercel.app/",
    siteName: "Showvike's Showcase",
    images: [
      {
        url: "/profile-image-meta.jpeg",
        width: 1200,
        height: 630,
        alt: "Showvike Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showvike's Showcase",
    description: "Portfolio of Showvike Mondal Ovi, Software Engineer",
    images: ["/profile-image-meta.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
