const images = [
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/79e7088e-c915-4f34-bb9f-a7ca644708e3.jpg",
    alt: "Пара на закате",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/d303cbd8-c95c-49a9-9618-241feeb9c59d.jpg",
    alt: "Свадебные атрибуты",
    className: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/d81a7d9a-4053-4102-a6a6-3ff186a11a52.jpg",
    alt: "Место проведения",
    className: "",
  },
  {
    src: "https://cdn.poehali.dev/projects/ef4bcb69-51d4-45f4-9287-f91a2e863664/files/d63d36d2-b154-4594-8da6-837ea3808240.jpg",
    alt: "Цветочное оформление",
    className: "md:col-span-2",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-cream px-6" id="gallery">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Фотографии</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">Моменты нашей совместной жизни и подготовки к торжеству</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {images.map(({ src, alt, className }) => (
            <div
              key={alt}
              className={`${className} overflow-hidden rounded-2xl shadow-md group`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
