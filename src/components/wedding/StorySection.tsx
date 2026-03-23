import React from "react";
import { useReveal } from "@/hooks/useReveal";

const story = [
  {
    year: "2024",
    emoji: "🏊",
    title: "Первая встреча",
    text: "13 июля 2024 года на бассейне Val de bo судьба свела их вместе. Тот солнечный день изменил всё — с этого момента они не расстаются.",
    align: "left",
  },
  {
    year: "2024",
    emoji: "🌹",
    title: "Первое свидание",
    text: "Андрей пригласил Анастасию в ресторан, а после они гуляли по городу так долго, что у неё загудели ноги от усталости. Они сели у фонтана и говорили обо всём — о мечтах, желаниях, планах на будущее. Тогда стало ясно: это именно тот человек.",
    align: "right",
  },
  {
    year: "2025",
    emoji: "💍",
    title: "Предложение",
    text: "В горах Карачаево-Черкесии, на курорте Архыз, среди заснеженных вершин Андрей сделал Анастасии предложение. Это было невероятно романтично — и ответ был «Да!» без единого сомнения.",
    align: "right",
  },
  {
    year: "2026",
    emoji: "👰🤵",
    title: "Свадьба",
    text: "И вот они приглашают самых близких разделить с ними этот счастливый день — 8 августа 2026 года в Воронеже.",
    align: "left",
  },
];

const StorySection = () => {
  const ref = useReveal();

  return (
    <section className="py-24 bg-white px-6" id="story" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-script text-4xl text-gold mb-3">Наша история</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-stone-500 text-base mt-4">История, которая началась случайно, но стала самой важной в их жизни</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-300 to-transparent hidden md:block" />

          <div className="space-y-12">
            {story.map(({ year, emoji, title, text, align }, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${align === "right" ? "md:text-left" : "md:text-right"}`}>
                  <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl">{emoji}</span>
                    <h3 className="font-serif-elegant text-xl text-stone-700 font-semibold mt-2 mb-2">{title}</h3>
                    <p className="text-stone-500 text-[15px] leading-relaxed">{text}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-blush border-4 border-white shadow-md flex items-center justify-center">
                    <span className="font-serif-elegant text-xs font-bold text-stone-600 text-center leading-tight">{year}</span>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;