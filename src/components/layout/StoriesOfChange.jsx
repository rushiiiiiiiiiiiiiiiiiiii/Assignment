import React, { useEffect, useRef, useState } from "react";

const STORIES = [
  {
    id: 1,
    image: "/impact1.png",
    caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi",
  },
  {
    id: 2,
    image: "/impact2.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
  {
    id: 3,
    image: "/impact3.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
  {
    id: 4,
    image: "/impact2.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
  {
    id: 5,
    image: "/impact3.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
  {
    id: 6,
    image: "/impact1.png",
    caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi",
  },
];

export default function StoriesOfChange() {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  /* ACTIVE CARD FROM SCROLL */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const center = rail.scrollLeft + rail.offsetWidth / 2;
      let closest = 0;
      let min = Infinity;

      Array.from(rail.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < min) {
          min = dist;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    rail.addEventListener("scroll", onScroll);
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  const scrollLeft = () => {
    if (!railRef.current) return;
    railRef.current.scrollBy({
      left: -railRef.current.offsetWidth * 0.8,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!railRef.current) return;
    railRef.current.scrollBy({
      left: railRef.current.offsetWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-[#F7F5EF] overflow-hidden">
      {/* GREEN SHAPE */}
      {/* GREEN ROOF BACKGROUND — FIGMA MATCH */}
      <div
        className="
    absolute
    inset-x-0
    top-0
    h-[760px]
    bg-[#A8D08D]
  "
        style={{
          clipPath:
            "polygon(0% 28%, 12% 18%, 30% 4%, 88% 24%, 100% 28%, 100% 100%, 0% 100%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto pt-[140px] pb-[40px]">
        {/* TITLE */}
        <p
          className="text-center text-[14px] tracking-wide uppercase mb-[32px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          IMPACT UNVEILED
        </p>

        {/* SCROLL RAIL */}
        <div
          ref={railRef}
          className="
    flex gap-[15px]
    px-[12px] md:px-[24px] lg:px-[80px]
    overflow-x-auto
    scroll-smooth
    no-scrollbar
    snap-x snap-mandatory
  "
        >
          {STORIES.map((story, index) => {
            const isActive = index === activeIndex;
            const isNear = Math.abs(index - activeIndex) === 1;

            return (
              <div
                key={story.id}
                className={`
                  flex-shrink-0 snap-center
                  transition-transform duration-500 ease-out  
                  ${
                    isActive
                      ? "scale-100 z-20"
                      : isNear
                      ? "scale-[0.92] z-10"
                      : "scale-[0.85] opacity-70"
                  }
                `}
              >
                <div
                  className={`
    bg-white rounded-[34px] border-[8px] border-white
    flex flex-col items-center
    transition-transform duration-500 ease-out

    /* MOBILE (default) */
    w-[320px] h-[300px]

    /* TABLET */
    md:w-[520px] md:h-[380px]

    /* DESKTOP */
    lg:w-[661px] lg:h-[456px]
  `}
                >
                  <img
                    src={story.image}
                    alt=""
                    className="
      rounded-[24px] object-cover

      /* MOBILE */
      w-[280px] h-[200px]

      /* TABLET */
      md:w-[480px] md:h-[300px]

      /* DESKTOP */
      lg:w-[635px] lg:h-[387px]
    "
                  />

                  <p
                    className="
      mt-[12px]
      px-[18px]
      text-center
      text-[14px]
      leading-[120%]

      md:text-[14px]
      lg:text-[16px]
    "
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {story.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div
          className="
    mt-[32px]
    flex items-center justify-center gap-[7px]
    text-[14px]
    select-none
  "
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          <button
            onClick={scrollLeft}
            className="
      px-[px] py-[6px]
      rounded-full
      hover:bg-black/5
      transition
    "
            aria-label="Scroll left"
          >
            <img src="/Arrow 10.png" alt="" />
          </button>

          <span className="opacity-70">scroll to explore more</span>

          <button
            onClick={scrollRight}
            className="
      px-[px] py-[6px]
      rounded-full
      hover:bg-black/5
      transition
    "
            aria-label="Scroll right"
          >
            <img src="/Arrow 9.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
