import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Textlite CMS + B2B Inquiry Platform",
      description:
        "Mobile-first CMS and inquiry system featuring product management, Firebase authentication, and automated client emails via Nodemailer + SendGrid.",
      image: project1,
      tech: ["React.js", "Tailwind CSS", "Node.js", "Firebase", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Travel Agency CMS + WhatsApp Integration",
      description:
        "Responsive tourism CMS with WhatsApp chat integration and JWT-secured admin dashboard for managing 100+ travel packages.",
      image: project3,
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "WhatsApp API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "B2B eCommerce Platform",
      description:
        "Enterprise-grade eCommerce solution with Razorpay payments, customer management, and efficient order tracking using Redux.",
      image: project2,
      tech: ["React.js", "Redux", "Express.js", "Razorpay", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "EdTech LMS Platform",
      description:
        "Scalable learning management system with real-time classes, subscription payments, and Dockerized AWS deployment.",
      image: project4,
      tech: ["React.js", "Node.js", "WebSockets", "AWS", "Docker", "PayPal"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work across different domains
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.2}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, delay, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="flex"
    >
      <Card className="h-full flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay Buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
            <Button size="sm" variant="default" className="glow-primary" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source
              </a>
            </Button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <h3 className="text-xl font-extrabold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.2 }}
            className="flex flex-wrap gap-2 mt-auto"
          >
            {project.tech.map((tech: string, index: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: delay + 0.3 + index * 0.05 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Projects;
