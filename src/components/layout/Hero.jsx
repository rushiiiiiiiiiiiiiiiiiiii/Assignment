import { useEffect, useState } from "react";
import { HeroText } from "./HeroText";
import { HeroButtons } from "./HeroButtons";

export default function Hero() {
  const images = [
    "/public/home.jpg",
    "/public/Infrastructure.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* BACKGROUND IMAGE (FIGMA MATCH) */}
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="
          absolute inset-0
          w-[1440px] h-[800px]
          object-fit
          object-[20%_50%]
          transition-opacity
          duration-700
        "
      />

      {/* 1440 FRAME */}
      <div className="relative max-w-[1440px] mx-auto h-full">
        {/* TEXT BLOCK */}
        <div
          className="
            absolute
            top-[223px]
            right-[80px]
            w-[530px]
            flex
            flex-col
            gap-[16px]
          "
        >
          <HeroText />
          <HeroButtons />
        </div>

        {/* SLIDER INDICATOR — CENTERED */}
        <div
          className="
            absolute
            bottom-[36px]
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-[12px]
            text-white
            text-[18px]
            font-normal
          "
        >
          <span className="cursor-pointer select-none">←</span>
          <span>{currentIndex + 1}/{images.length}</span>
          <span className="cursor-pointer select-none">→</span>
        </div>
      </div>
    </section>
  );
}
