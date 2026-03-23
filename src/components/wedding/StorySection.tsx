const story = [
  {
    year: "2019",
    emoji: "☕",
    title: "Первая встреча",
    text: "Судьба свела нас в уютном кафе в центре Воронежа. Андрей случайно задел чашку Анастасии, и именно этот момент стал началом нашей истории.",
    align: "left",
  },
  {
    year: "2020",
    emoji: "🌹",
    title: "Первое свидание",
    text: "Прогулка по набережной реки Воронеж, букет роз и бесконечные разговоры до утра. Мы поняли, что не хотим расставаться.",
    align: "right",
  },
  {
    year: "2022",
    emoji: "🏠",
    title: "Наш общий дом",
    text: "Мы переехали вместе и начали строить наш уютный уголок. Каждый день наполнился новым смыслом — завтраки вдвоём, совместные мечты и планы.",
    align: "left",
  },
  {
    year: "2025",
    emoji: "💍",
    title: "Предложение",
    text: "На берегу Чёрного моря на закате Андрей встал на одно колено. Ответ был «Да!» — и слёзы радости, которые не забыть никогда.",
    align: "right",
  },
  {
    year: "2026",
    emoji: "👰🤵",
    title: "Свадьба",
    text: "И вот мы приглашаем самых близких разделить с нами этот счастливый день — 8 августа 2026 года в Воронеже.",
    align: "left",
  },
];

const StorySection = () => {
  return (
    <section className="py-24 bg-white px-6" id="story">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Наша история</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">История, которая началась случайно, но стала самой важной в нашей жизни</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-300 to-transparent hidden md:block" />

          <div className="space-y-12">
            {story.map(({ year, emoji, title, text, align }, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                  align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${align === "right" ? "md:text-left" : "md:text-right"}`}>
                  <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl">{emoji}</span>
                    <h3 className="font-serif-elegant text-xl text-stone-700 font-semibold mt-2 mb-2">{title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
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
