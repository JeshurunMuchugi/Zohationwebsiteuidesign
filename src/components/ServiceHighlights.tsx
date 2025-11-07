import { Search, Users, Award } from "lucide-react";
import { motion } from "motion/react";

export function ServiceHighlights() {
  const services = [
    {
      icon: Search,
      title: "Structure Research",
      description: "In-depth structural analysis and engineering research for optimal building solutions.",
    },
    {
      icon: Users,
      title: "Effective Teamwork",
      description: "Collaborative approach with skilled professionals working seamlessly together.",
    },
    {
      icon: Award,
      title: "Quality Services",
      description: "Committed to delivering exceptional quality in every project we undertake.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#FF5E00] rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black mb-4">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
