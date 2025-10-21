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
    <motion.footer className="relative mt-10 text-white pt-20 w-full overflow-hidden bg-gradient-to-br from-[#190028] via-[#3a0066] to-[#000814]">
      {/* Soft floating glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl animate-ping"></div>

      {/* Footer Grid */}
      <motion.div
        ref={ref}
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* About */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-pink-500/40 transition-all duration-500">
          <h2 className="font-extrabold text-2xl montserrat text-pink-400 tracking-wide">
            About {company_name}
          </h2>
          <p className="text-sm open-sans text-gray-200 leading-relaxed">
            <b className="text-yellow-400">{company_name}</b> is one of South
            India’s trusted astrology centers. Guided by{" "}
            <span className="font-semibold text-pink-300">{person_name}</span>,
            we help people find clarity in love, career, and destiny through
            authentic astrology practices.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/40 transition-all duration-500">
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
            Talk to the Best Astrologer 🌠
          </p>
          <p className="text-xs text-gray-300 tracking-wider uppercase">
            Authentic | Reliable | Confidential | Trusted
          </p>
        </div>

        {/* Services */}
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-amber-400/40 transition-all duration-500">
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
        <div className="space-y-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-fuchsia-400/40 transition-all duration-500">
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

      {/* Copyright Section */}
      <CopyRightAndContact />
    </motion.footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className="mt-14 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-900 py-5 shadow-inner border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="text-center md:text-left flex flex-col md:flex-row gap-3 items-center">
          <p className="font-montserrat text-sm text-gray-100">
            Designed & Developed by
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
          — All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
