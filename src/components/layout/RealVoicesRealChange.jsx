import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    image: "/public/Voice1.png",
    text: `“Several Anganwadi centers in Bharatpur district have been commendably developed into Nand Ghars. As a result, the public perception of Anganwadi centers has improved significantly. The morale of the staff—workers and helpers—has been boosted, and children are now experiencing a vibrant educational environment. The transformation of Anganwadi buildings into Nand Ghars has also increased their longevity. With their modern classroom-like appearance, Nand Ghars have sparked greater interest in learning among children. We extend our heartfelt thanks to the Vedanta Group for this initiative.”`,
    name: "— Sikarama Ram Choyal, Deputy Director, Bharatpur",
  },
  {
    id: 2,
    image: "/public/Infrastructure.png",
    text: `“The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery.”`,
    name: "— District Education Officer",
  },
  {
    id: 3,
    image: "/public/Education.jpg",
    text: `“Nand Ghars have become a hub for community development, healthcare awareness, and child nutrition. The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers. The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers. The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.”`,
    name: "— Block Development Officer",
  },
  {
    id: 4,
    image: "/public/Infrastructure.png",
    text: `“The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery. Parents are more engaged and attendance has improved across centers.The infrastructure upgrades and digital enablement have transformed early education delivery.”`,
    name: "— District Education Officer",
  },
  {
    id: 5,
    image: "/public/Voice1.png",
    text: `“Several Anganwadi centers in Bharatpur district have been commendably developed into Nand Ghars. As a result, the public perception of Anganwadi centers has improved significantly. The morale of the staff—workers and helpers—has been boosted, and children are now experiencing a vibrant educational environment. The transformation of Anganwadi buildings into Nand Ghars has also increased their longevity. With their modern classroom-like appearance, Nand Ghars have sparked greater interest in learning among children. We extend our heartfelt thanks to the Vedanta Group for this initiative.”`,
    name: "— Sikarama Ram Choyal, Deputy Director, Bharatpur",
  },
];

export default function RealVoicesRealChange() {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SCROLL (FIGMA BEHAVIOR)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5s like Figma feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#A8D08D]">
      {/* 1440 FRAME */}
      <div className="max-w-[1440px] mx-auto px-[24px] py-[40px]">
        {/* TITLE */}
        <p
          className="text-center text-[14px] uppercase tracking-wide mb-[24px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          REAL VOICES, REAL CHANGE
        </p>

        {/* CONTENT WRAPPER */}
        <div className="relative mx-auto max-w-[1232px]">
          {/* IMAGE */}
          <div className="flex justify-center mb-[20px]">
            <img
              src={TESTIMONIALS[activeIndex].image}
              alt=""
              className="w-[200px] h-[200px] rounded-[24px] border-[4px] border-white object-cover"
            />
          </div>

          {/* TEXT */}
          <p
            className="mx-auto max-w-[892px] text-center text-[16px] leading-[100%] mb-[16px]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {TESTIMONIALS[activeIndex].text}
          </p>

          {/* NAME */}
          <p
            className="text-center text-[16px]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {TESTIMONIALS[activeIndex].name}
          </p>
          {/* DOTS WITH ARROWS */}
          <div className="flex justify-center items-center gap-[12px] mt-[16px]">
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                )
              }
              className="text-[14px] text-[#1D69AC] opacity-60 hover:opacity-100 transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-[8px]">
              {TESTIMONIALS.map((_, index) => {
                const isActive = index === activeIndex;

                return (
                  <span
                    key={index}
                    className={`
            rounded-full
            transition-all
            duration-300
            ${
              isActive
                ? "w-[10px] h-[10px] bg-[#1D69AC]"
                : "w-[6px] h-[6px] bg-[#1D69AC]/40"
            }
          `}
                  />
                );
              })}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                )
              }
              className="text-[14px] text-[#1D69AC] opacity-60 hover:opacity-100 transition"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-[40px] flex items-center justify-center gap-[32px]">
          {/* TEXT */}
          <p
            className="text-[16px]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Be part of the transformation
          </p>

          {/* BUTTON GRID */}
          <div className="grid grid-cols-2 gap-[21px]">
            {/* TOP */}
            <button className="h-[47px] px-[24px] rounded-full border-[2px] border-[#1D69AC] text-[#1D69AC] text-[14px] font-medium">
              ADOPT A NAND GHAR
            </button>

            <button className="h-[47px] px-[24px] rounded-full border-[2px] border-[#1D69AC] text-[#1D69AC] text-[14px] font-medium">
              DONATE NOW
            </button>

            {/* BOTTOM */}
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
