import "./global.css";
import Head from "next/head";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Spiral",
    template: "%s | Simplesmente espiral.",
  },
  description: "Site da Spiral.",
  openGraph: {
    title: "Spiral.",
    description: "Site da Spiral.",
    url: baseUrl,
    siteName: "Spiral.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <link rel="shortcut icon" href="./public/favicon.ico" />
      </Head>
      <body className="antialiased max-w-6xl">
        <main className="flex-auto min-w-80 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="content-center bg-blue-600">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
