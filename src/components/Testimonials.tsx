import { useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      comment: "Zohation transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations. The project was completed on time and within budget.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      rating: 5,
      comment: "Outstanding work on our commercial building project. The team was knowledgeable, responsive, and delivered exceptional quality throughout the entire process.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Developer",
      rating: 5,
      comment: "Working with Zohation has been a game-changer for our development projects. Their expertise and commitment to excellence are unmatched in the industry.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1722079358008-2c72a8973998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjI0MzYxODF8MA&ixlib=rb-4.1.0&q=80&w=1080)' 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            What People Are Saying About Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF5E00] text-[#FF5E00]" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 text-lg text-center mb-8 italic">
              "{testimonials[currentTestimonial].comment}"
            </p>

            {/* Profile */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full bg-gray-200"
              />
              <div>
                <h4 className="text-black">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#FF5E00] w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
