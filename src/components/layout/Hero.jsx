import { useEffect, useState } from "react";
import { HeroText } from "./HeroText";
import { HeroButtons } from "./HeroButtons";

export default function Hero() {
  const images = ["/home.jpg", "/report3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen lg:h-[800px] overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={images[currentIndex]}
        alt="Hero"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[20%_50%]
        "
      />

      {/* 1440 FRAME */}
      <div className="relative max-w-[1440px] mx-auto h-full">
        {/* TEXT BLOCK — LOCKED */}
        <div
          className="
            absolute
            flex flex-col gap-[16px]

            /* MOBILE */
            bottom-[96px]
            left-[16px]
            right-[16px]
            text-center
            items-center

            /* TABLET */
            sm:bottom-[120px]
            sm:left-[40px]
            sm:right-auto
            sm:w-[420px]
            sm:text-left
            sm:items-start

            /* DESKTOP — FIGMA EXACT */
            lg:top-[223px]
            lg:right-[80px]
            lg:left-auto
            lg:bottom-auto
            lg:w-[530px]
            lg:text-left
            lg:items-start
          "
        >
          <HeroText />
          <HeroButtons />
        </div>

        {/* SLIDER INDICATOR */}
        <div
          className="
            absolute
            bottom-[24px]
            left-1/2
            -translate-x-1/2
            flex items-center gap-[12px]
            text-white text-[16px] sm:text-[18px]
          "
        >
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="opacity-80 hover:opacity-100"
          >
            ←
          </button>

          <span>{currentIndex + 1}/{images.length}</span>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % images.length)
            }
            className="opacity-80 hover:opacity-100"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
