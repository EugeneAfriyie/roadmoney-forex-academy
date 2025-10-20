// Eugene Afriyie UEB3502023
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// import { ThemeContext } from '../../../context/ThemeContext';
import { Instagram, Facebook, Twitter, Send, Globe } from 'lucide-react';
import { ThemeContext } from '../../../context/ThemeContext';

const JoinCommunity: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const bgClass =
    theme === 'dark'
      ? 'bg-gradient-to-br from-[#0b0f19] via-[#121826] to-[#0b0f19]'
      : 'bg-gradient-to-br from-[#f8f9fb] via-[#e0e2e7] to-[#f8f9fb]';

  const textClass = theme === 'dark' ? 'text-white/90' : 'text-black/80';

  const socialLinks = [
    { icon: <Send className="w-5 h-5" />, name: 'Telegram', href: 'https://t.me/yourchannel' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: 'https://instagram.com/yourpage' },
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: 'https://facebook.com/yourpage' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter (X)', href: 'https://x.com/yourpage' },
  ];

  return (
    <section
      id="join-community"
      className={`relative py-20 ${bgClass} overflow-hidden transition-colors duration-500`}
    >
      {/* Floating glow background */}
      <motion.div
        className="absolute -top-10 right-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-[#00ffcc] to-[#00c896] blur-[180px] opacity-20"
        animate={{
          x: ['0%', '-10%', '5%', '0%'],
          y: ['0%', '5%', '-5%', '0%'],
          scale: [1, 1.1, 1.05, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl bg-gradient-to-br from-[#00ffcc]/10 via-[#00c896]/5 to-transparent p-10 shadow-[0_0_25px_rgba(0,255,204,0.15)] border border-[#00ffcc]/20 backdrop-blur-xl">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-[#00ffcc]"
          >
            Join Our Community
          </motion.h2>
          <p className={`text-base sm:text-lg ${textClass}`}>
            Connect with traders worldwide. Share strategies, learn from each other, and grow as a team across our social media channels.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#00ffcc]/10 hover:bg-[#00ffcc]/20 border border-[#00ffcc]/30 text-[#00ffcc] transition-colors duration-300"
              >
                {social.icon}
                <span className="text-sm mt-2">{social.name}</span>
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 px-6 py-3 bg-[#00ffcc] text-[#0b0f19] font-semibold rounded-full hover:bg-[#00e6b3] transition-colors"
          >
            Join Telegram
          </motion.a>
        </div>

        {/* Right side 3D globe / image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-1/2 h-[280px] sm:h-[360px] rounded-2xl overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/PREG1_pqz5ik.jpg"
            alt="Global trading community"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/60 to-transparent" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Globe className="text-[#00ffcc] w-24 h-24 opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;
