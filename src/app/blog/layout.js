export const metadata = {
  title: "Blog | Blockchain Development Guides & Tutorials | Md Sifat Bin Jibon",
  description:
    "Read comprehensive guides on blockchain development, smart contracts, dApp development, Corda, Ethereum, and blockchain tutorials. Written by Md Sifat Bin Jibon - Blockchain Developer in Bangladesh at R3 and CEO at FluvoSoft.",
  keywords: [
    "blockchain development blog",
    "blockchain development guides",
    "blockchain tutorials",
    "blockchain development articles",
    "smart contract development",
    "dapp development guide",
    "ethereum development tutorial",
    "blockchain programming blog",
    "blockchain developer blog",
    "blockchain technology articles",
    "corda development",
    "blockchain development resources",
  ].join(", "),
  openGraph: {
    title: "Blog | Blockchain Development Guides | Md Sifat Bin Jibon",
    description:
      "Comprehensive blockchain development guides, tutorials, and articles. Learn smart contracts, dApps, and blockchain programming from an experienced developer.",
    url: "https://mdsifat.site/blog",
    siteName: "Md Sifat Bin Jibon - Blockchain Developer",
    images: [
      {
        url: "https://mdsifat.site/profpic.jpg",
        width: 1200,
        height: 630,
        alt: "Md Sifat Bin Jibon - Blockchain Development Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Blockchain Development Guides | Md Sifat Bin Jibon",
    description:
      "Comprehensive blockchain development guides and tutorials for beginners and advanced developers.",
    creator: "@md_sifat",
    images: ["https://mdsifat.site/profpic.jpg"],
  },
  alternates: {
    canonical: "https://mdsifat.site/blog",
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

export default function BlogLayout({ children }) {
  return (
    <>
      {/* Blog Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Md Sifat Bin Jibon - Blockchain Development Blog",
            description:
              "Comprehensive guides on blockchain development, smart contracts, and dApp development",
            url: "https://mdsifat.site/blog",
            author: {
              "@type": "Person",
              name: "Md Sifat Bin Jibon",
              jobTitle: "Mid level Blockchain Developer at R3 & CEO at FluvoSoft",
              url: "https://mdsifat.site",
            },
            publisher: {
              "@type": "Organization",
              name: "Md Sifat Bin Jibon",
              url: "https://mdsifat.site",
            },
            inLanguage: "en-US",
            about: {
              "@type": "Thing",
              name: "Blockchain Development",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

