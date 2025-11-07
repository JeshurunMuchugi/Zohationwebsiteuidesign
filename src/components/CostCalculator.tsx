import { useState } from "react";
import { motion } from "motion/react";
import { Calculator } from "lucide-react";

export function CostCalculator() {
  const [formData, setFormData] = useState({
    siteArea: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Calculating cost for:", formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#FF5E00] to-[#ff8533] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-[#FF5E00]" />
                </div>
                <h2 className="text-white">
                  House Construction Cost Calculator
                </h2>
              </div>
              <p className="text-white/90 mb-8">
                Get an estimated price for your construction project instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Site Area (sq.ft.)</label>
                  <input
                    type="number"
                    value={formData.siteArea}
                    onChange={(e) => setFormData({ ...formData, siteArea: e.target.value })}
                    placeholder="Enter site area"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter location"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Bedrooms</label>
                    <input
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Bathrooms</label>
                    <input
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      placeholder="0"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Get Estimated Cost
                </button>
              </form>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full hidden md:block"
            >
              <div className="h-full bg-cover bg-center opacity-30" 
                   style={{ 
                     backgroundImage: 'url(https://images.unsplash.com/photo-1583182845142-55eb5b8fe184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwY29uc3RydWN0aW9uJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzYyNDk2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080)' 
                   }}>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
