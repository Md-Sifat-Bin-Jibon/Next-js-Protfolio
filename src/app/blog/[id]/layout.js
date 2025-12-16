import { Metadata } from "next";

const blogPosts = {
  1: {
    id: 1,
    title: "Getting Started with Blockchain Development",
    description:
      "Complete beginner's guide to blockchain development. Learn blockchain fundamentals, smart contracts, dApps, and build your first blockchain project. Written by Md Sifat Bin Jibon, Blockchain Developer at R3 and CTO at DataSynthis.",
    category: "Blockchain",
    date: "2024-12-15",
    readTime: "15 min read",
    author: "Md Sifat Bin Jibon",
    keywords: [
      "blockchain development",
      "blockchain development guide",
      "blockchain tutorial",
      "blockchain developer",
      "blockchain development for beginners",
      "how to learn blockchain development",
      "blockchain programming",
      "smart contracts",
      "ethereum development",
      "solidity tutorial",
      "dapp development",
      "blockchain technology",
      "blockchain explained",
      "blockchain developer tutorial",
      "blockchain development course",
      "blockchain development roadmap",
      "blockchain development tools",
      "blockchain development environment",
      "blockchain development skills",
      "blockchain development career",
    ],
  },
};

export async function generateMetadata({ params }) {
  const postId = parseInt(params.id);
  const post = blogPosts[postId];

  if (!post) {
    return {
      title: "Blog Post Not Found | Md Sifat Bin Jibon",
    };
  }

  const url = `https://mdsifat.site/blog/${postId}`;
  const imageUrl = `https://mdsifat.site/profpic.jpg`;

  return {
    title: `${post.title} | Blockchain Development Guide | Md Sifat Bin Jibon`,
    description: post.description,
    keywords: post.keywords.join(", "),
    authors: [{ name: post.author, url: "https://mdsifat.site" }],
    openGraph: {
      title: `${post.title} | Blockchain Development Guide`,
      description: post.description,
      url: url,
      siteName: "Md Sifat Bin Jibon - Blockchain Developer",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${post.title} - Blockchain Development Guide by Md Sifat Bin Jibon`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.keywords.slice(0, 10),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blockchain Development Guide`,
      description: post.description,
      creator: "@md_sifat",
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
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
}

export default function BlogPostLayout({ children }) {
  return <>{children}</>;
}

