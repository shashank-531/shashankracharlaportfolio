import { GraduationCap, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const softSkills = [
    { icon: Users, label: "Communication" },
    { icon: Target, label: "Time Management" },
    { icon: Lightbulb, label: "Critical Thinking" },
    { icon: Users, label: "Teamwork" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold">
              A Passionate <span className="text-gradient">Developer</span> Crafting Digital Solutions
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a motivated Computer Science graduate with a strong foundation in full-stack 
              development, problem-solving, and database management. My journey in technology 
              is driven by curiosity and a commitment to continuous learning.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I specialize in building robust web applications using modern technologies like 
              the MERN stack and Java Spring Boot. My approach combines technical expertise 
              with creative problem-solving to deliver innovative software solutions.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Education Card */}
          <div className="animate-scale-in">
            <Card className="border-2 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Education</h3>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-muted/50">
                    <h4 className="text-xl font-bold mb-2">
                      Bachelor of Technology
                    </h4>
                    <p className="text-lg font-semibold text-primary mb-2">
                      Computer Science and Engineering
                    </p>
                    <p className="text-muted-foreground mb-1">
                      Anurag University, Hyderabad
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      December 2020 – June 2024
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-primary/10 rounded-lg">
                        <p className="text-sm font-semibold">CGPA</p>
                        <p className="text-2xl font-bold text-primary">7.89</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border-2 border-dashed border-primary/30">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Key Focus Areas:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full-Stack Web Development</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Management Systems</li>
                      <li>• Software Engineering Principles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
