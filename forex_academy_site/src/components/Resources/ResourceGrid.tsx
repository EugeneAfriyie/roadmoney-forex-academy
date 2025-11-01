import React, { useState } from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import ResourceModal from "./ResourceModal";

interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  fullText?: string;
  link?: string;
  image: string;
  video?: string; // optional direct video url (YouTube)
  author?: string;
  date?: string; // ISO date
}

interface ResourceGridProps {
  resources: Resource[];
  selectedCategory: string;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources, selectedCategory }) => {
  // const navigate = useNavigate();
  const [active, setActive] = useState<Resource | null>(null);

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((res) => res.category === selectedCategory);

  const handleCardClick = (resource: Resource) => {
    // open full-screen modal (preferred)
    setActive(resource);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 md:px-16 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(resource)}
              className="cursor-pointer bg-[#121826]/70 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,200,150,0.3)] transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* small meta badge */}
                <div className="absolute left-4 top-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white/90 backdrop-blur-sm">
                  {resource.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00c896] mb-2">{resource.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div>
                    {resource.author ?? "RoadMoney Team"}
                  </div>
                  <div>
                    {resource.date ? new Date(resource.date).toLocaleDateString() : ""}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Full-screen modal */}
      {active && (
        <ResourceModal
          resource={active}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
};

export default ResourceGrid;
