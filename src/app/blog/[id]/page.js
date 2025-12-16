"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Blog posts data - in production, this would come from a CMS or database
const blogPosts = {
  1: {
    id: 1,
    title: "Getting Started with Blockchain Development",
    category: "Blockchain",
    date: "December 15, 2024",
    dateISO: "2024-12-15",
    readTime: "15 min read",
    author: "Md Sifat Bin Jibon",
    authorRole: "Blockchain Developer at R3 & CTO at DataSynthis",
    description:
      "Complete beginner's guide to blockchain development. Learn blockchain fundamentals, smart contracts, dApps, and build your first blockchain project.",
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
    ],
  },
};

export default function BlogPost() {
  const params = useParams();
  const postId = parseInt(params.id);
  const post = blogPosts[postId];

  if (!post) {
    return (
      <main className="min-h-screen bg-white text-black pt-20 pb-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-[#dfb425] hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black pt-20 pb-32">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: "https://mdsifat.site/profpic.jpg",
            datePublished: post.dateISO,
            dateModified: post.dateISO,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: post.authorRole,
              url: "https://mdsifat.site",
              sameAs: [
                "https://www.linkedin.com/in/md-sifat-follow",
                "https://github.com/Md-Sifat-code",
              ],
            },
            publisher: {
              "@type": "Organization",
              name: "Md Sifat Bin Jibon",
              url: "https://mdsifat.site",
              logo: {
                "@type": "ImageObject",
                url: "https://mdsifat.site/profpic.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mdsifat.site/blog/${post.id}`,
            },
            articleSection: post.category,
            keywords: post.keywords.join(", "),
            articleBody: "Complete guide covering blockchain fundamentals, smart contracts, dApp development, and hands-on projects for beginners.",
            inLanguage: "en-US",
            about: {
              "@type": "Thing",
              name: "Blockchain Development",
              description: "Comprehensive guide to blockchain development for beginners",
            },
            teaches: [
              "Blockchain Technology",
              "Smart Contract Development",
              "Decentralized Application Development",
              "Ethereum Development",
              "Solidity Programming",
            ],
          }),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mdsifat.site",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://mdsifat.site/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://mdsifat.site/blog/${post.id}`,
              },
            ],
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is blockchain development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Blockchain development involves creating decentralized applications (dApps) and smart contracts using blockchain technology. It includes programming smart contracts, building front-end interfaces, and integrating with blockchain networks like Ethereum.",
                },
              },
              {
                "@type": "Question",
                name: "How do I start learning blockchain development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start by learning programming basics (JavaScript or Python), understanding blockchain fundamentals, setting up a development environment with tools like Hardhat or Truffle, and building your first smart contract project.",
                },
              },
              {
                "@type": "Question",
                name: "What programming languages are used for blockchain development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common languages include Solidity (for Ethereum), JavaScript (for web3.js), Python (for scripting), and Rust (for Solana). Solidity is the most popular for smart contract development.",
                },
              },
              {
                "@type": "Question",
                name: "What tools do I need for blockchain development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Essential tools include Node.js, a development framework (Hardhat or Truffle), MetaMask wallet, a local blockchain (Ganache), and an IDE like VS Code with Solidity extensions.",
                },
              },
              {
                "@type": "Question",
                name: "Is blockchain development hard to learn?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Blockchain development has a learning curve, but with dedication and the right resources, beginners can start building projects within a few months. Start with fundamentals, practice with testnets, and join developer communities for support.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best blockchain to develop on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ethereum is the most popular for beginners due to extensive resources, large community, and mature tooling. Other options include Solana (for high-speed apps), Polygon (for low fees), and enterprise solutions like R3 Corda for business applications.",
                },
              },
            ],
          }),
        }}
      />
      {/* HowTo Schema for the tutorial */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Get Started with Blockchain Development",
            description: "Step-by-step guide to learning blockchain development from basics to building your first project",
            image: "https://mdsifat.site/profpic.jpg",
            totalTime: "PT15M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "0",
            },
            step: [
              {
                "@type": "HowToStep",
                name: "Learn Programming Basics",
                text: "Start with JavaScript or Python. Learn data structures and basic programming concepts.",
              },
              {
                "@type": "HowToStep",
                name: "Understand Blockchain Fundamentals",
                text: "Learn about decentralization, immutability, consensus mechanisms, and how blockchain works.",
              },
              {
                "@type": "HowToStep",
                name: "Set Up Development Environment",
                text: "Install Node.js, Hardhat or Truffle framework, MetaMask wallet, and Ganache for local testing.",
              },
              {
                "@type": "HowToStep",
                name: "Learn Smart Contract Development",
                text: "Study Solidity programming language and write your first smart contract.",
              },
              {
                "@type": "HowToStep",
                name: "Build Your First Project",
                text: "Create a simple dApp like a voting system to practice smart contract development and front-end integration.",
              },
            ],
          }),
        }}
      />

      <article className="container mx-auto px-6 max-w-4xl relative z-10" itemScope itemType="https://schema.org/BlogPosting">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#dfb425] transition-colors mb-6"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>

          <div className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#dfb425] text-black">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6" itemProp="headline">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium" itemProp="name">{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.dateISO} itemProp="datePublished">{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <p className="text-lg text-gray-600 italic">{post.authorRole}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none" itemProp="articleBody">
          <BlogContent />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="text-sm text-gray-600">Share this article:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://mdsifat.site/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb425] hover:underline"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://mdsifat.site/blog/${post.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dfb425] hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-black font-medium transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to All Posts</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

