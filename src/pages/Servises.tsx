import { Phone, MessageCircle } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";

const services = [
  {
    name: "Love Problems",
    desc: "Solutions for lost love, misunderstandings, and building strong relationships.",
    img: "https://i.pinimg.com/1200x/3f/f5/89/3ff5895bca8970847577656ffe788eff.jpg",
  },
  {
    name: "Marriage Issues",
    desc: "Guidance for happy married life, compatibility, and resolving conflicts.",
    img: "https://i.pinimg.com/736x/fa/ee/46/faee46287149c9a2470c20d26318fee1.jpg",
  },
  {
    name: "Court Cases",
    desc: "Astrological remedies to overcome legal challenges and disputes.",
    img: "https://i.pinimg.com/1200x/fb/4e/36/fb4e36b171a92fb4d391f3bc6a90e8a5.jpg",
  },
  {
    name: "Finance Problems",
    desc: "Effective remedies for wealth, investments, and financial stability.",
    img: "https://i.pinimg.com/736x/53/3a/25/533a25d0fd940cc5fc8b5fdaf457b14a.jpg",
  },
  {
    name: "Education Guidance",
    desc: "Astrology support for students seeking focus, success, and higher studies.",
    img: "https://i.pinimg.com/736x/7f/8a/60/7f8a6099a523cc79342eaee0a29e92f8.jpg",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, promotions, and professional success.",
    img: "https://i.pinimg.com/736x/2d/21/ff/2d21ff0997bd7bdfb46491c3d13798c3.jpg",
  },
  {
    name: "Vashikaran",
    desc: "Powerful vashikaran solutions to influence situations positively.",
    img: "https://i.pinimg.com/1200x/bd/dc/94/bddc94a7fcefc3598976dec33665645a.jpg",
  },
  {
    name: "Future Predictions",
    desc: "Accurate horoscope readings to understand your destiny and future.",
    img: "https://i.pinimg.com/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
  },
  {
    name: "All Types of Vashikaran",
    desc: "Specialized remedies for love, family, and professional life.",
    img: "https://i.pinimg.com/736x/34/1d/eb/341deb4d9ba9bd2934f0d996567b37a3.jpg",
  },
];

export default function Services() {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-sky-50 to-white py-24 px-6 overflow-hidden">
      {/* Decorative Background Glow Circles */}
      <div className="absolute top-10 -left-16 w-72 h-72 bg-fuchsia-300/30 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px] z-0"></div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Our Astrology Services
        </h2>
        <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed">
          Discover our expert services designed to guide you with{" "}
          <span className="font-semibold text-violet-600">wisdom</span>,{" "}
          <span className="font-semibold text-pink-600">peace</span>, and{" "}
          <span className="font-semibold text-sky-600">clarity</span> in life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group relative bg-white/50 backdrop-blur-xl rounded-3xl ring-1 ring-violet-200 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-violet-700 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 flex-grow leading-relaxed">
                {service.desc}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a href={`tel:${phone_number}`} className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl shadow-md transition">
                    <Phone size={18} /> Call
                  </button>
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl shadow-md transition">
                    <MessageCircle size={18} /> WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
