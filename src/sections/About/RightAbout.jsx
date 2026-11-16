
const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "4", label: "Projects" },
  { value: "4", label: "Certifications" },
  { value: "3.69", label: "CGPA" },
];

const RightAbout = () => {
  return (
    <div className="about-content mx-auto max-w-[40rem] lg:mx-0">
      <h3 className="text-xl font-bold leading-snug tracking-tight text-text sm:text-2xl">
        I'm <span className="text-accent">QURATULAIN</span>, a Full-Stack Developer based in
        Lahore, Pakistan.
      </h3>

      <div className="mt-6 space-y-5">
        <p className="text-body">
          I have production experience building scalable web applications, POS systems, and
          RESTful APIs using Laravel, React.js, PHP, and MySQL. I most recently worked as a
          Junior Full-Stack Developer at{" "}
          <strong className="text-text font-medium">Bitstorm Solutions</strong>, following a
          Web Development internship with the same team.
        </p>

        <p className="text-body">
          I hold a BS in Computer Science from{" "}
          <strong className="text-text font-medium">
            Virtual University of Pakistan (CGPA 3.69 / 4.0)
          </strong>
          . I am currently training in Artificial Intelligence through the Huawei HCCDA-AI
          program in Lahore, with hands-on experience in Python, machine learning, model
          training, and deployment.
        </p>

        <p className="text-body">
          I'm driven to grow as an AI-focused Full-Stack Engineer, with the goal of building
          web applications that integrate LLM-powered chatbots and AI agents to automate real
          business processes.
        </p>
      </div>

      {/* Stats — open layout, no container box. A single hairline above the row
          and hairline dividers between cells, so the numbers read as one band. */}
      <ul className="mt-10 grid grid-cols-2 border-t border-token sm:grid-cols-4">
        {stats.map(({ value, label }, i) => (
          <li
            key={label}
            className={`flex flex-col items-center gap-1.5 px-2 py-6 sm:px-3 ${
              i % 2 === 1 ? "border-l border-token" : ""
            } ${i >= 2 ? "border-t border-token sm:border-t-0" : ""} ${
              i > 0 ? "sm:border-l" : ""
            }`}
          >
            <span className="text-2xl font-extrabold leading-none tracking-tight text-text sm:text-3xl">
              {value}
            </span>
            <span className="text-center font-mono text-xs uppercase leading-tight tracking-wider text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RightAbout;
