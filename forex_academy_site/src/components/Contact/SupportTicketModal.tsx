// src/components/Contact/SupportTicketGlassy.tsx
// Eugene Afriyie – UEB3502023
// Enhanced + phone required + all suggested improvements

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headset, X, CheckCircle2, Copy, Check } from "lucide-react";

interface SupportTicketProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional real API endpoint – falls back to mock */
  apiEndpoint?: string;
}

export default function SupportTicketGlassy({
  isOpen,
  onClose,
  apiEndpoint,
}: SupportTicketProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    telegram: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  /* -------------------------------------------------------------
   *  Focus trap + Escape key (refreshed on every open)
   * ------------------------------------------------------------- */
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetAndClose();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handler);
    setTimeout(() => first?.focus(), 100);

    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  /* -------------------------------------------------------------
   *  Click-outside to close (only when not loading/submitting)
   * ------------------------------------------------------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !isLoading &&
        !isSubmitting &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        resetAndClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, isLoading, isSubmitting]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Please describe your issue.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateTicketId = () => {
    const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
    const ms = String(new Date().getMilliseconds()).padStart(3, "0");
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `TCK-${date}-${ms}-${rand}`;
  };

  const sendToBackend = async (data: typeof formData, ticketId: string) => {
    try {
      if (apiEndpoint) {
        const res = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, ticketId }),
        });
        return res.ok;
      }

      // ---- Mock backend -------------------------------------------------
      await new Promise((r) => setTimeout(r, 900));

      // 10 % simulated failure
      if (Math.random() < 0.1) throw new Error("Network error");

      console.log("Ticket submitted:", { ticketId, ...data });
      return true;
    } catch (err) {
      console.error("Submission failed:", err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // double-click guard

    setIsSubmitting(true);
    setIsLoading(true);
    setGlobalError(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      setIsLoading(false);
      return;
    }

    const newId = generateTicketId();
    const ok = await sendToBackend(formData, newId);

    if (ok) {
      setTicketId(newId);
      setIsSubmitted(true);
      setTimeout(() => resetAndClose(), 4500);
    } else {
      setGlobalError("Failed to send. Please try again later.");
    }

    setIsSubmitting(false);
    setIsLoading(false);
  };

  const copyTicketId = async () => {
    if (!ticketId) return;
    try {
      await navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const resetAndClose = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      telegram: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setTicketId(null);
    setCopied(false);
    setGlobalError(null);
    onClose();
  };

  const blobVariants = useMemo(
    () => ({
      float: {
        y: [0, -12, 0],
        x: [0, 8, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      },
    }),
    []
  );

  /* -------------------------------------------------------------
   *  Field configuration (centralised – easier to tweak)
   * ------------------------------------------------------------- */
  const fields = [
    { key: "name", label: "Full name*", required: true },
    { key: "email", label: "Email address*", required: true },
    { key: "subject", label: "Subject*", required: true, colSpan: true },
    { key: "message", label: "Describe your issue*", required: true, colSpan: true, textarea: true },
    { key: "phone", label: "Phone number*", required: true },
    { key: "telegram", label: "Telegram (optional)", required: false },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-title"
          aria-describedby="support-description"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0b0f19]/80 to-[#121826]/80 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute -top-24 left-8 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc22]" />
          <motion.div
            variants={blobVariants}
            animate="float"
            className="pointer-events-none absolute -bottom-28 right-12 w-72 h-72 rounded-full blur-3xl bg-[#00ffcc18]"
          />

          {/* Main modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-2xl rounded-2xl p-1 bg-gradient-to-br from-white/5 to-white/3 border border-[#00ffcc22] shadow-[0_8px_40px_#00ffcc10]"
            initial={{ scale: 0.98, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <div className="rounded-2xl bg-[#121826]/70 backdrop-blur-md p-6 md:p-8 border border-[#00ffcc1a]">
              <div className="flex flex-col items-start gap-4">
                {/* Header */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00c896] via-[#00ffcc] to-[#4ee8ff] flex items-center justify-center shadow-[0_8px_30px_#00ffcc20]">
                      <Headset className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 id="support-title" className="text-xl font-semibold text-white">
                        Contact Support
                      </h3>
                      <p id="support-description" className="text-sm text-[#e6ffffcc] mt-1">
                        We usually reply within <strong>2–4 hours</strong>.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={resetAndClose}
                    disabled={isLoading || isSubmitting}
                    aria-label="Close support form"
                    className={`rounded-md p-2 hover:bg-[#ffffff06] transition ${
                      isLoading || isSubmitting ? "opacity-40 cursor-not-allowed" : ""
                    }`}
                  >
                    <X className="w-5 h-5 text-[#e6ffffcc]" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {fields.map((field) => {
                    const isTextArea = field.textarea;
                    const errorMsg = errors[field.key];
                    const commonProps = {
                      id: field.key,
                      name: field.key,
                      value: formData[field.key as keyof typeof formData],
                      onChange: handleChange,
                      placeholder: " ",
                      className: `peer block w-full rounded-lg border ${
                        errorMsg ? "border-rose-500" : "border-[#ffffff0a]"
                      } bg-[#0b1220] px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                        errorMsg ? "focus:ring-rose-500/40" : "focus:ring-[#00ffcc33]"
                      } ${isTextArea ? "resize-none" : ""}`,
                    };

                    return (
                      <div
                        key={field.key}
                        className={`relative ${field.colSpan ? "md:col-span-2" : ""}`}
                      >
                        {isTextArea ? (
                          <textarea {...commonProps} rows={5} />
                        ) : (
                          <input
                            {...commonProps}
                            type={field.key === "email" ? "email" : "text"}
                          />
                        )}
                        <label
                          htmlFor={field.key}
                          className="absolute left-3 -top-2.5 text-xs bg-[#121826]/70 px-1 text-[#bfeee8]
                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#9adfcf] transition-all"
                        >
                          {field.label}
                        </label>
                        {errorMsg && <p className="text-xs text-rose-400 mt-1">{errorMsg}</p>}
                      </div>
                    );
                  })}

                  {globalError && (
                    <div className="md:col-span-2 text-center text-sm text-rose-500 mt-1">
                      {globalError}
                    </div>
                  )}

                  <div className="md:col-span-2 mt-1">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: isLoading || isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading || isSubmitting}
                      className={`w-full rounded-lg py-3.5 font-semibold shadow-xl transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-[#00c896] via-[#00ffcc] to-[#4ee8ff] text-[#021014] ${
                        isLoading || isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:brightness-105"
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
                          <svg
                            className="w-5 h-5 -ml-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                          >
                            <path
                              d="M2 12L22 12"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 5L21 12L15 19"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>

            {/* Success overlay */}
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
                      <p className="text-sm text-[#e6ffffcc]">
                        Thanks — our team will get back to you soon.
                      </p>

                      {/* Screen-reader live region */}
                      <div aria-live="polite" className="sr-only">
                        Support ticket submitted successfully. Ticket ID: {ticketId}
                      </div>

                      {ticketId && (
                        <div className="mt-2 inline-flex items-center gap-3 bg-[#0b1220]/60 px-4 py-2 rounded-lg border border-[#00ffcc22]">
                          <span className="font-mono text-[#bfeee8]">{ticketId}</span>
                          <motion.button
                            onClick={copyTicketId}
                            key={copied ? "copied" : "copy"}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[#bfeee8] hover:text-white"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </motion.button>
                        </div>
                      )}

                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={resetAndClose}
                          className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#00ffcc11] hover:bg-[#00ffcc18]"
                        >
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