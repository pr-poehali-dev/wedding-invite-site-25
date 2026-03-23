import Icon from "@/components/ui/icon";

const contacts = [
  {
    person: "Андрей",
    role: "Жених",
    emoji: "🤵",
    phone: "+7 (900) 000-00-01",
    telegram: "@andrey_wedding",
  },
  {
    person: "Анастасия",
    role: "Невеста",
    emoji: "👰",
    phone: "+7 (900) 000-00-02",
    telegram: "@anastasia_wedding",
  },
];

const ContactsSection = () => {
  return (
    <section className="py-24 bg-stone-50 px-6" id="contacts">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-script text-4xl text-gold mb-3">Связаться с нами</p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="font-serif-elegant text-stone-500 text-lg mt-4">
            Если у вас есть вопросы — мы всегда на связи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map(({ person, role, emoji, phone, telegram }) => (
            <div key={person} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
              <div className="text-5xl mb-4">{emoji}</div>
              <h3 className="font-serif-elegant text-2xl text-stone-700 font-semibold">{person}</h3>
              <p className="text-stone-400 font-serif-elegant text-sm tracking-widest uppercase mb-6">{role}</p>

              <div className="space-y-3">
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center justify-center gap-3 py-3 px-6 border border-stone-200 rounded-xl text-stone-600 hover:border-amber-400 hover:text-amber-600 transition-all font-serif-elegant"
                >
                  <Icon name="Phone" size={18} />
                  {phone}
                </a>
                <a
                  href={`https://t.me/${telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-3 px-6 border border-stone-200 rounded-xl text-stone-600 hover:border-amber-400 hover:text-amber-600 transition-all font-serif-elegant"
                >
                  <Icon name="MessageCircle" size={18} />
                  {telegram}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white border border-stone-100 rounded-3xl py-10 px-6 shadow-sm">
          <p className="font-script text-3xl text-gold mb-3">С любовью,</p>
          <p className="font-serif-elegant text-2xl text-stone-700">Андрей & Анастасия</p>
          <p className="text-stone-400 mt-3 font-serif-elegant">08 · 08 · 2026 · Воронеж</p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-amber-300" />
            <span className="text-amber-400 text-xl">♡</span>
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-amber-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
