import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Link2, Copy, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  fullText?: string;
  link?: string;
  image: string;
  video?: string;
  author?: string;
  date?: string;
}

const getYouTubeEmbedSrc = (url?: string) => {
  if (!url) return null;
  const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  if (m && m[1]) return `https://www.youtube.com/embed/${m[1]}`;
  const short = url.match(/youtu\.be\/([0-9A-Za-z_-]{11})/);
  if (short && short[1]) return `https://www.youtube.com/embed/${short[1]}`;
  return null;
};

export default function ResourceModal({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 🔒 Lock body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // 🖱️ Click outside to close
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) onClose();
    };
    const overlay = overlayRef.current;
    overlay?.addEventListener("mousedown", onMouseDown);
    return () => overlay?.removeEventListener("mousedown", onMouseDown);
  }, [onClose]);

  const embedSrc = getYouTubeEmbedSrc(resource.video ?? resource.link);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}#/resources/${resource.id}`
      );
      alert("Resource link copied to clipboard");
    } catch {}
  };

  return (
    <AnimatePresence>
      <motion.div
        key="resource-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black"
        />

        {/* Fullscreen modal */}
        <motion.div
          ref={modalRef}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="relative z-10 w-full h-full bg-[#0b0f19] overflow-auto text-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resource-title"
        >
          {/* Header */}
          <header className="sticky top-0 z-20 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              <button
                onClick={onClose}
                className="flex items-center gap-1 text-white/80 hover:text-white transition"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm md:hidden">Back</span>
              </button>

              <div className="hidden md:flex items-center gap-3">
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                  >
                    <Link2 className="w-4 h-4" /> Open Source
                  </a>
                )}
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-sm"
                >
                  <Copy className="w-4 h-4" /> Copy Link
                </button>
                <button
                  onClick={onClose}
                  className="ml-2 p-2 rounded-full bg-white/5 hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Media */}
          <div className="bg-black/20">
            {embedSrc ? (
              <div className="w-full h-[50vh] md:h-[70vh] bg-black">
                <iframe
                  title={resource.title}
                  src={`${embedSrc}?rel=0&modestbranding=1`}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-6 py-10">
            <h1
              id="resource-title"
              className="text-3xl md:text-4xl font-bold text-[#00c896]"
            >
              {resource.title}
            </h1>

            <p className="text-white/70 text-sm mt-2 mb-6">
              {resource.author ?? "RoadMoney Team"} •{" "}
              {resource.date
                ? new Date(resource.date).toLocaleDateString()
                : "Oct 2025"}{" "}
              • <span className="text-[#00c896]">{resource.category}</span>
            </p>

            <div className="markdown-body text-white/90">
              {resource.fullText ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: (props) => (
                      <h2
                        className="text-2xl font-semibold mt-6 mb-3 text-[#00c896]"
                        {...props}
                      />
                    ),
                    p: (props) => (
                      <p
                        className="text-white/80 leading-relaxed mb-4"
                        {...props}
                      />
                    ),
                    img: (props) => (
                      <img
                        className="rounded-xl my-6 w-full object-cover"
                        {...props}
                      />
                    ),
                    a: (props) => (
                      <a
                        className="text-[#00ffcc] underline hover:text-[#00c896]"
                        {...props}
                      />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        className="border-l-4 border-[#00c896] pl-4 italic text-white/80 my-4"
                        {...props}
                      />
                    ),
                  }}
                >
                  {resource.fullText}
                </ReactMarkdown>
              ) : (
                <p className="text-white/80">{resource.description}</p>
              )}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/mentorship"
                className="bg-[#00c896] text-black font-semibold px-5 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition"
              >
                Enroll / Learn More
              </a>
              {resource.link && (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 text-white/90 px-5 py-3 rounded-full hover:bg-white/5 transition"
                >
                  Open Source / Watch External
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
