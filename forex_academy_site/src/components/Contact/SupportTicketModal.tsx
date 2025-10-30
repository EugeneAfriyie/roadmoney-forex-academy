// Eugene Afriyie UEB3502023
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface SupportTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportTicketModal({ isOpen, onClose }: SupportTicketModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ticket Submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#121826] rounded-2xl p-8 shadow-xl w-[90%] max-w-lg relative border border-[#00ffcc33]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#00ffcc]">Submit a Support Ticket</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Please fill in the details below and our team will respond within 2–4 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1a2235] text-white px-4 py-3 rounded-lg border border-[#00ffcc22] focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1a2235] text-white px-4 py-3 rounded-lg border border-[#00ffcc22] focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />

              <input
                type="text"
                name="issue"
                placeholder="Subject or Issue"
                value={formData.issue}
                onChange={handleChange}
                required
                className="bg-[#1a2235] text-white px-4 py-3 rounded-lg border border-[#00ffcc22] focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />

              <textarea
                name="message"
                placeholder="Describe your issue or question..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-[#1a2235] text-white px-4 py-3 rounded-lg border border-[#00ffcc22] focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="bg-[#00ffcc] text-black font-semibold py-3 rounded-lg shadow-lg mt-2"
              >
                Submit Ticket
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
