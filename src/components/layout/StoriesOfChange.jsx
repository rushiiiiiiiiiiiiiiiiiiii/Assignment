import React, { useEffect, useRef, useState } from "react";

const STORIES = [
  { id: 1, image: "/public/impact1.png", caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi" },
  { id: 2, image: "/public/impact2.png", caption: "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand" },
  { id: 3, image: "/public/impact3.png", caption: "Walls of Hope" },
  { id: 4, image: "/public/impact2.png", caption: "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand" },
  { id: 5, image: "/public/impact3.png", caption: "Walls of Hope" },
  { id: 6, image: "/public/impact1.png", caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi" },
];

export default function StoriesOfChange() {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section className="relative w-full bg-[#F7F5EF] overflow-hidden">
      {/* GREEN SHAPE */}
      <div
        className="absolute inset-x-0 top-0 h-[680px] bg-[#A8D08D]"
        style={{
          clipPath:
            "polygon(0 18%, 15% 5%, 35% 0, 55% 6%, 75% 12%, 100% 20%, 100% 100%, 0 100%)",
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
            flex gap-[24px]
            px-[16px] md:px-[24px] pr-[120px]
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
                  className="
                    bg-white rounded-[34px] border-[8px] border-white
                    flex flex-col items-center

                    /* DESKTOP */
                    w-[661px] h-[456px]

                    /* TABLET */
                    md:w-[520px] md:h-[380px]

                    /* MOBILE */
                    w-[340px] h-[320px]
                  "
                >
                  <img
                    src={story.image}
                    alt=""
                    className="
                      rounded-[24px] object-cover

                      /* DESKTOP */
                      w-[635px] h-[387px]

                      /* TABLET */
                      md:w-[480px] md:h-[300px]

                      /* MOBILE */
                      w-[300px] h-[240px]
                    "
                  />

                  <p
                    className="
                      mt-[12px]
                      px-[18px]
                      text-center
                      text-[16px]
                      leading-[120%]

                      sm:text-[14px]
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
        <p
          className="mt-[32px] text-center text-[14px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          ← scroll to explore more →
        </p>
      </div>
    </section>
  );
}
