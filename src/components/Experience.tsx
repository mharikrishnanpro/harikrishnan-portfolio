import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: "Ultrafly Solutions Pvt Ltd",
      role: "Full Stack Developer",
      period: "May 2025 - October 2025",
      location: "Coimbatore, India",
      achievements: [
        "Developed Textlite CMS and B2B inquiry platform with Firebase authentication and automated email notifications.",
        "Built responsive travel booking system with JWT-secured admin panel and WhatsApp chat integration.",
        "Integrated Razorpay payments and implemented order tracking to enhance customer experience.",
        "Optimized React and Node.js architecture for scalable and high-performance applications.",
      ],
    },
    {
      company: "Focus Edumatics Pvt Ltd",
      role: "Software Engineer",
      period: "December 2021 - January 2025",
      location: "Remote",
      achievements: [
        "Architected microservices-based backend for EdTech LMS using Node.js and Express.js.",
        "Reduced frontend load time by 40% with React optimization and lazy loading.",
        "Implemented WebSocket-based live classes, chat, and progress tracking for 10K+ users.",
        "Integrated PayPal subscription payments and deployed scalable apps on AWS using Docker and CI/CD.",
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 animate-glow-pulse" />

              <Card className="p-6 ml-16 md:ml-0 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                </div>
                <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
