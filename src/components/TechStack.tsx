import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiRedux, 
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiPostman,
  SiJira
} from "react-icons/si";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techCategories = [
    {
      name: "Frontend",
      color: "text-primary",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Redux", icon: SiRedux },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Material UI", icon: SiMui },
      ],
    },
    {
      name: "Backend",
      color: "text-secondary",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
      ],
    },
    {
      name: "DevOps & Tools",
      color: "text-accent",
      skills: [
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAmazon },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "Jira", icon: SiJira },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-4"
            >
              <h3 className={`text-2xl font-bold ${category.color} mb-6`}>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, delay, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:glow-primary transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default TechStack;
