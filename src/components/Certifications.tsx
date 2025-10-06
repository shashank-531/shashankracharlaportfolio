import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming Fundamentals",
      provider: "Infosys",
      icon: "☕",
      description: "Comprehensive course covering Java fundamentals, OOP concepts, and best practices.",
      color: "primary",
    },
    {
      title: "Python for Everybody",
      provider: "Coursera",
      icon: "🐍",
      description: "Complete Python programming specialization covering data structures and web development.",
      color: "secondary",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning through recognized industry certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl">
                    {cert.icon}
                  </div>
                  <Award className={`h-6 w-6 text-${cert.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm font-semibold text-${cert.color}`}>
                    {cert.provider}
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Completed & Verified</span>
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

export default Certifications;
