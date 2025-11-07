import { motion } from "motion/react";
import { CheckCircle2, Clock } from "lucide-react";

export function LatestProjects() {
  const projects = [
    {
      title: "Business Park",
      status: "Completed",
      location: "Downtown District",
      isCompleted: true,
    },
    {
      title: "Home Construction",
      status: "In Progress",
      location: "Suburban Area",
      isCompleted: false,
    },
    {
      title: "Interior Remodeling",
      status: "Completed",
      location: "Residential Complex",
      isCompleted: true,
    },
  ];

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Latest Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our most recent construction achievements and ongoing developments.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#222] transition-all duration-300 border border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    project.isCompleted ? 'bg-green-500/20' : 'bg-[#FF5E00]/20'
                  }`}>
                    {project.isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <Clock className="w-6 h-6 text-[#FF5E00]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.location}</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full ${
                  project.isCompleted 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-[#FF5E00]/20 text-[#FF5E00]'
                }`}>
                  {project.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
