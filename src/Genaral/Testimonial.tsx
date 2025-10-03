"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { Quote } from "lucide-react";
import { person_name } from "./secrete";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of Pandith ${person_name}. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My kids abruptly stopped paying attention to me. I sought his advice when I started to feel concerned. He offered solutions that improved my kids’ behavior and brought peace at home.",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500 })]
  );

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-20 px-6 overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
          ✨ What Our Clients Say ✨
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Real experiences from people who found solutions with{" "}
          <span className="font-semibold text-red-600">{person_name}</span>.
        </p>

        {/* Carousel */}
        <div className="mt-16 overflow-hidden relative" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33%] transition-transform duration-500"
              >
                <div className="relative group bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 hover:shadow-pink-400/50 hover:scale-105 transition-all duration-500 border border-pink-200 h-full flex flex-col items-center">
                  {/* Avatar with glow */}
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-40 animate-ping"></div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                  <span className="text-sm text-gray-500">{t.location}</span>

                  {/* Testimonial Text */}
                  <p className="mt-4 text-gray-800 italic leading-relaxed text-center">
                    "{t.text}"
                  </p>

                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-pink-200 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
