// CommunityModal.tsx
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

type LinkItem = { name: string; href: string; icon: React.ReactNode; subtitle?: string };

export default function CommunityModal({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: LinkItem[];
}) {
  if (!open) return null;
  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-xl bg-white dark:bg-[#0b0f19] rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-white/6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Join Community</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">Choose a platform to connect with us</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
          >
            <X className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-black/5 dark:border-white/6 hover:scale-[1.01] transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#00c896]/10 to-[#00ffcc]/10">
                    {l.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white">{l.name}</div>
                    {l.subtitle && <div className="text-sm text-slate-500 dark:text-slate-300">{l.subtitle}</div>}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-3 border-t border-black/5 dark:border-white/6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#00c896] text-black font-semibold hover:brightness-95"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
