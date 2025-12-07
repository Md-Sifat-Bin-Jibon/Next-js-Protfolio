import React from "react";

const experiences = [
  {
    company: "R3",
    role: "Blockchain Developer",
    location: "",
    period: "September 2025 — Present",
    url: "https://www.linkedin.com/company/r3cev-llc",
    points: [
      "Building distributed ledger solutions and smart contract workflows on Corda.",
      "Designing secure transaction flows and integrations with enterprise systems.",
      "Improving performance and reliability across blockchain services.",
    ],
  },
  {
    company: "DataSynthis",
    role: "Chief Technology Officer (CTO)",
    location: "",
    period: "September 2025 — Present",
    url: "https://www.linkedin.com/company/datasynthis",
    points: [
      "Setting technical vision and roadmap across data and platform initiatives.",
      "Leading engineering teams and establishing coding standards and CI/CD.",
      "Driving architecture decisions for scalability and reliability.",
    ],
  },
  {
    company: "BD Calling IT LTD",
    role: "Junior Frontend Developer",
    location: "",
    period: "March 2025 — September 2025",
    url: "https://www.linkedin.com/company/bdcallingitltd",
    points: [
      "Implemented responsive UI components with React/Next.js and Tailwind CSS.",
      "Collaborated with backend teams to integrate REST APIs.",
      "Improved Lighthouse scores through performance and accessibility fixes.",
    ],
  },
  {
    company: "Hyperlink InfoSystem",
    role: "Frontend Engineer (Intern)",
    location: "",
    period: "August 2024 — March 2025",
    url: "https://www.linkedin.com/company/hyperlinkinfosystem",
    points: [
      "Built UI features under mentorship, focusing on reusable components.",
      "Learned best practices for state management and code reviews.",
      "Contributed to bug fixes and UI polish across projects.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Professional Experience
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            As a <span className="font-semibold">Blockchain Developer in Bangladesh</span>, I've worked with leading organizations like{" "}
            <span className="font-semibold">R3</span> and{" "}
            <span className="font-semibold">DataSynthis</span>, delivering impact across the blockchain and software development stack.
          </p>
        </div>

        <ol className="relative border-s border-gray-200">
          {experiences.map((exp, idx) => (
            <li key={idx} className="ms-6 mb-10">
              <span className="absolute -start-3 mt-1.5 h-6 w-6 rounded-full bg-green-600 ring-4 ring-white" />
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {exp.role}
                    </h3>
                    <p className="text-gray-700 flex items-center gap-3 flex-wrap">
                      <span>
                        {exp.company}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </span>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-200 hover:bg-blue-100"
                          title="View company on LinkedIn"
                        >
                          LinkedIn <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 list-disc ps-5 space-y-2 text-gray-700">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
