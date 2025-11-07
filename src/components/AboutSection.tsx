import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 bg-[#F6F6F6]" id="about">
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
                src="https://images.unsplash.com/photo-1600869009558-c0dca8dcbc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcnMlMjBkaXNjdXNzaW5nJTIwYmx1ZXByaW50fGVufDF8fHx8MTc2MjQ5NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Engineers in discussion"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Orange Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF5E00] rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <div className="w-16 h-1 bg-[#FF5E00] mb-6"></div>
              <h2 className="text-black mb-6">
                Making your vision come true at the basics
              </h2>
              <p className="text-gray-600 mb-8">
                With over a decade of experience in the construction industry, Zohation has established itself as a trusted partner for projects of all scales. Our team of certified engineers and qualified builders work tirelessly to ensure every project exceeds expectations.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl text-[#FF5E00] mb-2">355+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl text-[#FF5E00] mb-2">200+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5E00]" />
                <span className="text-gray-700">Expert team of certified professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5E00]" />
                <span className="text-gray-700">On-time project delivery guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF5E00]" />
                <span className="text-gray-700">Quality materials and workmanship</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
