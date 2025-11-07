import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-black pt-32 pb-20 overflow-hidden" id="home">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-5xl md:text-6xl mb-6">
              We Provide Effective{" "}
              <span className="text-[#FF5E00]">Contracting Services</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Building excellence through innovative construction solutions. We transform your vision into reality with our expert team and cutting-edge methodologies.
            </p>
            <button className="bg-[#FF5E00] text-white px-8 py-4 rounded-xl hover:bg-[#ff7a33] transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641023388239-39dd1171a64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmVzfGVufDF8fHx8MTc2MjQ5NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Construction site with cranes"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Overlay Accent */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#FF5E00] rounded-2xl -z-10"></div>
              
              {/* Grid Pattern Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="grid grid-cols-4 gap-1 h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-[#FF5E00]"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}