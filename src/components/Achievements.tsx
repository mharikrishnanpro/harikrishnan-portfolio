import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, CreditCard, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Reduced frontend load times by 40% through React optimization, code splitting, and lazy loading.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Integration",
      description:
        "Integrated Razorpay and PayPal gateways with robust validation and transaction security.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Users,
      title: "Scalable Deployment",
      description:
        "Deployed production-ready applications on AWS using Docker and CI/CD pipelines, serving 10K+ users.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Enhanced User Engagement",
      description:
        "Improved user engagement by 30% through modern, responsive UI and optimized user experience.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Measurable impact and notable accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                <div
                  className={`w-16 h-16 rounded-xl ${achievement.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
