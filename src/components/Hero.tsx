import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full floating-shape" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-lg floating-shape" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border-4 border-white/20 rounded-full floating-shape" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-white/10 rotate-45 floating-shape" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-white space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hello, I'm<br />
            <span className="text-secondary">Shashank Varma Racharla</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white/90">
            Full Stack Developer | Java | MERN Stack | Problem Solver
          </h2>
          
          <p className="text-lg text-white/80 max-w-xl leading-relaxed">
            A motivated Computer Science graduate with a strong foundation in full-stack development, 
            problem-solving, and database management. Passionate about continuous learning and 
            contributing to innovative software solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold backdrop-blur-sm"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 pt-6">
            <a 
              href="https://www.linkedin.com/in/shashankvarma01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/shashank-531" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 animate-scale-in">
          <div className="relative">
            {/* Decorative background circle */}
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl transform scale-110" />
            
            {/* Profile image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Shashank Varma Racharla - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating info cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-slide-in-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Graduate</p>
                  <p className="font-semibold text-foreground">B.Tech CSE</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Expertise</p>
                  <p className="font-semibold text-foreground">Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
