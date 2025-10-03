import { MessagesSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { phone_number, whatsapp_number } from "./secrete";

const CallToAction = () => {
  return (
    <div className="w-full fixed bottom-6 left-0 flex gap-4 px-4 z-50 lg:hidden">
      <WhatsappBtn />
      <CallBtn />
    </div>
  );
};

export default CallToAction;

const WhatsappBtn = () => {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp_number}?text=Hello%20Astro%20Honest%20Center`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-teal-500 text-white font-bold rounded-2xl shadow-2xl px-5 py-3 text-sm montserrat relative overflow-hidden hover:scale-105 transition-transform duration-300"
      animate={{ y: [0, -6, 0], scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    >
      {/* Neon Glow */}
      <span className="absolute inset-0 rounded-2xl bg-green-400/30 blur-xl animate-ping"></span>
      <MessagesSquare className="w-5 h-5 relative z-10" />
      <span className="relative z-10">Whatsapp</span>
    </motion.a>
  );
};

const CallBtn = () => {
  return (
    <motion.a
      href={`tel:${phone_number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-bold rounded-2xl shadow-2xl px-5 py-3 text-sm montserrat relative overflow-hidden hover:scale-105 transition-transform duration-300"
      animate={{ y: [0, -6, 0], scale: [1, 1.08, 1] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    >
      {/* Neon Glow */}
      <span className="absolute inset-0 rounded-2xl bg-yellow-400/30 blur-xl animate-ping"></span>
      <PhoneCall className="w-5 h-5 relative z-10" />
      <span className="relative z-10">Call Now</span>
    </motion.a>
  );
};
