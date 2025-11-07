import { motion } from "motion/react";
import { Award, Users, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Certified Engineers",
      description: "Our team consists of licensed and certified engineering professionals.",
    },
    {
      icon: Users,
      title: "Qualified Builders",
      description: "Skilled craftsmen with years of hands-on construction experience.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Partners",
      description: "Long-standing relationships with quality suppliers and subcontractors.",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583182845142-55eb5b8fe184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY29uc3RydWN0aW9uJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzYyNDk2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Smiling engineers"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FF5E00] rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-[#FF5E00] mb-6"></div>
            <h2 className="text-black mb-6">Why Choose Zohation?</h2>
            <p className="text-gray-600 mb-8">
              We deliver exceptional results through our commitment to quality, safety, and client satisfaction. Our proven track record speaks for itself.
            </p>

            <div className="space-y-6 mb-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#FF5E00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-black mb-2">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="bg-[#FF5E00] text-white px-8 py-4 rounded-xl hover:bg-[#ff7a33] transition-all duration-300 hover:scale-105">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
