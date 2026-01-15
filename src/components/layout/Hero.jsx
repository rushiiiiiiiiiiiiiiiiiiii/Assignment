import { useEffect, useState } from "react";
import { HeroText } from "./HeroText";
import { HeroButtons } from "./HeroButtons";

export default function Hero() {
  const images = ["/home.jpg", "/report3.png"];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  /* AUTO SLIDE — ALWAYS RTL */
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const goNext = () => {
    setPrev(current);
    setCurrent((current + 1) % images.length);
  };

  const goPrev = () => {
    setPrev(current);
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <section className="relative w-full h-screen lg:h-[800px] overflow-hidden">
      {/* SLIDES */}
      <div className="absolute inset-0">
        {prev !== null && (
          <img
            src={images[prev]}
            className="
              absolute inset-0
              w-full h-full
              object-fill
              animate-slide-out-left
            "
            alt=""
          />
        )}

        <img
          key={current}
          src={images[current]}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            animate-slide-in-right
          "
          alt=""
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto h-full">
        <div
          className="
            absolute flex flex-col gap-[16px]

            bottom-[96px]
            left-[16px]
            right-[16px]
            text-center items-center

            sm:bottom-[120px]
            sm:left-[40px]
            sm:right-auto
            sm:w-[420px]
            sm:text-left
            sm:items-start

            lg:top-[223px]
            lg:right-[80px]
            lg:left-auto
            lg:bottom-auto
            lg:w-[530px]
          "
        >
          <HeroText />
          <HeroButtons />
        </div>

        {/* CONTROLS */}
        <div
          className="
            absolute bottom-[24px]
            left-1/2 -translate-x-1/2
            flex items-center gap-[16px]
            text-white text-[16px]
          "
        >
          <button
            onClick={goPrev}
            className="opacity-80 hover:opacity-100 transition"
          >
            ←
          </button>

          <span>
            {current + 1}/{images.length}
          </span>

          <button
            onClick={goNext}
            className="opacity-80 hover:opacity-100 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
