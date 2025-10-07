import React from "react";
import Image from "next/image";

const ProgrammingLanguages = () => {
  const languages = [
    { name: "Python", src: "/python_icon.png" },
    { name: "JavaScript", src: "/javascript_logo.png" },
    { name: "TypeScript", src: "/typescript_icon.png" },
    { name: "Dart", src: "/dart_icon.png" },
    { name: "C", src: "/c_icon.png" },
    { name: "SQL", src: "/sql_icon.svg" },
  ];

  return (
    <section
      id="programming-languages"
      className="py-20 mb-32 bg-white flex flex-col items-center justify-center gap-11"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center flex flex-col items-center py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Programming Languages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Crafted robust backends and scripts, leading teams to deliver
            scalable solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-11">
        {languages.map((language) => (
          <div
            key={language.name}
            className="flex flex-col items-center space-y-3"
          >
            <Image
              src={language.src}
              alt={`${language.name} logo`}
              width={48}
              height={48}
              className="object-contain"
              loading="lazy"
            />
            <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-black">
              {language.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
