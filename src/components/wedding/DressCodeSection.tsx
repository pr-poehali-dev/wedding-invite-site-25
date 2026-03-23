import { useReveal } from "@/hooks/useReveal";
import React from "react";

const palette = [
  { name: "Золотой шёлк", hex: "#C9A84C" },
  { name: "Изумруд", hex: "#2D6A4F" },
  { name: "Пыльно-розовый", hex: "#D4A5A5" },
  { name: "Оливковый", hex: "#8A9A5B" },
  { name: "Нежно-голубой", hex: "#AED9E0" },
];

const womenOutfits = [
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/3462612b-d4ad-4e5a-8cf1-7762a8ecfa52.jpg",
    label: "Изумрудное платье",
    hint: "Шёлк, атлас или шифон",
  },
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/33d79abc-b2c7-41c7-9c54-0c794c8ab82a.jpg",
    label: "Пыльно-розовое платье",
    hint: "Лёгкие нежные тона",
  },
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/b5bff788-0cf2-4ad3-95fb-ef419ff8e09b.jpg",
    label: "Золотистое платье",
    hint: "Шампань, золото, беж",
  },
];

const menOutfits = [
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/7d485ad3-b7b1-4af2-ac17-343159374866.jpg",
    label: "Изумрудный костюм",
    hint: "Приталенный силуэт",
  },
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/258c834e-6bd2-417b-9641-614b96ef9477.jpg",
    label: "Светлый костюм",
    hint: "Беж, молочный, песок",
  },
  {
    img: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/13a4265d-e3a9-4b7d-8f92-d20ef1dc9d33.jpg",
    label: "Оливковый костюм",
    hint: "Натуральные тона",
  },
];

const DressCodeSection = () => {
  const ref = useReveal();

  return (
    <section className="py-24 bg-white px-6" id="dresscode" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-script text-4xl text-gold mb-3">Дресс-код</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-stone-500 text-base mt-4">
            Мы будем рады, если ваши образы гармонично впишутся в цветовую палитру нашего торжества
          </p>
        </div>

        <div className="mb-14 reveal reveal-delay-1">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-6 font-medium">Цвета свадьбы</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {palette.map(({ name, hex }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full shadow-md border-4 border-white"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-stone-500 text-xs text-center max-w-[80px] leading-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-2 font-medium reveal reveal-delay-1">Для дам</h3>
          <p className="text-center text-stone-400 text-sm mb-8 reveal reveal-delay-2">Платья, костюмы, комбинезоны в палитре свадьбы</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {womenOutfits.map(({ img, label, hint }, i) => (
              <div key={label} className={`reveal reveal-delay-${i + 1} group rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="overflow-hidden h-80">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-serif-elegant text-stone-700 font-semibold text-lg">{label}</p>
                  <p className="text-stone-400 text-sm mt-1">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-2 font-medium reveal reveal-delay-1">Для господ</h3>
          <p className="text-center text-stone-400 text-sm mb-8 reveal reveal-delay-2">Костюмы и смокинги в палитре свадьбы</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menOutfits.map(({ img, label, hint }, i) => (
              <div key={label} className={`reveal reveal-delay-${i + 1} group rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="overflow-hidden h-80">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-serif-elegant text-stone-700 font-semibold text-lg">{label}</p>
                  <p className="text-stone-400 text-sm mt-1">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 text-center reveal reveal-delay-3">
          <p className="font-serif-elegant text-stone-600 text-lg">
            ✦ Пожалуйста, воздержитесь от белого и чёрного цвета ✦
          </p>
          <p className="text-stone-400 text-sm mt-2">
            Дресс-код необязателен — главное, что вы будете рядом с нами в этот день
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
