import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-08-08T16:30:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/d63d36d2-b154-4594-8da6-837ea3808240.jpg')" }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-script text-5xl md:text-7xl text-gold mb-2 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          Мы женимся!
        </p>

        <div className="my-6 animate-fade-in-up opacity-0 animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 text-lg">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <h1 className="font-serif-elegant text-6xl md:text-8xl font-light text-stone-700 leading-tight animate-fade-in-up opacity-0 animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          Андрей <span className="text-gold font-script text-5xl md:text-7xl">&</span> Анастасия
        </h1>

        <p className="font-serif-elegant text-2xl md:text-3xl text-stone-500 mt-4 font-light tracking-widest animate-fade-in-up opacity-0 animate-delay-400" style={{ animationFillMode: 'forwards' }}>
          08 · 08 · 2026
        </p>

        <div className="mt-12 grid grid-cols-4 gap-3 max-w-md mx-auto animate-fade-in-up opacity-0 animate-delay-600" style={{ animationFillMode: 'forwards' }}>
          {[
            { value: timeLeft.days, label: "дней" },
            { value: timeLeft.hours, label: "часов" },
            { value: timeLeft.minutes, label: "минут" },
            { value: timeLeft.seconds, label: "секунд" },
          ].map(({ value, label }) => (
            <div key={label} className="countdown-card rounded-xl p-3 text-center shadow-sm">
              <div className="font-serif-elegant text-3xl md:text-4xl font-semibold text-stone-700">
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-xs text-stone-400 font-light mt-1 tracking-wider uppercase">{label}</div>
            </div>
          ))}
        </div>

        <a
          href="#rsvp"
          className="mt-10 inline-block px-10 py-3 border border-amber-400 text-amber-600 font-serif-elegant text-lg tracking-widest hover:bg-amber-400 hover:text-white transition-all duration-300 rounded-full animate-fade-in-up opacity-0 animate-delay-600"
          style={{ animationFillMode: 'forwards' }}
        >
          Подтвердить присутствие
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-stone-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
