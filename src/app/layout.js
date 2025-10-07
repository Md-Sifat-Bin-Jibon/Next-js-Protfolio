// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FollowCursor from "../Components/FollowCursor";
import Navbar from "@/Components/Navbar";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mdsifat.site"),
  title: {
    default: "Md Sifat Bin Jibon | Blockchain Developer & Software Engineer",
    template: "%s | Md Sifat Bin Jibon",
  },
  description:
    "Md Sifat Bin Jibon is a Blockchain Developer in Bangladesh and Software Engineer. CTO at DataSynthis and Blockchain Developer at R3 — building Corda/DLT apps, tokenization and enterprise integrations. Explore projects, experience and contact details.",
  applicationName: "Md Sifat Portfolio",
  authors: [{ name: "Md Sifat Bin Jibon", url: "https://mdsifat.site" }],
  keywords: [
    "md sifat bin jibon",
    "Md Sifat",
    "Md Sifat Bin Jibon",
    "Blockchain Developer Bangladesh",
    "Blockchain developer in Bangladesh",
    "best blockchain developer Bangladesh",
    "Corda developer Bangladesh",
    "DLT engineer Bangladesh",
    "DataSynthis CTO",
    "CTO DataSynthis",
    "R3 Blockchain Developer",
    "Md Sifat Portfolio",
    "Md Sifat Projects",
    "Software Developer",
    "Frontend Engineer",
    "React Next.js developer",
    "Tokenization",
    "Corda",
    "Distributed Ledger",
    "Md Sifat Portfolio",
    "Blockchain engineering in Bangladesh",
    "Software Development",
    "Tech Solutions in Bangladesh",
  ].join(", "),
  alternates: {
    canonical: "https://mdsifat.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Md Sifat Bin Jibon | Blockchain Developer & Software Engineer",
    description:
      "Md Sifat Bin Jibon is an AI Engineer and Software Developer with a passion for building intelligent systems. Explore AI-driven projects, machine learning solutions, and more in my portfolio.",
    type: "website",
    locale: "en",
    url: "https://mdsifat.site",
    images: [
      {
        url: "/profpic.jpg",
        width: 800,
        height: 800,
        alt: "Md Sifat Bin Jibon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sifat Bin Jibon | Blockchain Developer & Software Engineer",
    description:
      "Portfolio of Md Sifat Bin Jibon – Blockchain Developer in Bangladesh, CTO at DataSynthis.",
    creator: "@md_sifat",
    images: ["/profpic.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Canonical */}
        <link rel="canonical" href="https://mdsifat.site" />
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Fonts */}
        {/* Removed external Google Fonts (using next/font instead for performance) */}
        {/* Theme Color */}
        <meta name="theme-color" content="#0D47A1" />
        {/* Robots */}
        <meta name="robots" content="index,follow,max-image-preview:large" />
        {/* Social images are configured via Next.js metadata above */}
        {/* rel=me for identity linking */}
        <link rel="me" href="https://www.linkedin.com/in/md-sifat-follow" />
        <link rel="me" href="https://github.com/Md-Sifat-code" />
        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* JSON-LD: Person and WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              url: "https://mdsifat.site",
              image: "https://mdsifat.site/profpic.jpg",
              description:
                "Md Sifat Bin Jibon is a Blockchain Developer in Bangladesh and Software Engineer. CTO at DataSynthis and Blockchain Developer at R3, specialized in Corda, tokenization and DLT integrations.",
              sameAs: [
                "https://www.linkedin.com/in/md-sifat-follow",
                "https://github.com/Md-Sifat-code",
                "https://fluvosoft.com", // Your company link
              ],
              jobTitle: "Blockchain Developer & Software Engineer",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "DataSynthis",
                  sameAs: "https://www.linkedin.com/company/datasynthis",
                  employee: {
                    "@type": "Person",
                    name: "Md Sifat Bin Jibon",
                  },
                  employeeType: "CTO",
                },
                {
                  "@type": "Organization",
                  name: "R3",
                  sameAs: "https://www.linkedin.com/company/r3cev-llc",
                },
              ],
              knowsAbout: [
                "Blockchain",
                "Corda",
                "Tokenization",
                "Distributed Ledger Technology",
                "Smart Contracts",
                "Solana",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "codewithsifat4@gmail.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Md Sifat Bin Jibon Portfolio",
              url: "https://mdsifat.site",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://mdsifat.site/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={geist.className}>
        <FollowCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
