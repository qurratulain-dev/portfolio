import { FiMonitor, FiServer, FiCpu, FiDatabase, FiLayout, FiTool } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

const skillCategories = [
  {
    icon: <FiMonitor className="w-4 h-4" />,
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "jQuery",
      "GSAP",
    ],
  },
  {
    icon: <FiServer className="w-4 h-4" />,
    title: "Backend",
    skills: [
      "Laravel",
      "PHP",
      "RESTful APIs",
      "Laravel Sanctum",
      "Authentication & Authorization",
      "Queues & Jobs",
    ],
  },
  {
    icon: <FiCpu className="w-4 h-4" />,
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Data Preprocessing",
      "EDA",
      "Classification",
      "Regression",
      "Model Training & Evaluation",
      "Model Deployment",
    ],
  },
  {
    icon: <FiDatabase className="w-4 h-4" />,
    title: "Database",
    skills: ["MySQL", "Query Optimization", "Database Design"],
  },
  {
    icon: <FiLayout className="w-4 h-4" />,
    title: "CMS & E-Commerce",
    skills: ["WordPress", "WooCommerce", "Plugin Integration"],
  },
  {
    icon: <FiTool className="w-4 h-4" />,
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "Render"],
  },
];

/* One hairline top and bottom bound the whole list, so the categories read as a
   single system rather than six separate boxes. A 16rem definition column keeps
   every chip row starting on the same vertical line at md and up, while leaving
   the wider share of the row to the skills themselves. */
const rowLayout =
  "grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-token py-6 md:grid-cols-[16rem_minmax(0,1fr)]";

/* h-8 on both the category name and the chips keeps their text optically centred
   on the same line without any offset maths. */
const categoryTitle = "flex h-8 items-center gap-3 whitespace-nowrap";

const skillChip =
  "inline-flex h-8 items-center whitespace-nowrap rounded-md border border-token bg-surface px-3 font-sans text-sm font-medium leading-none text-muted";

const Skills = () => {
  return (
    <section id="skills" className="site-section section-divider-soft scroll-mt-nav">
      <div className="container-site">
        <SectionHeading
          title="My Expertise & Technical Skills"
          subtitle="A comprehensive overview of the technologies, frameworks, and tools I work with"
        />

        <dl className="border-t border-token">
          {skillCategories.map((cat) => (
            <div key={cat.title} className={rowLayout}>
              <dt className={categoryTitle}>
                <span className="shrink-0 text-accent" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="text-base font-semibold tracking-tight text-text">
                  {cat.title}
                </span>
              </dt>
              <dd className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={skillChip}>
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
