import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import VideoView from "../Genaral/VideoView";
import ImageGrid from "../Genaral/ImageGrid";

const Home = () => {
  return (
    <div className="flex flex-col  bg-orange-200 w-full h-full">
      <VideoView />
      <ImageGrid />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Lost Love Back",
      desc: "Available on both WhatsApp and Call. One call can change your life.",
      img: "https://i.pinimg.com/736x/4a/c8/aa/4ac8aaa977a4eef9bb1eac0041929380.jpg", // replace with your image
    },
    {
      title: "Marriage Problem Solution",
      desc: "Solve disputes and misunderstandings with astrology guidance.",
      img: "https://i.pinimg.com/1200x/c1/2b/fc/c12bfc17ac4630ade4f0e1e4a1f819e2.jpg",
    },
    {
      title: "Vashikaran Specialist",
      desc: "Attract your desired partner with trusted vashikaran solutions.",
      img: "https://i.pinimg.com/736x/05/d1/71/05d171d8361a2e85d98faafd5df9020e.jpg",
    },
    {
      title: "Education Remedies",
      desc: "Personalized astrological remedies and puja to improve concentration, memory and academic success. Suitable for students preparing for exams, entrance tests, or academic growth.",
      img: "https://i.pinimg.com/736x/73/49/66/73496669119b34a1dd1ab91ffd626f68.jpg",
    },
    {
      title: "Vastu Pooja & Home Harmony",
      desc: "Vastu analysis and corrective poojas to balance energy at home or workplace — remove blockages, enhance prosperity, and bring peace to the living space.",
      img: "https://i.pinimg.com/1200x/22/7a/73/227a73ecafa7e4bc8f6b256083a0e7c2.jpg",
    },
    {
      title: "Career & Job Guidance",
      desc: "Astrological career mapping, timely remedies and rituals to unlock career opportunities, interview luck, job changes and business growth.",
      img: "https://i.pinimg.com/736x/1e/a3/1c/1ea31c29817c2b9435c0e29040497a47.jpg",
    },
    {
      title: "Health & Wellbeing Support",
      desc: "Holistic horoscope-based suggestions and gentle remedial poojas to support physical and mental wellbeing. Not a substitute for medical care — recommended alongside professional treatment.",
      img: "https://i.pinimg.com/1200x/30/05/93/300593ddfebda3597cfb52632ce93e4e.jpg",
    },
    {
      title: "Samboga Vashikaran (Relationship Attraction)",
      desc: "Specialized vashikaran remedies aimed at rekindling attraction and emotional closeness. Provided carefully with ethical guidance and clear expectations.",
      img: "https://i.pinimg.com/736x/0b/b7/91/0bb7917954d720df78a4f71c085c46ff.jpg",
    },
    {
      title: "Family Vashikaran & Harmony",
      desc: "Remedies and rituals to ease family disputes, restore trust and harmony in household relationships while respecting everyone's wellbeing and consent.",
      img: "https://i.pinimg.com/736x/ad/7b/99/ad7b9936b889c3abaafe22c732867d86.jpg",
    },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-3 gap-10 w-full px-4 md:max-w-7xl md:mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {problems.map((problem, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gradient-to-b from-gray-950 via-indigo-950/90 to-purple-900/80 
                 border border-purple-700/40 rounded-3xl shadow-2xl overflow-hidden text-white
                 hover:scale-[1.03] transition-all duration-500 hover:shadow-pink-500/40 relative group"
        >
          {/* Image */}
          <div className="relative w-full h-80 overflow-hidden">
            <img
              src={problem.img}
              alt={problem.title}
              className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700 brightness-75"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          {/* Text */}
          <div className="p-6 flex flex-col items-center text-center space-y-3 z-10">
            <h3 className="text-2xl font-extrabold montserrat bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
              {problem.title}
            </h3>
            <p className="text-base text-gray-200 poppins leading-relaxed max-w-[280px]">
              {problem.desc}
            </p>
          </div>

          {/* Button */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6"
          >
            <button
              className="montserrat flex items-center gap-2 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                     text-white font-semibold px-7 py-3 rounded-full shadow-lg
                     hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 
                     hover:shadow-purple-500/50 hover:scale-105 
                     transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Talk on WhatsApp
            </button>
          </a>

          {/* Glow ring effect */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 
                      bg-gradient-to-r from-pink-500/20 via-purple-400/20 to-indigo-400/20 blur-xl"
          ></div>
        </div>
      ))}
    </motion.div>
  );
};

const AboutAstrologer = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-6 md:pr-6 text-center md:text-left">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold montserrat shadow-lg hover:scale-105 transition-transform duration-300">
            ✨ Know the Astrologer
          </button>

          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 montserrat drop-shadow-lg">
            {company_name}
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg md:text-xl open-sans">
            Meet{" "}
            <span className="font-bold text-purple-600">{company_name}</span>, a
            globally renowned astrologer whose wisdom in astrology is inherited
            through generations. His expertise has guided countless individuals
            toward{" "}
            <span className="font-semibold text-indigo-600">
              peace, clarity, and success
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            With personalized solutions, accurate predictions, and deep
            understanding of life’s challenges, {company_name} continues to
            attract a global clientele seeking both spiritual and practical
            guidance.
          </p>

          {/* Call to Action */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center relative">
          <div className="relative w-full max-w-md">
            <img
              src="https://i.pinimg.com/1200x/2b/7e/f6/2b7ef69aef08f4f9ec85e1f37984332a.jpg"
              alt="Astrologer Banner"
              className="w-full h-[420px] rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Neon Glow */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-300/40 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Breakup problems are common, but astrology provides remedies to heal emotional pain and restore love in relationships.",
      img: "https://i.pinimg.com/1200x/56/23/3a/56233a0caad6ac1136c682118ca138f8.jpg",
    },
    {
      title: "Gf/Bf Dispute",
      desc: "Astrological remedies help smoothen conflicts and bring balance in relationships with your partner.",
      img: "https://i.pinimg.com/736x/da/1e/de/da1ede4ba8faa752488419d5a2802fd7.jpg",
    },
    {
      title: "Love Problem",
      desc: "Astrology provides a better path to resolve love issues and bring harmony and trust between partners.",
      img: "https://i.pinimg.com/736x/bc/49/b6/bc49b6e04d96e9d687ea1740e4cc93ed.jpg",
    },
    {
      title: "Family Problem",
      desc: "Get rid of family disputes with astrological guidance that promotes peace, harmony, and positivity at home.",
      img: "https://i.pinimg.com/736x/e7/b3/63/e7b36387a8c950dbb340455e0fdbdb1e.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900 via-indigo-900 to-black overflow-hidden">
      {/* Decorative Background Aura */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-red-400 drop-shadow-lg montserrat mb-14">
          🌟 Our Premium Astrology Services 🌟
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-yellow-300 montserrat drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed open-sans">
                  {service.desc}
                </p>

                {/* Call Button */}
                <a href={`tel:${phone_number}`}>
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 montserrat">
                    <Phone className="w-5 h-5" /> Call Us Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Specialist",
      img: "https://i.pinimg.com/736x/be/96/4b/be964bb4f6d6e07752fc4b363859b048.jpg",
    },
    {
      title: "Husband Wife Dispute",
      img: "https://i.pinimg.com/736x/f5/b2/00/f5b200772b619765261b2a50b595ae72.jpg",
    },
    {
      title: "Ex Love Back Expert",
      img: "https://i.pinimg.com/1200x/2f/5b/b3/2f5bb3dde2c5891188f1170b5d12260f.jpg",
    },
    {
      title: "Financial Problem",
      img: "https://i.pinimg.com/736x/40/99/9c/40999c10cdac6c327a1378c45be496b5.jpg",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-800">
      {/* Subtle texture + animated glow layers */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-500/20 rounded-full blur-[140px] animate-pulse delay-3000"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold montserrat text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-pink-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-16"
        >
          ✨ Premium Astrology Services ✨
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-8 
                     bg-gradient-to-b from-white/15 via-white/10 to-transparent
                     border border-white/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                     hover:scale-105 hover:shadow-pink-500/40 
                     transition-all duration-500 group"
            >
              {/* Image with glow ring */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full border-4 border-pink-400 shadow-lg"
                />
                <span className="absolute inset-0 rounded-full bg-pink-400/40 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-amber-200 montserrat mb-4 tracking-wide drop-shadow-md">
                {service.title}
              </h3>

              {/* Description (optional) */}
              {/* {service.desc && (
            <p className="text-sm text-gray-200/90 poppins leading-relaxed mb-6">
              {service.desc}
            </p>
          )} */}

              {/* Call Button */}
              <a href={`tel:${phone_number}`}>
                <button
                  className="flex items-center justify-center gap-2 w-full 
                               bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                               text-white font-semibold py-3 rounded-full 
                               shadow-lg hover:shadow-pink-400/50 hover:scale-105 
                               transition-all duration-300"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>

              {/* Floating glow aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-400/10 via-pink-400/10 to-amber-300/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological remedies to bring your ex back with love & trust.",
    },
    {
      title: "Court Case Solution",
      icon: Scale,
      desc: "Effective solutions for legal & court-related issues.",
    },
    {
      title: "Family Problem",
      icon: Users,
      desc: "Resolve disputes & bring peace at home with astrology.",
    },
    {
      title: "Business Problem",
      icon: Briefcase,
      desc: "Boost your career & business success with remedies.",
    },
    {
      title: "Childless Couple",
      icon: Users,
      desc: "Astrological remedies to bless couples with children.",
    },
    {
      title: "Thantra Pooja",
      icon: Sparkles,
      desc: "Personalized astrology & pujas for spiritual growth, meditation & karma solutions.",
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#2e003e] via-[#5c005c] to-[#8e0e00]">
      {/* Subtle cosmic texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-20 montserrat tracking-wide drop-shadow-[0_0_25px_rgba(255,200,255,0.5)]"
        >
          🔮 Premium Astrology Services 🔮
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: id * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] 
                     hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,120,200,0.5)] transition-all duration-500 group"
            >
              {/* Icon with floating glow */}
              <div className="flex justify-center mb-8 relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-24 h-24 bg-pink-500/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
                <service.icon className="w-16 h-16 text-pink-400 drop-shadow-[0_0_20px_rgba(255,100,150,0.7)] group-hover:scale-110 transition-transform duration-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 montserrat">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200 mb-10 text-base leading-relaxed open-sans">
                {service.desc}
              </p>

              {/* Button */}
              <a href={`tel:${phone_number}`}>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="montserrat flex items-center justify-center gap-3 w-full 
                        bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-600 
                        text-white font-semibold py-3 rounded-full shadow-lg 
                        hover:shadow-[0_0_30px_rgba(255,120,200,0.8)] 
                        transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Now
                </motion.button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function HomeLastDesign() {
  return (
    <section className="mt-2 mb-2 relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20 px-6 overflow-hidden">
      {/* Stars background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 blur-3xl opacity-40 animate-pulse"></div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400/60 backdrop-blur-xl">
            <img
              src="https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg"
              alt={person_name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full border-4 border-pink-400/40 animate-spin-slow"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg montserrat">
            <Sparkles className="inline w-8 h-8 text-yellow-300 animate-pulse mr-2" />
            Astrologer {person_name}
          </h2>
          <h3 className="text-lg md:text-2xl font-semibold text-gray-200 montserrat">
            🌌 India’s Most Trusted Astrology Expert
          </h3>
          <p className="text-gray-300 leading-relaxed text-base open-sans">
            With profound knowledge in{" "}
            <span className="text-yellow-400">Vastu</span>,{" "}
            <span className="text-pink-400">horoscope reading</span>, and{" "}
            <span className="text-purple-300">spiritual guidance</span>,{" "}
            {person_name}
            Ji empowers individuals to overcome obstacles and discover their
            true destiny.
          </p>

          {/* Contact Section */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-3">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-pink-400/60 hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} /> Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400/60 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Special Note */}
          <p className="mt-5 text-yellow-300 font-bold tracking-wide text-sm md:text-base poppins">
            Accurate Predictions | Trusted Guidance | Life-changing Remedies ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
