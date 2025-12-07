// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FollowCursor from "../Components/FollowCursor";
import Navbar from "@/Components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mdsifat.site"),
  title: {
    default: "Md Sifat Bin Jibon | Blockchain Developer in Bangladesh | R3 & DataSynthis",
    template: "%s | Md Sifat Bin Jibon - Blockchain Developer in Bangladesh",
  },
  description:
    "Md Sifat Bin Jibon is a Blockchain Developer in Bangladesh and Software Engineer. CTO at DataSynthis and Blockchain Developer at R3. Former UIU Developers HUB member, conducted React Orbit and Hackathon Preparation workshops at United International University (UIU). Specialized in Corda, DLT, and blockchain solutions.",
  applicationName: "Md Sifat Portfolio",
  authors: [{ name: "Md Sifat Bin Jibon", url: "https://mdsifat.site" }],
  keywords: [
    "md sifat",
    "md sifat bin jibon",
    "Md Sifat",
    "Md Sifat Bin Jibon",
    "r3",
    "R3",
    "blockchain",
    "Blockchain",
    "uiu",
    "UIU",
    "united international university",
    "United International University",
    "uiudh",
    "UIUDH",
    "uiu developers hub",
    "UIU Developers HUB",
    "datasynthis",
    "DataSynthis",
    "uiu orbit",
    "UIU Orbit",
    "React Orbit",
    "blockchain developer in bangladesh",
    "Blockchain Developer in Bangladesh",
    "Blockchain Developer Bangladesh",
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
    "Blockchain engineering in Bangladesh",
    "Software Development",
    "Tech Solutions in Bangladesh",
    "drmc",
    "DRMC",
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
    title: "Md Sifat Bin Jibon | Blockchain Developer in Bangladesh | R3 & DataSynthis",
    description:
      "Md Sifat Bin Jibon is a Blockchain Developer in Bangladesh working at R3 and CTO at DataSynthis. Former UIU Developers HUB member, conducted workshops at United International University (UIU). Expert in Corda, DLT, and blockchain solutions.",
    type: "website",
    locale: "en",
    url: "https://mdsifat.site",
    siteName: "Md Sifat Bin Jibon Portfolio",
    images: [
      {
        url: "/profpic.jpg",
        width: 800,
        height: 800,
        alt: "Md Sifat Bin Jibon - Blockchain Developer in Bangladesh at R3 and CTO at DataSynthis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sifat Bin Jibon | Blockchain Developer in Bangladesh | R3 & DataSynthis",
    description:
      "Blockchain Developer in Bangladesh at R3 and CTO at DataSynthis. Former UIU Developers HUB member. Expert in Corda, DLT, and blockchain solutions.",
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
              alternateName: ["Md Sifat", "md sifat", "md sifat bin jibon"],
              url: "https://mdsifat.site",
              image: "https://mdsifat.site/profpic.jpg",
              description:
                "Md Sifat Bin Jibon is a Blockchain Developer in Bangladesh and Software Engineer. CTO at DataSynthis and Blockchain Developer at R3. Former UIU Developers HUB member, conducted React Orbit and Hackathon Preparation workshops at United International University (UIU). Specialized in Corda, DLT, and blockchain solutions.",
              sameAs: [
                "https://www.linkedin.com/in/md-sifat-follow",
                "https://github.com/Md-Sifat-code",
              ],
              jobTitle: "Blockchain Developer & Software Engineer",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "R3",
                  alternateName: "r3",
                  sameAs: "https://www.linkedin.com/company/r3cev-llc",
                  description: "R3 is a leading enterprise blockchain software firm",
                },
                {
                  "@type": "Organization",
                  name: "DataSynthis",
                  alternateName: "datasynthis",
                  sameAs: "https://www.linkedin.com/company/datasynthis",
                  employee: {
                    "@type": "Person",
                    name: "Md Sifat Bin Jibon",
                  },
                  employeeType: "CTO",
                },
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "United International University",
                  alternateName: ["UIU", "uiu", "United International University"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dhaka",
                    addressRegion: "Dhaka",
                    addressCountry: "Bangladesh",
                  },
                },
              ],
              memberOf: [
                {
                  "@type": "Organization",
                  name: "UIU Developers HUB",
                  alternateName: ["UIUDH", "uiudh", "UIU Developers HUB", "uiu developers hub"],
                  parentOrganization: {
                    "@type": "EducationalOrganization",
                    name: "United International University",
                  },
                },
              ],
              knowsAbout: [
                "Blockchain",
                "blockchain",
                "Blockchain Developer in Bangladesh",
                "Corda",
                "Tokenization",
                "Distributed Ledger Technology",
                "DLT",
                "Smart Contracts",
                "Solana",
                "React",
                "Next.js",
                "Frontend Development",
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
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Workshop",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "UIU Developers HUB",
                  },
                  about: "React Orbit - Frontend Development Workshop",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Workshop",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "UIU Developers HUB",
                  },
                  about: "Hackathon Preparation Workshop",
                },
              ],
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
              alternateName: ["Md Sifat Portfolio", "md sifat portfolio"],
              url: "https://mdsifat.site",
              description:
                "Portfolio of Md Sifat Bin Jibon - Blockchain Developer in Bangladesh at R3 and CTO at DataSynthis. Former UIU Developers HUB member.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://mdsifat.site/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* JSON-LD: Organization - UIU Developers HUB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UIU Developers HUB",
              alternateName: ["UIUDH", "uiudh", "UIU Developers HUB", "uiu developers hub"],
              parentOrganization: {
                "@type": "EducationalOrganization",
                name: "United International University",
                alternateName: ["UIU", "uiu", "United International University"],
              },
            }),
          }}
        />
        {/* JSON-LD: Organization - United International University */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "United International University",
              alternateName: ["UIU", "uiu", "United International University"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressRegion: "Dhaka",
                addressCountry: "Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body className={geist.className}>
        <FollowCursor />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
