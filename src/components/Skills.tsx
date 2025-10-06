import { Code2, Database, Layout, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "C", level: 70 },
      ],
      color: "primary",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 88 },
        { name: "HTML & CSS", level: 92 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Node.js", level: 82 },
      ],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 88 },
        { name: "Express.js", level: 83 },
        { name: "Spring Boot", level: 87 },
      ],
      color: "primary",
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Visual Studio", level: 85 },
        { name: "MS Office Suite", level: 88 },
        { name: "REST APIs", level: 86 },
      ],
      color: "secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-border hover:border-primary/30 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`h-7 w-7 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          category.color === 'primary' 
                            ? 'from-primary to-primary/80' 
                            : 'from-secondary to-secondary/80'
                        } rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: 'progressBar 1.5s ease-out',
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          animationFillMode: 'backwards'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
