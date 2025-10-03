import { motion } from "framer-motion";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const services = [
    "Love Expert",
    "Astrology Specialist",
    "Love Problem Expert",
    "Love Marriage Approval",
    "Quick Rishta Marriage",
  ];

  const whyChoose = [
    "Relationship Problem",
    "Husband-Wife Dispute Specialist",
    "Happy Clients",
    "Online Astrologer",
    "Visa Problems",
  ];

  return (
    <motion.footer className="z-99 mt-2  relative text-white pt-20 w-full overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Floating Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-ping"></div>

      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* About */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-pink-400/40 transition">
          <h2 className="font-extrabold text-2xl montserrat text-pink-400 tracking-wide">
            About {company_name}
          </h2>
          <p className="text-sm open-sans text-gray-200 leading-relaxed">
            <b className="text-yellow-400">{company_name}</b> is one of South
            India’s Top Astrologers. With deep expertise,{" "}
            <span className="font-semibold">{person_name}</span> guides clients
            to achieve clarity in love, career, marriage & life.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-purple-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-yellow-400 tracking-wide">
            Contact Us
          </h2>
          <p className="flex items-center gap-2 text-gray-200">
            <Phone className="w-5 h-5 text-pink-400" />
            {phone_number}
          </p>
          <p className="flex items-center gap-2 text-gray-200">
            <MessageCircle className="w-5 h-5 text-green-400" />
            {whatsapp_number}
          </p>
          <p className="mt-4 font-bold montserrat text-pink-300 text-lg">
            Best Astro Guidance 🌟
          </p>
          <p className="text-xs text-gray-300 tracking-wider uppercase">
            Authentic | Reliable | Genuine | Supportive
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-yellow-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-pink-400 tracking-wide">
            Our Services
          </h2>
          <ul className="text-sm space-y-2 open-sans">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-pink-400 flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-red-400/40 transition">
          <h2 className="font-bold text-2xl montserrat text-yellow-400 tracking-wide">
            Why Choose Us?
          </h2>
          <ul className="text-sm space-y-2 open-sans">
            {whyChoose.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Copyright */}

      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className=" bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-800 py-5 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-center md:text-left flex flex-col md:flex-row gap-4 items-center">
          <p className="font-montserrat text-sm text-gray-100">
            Designed with ❤️ by
          </p>
          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            className="transition transform hover:scale-110"
          >
            <button className="bg-yellow-400 text-black font-bold py-2 px-5 rounded-full shadow-lg hover:shadow-yellow-500/70 transition-all">
              Eswar – Pro Daddy Agency
            </button>
          </a>
        </div>

        {/* Right */}
        <div className="text-center md:text-right text-sm text-gray-200">
          © {new Date().getFullYear()}{" "}
          <a
            href={website_url}
            target="_blank"
            className="font-semibold hover:text-yellow-300 transition"
          >
            {company_name}
          </a>{" "}
          – All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
