import { phone_number, whatsapp_number } from "./secrete";

const VideoView = () => {
  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-none mb-2">
      {/* Video Background */}
      <video
        src="dfa6d1203db3f9185624079ff11b737b.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Optional Neon Sparkles Overlay */}
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/60  w-full h-full">
        ff
      </div>

      {/* Text & Buttons Overlay */}
      <div className="bg-red-900/20 z-99 absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg montserrat">
          Devi Sri Prasad Astro
        </h1>
        <p className="mt-4 text-white text-sm md:text-lg open-sans leading-snug max-w-xs md:max-w-lg">
          Renowned astrologer providing personalized astrology services for
          accurate guidance, spiritual growth, and life solutions. Trusted
          worldwide.
        </p>

        <div className="mt-6 flex sm:flex-row gap-4 flex-row">
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
    </div>
  );
};

export default VideoView;
