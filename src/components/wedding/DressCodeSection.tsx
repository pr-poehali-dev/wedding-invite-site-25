const palette = [
  {
    name: "Золотой шёлк",
    hex: "#C9A84C",
    bg: "bg-[#C9A84C]",
    text: "text-white",
    desc: "Основной акцент",
  },
  {
    name: "Изумруд",
    hex: "#2D6A4F",
    bg: "bg-[#2D6A4F]",
    text: "text-white",
    desc: "Глубокий тон",
  },
  {
    name: "Пыльно-розовый",
    hex: "#D4A5A5",
    bg: "bg-[#D4A5A5]",
    text: "text-white",
    desc: "Нежный акцент",
  },
  {
    name: "Оливковый",
    hex: "#8A9A5B",
    bg: "bg-[#8A9A5B]",
    text: "text-white",
    desc: "Природный тон",
  },
  {
    name: "Нежно-голубой",
    hex: "#AED9E0",
    bg: "bg-[#AED9E0]",
    text: "text-stone-700",
    desc: "Воздушный тон",
  },
];

const womenOutfits = [
  {
    img: "https://i.pinimg.com/736x/4e/2e/dc/4e2edc3a1e9b2c6fa10b72e8b3d0a2c1.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=emerald%20green%20wedding%20guest%20dress%20elegant",
    label: "Изумрудное платье",
    color: "#2D6A4F",
  },
  {
    img: "https://i.pinimg.com/736x/8b/3a/f1/8b3af1c2e4d6a7b9c0e2f3d4a5b6c7d8.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=dusty+rose+wedding+guest+dress",
    label: "Пыльно-розовое платье",
    color: "#D4A5A5",
  },
  {
    img: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=gold+silk+dress+wedding+guest+elegant",
    label: "Золотистое платье",
    color: "#C9A84C",
  },
];

const menOutfits = [
  {
    img: "https://i.pinimg.com/736x/d1/e2/f3/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=emerald+green+suit+men+wedding",
    label: "Изумрудный костюм",
    color: "#2D6A4F",
  },
  {
    img: "https://i.pinimg.com/736x/f1/a2/b3/f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=olive+suit+men+wedding+guest",
    label: "Оливковый костюм",
    color: "#8A9A5B",
  },
  {
    img: "https://i.pinimg.com/736x/c4/d5/e6/c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9.jpg",
    pinterest: "https://pinterest.com/search/pins/?q=beige+light+blue+suit+men+wedding+elegant",
    label: "Светлый костюм",
    color: "#AED9E0",
  },
];

const DressCodeSection = () => {
  return (
    <section className="py-24 bg-white px-6" id="dresscode">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Дресс-код</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">
            Мы будем рады, если ваши образы гармонично впишутся в цветовую палитру нашего торжества
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-8 font-medium">Цвета свадьбы</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {palette.map(({ name, bg, text, desc }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className={`${bg} w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-md flex items-end justify-center pb-2`}>
                  <span className={`${text} text-xs font-light opacity-80`}>{desc}</span>
                </div>
                <span className="font-serif-elegant text-sm text-stone-600 text-center max-w-[90px]">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-2 font-medium">Для дам</h3>
          <p className="text-center text-stone-400 font-serif-elegant text-sm mb-8">Платья, костюмы, комбинезоны в палитре свадьбы</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {womenOutfits.map(({ pinterest, label, color }) => (
              <a
                key={label}
                href={pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-full h-64 flex items-center justify-center relative"
                  style={{ backgroundColor: color + "22" }}
                >
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: color + "44" }}
                  >
                    <div className="w-16 h-16 rounded-full" style={{ backgroundColor: color }} />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-20 h-32 rounded-t-full border-4 border-white/60" style={{ backgroundColor: color + "99" }} />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/80 rounded-full px-3 py-1 text-xs text-stone-500 font-serif-elegant">
                    Pinterest →
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-serif-elegant text-stone-700 font-medium">{label}</p>
                  <p className="text-stone-400 text-sm mt-1">Смотреть примеры на Pinterest</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-serif-elegant text-2xl text-stone-700 text-center mb-2 font-medium">Для господ</h3>
          <p className="text-center text-stone-400 font-serif-elegant text-sm mb-8">Костюмы и смокинги в палитре свадьбы</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menOutfits.map(({ pinterest, label, color }) => (
              <a
                key={label}
                href={pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-full h-64 flex items-center justify-center relative"
                  style={{ backgroundColor: color + "22" }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-full border-4 border-white/60" style={{ backgroundColor: color + "88" }} />
                    <div className="w-24 h-28 rounded-t-lg border-4 border-white/60" style={{ backgroundColor: color + "99" }} />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/80 rounded-full px-3 py-1 text-xs text-stone-500 font-serif-elegant">
                    Pinterest →
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-serif-elegant text-stone-700 font-medium">{label}</p>
                  <p className="text-stone-400 text-sm mt-1">Смотреть примеры на Pinterest</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 text-center">
          <p className="font-serif-elegant text-stone-600 text-lg">
            ✦ Пожалуйста, воздержитесь от белого и чёрного цвета ✦
          </p>
          <p className="text-stone-400 text-sm mt-2 font-serif-elegant">
            Дресс-код необязателен — главное, что вы будете рядом с нами в этот день
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
