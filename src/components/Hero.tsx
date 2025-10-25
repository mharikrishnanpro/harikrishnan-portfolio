import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { toast } = useToast();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    toast({
      title: "💼 Resume download started",
      description: "Thanks for checking it out!",
      duration: 3000,
    });
  };

  return (
    <section
      id="home"      
      className="relative min-h-screen z-60 flex items-center justify-center overflow-hidden pt-20 md:pt-30"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-primary profile-glow"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Harikrishnan M profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Harikrishnan+M&size=200&background=00d9ff&color=0f172a&bold=true";
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Harikrishnan M</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 h-16 md:h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React.js Specialist",
                2000,
                "Node.js Developer",
                2000,
                "Full-Stack Enthusiast",
                2000,
                "Open to Cloud & DevOps",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto px-4"
          >
            Building scalable, secure, and visually stunning web applications with 3+ years of experience 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              asChild
            >
              <a 
                href="/assets/Harikrishnan_M_Resume_Public.pdf" 
                download
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 md:mt-12"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-primary hover:text-secondary transition-colors"
            >
              <ArrowDown className="h-7 w-7 md:h-8 md:w-8" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-0"
        />
      </div>
    </section>
  );
};

export default Hero;
