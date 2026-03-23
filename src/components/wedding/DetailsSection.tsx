import React from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const details = [
  {
    icon: "Calendar",
    title: "Дата",
    lines: ["8 августа 2026 года", "Суббота"],
  },
  {
    icon: "Clock",
    title: "Время",
    lines: ["Начало в 16:30"],
  },
  {
    icon: "MapPin",
    title: "Место",
    lines: ["г. Воронеж", "Загородный клуб «Адмирал»"],
  },
];

const DetailsSection = () => {
  const ref = useReveal();

  return (
    <section className="py-24 bg-cream px-6" id="details" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-script text-4xl text-gold mb-3">Детали торжества</p>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map(({ icon, title, lines }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 shadow-sm border border-stone-100 text-center flex flex-col items-center group hover:shadow-md transition-shadow duration-300`}
            >
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon name={icon} size={26} className="text-stone-600" />
              </div>
              <h3 className="font-serif-elegant text-xl text-stone-600 font-medium mb-3 tracking-wide">{title}</h3>
              {lines.map((line, i) => (
                <p key={i} className={`font-serif-elegant text-stone-700 ${i === 0 ? "text-lg font-semibold" : "text-base text-stone-500"}`}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-md border border-stone-100 reveal reveal-delay-4">
          <iframe
            src="https://yandex.ru/map-widget/v1/?text=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%20%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BB%D1%83%D0%B1%20%D0%90%D0%B4%D0%BC%D0%B8%D1%80%D0%B0%D0%BB&z=14"
            width="100%"
            height="320"
            frameBorder="0"
            allowFullScreen
            title="Карта"
            className="block"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://yandex.ru/maps/?text=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6+%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BB%D1%83%D0%B1+%D0%90%D0%B4%D0%BC%D0%B8%D1%80%D0%B0%D0%BB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 font-serif-elegant text-lg hover:text-amber-700 transition-colors"
          >
            <Icon name="Navigation" size={18} />
            Открыть маршрут
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;