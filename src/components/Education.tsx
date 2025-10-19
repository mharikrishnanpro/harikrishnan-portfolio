import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Sasurie Academy of Engineering",
      location: "Coimbatore, Tamil Nadu",
      year: "2016 - 2020",
      percentage: "7.4 CGPA",
      icon: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Hr. Sec. School",
      location: "Erode, Tamil Nadu",
      year: "2016",
      percentage: "90%",
      icon: Award,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Govt. Hr. Sec. School",
      location: "Erode, Tamil Nadu",
      year: "2014",
      percentage: "96%",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <edu.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mr-2">
                      {edu.year}
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {edu.percentage}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
