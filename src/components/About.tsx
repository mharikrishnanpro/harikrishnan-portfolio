import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Code2, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Briefcase, label: "Years of Experience", value: 3, suffix: "+" },
    { icon: Code2, label: "Projects Delivered", value: 5, suffix: "+" },
    { icon: Trophy, label: "Domains", value: 4, suffix: "+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground text-center mb-12 leading-relaxed"
          >
            I’m a MERN Stack Developer with 3+ years of experience building scalable and high-performance web 
            applications across EdTech, B2B, E-commerce, and CMS domains. I specialize in frontend development 
            using React.js, Tailwind CSS, and Material UI, with hands-on experience in Node.js, Express.js, and 
            MongoDB for backend API and database integration. I’m passionate about crafting secure, responsive, 
            and user-centric solutions that enhance both engagement and business efficiency. I also have deployment 
            experience on AWS EC2, ensuring reliable and optimized application performance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                delay={0.3 + index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, label, value, suffix, delay, isInView }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="text-4xl font-bold gradient-text mb-2">
          {count}{suffix}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </Card>
    </motion.div>
  );
};

export default About;
