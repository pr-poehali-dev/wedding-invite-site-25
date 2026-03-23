import { useState } from "react";
import Icon from "@/components/ui/icon";

const images = [
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/bucket/ca3626e5-bf74-4d14-b31d-e03fe86ced0d.jpeg",
    alt: "Андрей и Анастасия в горах Архыза",
    caption: "Архыз, где всё изменилось",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/bucket/9ca3592a-c856-407f-9264-ed589dccd49d.jpeg",
    alt: "Предложение руки и сердца",
    caption: "Момент на вершине",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/bucket/2e457b4f-5050-426a-82d1-dc9cc213ca1b.jpeg",
    alt: "Сердечко из рук в горах",
    caption: "Наше сердце в горах",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/bucket/4286694c-5687-482e-ba11-73006362d7bb.jpeg",
    alt: "Кольцо помолвки",
    caption: "Она сказала «Да!»",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/bucket/04373160-0771-478c-b40f-b2891b8bc62c.jpeg",
    alt: "Вместе рука в руку",
    caption: "Всегда рядом",
  },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section className="py-24 bg-cream px-6" id="gallery">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Фотографии</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">Моменты нашей совместной жизни и подготовки к торжеству</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(({ src, alt, caption }, i) => (
            <div
              key={alt}
              className={`overflow-hidden rounded-2xl shadow-md group cursor-pointer relative ${i === 0 ? "col-span-2 md:col-span-2 row-span-1" : ""}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-end">
                <p className="text-white font-serif-elegant text-sm px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-amber-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <Icon name="ChevronLeft" size={36} />
          </button>

          <div className="max-w-3xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[80vh] max-w-full object-contain rounded-xl"
            />
            <p className="text-center text-white/70 font-serif-elegant mt-3 text-lg">
              {images[lightbox].caption}
            </p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:text-amber-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <Icon name="ChevronRight" size={36} />
          </button>

          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
