import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Pill, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: FileText,
      title: "Resume Builder Using MERN Stack",
      description: "Full-stack web application for building dynamic resumes with live previews, user authentication, and PDF export functionality.",
      features: [
        "Reusable React components for modular design",
        "Secure login/signup with protected routes",
        "Real-time preview of resume changes",
        "Export to PDF functionality",
        "Responsive design for all devices",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "React Router DOM", "JavaScript"],
      color: "primary",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Pill,
      title: "Medicine Stock Management System",
      description: "Comprehensive inventory management system for pharmacies with CRUD operations, role-based authentication, and real-time analytics.",
      features: [
        "Role-based access control (Admin/User)",
        "JWT-based authentication and security",
        "Real-time stock level monitoring",
        "Interactive data visualization with charts",
        "Automated low-stock alerts",
      ],
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Thymeleaf", "Spring Security", "JWT", "Chart.js"],
      color: "secondary",
      gradient: "from-secondary to-secondary/70",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing full-stack applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-${project.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className={`h-7 w-7 text-${project.color}`} />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-3 py-1 bg-muted hover:bg-muted/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
