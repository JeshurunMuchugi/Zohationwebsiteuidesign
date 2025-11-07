import { useState } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#FF5E00] rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-black mb-4">
            Subscribe Newsletter For Latest Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Stay informed about our latest projects, industry news, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#FF5E00] transition-colors"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
