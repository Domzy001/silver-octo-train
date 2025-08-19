import luxuryHotel from "../assets/luxury-hotel.svg";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-pink-500 py-20 text-center text-white">
      <img src={luxuryHotel} alt="Luxury Hotel" className="mx-auto w-40 mb-6" />
      <h1 className="text-5xl font-bold mb-4">SwiftStay Nigeria</h1>
      <p className="text-xl">AI-powered reservations & luxury stays</p>
    </div>
  );
}