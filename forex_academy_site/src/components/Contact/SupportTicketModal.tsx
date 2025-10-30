// src/components/Contact/SupportTicketGlassy.tsx
// Eugene Afriyie – UEB3502023

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headset, X, CheckCircle2, Copy, Check } from "lucide-react";

interface SupportTicketProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportTicketGlassy({ isOpen, onClose }: SupportTicketProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    telegram: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  // focus trap + esc
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetAndClose();
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    setTimeout(() => modalRef.current?.querySelector("input")?.focus(), 120);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // click outside to close (disabled while loading)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!isLoading && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        resetAndClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, isLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateTicketId = () => {
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const ms = new Date().getMilliseconds();
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `TCK-${date}-${ms}-${rand}`;
  };

  // placeholder backend
  const sendToBackend = async (data: typeof formData, ticketId: string) => {
    try {
      // Replace with real backend call
      await new Promise((r) => setTimeout(r, 900));
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    const newId = generateTicketId();
    const ok = await sendToBackend(formData, newId);

    if (ok) {
      setTicketId(newId);
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => resetAndClose(), 4500);
    } else {
      setError("Failed to send. Please try again later.");
      setIsLoading(false);
    }
  };

  const copyTicketId = async () => {
    if (!ticketId) return;
    try {
      await navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  };

  const resetAndClose = () => {
    setFormData({ name: "", email: "", subject: "", message: "", phone: "", telegram: "" });
    setIsSubmitted(false);
    setTicketId(null);
    setCopied(false);
    setError(null);
    onClose();
  };

  // Animated background blobs (framer-motion variants)
  const blobVariants = {
    float: {
      y: [0, -12, 0],
      x: [0, 8, 0],
      transition: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0b0f19]/80 to-[#121826]/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* soft glowing blobs */}
          <div className="pointer-events-none absolute -top-24 left-8 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc22]" />
          <motion.div
            variants={blobVariants}
            animate="float"
            className="pointer-events-none absolute -bottom-28 right-12 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc18]"
          />

          {/* card wrapper */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-2xl rounded-2xl p-1 bg-gradient-to-br from-white/5 to-white/3 border border-[#00ffcc22] shadow-[0_8px_40px_#00ffcc10]"
            initial={{ scale: 0.98, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <div className="rounded-2xl bg-[#121826]/70 backdrop-blur-md p-6 md:p-8 border border-[#00ffcc1a]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00c896] via-[#00ffcc] to-[#4ee8ff] flex items-center justify-center shadow-[0_8px_30px_#00ffcc20]">
                    <Headset className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Contact Support</h3>
                      <p className="text-sm text-[#e6ffffcc] mt-1">We usually reply within <strong>2–4 hours</strong>.</p>
                    </div>

                    <button
                      onClick={resetAndClose}
                      disabled={isLoading}
                      aria-label="Close support"
                      className={`rounded-md p-2 hover:bg-[#ffffff06] transition ${isLoading ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      <X className="w-5 h-5 text-[#e6ffffcc]" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33]"
                      />
                      <label htmlFor="name" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Full name*
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33]"
                      />
                      <label htmlFor="email" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Email address*
                      </label>
                    </div>

                    {/* Subject */}
                    <div className="relative md:col-span-2">
                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33]"
                      />
                      <label htmlFor="subject" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Subject*
                      </label>
                    </div>

                    {/* Message */}
                    <div className="relative md:col-span-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33] resize-none"
                      />
                      <label htmlFor="message" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Describe your issue*
                      </label>
                    </div>

                    {/* Optional fields */}
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33]"
                      />
                      <label htmlFor="phone" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Phone (optional)
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="telegram"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer block w-full rounded-lg border border-[#ffffff0a] bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00ffcc33]"
                      />
                      <label htmlFor="telegram" className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all">
                        Telegram (optional)
                      </label>
                    </div>

                    {error && <div className="md:col-span-2 text-center text-sm text-rose-500">{error}</div>}

                    <div className="md:col-span-2 mt-1">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        className={`w-full rounded-lg py-3.5 font-semibold shadow-xl transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-[#00c896] via-[#00ffcc] to-[#4ee8ff] text-[#021014] ${
                          isLoading ? "opacity-80 cursor-not-allowed" : "hover:brightness-105"
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <motion.span
                              className="w-5 h-5 border-2 border-[#021014] border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5 -ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M2 12L22 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M15 5L21 12L15 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* success modal */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="w-full max-w-md rounded-xl bg-[#121826]/80 backdrop-blur-md p-6 shadow-[0_20px_60px_#00ffcc20] border border-[#00ffcc22]"
                    initial={{ scale: 0.9, y: 12, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 12, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  >
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00c896] to-[#4ee8ff] flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Ticket Sent</h4>
                      <p className="text-sm text-[#e6ffffcc]">Thanks — our team will get back to you soon.</p>

                      {ticketId && (
                        <div className="mt-2 inline-flex items-center gap-3 bg-[#0b1220]/60 px-4 py-2 rounded-lg border border-[#00ffcc22]">
                          <span className="font-mono text-[#bfeee8]">{ticketId}</span>
                          <button onClick={copyTicketId} className="text-[#bfeee8] hover:text-white">
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      )}

                      <div className="flex gap-3 mt-4">
                        <button onClick={resetAndClose} className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#00ffcc11] hover:bg-[#00ffcc18]">
                          Close
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
