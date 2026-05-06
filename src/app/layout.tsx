import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { portfolioData, siteUrl } from "@/data/portfolio";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolioData.name} | ${portfolioData.title}`,
  description:
    "Portfolio of Showvike Mondal Ovi, a software engineer focused on full-stack web platforms, Shopify development, performance, and scalable product work.",
  keywords: [
    "Showvike Mondal Ovi",
    "Software Engineer",
    "Full-Stack Engineer",
    "Next.js",
    "React",
    "Shopify",
    "TypeScript",
    "Bangladesh",
  ],
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description:
      "Full-stack software engineer with experience across Shopify, scalable web platforms, modern frontend architecture, and AWS-backed products.",
    url: siteUrl,
    siteName: portfolioData.name,
    images: [
      {
        url: "/profile-image-meta.jpeg",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} portfolio preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description:
      "Portfolio of a software engineer building full-stack products, Shopify experiences, and scalable web platforms.",
    images: ["/profile-image-meta.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