// Blog Content Component
function BlogContent() {
  return (
    <div className="space-y-8 text-gray-800 leading-relaxed">
      {/* Introduction */}
      <section>
        <p className="text-xl text-gray-700 mb-4">
          Imagine sending money to someone on the other side of the world
          without a bank, in minutes, with minimal fees. That's the power of
          blockchain technology—the same innovation that powers Bitcoin and
          enables decentralized finance (DeFi) platforms like Uniswap and Aave.
          From revolutionizing finance to transforming supply chains and
          healthcare, blockchain is disrupting industries at an unprecedented
          pace.
        </p>
        <p className="mb-4">
          I'm{" "}
          <strong className="text-black">
            Md Sifat Bin Jibon, a Blockchain Developer in Bangladesh
          </strong>
          , currently working at R3 and serving as CTO at DataSynthis. With
          over a decade of experience in blockchain development, I've witnessed
          this technology evolve from Bitcoin's early days to today's
          sophisticated enterprise solutions. I remember my first encounter with
          blockchain—exploring Ethereum's smart contracts in 2016 and building
          my first decentralized application. That moment sparked a passion that
          has shaped my entire career.
        </p>
        <p className="mb-4">
          This guide is designed for absolute beginners who want to dip their
          toes into blockchain development. Whether you're a curious developer
          or someone looking to pivot into this exciting field, I'll walk you
          through everything you need to know—from understanding the basics to
          building your first project. We'll focus on hands-on, practical steps
          rather than overwhelming theory.
        </p>
        <p>
          By the end of this article, you'll understand what blockchain is, how
          it works, and have the tools to start building. We'll cover the
          fundamentals, set up your development environment, explore core
          concepts, and walk through creating your first blockchain project.
          Let's dive in!
        </p>
      </section>

      {/* What is Blockchain? */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          What is Blockchain?
        </h2>
        <p className="mb-4">
          At its core, blockchain is a{" "}
          <strong className="text-black">decentralized, immutable ledger</strong>{" "}
          that records transactions across a network of computers (called
          nodes). Think of it like a shared Google Doc, but with one crucial
          difference: once something is written, it can't be erased or altered
          without consensus from the entire network. Every change is permanent,
          verifiable, and transparent.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Key Features
        </h3>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">
              Decentralization
            </h4>
            <p>
              Unlike traditional databases controlled by a single authority (like
              a bank), blockchain operates on a peer-to-peer network. No single
              entity has complete control, making it resistant to censorship and
              single points of failure. This is why Bitcoin can operate without
              a central bank.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black mb-2">
              Immutability
            </h4>
            <p>
              Once data is added to a block and validated by the network, it
              becomes nearly impossible to alter. Each block contains a hash (a
              unique fingerprint) of the previous block, creating a chain. To
              change one block, you'd need to change all subsequent blocks and
              gain control of over 51% of the network—practically impossible.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black mb-2">
              Transparency
            </h4>
            <p>
              All participants can view the entire ledger, ensuring
              accountability. However, privacy is maintained through
              cryptography—transactions are linked to cryptographic addresses,
              not personal identities, unless you choose to reveal them.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-black mb-2">Security</h4>
            <p>
              Blockchain uses advanced cryptographic techniques like hashing
              (SHA-256) and consensus mechanisms (Proof-of-Work or
              Proof-of-Stake) to secure the network. These mechanisms ensure
              that only valid transactions are added to the chain.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          How It Works
        </h3>
        <ol className="list-decimal list-inside space-y-3 mb-6 ml-4">
          <li>
            <strong className="text-black">Transaction Initiation:</strong>{" "}
            Someone initiates a transaction (e.g., sending cryptocurrency).
          </li>
          <li>
            <strong className="text-black">Block Creation:</strong> The
            transaction is grouped with others into a block.
          </li>
          <li>
            <strong className="text-black">Validation:</strong> Nodes in the
            network validate the transaction using consensus mechanisms.
          </li>
          <li>
            <strong className="text-black">Chaining:</strong> Once validated,
            the block is added to the chain, linked to the previous block via a
            cryptographic hash.
          </li>
        </ol>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Common Misconceptions
        </h3>
        <p className="mb-4">
          Many people think "blockchain is just Bitcoin," but that's far from
          the truth. Blockchain technology has evolved far beyond
          cryptocurrencies. Today, it powers:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">NFTs (Non-Fungible Tokens):</strong>{" "}
            Unique digital assets representing ownership of art, music, or
            collectibles.
          </li>
          <li>
            <strong className="text-black">DAOs (Decentralized Autonomous
            Organizations):</strong> Community-governed organizations without
            central leadership.
          </li>
          <li>
            <strong className="text-black">Enterprise Solutions:</strong>{" "}
            Platforms like Hyperledger Fabric and R3 Corda for business
            applications in supply chain, healthcare, and finance.
          </li>
          <li>
            <strong className="text-black">DeFi (Decentralized Finance):</strong>{" "}
            Financial services without intermediaries, enabling lending, trading,
            and more.
          </li>
        </ul>
        <p>
          From my experience working with R3 Corda, I've seen blockchain
          transform how enterprises handle complex transactions, from trade
          finance to tokenization of assets. The technology is versatile and
          constantly evolving.
        </p>
      </section>

      {/* Prerequisites */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Prerequisites for Blockchain Development
        </h2>
        <p className="mb-4">
          Before diving into blockchain development, you'll need some
          foundational skills. Don't worry if you're not an expert—I'll guide
          you through what's essential and what you can learn along the way.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Programming Basics
        </h3>
        <p className="mb-4">
          Familiarity with at least one programming language is crucial. Here
          are the most relevant for blockchain:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">JavaScript:</strong> Essential for
            web3.js and interacting with Ethereum. If you're new, start with
            free resources like Codecademy or freeCodeCamp.
          </li>
          <li>
            <strong className="text-black">Python:</strong> Great for scripting,
            data analysis, and working with blockchain APIs. Widely used in
            blockchain analytics.
          </li>
          <li>
            <strong className="text-black">Solidity:</strong> Ethereum's
            smart contract language. Similar to JavaScript, so it's easier to
            learn if you know JS.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Technical Skills
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Data Structures:</strong>{" "}
                Understanding arrays, hashes, and linked lists (blockchain is
                essentially a linked list!).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Basic Cryptography:</strong>{" "}
                Public/private keys, hashing (SHA-256), and digital signatures.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Networking Concepts:</strong>{" "}
                Understanding peer-to-peer systems and how nodes communicate.
              </span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Tools and Software
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">IDEs:</strong> VS Code with Solidity
            extensions (like Hardhat or Remix for smart contracts).
          </li>
          <li>
            <strong className="text-black">Wallets:</strong> MetaMask for
            Ethereum interactions and testing.
          </li>
          <li>
            <strong className="text-black">Testnets:</strong> Sepolia or Goerli
            for safe experimentation without spending real money.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Mindset and Soft Skills
        </h3>
        <p className="mb-4">
          Blockchain development requires patience. Debugging smart contracts
          can be tricky—once deployed, they're immutable, so testing is
          critical. Early in my career, I encountered a bug that could have
          cost thousands if deployed to mainnet. That experience taught me the
          importance of thorough testing and security audits.
        </p>
        <p className="mb-6">
          <strong className="text-black">Time Commitment:</strong> Plan to
          dedicate 10-20 hours per week initially. Blockchain evolves rapidly—new
          layer-2 solutions like Polygon and Optimism emerge regularly, so
          staying updated is essential.
        </p>
      </section>

      {/* Setting Up Development Environment */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Setting Up Your Development Environment
        </h2>
        <p className="mb-4">
          Let's get your development environment ready. I'll walk you through
          each step, sharing tools I've trusted throughout my career.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          1. Install Node.js and npm
        </h3>
        <p className="mb-4">
          Node.js is essential for running web3 libraries and development tools.
          Download it from{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dfb425] hover:underline"
          >
            nodejs.org
          </a>
          . After installation, verify it:
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <code>node -v</code>
          <br />
          <code>npm -v</code>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          2. Blockchain Frameworks
        </h3>
        <p className="mb-4">
          For Ethereum development, I recommend starting with{" "}
          <strong className="text-black">Hardhat</strong> or{" "}
          <strong className="text-black">Truffle</strong>. Hardhat is more
          modern and widely used:
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <code>npm install --save-dev hardhat</code>
          <br />
          <code>npx hardhat init</code>
        </div>
        <p className="mb-6">
          For alternatives, consider <strong className="text-black">Solana</strong>{" "}
          (Rust-based) or <strong className="text-black">Polkadot</strong> for
          exploring different blockchain ecosystems.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          3. Local Blockchain
        </h3>
        <p className="mb-4">
          <strong className="text-black">Ganache</strong> creates a personal
          Ethereum blockchain for testing. Download from{" "}
          <a
            href="https://trufflesuite.com/ganache"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dfb425] hover:underline"
          >
            trufflesuite.com/ganache
          </a>
          . Run it and note the RPC URL (usually http://127.0.0.1:7545).
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          4. Wallet Integration
        </h3>
        <p className="mb-4">
          Install the <strong className="text-black">MetaMask</strong> browser
          extension. Create an account and switch to a testnet (Sepolia or
          Goerli). Get free test ETH from faucets like{" "}
          <a
            href="https://faucet.quicknode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dfb425] hover:underline"
          >
            faucet.quicknode.com
          </a>
          .
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Security Tips
        </h3>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="font-semibold text-black mb-2">⚠️ Critical Security Rules:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Never share your private keys or seed phrases.</li>
            <li>Use hardware wallets (Ledger, Trezor) for real funds.</li>
            <li>Always test on testnets before mainnet deployment.</li>
            <li>Double-check contract addresses before interacting.</li>
          </ul>
        </div>
        <p className="mb-6">
          I've seen simple mistakes lead to significant losses. In early
          projects, a developer accidentally exposed a private key in a GitHub
          repository, resulting in drained wallets. Always use environment
          variables for sensitive data.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Troubleshooting
        </h3>
        <p className="mb-4">Common issues and solutions:</p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Port conflicts:</strong> Change
            Ganache's port if 7545 is in use.
          </li>
          <li>
            <strong className="text-black">Version mismatches:</strong> Ensure
            Node.js version is compatible (v16+ recommended).
          </li>
          <li>
            <strong className="text-black">MetaMask connection issues:</strong>{" "}
            Clear cache and reconnect to the network.
          </li>
        </ul>
      </section>

      {/* Core Concepts */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Core Blockchain Concepts
        </h2>
        <p className="mb-6">
          Let's dive deeper into the technical pillars that make blockchain
          work. Understanding these concepts is crucial for building robust
          applications.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Blocks and Chains
        </h3>
        <p className="mb-4">
          A block contains:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Header:</strong> Metadata including
            timestamp, nonce, and previous block hash.
          </li>
          <li>
            <strong className="text-black">Transactions:</strong> The actual
            data being recorded.
          </li>
          <li>
            <strong className="text-black">Hash:</strong> A unique fingerprint
            of the block's contents.
          </li>
        </ul>
        <p className="mb-6">
          Blocks are chained together via the previous block's hash, creating an
          unbreakable sequence. This is why it's called a "blockchain."
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Consensus Mechanisms
        </h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">
              Proof-of-Work (PoW)
            </h4>
            <p>
              Miners solve complex mathematical puzzles to validate transactions.
              Energy-intensive but highly secure. Used by Bitcoin. The first
              miner to solve the puzzle gets rewarded.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">
              Proof-of-Stake (PoS)
            </h4>
            <p>
              Validators lock up cryptocurrency as "stake" to validate
              transactions. More eco-friendly than PoW. Ethereum 2.0 uses PoS,
              reducing energy consumption by 99.95%.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black mb-2">Others</h4>
            <p>
              <strong className="text-black">Delegated PoS:</strong> Token
              holders vote for validators (used by EOS).{" "}
              <strong className="text-black">Proof-of-Authority:</strong>{" "}
              Trusted validators (used in private blockchains like those I work
              with at R3 Corda).
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Smart Contracts
        </h3>
        <p className="mb-4">
          Smart contracts are self-executing code stored on the blockchain. They
          automatically execute when predefined conditions are met. Think of them
          as digital vending machines: insert the right input (cryptocurrency),
          and you get the output (product/service) automatically.
        </p>
        <p className="mb-4">
          Example: An escrow smart contract holds funds until both parties
          confirm a transaction. No need for a middleman.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Tokens and Standards
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">ERC-20:</strong> Fungible tokens
            (like cryptocurrencies). All tokens are identical and
            interchangeable.
          </li>
          <li>
            <strong className="text-black">ERC-721:</strong> Non-fungible
            tokens (NFTs). Each token is unique, like a collectible card.
          </li>
          <li>
            <strong className="text-black">ERC-1155:</strong> Multi-token
            standard supporting both fungible and non-fungible tokens.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Decentralized Applications (dApps)
        </h3>
        <p className="mb-4">
          A dApp consists of:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Front-end:</strong> React, Vue, or
            vanilla JavaScript for the user interface.
          </li>
          <li>
            <strong className="text-black">Back-end:</strong> Smart contracts
            on the blockchain.
          </li>
          <li>
            <strong className="text-black">Middleware:</strong> web3.js or
            ethers.js to connect front-end to blockchain.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Scalability Issues
        </h3>
        <p className="mb-4">
          Blockchain faces a{" "}
          <strong className="text-black">trilemma</strong>: balancing security,
          decentralization, and scalability. Solutions include:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Sharding:</strong> Splitting the
            blockchain into smaller pieces.
          </li>
          <li>
            <strong className="text-black">Rollups:</strong> Processing
            transactions off-chain and batching them on-chain (Optimistic and
            ZK-rollups).
          </li>
          <li>
            <strong className="text-black">Layer-2 Solutions:</strong>{" "}
            Building on top of existing blockchains (Polygon, Arbitrum).
          </li>
        </ul>
      </section>

      {/* Building First Project */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Building Your First Blockchain Project
        </h2>
        <p className="mb-6">
          Let's build a simple decentralized voting system on Ethereum. This
          project will teach you the fundamentals of smart contract development.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Project Overview
        </h3>
        <p className="mb-6">
          We'll create a voting dApp where users can add candidates and vote.
          The results will be transparent and immutable on the blockchain.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Step 1: Write the Smart Contract
        </h3>
        <p className="mb-4">Create a file called <code className="bg-gray-100 px-2 py-1 rounded">Voting.sol</code>:</p>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    
    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;
    address public owner;
    
    constructor(string[] memory candidateNames) {
        owner = msg.sender;
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate({
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }
    
    function vote(uint256 candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateIndex < candidates.length, "Invalid candidate");
        
        candidates[candidateIndex].voteCount++;
        hasVoted[msg.sender] = true;
    }
    
    function getCandidateCount() public view returns (uint256) {
        return candidates.length;
    }
    
    function getVoteCount(uint256 candidateIndex) public view returns (uint256) {
        require(candidateIndex < candidates.length, "Invalid candidate");
        return candidates[candidateIndex].voteCount;
    }
}`}</pre>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Step 2: Deploy to Testnet
        </h3>
        <p className="mb-4">
          Use <strong className="text-black">Remix IDE</strong> (remix.ethereum.org) for
          easy deployment:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
          <li>Copy the contract code into Remix.</li>
          <li>Compile using Solidity compiler (0.8.0+).</li>
          <li>Deploy to Sepolia testnet via MetaMask.</li>
          <li>Pass candidate names in the constructor: <code className="bg-gray-100 px-2 py-1 rounded">["Alice", "Bob"]</code></li>
        </ol>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Step 3: Build Front-end
        </h3>
        <p className="mb-4">Create a simple HTML file with web3.js:</p>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
          <pre>{`<!DOCTYPE html>
<html>
<head>
    <title>Voting dApp</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
</head>
<body>
    <h1>Decentralized Voting</h1>
    <div id="candidates"></div>
    <script>
        // Connect to MetaMask
        if (typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            const contractAddress = 'YOUR_CONTRACT_ADDRESS';
            const contractABI = [/* Your ABI */];
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // Load candidates and display
            async function loadCandidates() {
                const count = await contract.methods.getCandidateCount().call();
                // Display candidates and voting buttons
            }
        }
    </script>
</body>
</html>`}</pre>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Step 4: Test
        </h3>
        <p className="mb-6">
          Connect MetaMask, vote for candidates, and view results. Check
          transactions on Etherscan testnet explorer.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Debugging Tips
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>Use <strong className="text-black">Etherscan</strong> to inspect transactions.</li>
          <li>Check Remix's debugger for contract errors.</li>
          <li>Use console.log in JavaScript for front-end debugging.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Extensions
        </h3>
        <p className="mb-6">
          Once comfortable, add features like time-bound voting, vote weighting,
          or admin functions. These enhancements will deepen your understanding.
        </p>
      </section>

      {/* Challenges and Best Practices */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Common Challenges and Best Practices
        </h2>
        <p className="mb-6">
          Based on my decade of experience, here are the most common pitfalls
          and how to avoid them.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Challenges
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Challenge</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Best Practice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">High Gas Fees</td>
                <td className="border border-gray-300 px-4 py-2">Expensive transactions on mainnet</td>
                <td className="border border-gray-300 px-4 py-2">Optimize loops, use layer-2 solutions like Optimism</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Security Risks</td>
                <td className="border border-gray-300 px-4 py-2">Bugs leading to exploits</td>
                <td className="border border-gray-300 px-4 py-2">Use OpenZeppelin libraries, conduct audits</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Scalability</td>
                <td className="border border-gray-300 px-4 py-2">Slow transaction speeds</td>
                <td className="border border-gray-300 px-4 py-2">Implement off-chain computations with oracles</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Best Practices
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Write Tests:</strong> Use Mocha/Chai
                for comprehensive testing before deployment.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Version Control:</strong> Use Git
                for collaboration and tracking changes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Community Involvement:</strong>{" "}
                Join Discord groups, Stack Overflow, and attend meetups.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfb425] font-bold">✓</span>
              <span>
                <strong className="text-black">Security Audits:</strong>{" "}
                Always audit smart contracts before mainnet deployment.
              </span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Ethical Considerations
        </h3>
        <p className="mb-6">
          Be mindful of blockchain's environmental impact. PoW networks consume
          significant energy—consider PoS alternatives or layer-2 solutions.
          Promote inclusive technology that benefits everyone, not just early
          adopters.
        </p>
      </section>

      {/* Advanced Topics */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Advanced Topics and Next Steps
        </h2>
        <p className="mb-6">
          Once you've mastered the basics, here's what to explore next.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Layer-2 Solutions
        </h3>
        <p className="mb-4">
          <strong className="text-black">Rollups</strong> process transactions
          off-chain and batch them on-chain:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">ZK-Rollups:</strong> Use zero-knowledge
            proofs for instant finality (e.g., zkSync).
          </li>
          <li>
            <strong className="text-black">Optimistic Rollups:</strong> Assume
            transactions are valid unless challenged (e.g., Optimism, Arbitrum).
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Interoperability
        </h3>
        <p className="mb-6">
          <strong className="text-black">Bridges</strong> like Wormhole enable
          cross-chain communication, allowing assets to move between
          blockchains. This is crucial for the multi-chain future.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Web3 Ecosystem
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">DAOs:</strong> Decentralized governance
            (e.g., MakerDAO, Uniswap DAO).
          </li>
          <li>
            <strong className="text-black">DeFi Protocols:</strong> Uniswap for
            trading, Aave for lending, Compound for yield farming.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Career Advice
        </h3>
        <p className="mb-4">
          From my experience as a Blockchain Developer in Bangladesh:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>Build a portfolio on GitHub showcasing your projects.</li>
          <li>Contribute to open-source blockchain projects.</li>
          <li>Consider certifications like Certified Blockchain Expert (CBE).</li>
          <li>Network at blockchain conferences and meetups.</li>
          <li>Stay updated with industry news and trends.</li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Emerging Trends
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">AI-Blockchain Integration:</strong>{" "}
            Combining AI with blockchain for enhanced security and automation.
          </li>
          <li>
            <strong className="text-black">Zero-Knowledge Proofs:</strong>{" "}
            Enabling privacy while maintaining transparency.
          </li>
          <li>
            <strong className="text-black">Enterprise Blockchain:</strong>{" "}
            Solutions like R3 Corda for business applications.
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Resources and Further Reading
        </h2>
        <p className="mb-6">
          Here are curated resources I've found invaluable throughout my career.
        </p>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Books</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">"Mastering Ethereum"</strong> by Andreas
            Antonopoulos - Comprehensive guide to Ethereum development.
          </li>
          <li>
            <strong className="text-black">"The Bitcoin Standard"</strong> by
            Saifedean Ammous - Understanding the economics of blockchain.
          </li>
          <li>
            <strong className="text-black">"Blockchain Revolution"</strong> by Don
            & Alex Tapscott - Business applications of blockchain.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Online Courses
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Coursera's Blockchain Specialization</strong>{" "}
            - University-level courses on blockchain fundamentals.
          </li>
          <li>
            <strong className="text-black">freeCodeCamp's Solidity Course</strong>{" "}
            - Free, comprehensive Solidity tutorial.
          </li>
          <li>
            <strong className="text-black">Ethereum.org Learn Section</strong>{" "}
            - Official Ethereum documentation and tutorials.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Tools</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Ethers.js:</strong> JavaScript library
            for Ethereum interactions.
          </li>
          <li>
            <strong className="text-black">Infura/Alchemy:</strong> Blockchain APIs
            for reliable node access.
          </li>
          <li>
            <strong className="text-black">OpenZeppelin:</strong> Secure smart
            contract libraries.
          </li>
          <li>
            <strong className="text-black">Hardhat:</strong> Development
            environment for Ethereum.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Communities</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>
            <strong className="text-black">Reddit:</strong> r/ethereum,
            r/ethdev for discussions.
          </li>
          <li>
            <strong className="text-black">Discord:</strong> Ethereum Discord
            server for real-time help.
          </li>
          <li>
            <strong className="text-black">Stack Overflow:</strong> Tag
            ethereum, solidity for technical questions.
          </li>
          <li>
            <strong className="text-black">Ethereum.org Forums:</strong>{" "}
            Official community forums.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Recommended Follows
        </h3>
        <p className="mb-6">
          Follow thought leaders like <strong className="text-black">Vitalik Buterin</strong>{" "}
          (Ethereum founder), <strong className="text-black">Andreas Antonopoulos</strong>,{" "}
          and <strong className="text-black">Nick Szabo</strong> on X (formerly Twitter) for
          industry insights.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-3xl font-bold text-black mt-12 mb-6">
          Conclusion
        </h2>
        <p className="mb-4">
          We've covered a lot—from understanding what blockchain is to building
          your first project. You now know the fundamentals: decentralization,
          immutability, smart contracts, and consensus mechanisms. You've set up
          your development environment and learned about the tools and
          frameworks available.
        </p>
        <p className="mb-4">
          Remember, blockchain development is a journey, not a destination. The
          technology evolves rapidly, and continuous learning is essential. Start
          coding today—build that voting dApp, experiment with testnets, and
          don't be afraid to make mistakes. That's how you learn.
        </p>
        <p className="mb-4">
          I encourage you to share your projects, ask questions in communities,
          and contribute to the ecosystem. Blockchain changed my career, taking
          me from a curious developer to working with enterprise solutions at R3
          and leading technical teams at DataSynthis. The same opportunity
          awaits you.
        </p>
        <p className="mb-6">
          Feel free to reach out with questions or share your projects. I'd love
          to see what you build! The blockchain community is welcoming and
          supportive—we're all learning together.
        </p>
        <div className="bg-[#dfb425]/10 border-l-4 border-[#dfb425] p-6 rounded-lg">
          <p className="font-semibold text-black mb-2">
            Ready to start your blockchain journey?
          </p>
          <p>
            Pick a project, join a community, and start building. The future of
            decentralized technology is in your hands. Happy coding! 🚀
          </p>
        </div>
      </section>
    </div>
  );
}

