interface ResourceGridProps {
  resources: Resource[];
  onCardClick: (index: number) => void;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources, onCardClick }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 sm:px-10 md:px-16 py-16 bg-gradient-to-b from-[#0b0f19] via-[#121826] to-[#0b0f19] text-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            onClick={() => onCardClick(index)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#121826]/70 cursor-pointer backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,200,150,0.3)] transition-all duration-500 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={resource.image || "https://placehold.co/600x400"}
                alt={resource.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#00c896] mb-2">
                {resource.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {resource.description.substring(0, 100)}...
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default ResourceGrid;