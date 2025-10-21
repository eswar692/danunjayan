import { MenuIcon, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { company_name, phone_number, whatsapp_number } from "./secrete";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="w-full bg-gray-900">
      <Title />
      <div className="w-full md:w-[85%] mx-auto flex flex-col gap-6   ">
        <Logo />
      </div>
      <TextMarquee />
    </header>
  );
};

export default Header;

const Title = () => (
  <div className="flex flex-row  md:flex-row items-center justify-between p-2 w-full md:w-[80%] mx-auto md:bg-none bg-gradient-to-r from-purple-800 via-pink-800 to-red-800 shadow-lg mb-0 md:mb-4 ">
    <h5 className="montserrat font-semibold text-gray-200 text-center md:text-left text-sm md:text-base">
      ✨ Any Problem? Connect with us
    </h5>
    <a
      href={`tel://${phone_number}`}
      className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold rounded-full shadow-xl transition-transform duration-300 hover:scale-105 montserrat text-sm"
    >
      Call Now
    </a>
  </div>
);

const Logo = () => (
  <div
    className="relative w-full flex flex-row md:flex-row items-center justify-between gap-4 
                  bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 
                  px-4 py-4 md:p-6 shadow-2xl md:rounded-b-2xl"
  >
    {/* Logo + Text */}
    <div className="flex flex-col md:flex-row items-center md:items-start w-[90%] md:w-[75%] gap-4">
      {/* Optional Video / Image Logo */}
      {/* <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-2xl">
        <video
          src="fb9b120cb8608fc1fa9e08379ead50b1_720w.mp4"
          autoPlay
          loop
          muted
          className="border-2 border-amber-400 w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
        />
      </div> */}

      <div className="flex flex-col text-center md:text-left">
        {/* Company Name */}
        <h1
          className="montserrat font-extrabold text-3xl md:text-4xl text-transparent bg-clip-text 
                        bg-gradient-to-r from-rose-100 via-fuchsia-100 to-amber-100 drop-shadow-xl"
        >
          {company_name}
        </h1>

        {/* Since Text */}
        <p className="open-sans text-sm md:text-base text-amber-200 italic -mt-1">
          Since 1950
        </p>

        {/* Description */}
        <p className="open-sans text-xs md:text-sm text-amber-100 mt-2 poppins max-w-[350px] leading-snug">
          Best astrology services for{" "}
          <span className="text-rose-300 font-semibold">accurate</span> and{" "}
          <span className="text-fuchsia-300 font-semibold">
            personalized guidance
          </span>{" "}
          to help you navigate life’s challenges and find clarity.
        </p>
      </div>
    </div>

    {/* Menu */}
    <div className="w-[10%] md:w-[20%] flex justify-center items-center mt-4 md:mt-0">
      <Menu />
    </div>
  </div>
);

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-8 font-medium text-gray-100 montserrat text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 border rounded bg-orange-500 transition duration-300"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className="relative group cursor-pointer">
    <span className="transition-colors duration-300 group-hover:text-yellow-400">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-5000 bg-gradient-to-tr from-red-900 via-pink-900 to-yellow-900


 p-8 flex flex-col justify-between shadow-2xl overflow-y-auto"
    >
      {/* Top Section: Logo + Close */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="montserrat text-2xl font-bold text-yellow-400 drop-shadow-lg">
          {company_name} Center
        </h1>
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-6 font-medium montserrat text-lg text-gray-100 mb-8">
        {["Home", "About", "Services", "Testimonials", "Contact"].map(
          (item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">
                {item}
              </li>
            </Link>
          )
        )}
      </ul>

      {/* Empty Space Section → Add Call / WhatsApp Buttons */}
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-gray-200 font-semibold text-center">
          Need Immediate Help? Contact Us Now!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href={`tel:${phone_number}`}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            <Phone size={18} /> Call
          </a>
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Section: Company info */}
      <p className="open-sans text-gray-300 text-sm text-center">
        <b className="text-yellow-400">{company_name} Center</b> - Trusted
        astrology services since 1950. Horoscope readings, match-making, career
        predictions, and spiritual remedies to guide you through life with
        confidence.
      </p>
    </div>
  );
};

const TextMarquee = () => (
  <div
    className="
      overflow-hidden
      bg-gradient-to-r
      from-indigo-200 via-purple-200 to-pink-200
      shadow-md
      md:rounded-md
    "
  >
    <Marquee
      speed={50}
      className="whitespace-nowrap text-black py-2 font-medium text-md md:text-base tracking-wide drop-shadow-sm"
    >
      🌙 Facing issues like Love Breakup, Marriage Disputes, Relationship
      Conflicts, or wanting to Get Your Love Back? 🔮 Consult for Vashikaran
      solutions to attract your desired partner or resolve personal issues.
      Contact a trusted Astrologer today.
    </Marquee>
  </div>
);
