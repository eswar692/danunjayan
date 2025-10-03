import { person_name } from "../Genaral/secrete";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-blue-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-4">
          Astrologer{" "}
          <span className="font-bold text-indigo-700">{person_name}</span> is a
          renowned and respected spiritual leader in India. With his deep
          knowledge of astrology and unwavering commitment to helping others, he
          has established himself as a trusted advisor to people across the
          country.
          <br />
          <br />
          Through his extensive experience and intuitive abilities, Astrologer{" "}
          <span className="font-semibold text-violet-700">
            {person_name}
          </span>{" "}
          offers a wide range of services including palm readings, face
          readings, photo readings, and phone consultations. His expertise spans
          astrology, spiritual guidance, and personal development, making him a
          versatile and influential figure in the spiritual community.
          <br />
          <br />
          Known for his{" "}
          <span className="font-semibold text-indigo-600">accuracy</span> and
          insightful interpretations, Astrologer Panikaran Guruji has built a
          loyal following of clients who attest to the transformative power of
          his readings.
          <br />
          <br />
          If you’re in need of a trusted spiritual guide, look no further.
        </p>
      </div>
    </section>
  );
}
