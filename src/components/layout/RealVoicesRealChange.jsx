import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    image: "/public/Voice1.png",
    text: `“Several Anganwadi centers in Bharatpur district have been commendably developed into Nand Ghars. As a result, the public perception of Anganwadi centers has improved significantly...”`,
    name: "— Sikarama Ram Choyal, Deputy Director, Bharatpur",
  },
  {
    id: 2,
    image: "/public/Infrastructure.png",
    text: `“The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers...”`,
    name: "— District Education Officer",
  },
  {
    id: 3,
    image: "/public/Education.jpg",
    text: `“Nand Ghars have become a hub for community development, healthcare awareness, and child nutrition...”`,
    name: "— Block Development Officer",
  },
  {
    id: 4,
    image: "/public/Infrastructure.png",
    text: `“The infrastructure upgrades and digital enablement have transformed early education delivery...”`,
    name: "— District Education Officer",
  },
  {
    id: 5,
    image: "/public/Voice1.png",
    text: `“Several Anganwadi centers in Bharatpur district have been commendably developed into Nand Ghars...”`,
    name: "— Sikarama Ram Choyal, Deputy Director, Bharatpur",
  },
];

export default function RealVoicesRealChange() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goPrev = () => {
    stopAutoScroll();
    setActiveIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    stopAutoScroll();
    setActiveIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-[#A8D08D]">
      <div className="max-w-[1440px] mx-auto px-[24px] py-[20px]">

        {/* TITLE */}
        <p
          className="text-center text-[14px] uppercase tracking-wide mb-[24px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          REAL VOICES, REAL CHANGE
        </p>

        {/* CONTENT */}
        <div className="relative mx-auto max-w-[1232px]">

          {/* IMAGE */}
          <div className="flex justify-center mb-[20px]">
            <img
              src={TESTIMONIALS[activeIndex].image}
              alt=""
              className="
                w-[200px] h-[200px]
                md:w-[160px] md:h-[160px]
                sm:w-[120px] sm:h-[120px]
                rounded-[24px]
                border-[4px] border-white
                object-cover
              "
            />
          </div>

          {/* TEXT (LOCK HEIGHT) */}
          <p
            className="
              mx-auto
              max-w-[892px]
              min-h-[120px]
              text-center
              text-[16px]
              leading-[120%]
              md:text-[15px]
              sm:text-[14px]
              mb-[16px]
            "
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {TESTIMONIALS[activeIndex].text}
          </p>

          {/* NAME */}
          <p
            className="text-center text-[16px] sm:text-[14px]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {TESTIMONIALS[activeIndex].name}
          </p>

          {/* DOTS + ARROWS */}
          <div className="flex justify-center items-center gap-[12px] mt-[16px]">
            <button
              onClick={goPrev}
              className="text-[14px] text-[#1D69AC] opacity-60 hover:opacity-100"
            >
              ←
            </button>

            <div className="flex items-center gap-[8px]">
              {TESTIMONIALS.map((_, index) => (
                <span
                  key={index}
                  className={`
                    rounded-full transition-all duration-300
                    ${
                      index === activeIndex
                        ? "w-[10px] h-[10px] bg-[#1D69AC]"
                        : "w-[6px] h-[6px] bg-[#1D69AC]/40"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="text-[14px] text-[#1D69AC] opacity-60 hover:opacity-100"
            >
              →
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[40px] flex flex-col sm:flex-col items-center gap-[32px]">
          <p className="text-[16px]" style={{ fontFamily: "Outfit, sans-serif" }}>
            Be part of the transformation
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-[21px]">
            <button className="h-[47px] px-[24px] rounded-full border-[2px] border-[#1D69AC] text-[#1D69AC] text-[14px] font-medium">
              ADOPT A NAND GHAR
            </button>
            <button className="h-[47px] px-[24px] rounded-full border-[2px] border-[#1D69AC] text-[#1D69AC] text-[14px] font-medium">
              DONATE NOW
            </button>
            <button className="h-[47px] px-[24px] rounded-full bg-[#FFD200] text-[14px] font-medium">
              PARTNER WITH US
            </button>
            <button className="h-[47px] px-[24px] rounded-full bg-[#FFD200] text-[14px] font-medium">
              VOLUNTEER WITH US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
