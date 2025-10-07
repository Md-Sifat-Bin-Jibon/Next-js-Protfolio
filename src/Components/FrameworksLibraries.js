import React from "react";
import Image from "next/image";

const FrameworksLibraries = () => {
  const items = [
    { name: "React" },
    { name: "Next.js", src: "/next.svg" },
    { name: "Node.js" },
    { name: "NestJS" },
    { name: "Express.js" },
    { name: "Ethers.js" },
    { name: "Three.js" },
  ];

  const getInitials = (label) => {
    if (!label) return "?";
    const words = label.replace(/\.+/g, "").split(/\s+/);
    const initials = words
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    return initials;
  };

  return (
    <section
      id="frameworks-libraries"
      className="pt-28 pb-20 bg-white flex flex-col items-center justify-center gap-11"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frameworks & Libraries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Built high-performance web and backend systems with modern
            frameworks.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-11 flex-wrap">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col items-center space-y-3">
            {item.src ? (
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                width={48}
                height={48}
                className="object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                {getInitials(item.name)}
              </div>
            )}
            <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-black">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameworksLibraries;
