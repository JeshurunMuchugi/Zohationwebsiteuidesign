import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Project Management",
      description: "Comprehensive project oversight from conception to completion, ensuring timely delivery and budget adherence.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjI0OTAwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "General Constructing",
      description: "Full-service construction solutions for residential, commercial, and industrial buildings with expert craftsmanship.",
      image: "https://images.unsplash.com/photo-1692166567037-4009225486ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnxlbnwxfHx8fDE3NjI0OTY0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Project Development",
      description: "End-to-end development services including planning, design, and execution for projects of all scales.",
      image: "https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI0NDU4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-black mb-4">
            We Offer a Wide Range of Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial planning to final execution, our comprehensive services cover every aspect of construction.
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentSlide * (100 / 3)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-[calc(33.333%-16px)] flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="h-64 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-black mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <button className="flex items-center gap-2 text-[#FF5E00] hover:gap-4 transition-all">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
