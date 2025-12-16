import { Code2, Database, Layout, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "JavaScript" },
        { name: "Python" },
      ],
      color: "primary",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        { name: "React.js" },
        { name: "HTML & CSS" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
      ],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: [
        { name: "MongoDB" },
        { name: "SQL" },
      ],
      color: "primary",
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub" },
        { name: "Visual Studio" },
        { name: "MS Office Suite" },
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-border hover:border-primary/30 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    category.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="font-medium text-sm">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
