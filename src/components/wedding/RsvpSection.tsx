import { useState } from "react";

type FormState = {
  name: string;
  attendance: string;
  guests: string;
  food: string;
  wishes: string;
};

const RsvpSection = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    attendance: "",
    guests: "1",
    food: "",
    wishes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-white px-6" id="rsvp">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl mb-6">💌</div>
          <p className="font-script text-4xl text-gold mb-4">Спасибо!</p>
          <h3 className="font-serif-elegant text-2xl text-stone-700 mb-3">
            Мы получили ваш ответ, {form.name}!
          </h3>
          <p className="text-stone-500 font-serif-elegant text-lg">
            Ждём вас 8 августа 2026 года в загородном клубе «Адмирал» в Воронеже. До встречи!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white px-6" id="rsvp">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Подтверждение присутствия</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">
            Пожалуйста, подтвердите своё присутствие до <strong>1 июля 2026</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-50 border border-stone-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <div>
            <label className="block font-serif-elegant text-stone-600 mb-2 text-sm tracking-wide uppercase">
              Ваше имя и фамилия *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Иванова Мария"
              className="w-full border border-stone-200 rounded-xl px-4 py-3 font-serif-elegant text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
            />
          </div>

          <div>
            <label className="block font-serif-elegant text-stone-600 mb-3 text-sm tracking-wide uppercase">
              Вы придёте? *
            </label>
            <div className="flex gap-4">
              {[
                { value: "yes", label: "Да, обязательно! 🎉" },
                { value: "no", label: "К сожалению, нет 😔" },
              ].map(({ value, label }) => (
                <label key={value} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="attendance"
                    value={value}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-xl py-3 px-4 text-center font-serif-elegant text-sm transition-all ${
                    form.attendance === value
                      ? "border-amber-400 bg-amber-50 text-amber-700"
                      : "border-stone-200 bg-white text-stone-500 hover:border-amber-200"
                  }`}>
                    {label}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {form.attendance === "yes" && (
            <>
              <div>
                <label className="block font-serif-elegant text-stone-600 mb-2 text-sm tracking-wide uppercase">
                  Количество гостей
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 font-serif-elegant text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                >
                  {["1", "2"].map((n) => (
                    <option key={n} value={n}>{n} {n === "1" ? "гость" : "гостя"}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-serif-elegant text-stone-600 mb-2 text-sm tracking-wide uppercase">
                  Предпочтения в еде
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "meat", label: "🥩 Мясо" },
                    { value: "fish", label: "🐟 Рыба" },
                    { value: "veg", label: "🥗 Вегетарианское" },
                  ].map(({ value, label }) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="food"
                        value={value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`border-2 rounded-xl py-2 px-3 text-center font-serif-elegant text-sm transition-all ${
                        form.food === value
                          ? "border-amber-400 bg-amber-50 text-amber-700"
                          : "border-stone-200 bg-white text-stone-500 hover:border-amber-200"
                      }`}>
                        {label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block font-serif-elegant text-stone-600 mb-2 text-sm tracking-wide uppercase">
              Пожелания молодожёнам
            </label>
            <textarea
              name="wishes"
              value={form.wishes}
              onChange={handleChange}
              rows={3}
              placeholder="Напишите тёплые слова..."
              className="w-full border border-stone-200 rounded-xl px-4 py-3 font-serif-elegant text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-white font-serif-elegant text-lg tracking-widest rounded-xl transition-colors duration-300 shadow-sm"
          >
            Отправить ответ
          </button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
