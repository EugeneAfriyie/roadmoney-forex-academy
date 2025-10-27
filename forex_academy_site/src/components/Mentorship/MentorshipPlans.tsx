// Eugene Afriyie UEB3502023
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Laptop, Users } from "lucide-react";

const MentorshipPlans: React.FC = () => {
  const plans = [
    {
      title: "In-Person Mentorship",
      icon: <MapPin className="w-10 h-10 text-indigo-500" />,
      description:
        "Perfect for those in Accra who prefer direct mentorship, networking, and practical sessions with our trading experts.",
      details: [
        "1-on-1 physical coaching",
        "Access to trading labs and live sessions",
        "Exclusive networking events",
        "Certificate of Completion",
      ],
      color: "from-indigo-500 to-blue-500",
      buttonText: "Join In-Person",
    },
    {
      title: "Online Mentorship",
      icon: <Laptop className="w-10 h-10 text-purple-500" />,
      description:
        "Flexible mentorship for traders worldwide. Get expert guidance, live online sessions, and lifetime access to materials.",
      details: [
        "Weekly Zoom mentorship calls",
        "Access to recorded sessions",
        "Private Telegram support group",
        "Certificate of Completion",
      ],
      color: "from-purple-500 to-pink-500",
      buttonText: "Join Online",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mentorship Plans
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-2xl transition-all duration-500`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
            <p className="mb-5 text-gray-300">{plan.description}</p>

            <ul className="text-left space-y-2 mb-6">
              {plan.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200">
                  <Users className="w-4 h-4 text-green-400" />
                  {detail}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition`}
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MentorshipPlans;
