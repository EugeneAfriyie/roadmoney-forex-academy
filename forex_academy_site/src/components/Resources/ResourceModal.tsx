import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  resource: {
    title: string;
    image: string;
    description: string;
    category: string;
    videoUrl?: string; // optional field
  } | null;
}

const ResourceModal: React.FC<ResourceModalProps> = ({
  isOpen,
  onClose,
  onNext,
  onPrev,
  resource,
}) => {
  if (!isOpen || !resource) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-[#121826] rounded-2xl shadow-xl max-w-2xl w-full p-6 text-white font-montserrat overflow-y-auto max-h-[85vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={22} />
          </button>

          {/* Media (Video or Image) */}
          <div className="w-full mb-5">
            {resource.videoUrl ? (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <iframe
                  src={resource.videoUrl}
                  title={resource.title}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-56 object-cover rounded-xl"
              />
            )}
          </div>

          {/* Title + Category */}
          <h2 className="text-2xl font-bold text-[#00c896] mb-1">{resource.title}</h2>
          <p className="text-white/60 text-sm mb-4">{resource.category}</p>

          {/* Markdown Description */}
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none leading-relaxed text-white/90">
            <ReactMarkdown>{resource.description}</ReactMarkdown>
          </div>

          {/* Navigation + Close */}
          <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-4">
            <div className="flex gap-2">
              <button
                onClick={onPrev}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={onNext}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#00c896] text-black rounded-full font-semibold hover:scale-105 transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResourceModal;
