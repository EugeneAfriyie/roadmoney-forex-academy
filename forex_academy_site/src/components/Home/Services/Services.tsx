// Services.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Search, Bell, Video } from "lucide-react";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  icon: React.FC<any>;
  price?: string;
};

const services: Service[] = [
  {
    id: "mentorship",
    title: "Trading Mentorship",
    subtitle: "Personal coaching to level up",
    desc: "Hands-on mentorship with live sessions, 1-on-1 reviews and real-time trade guidance to build a repeatable trading edge.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000", // replace with your image
    icon: Users,
    price: "4+ live sessions",
  },
  {
    id: "portfolio",
    title: "Portfolio Review",
    subtitle: "Audit & optimization",
    desc: "Deep portfolio audits with risk-adjusted recommendations and rebalancing strategies tailored to your objectives.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000", // replace with your image
    icon: Search,
    price: "Custom reviews",
  },
  {
    id: "signals",
    title: "Signals",
    subtitle: "High-quality trade setups",
    desc: "Receive timely, research-backed signals with entry, stop, and target levels — delivered to your inbox or mobile app.",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000", // replace with your image
    icon: Bell,
    price: "Realtime alerts",
  },
  {
    id: "webinars",
    title: "Webinars",
    subtitle: "Live training & Q&A",
    desc: "Weekly live webinars covering strategy, market structure, and trade psychology — recordings available on demand.",
    image: "https://res.cloudinary.com/djeorsh5d/image/upload/v1760408725/IMG_20251014_022015_196_cmrmsg.jpg", // replace with your image
    icon: Video,
    price: "On-demand access",
  },
];

const ImageBlock: React.FC<{ src: string; alt: string; keyId: string }> = ({ src, alt, keyId }) => {
  return (

<AnimatePresence mode="wait">
  <motion.img
    key={keyId}
    src={src}
    alt={alt}
    initial={{ opacity: 0, filter: "blur(8px)", transform: "scale(1.03)" }}
    animate={{ opacity: 1, filter: "blur(0px)", transform: "scale(1)" }}
    exit={{ opacity: 0, filter: "blur(8px)", transform: "scale(1.03)" }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="w-full h-64 md:h-[420px] object-cover rounded-2xl"
    loading="lazy"
  />
</AnimatePresence>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-3"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="text-base text-slate-400 max-w-2xl mx-auto"
        >
          We offer a suite of services for traders at every level — from personalized mentorship to live signals and webinars.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {services.map((s, idx) => {
          const isEven = idx % 2 === 0; // Alternate rows
          return (
            <div
              key={s.id}
              className={`grid gap-10 items-center grid-cols-1 lg:grid-cols-2 ${
                !isEven ? "lg:flex-row-reverse lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <ImageBlock src={s.image} alt={s.title} keyId={`${s.id}-img`} />
                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs text-white backdrop-blur-sm">
                  {s.price}
                </div>
              </div>

              {/* Text */}
              <motion.div
                key={`${s.id}-text`}
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,200,150,0.12), rgba(0,255,204,0.06))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
                    }}
                    aria-hidden
                  >
                    <s.icon size={20} className="text-[#00c896]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="text-sm text-[#00c896] font-medium mt-1">{s.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 max-w-xl">{s.desc}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`/services/${s.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c896] text-black font-semibold shadow hover:scale-[1.02] transition-transform"
                    aria-label={`Join ${s.title}`}
                  >
                    Join Now <span aria-hidden>→</span>
                  </a>

                  <a
                    href={`/services/${s.id}#learn-more`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/90 font-medium hover:bg-white/10 transition-colors"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
