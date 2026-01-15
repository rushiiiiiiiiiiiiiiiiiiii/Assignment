import React, { useEffect, useRef, useState } from "react";

const STORIES = [
  {
    id: 1,
    image: "/public/impact1.png",
    caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi",
  },
  {
    id: 2,
    image: "/public/impact2.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
  {
    id: 3,
    image: "/public/impact3.png",
    caption: "Walls of Hope",
  },
  {
    id: 2,
    image: "/public/impact2.png",
    caption:
      "MLA, Vishwaraj Mewar & MP Mahima Mewar, inaugurating Nand Ghars in Rajsamand",
  },
   {
    id: 3,
    image: "/public/impact3.png",
    caption: "Walls of Hope",
  },
  {
    id: 1,
    image: "/public/impact1.png",
    caption: "CM, UP, Yogi Adityanath visiting Nand Ghar in Varanasi",
  },
];

export default function StoriesOfChange() {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* 🔹 Detect active card based on scroll */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handleScroll = () => {
      const center = rail.scrollLeft + rail.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(rail.children).forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    rail.addEventListener("scroll", handleScroll);
    return () => rail.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#F7F5EF] overflow-hidden">
      {/* GREEN SHAPE */}
      <div
        className="absolute inset-x-0 top-0 h-[800px] bg-[#A8D08D]"
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
          className="flex gap-[24px] pl-[24px] pr-[120px]
                     overflow-x-auto scroll-smooth
                     no-scrollbar"
        >
          {STORIES.map((story, index) => {
            const isActive = index === activeIndex;
            const isNear = Math.abs(index - activeIndex) === 1;

            return (
              <div
                key={story.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex-shrink-0 transition-transform duration-500 ease-out
                  ${
                    isActive
                      ? "scale-100 z-20"
                      : isNear
                      ? "scale-[0.92] z-10"
                      : "scale-[0.85] opacity-80"
                  }`}
              >
                <div className="bg-white rounded-[34px] border-[8px] border-white
                                w-[661px] h-[456px]
                                flex flex-col items-center">
                  <img
                    src={story.image}
                    alt=""
                    className="w-[635px] h-[387px] rounded-[24px] object-cover"
                  />

                  <p
                    className="mt-[12px] px-[16px] text-center text-[16px] leading-[100%]"
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
