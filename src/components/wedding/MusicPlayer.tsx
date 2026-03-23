import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

// Романтичная публичная мелодия (Comptine d'un autre été — Erik Satie style, royalty free)
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <button
          onClick={toggle}
          className="group flex items-center gap-3 bg-white/90 backdrop-blur-md border border-amber-200 shadow-lg rounded-full px-5 py-3 hover:shadow-xl transition-all duration-300 hover:border-amber-400"
          title={playing ? "Остановить музыку" : "Включить музыку"}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${playing ? "bg-amber-400" : "bg-stone-100 group-hover:bg-amber-100"}`}>
            <Icon name={playing ? "Pause" : "Music"} size={16} className={playing ? "text-white" : "text-amber-500"} />
          </div>
          <div className="text-left">
            <p className="font-serif-elegant text-stone-700 text-sm leading-tight">
              {playing ? "Играет мелодия" : "Включить музыку"}
            </p>
            {playing && (
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-amber-400 rounded-full animate-bounce"
                    style={{ height: `${8 + (i % 3) * 4}px`, animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

export default MusicPlayer;
