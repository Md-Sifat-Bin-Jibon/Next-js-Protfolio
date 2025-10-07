import React from "react";
import Image from "next/image";

const TechStack = () => {
  const languages = [
    { name: "Python", src: "/python_icon.png" },
    { name: "JavaScript", src: "/javascript_logo.png" },
    { name: "TypeScript", src: "/typescript_icon.png" },
    { name: "Dart", src: "/dart_icon.png" },
    { name: "C", src: "/c_icon.png" },
    { name: "SQL", src: "/sql_icon.svg" },
  ];

  const frameworks = [
    { name: "React", src: "/react_icon.svg" },
    { name: "Next.js", src: "/next.svg" },
    { name: "Node.js", src: "/node_js_icon.svg" },
    { name: "NestJS", src: "/nestjs_icon.svg" },
    { name: "Express.js", src: "/ecpressjs_icon.svg" },
    { name: "Ethers.js", src: "/etherjs_icon.png" },
    { name: "Three.js", src: "/threejs_icon.png" },
  ];

  const mobileUi = [{ name: "Flutter", src: "/flutter_icon.svg" }];

  const databasesMessaging = [
    { name: "PostgreSQL", src: "/postgreaql_icon.svg" },
    { name: "DynamoDB", src: "/dynamodb_icon.svg" },
    { name: "MongoDB", src: "/mongodb_icon.svg" },
    { name: "CockroachDB", src: "/cockroachdb_icon.svg" },
    { name: "Cassandra", src: "/cassandra_icon.svg" },
    { name: "Redis", src: "/radis_icon.svg" },
    { name: "RabbitMQ", src: "/rabitmq_icon.svg" },
    { name: "Kafka", src: "/kafka_icon.svg" },
    { name: "Cloudinary", src: "/cloudinary_cion.png" },
    { name: "Firebase", src: "/firebase_icon.svg" },
    { name: "Appwrite", src: "/appwrite_icon.svg" },
    { name: "Supabase", src: "/supabase_icon.svg" },
  ];

  const architectureIntegration = [
    { name: "Microservices", src: "/microservice_logo.png" },
    { name: "gRPC", src: "/grpc_icon.png" },
    { name: "REST APIs", src: "/restapi_icon.png" },
    { name: "CI/CD Pipelines", src: "/CICD_icon.png" },
    { name: "Web Scraping", src: "/webscrapping_icon.png" },
  ];

  const toolsMisc = [
    { name: "Git", src: "/git_icon.png" },
    { name: "Linux", src: "/linux_icon.jpeg" },
    { name: "MCP", src: "/mdcp_icon.jpg" },
  ];

  const getInitials = (label) => {
    if (!label) return "?";
    const words = label.replace(/\.+/g, "").split(/\s+/);
    return words
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  };

  return (
    <section
      id="tech"
      className="py-20 bg-white flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center justify-center gap-16">
        {/* Programming Languages */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Programming Languages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
              Crafted robust backends and scripts, leading teams to deliver
              scalable solutions.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {languages.map((language) => (
              <div
                key={language.name}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                  <Image
                    src={language.src}
                    alt={`${language.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-black">
                  {language.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frameworks & Libraries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
              Built high-performance web and backend systems with modern
              frameworks.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {frameworks.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-3"
              >
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
        </div>

        {/* Mobile & UI */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Mobile & UI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
              Developed cross-platform mobile applications with seamless user
              experiences.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {mobileUi.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-3"
              >
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
        </div>

        {/* Databases & Messaging */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Databases & Messaging
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-center">
              Designed and optimized data storage and messaging systems for high
              throughput.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {databasesMessaging.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-3"
              >
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
        </div>

        {/* Architecture & Integration */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Architecture & Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl text-center">
              Led cross-team efforts to build scalable, integrated systems with
              CI/CD and APIs.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {architectureIntegration.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-3"
              >
                {item.src ? (
                  <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={`${item.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                    {getInitials(item.name)}
                  </div>
                )}
                <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-black">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Misc. */}
        <div className="w-full flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Tools & Misc.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl text-center">
              Streamlined development and operations with version control and
              system tools.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-11">
            {toolsMisc.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-3"
              >
                {item.src ? (
                  <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={`${item.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
                    {getInitials(item.name)}
                  </div>
                )}
                <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-black">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
