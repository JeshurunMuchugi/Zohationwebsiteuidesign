import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BlogSection() {
  const blogs = [
    {
      title: "Essential Safety Protocols in Modern Construction Sites",
      excerpt: "Discover the latest safety standards and best practices that keep construction teams protected and projects running smoothly.",
      image: "https://images.unsplash.com/photo-1641023388239-39dd1171a64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmVzfGVufDF8fHx8MTc2MjQ5NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Projects",
      date: "Nov 5, 2025",
    },
    {
      title: "Sustainable Building Materials for Future Projects",
      excerpt: "Explore eco-friendly construction materials that reduce environmental impact while maintaining structural integrity.",
      image: "https://images.unsplash.com/photo-1760043208847-69138f1e32f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibG9nJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDk2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Design",
      date: "Nov 2, 2025",
    },
    {
      title: "The Future of Smart Construction Technology",
      excerpt: "How IoT, AI, and automation are revolutionizing the construction industry and improving project outcomes.",
      image: "https://images.unsplash.com/photo-1739599211500-74e04a9ca175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI0NDU4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Technology",
      date: "Oct 28, 2025",
    },
  ];

  return (
    <section className="py-20 bg-[#F6F6F6]" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-black mb-4">
            News & Blogs From Zohation View
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest industry insights, project highlights, and construction trends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF5E00] text-white px-4 py-2 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-black mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button className="flex items-center gap-2 text-[#FF5E00] hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
