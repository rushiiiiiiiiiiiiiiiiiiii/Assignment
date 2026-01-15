import React, { useState } from "react";

const PILLARS = [
  {
    id: 1,
    title: "Nutrition & Food Security",
    subtitle: "healthy meals, nourishment, growth",
    icon: "/u07V2J.tif.png",
    image: "/Education.jpg",
  },
  {
    id: 2,
    title: "Smart Early Education",
    subtitle: "interactive, digital, inclusive",
    icon: "/public/u07V2J.tif.png",
    image: "/Education.jpg",
  },
  {
    id: 3,
    title: "Health & Wellness",
    subtitle: "preventive care, wellbeing",
    icon: "/Group.png",
    image: "/Education.jpg",
  },
  {
    id: 4,
    title: "Women Empowerment",
    subtitle: "skills, livelihoods, leadership",
    icon: "/Layer_2 (1).png",
    image: "/Education.jpg",
  },
];

export default function OurPillars() {
  const [hoveredId, setHoveredId] = useState(0); // default hovered like Figma

  return (
    <section className="w-full bg-[#F7F5EF]">
      {/* 1440 FRAME */}
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[40px]">
        {/* TITLE */}
        <h4
          className="text-center text-[16px] font-medium mb-[20px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          OUR PILLARS
        </h4>

        {/* DESKTOP / TABLET ROW */}
        <div className="hidden lg:block">
          <div
            className="
      max-w-[1280px]
      mx-auto
      overflow-x-auto
      no-scrollbar
    "
          >
            <div className="flex gap-[24px] w-max">
              {PILLARS.map((item) => {
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    className={`
              bg-white
              rounded-[24px]
              p-[24px]
              h-[389px]
              flex
              flex-col
              transition-all
              duration-300
              ease-in-out
              shrink-0
              ${isHovered ? "w-[400px]" : "w-[240px]"}
            `}
                  >
                    {/* DEFAULT STATE */}
                    {!isHovered && (
                      <>
                        <div className="flex-1" />

                        <div className="flex flex-col gap-[10px]">
                          <img
                            src={item.icon}
                            alt=""
                            className="w-[52px] h-[58px]"
                          />

                          <h2
                            className="text-[22px] font-semibold leading-[22px]"
                            style={{ fontFamily: "Parkinsans, sans-serif" }}
                          >
                            {item.title}
                          </h2>
                        </div>
                      </>
                    )}

                    {/* HOVER STATE */}
                    {isHovered && (
                      <>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[352px] h-[253px] rounded-[12px] object-cover"
                        />

                        <div className="mt-[16px]">
                          <h2
                            className="text-[22px] font-semibold leading-[22px]"
                            style={{ fontFamily: "Parkinsans, sans-serif" }}
                          >
                            {item.title}
                          </h2>

                          <p
                            className="text-[16px] mt-[6px]"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE — HORIZONTAL SCROLL */}
        <div className="lg:hidden overflow-x-auto no-scrollbar">
          <div className="flex gap-[16px] w-max pr-[16px]">
            {PILLARS.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setHoveredId(item.id)}
                  className={`
                    bg-white
                    rounded-[24px]
                    p-[20px]
                    h-[360px]
                    w-[280px]
                    flex
                    flex-col
                    transition-all
                    duration-300
                    ${isHovered ? "ring-2 ring-[#1D69AC]" : ""}
                  `}
                >
                  {!isHovered && (
                    <>
                      <div className="flex-1" />

                      <img
                        src={item.icon}
                        alt=""
                        className="w-[44px] h-[48px]"
                      />

                      <h2
                        className="mt-[8px] text-[18px] font-semibold leading-[20px]"
                        style={{ fontFamily: "Parkinsans, sans-serif" }}
                      >
                        {item.title}
                      </h2>
                    </>
                  )}

                  {isHovered && (
                    <>
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[180px] rounded-[12px] object-cover"
                      />

                      <div className="mt-[12px]">
                        <h2
                          className="text-[18px] font-semibold"
                          style={{ fontFamily: "Parkinsans, sans-serif" }}
                        >
                          {item.title}
                        </h2>

                        <p
                          className="text-[14px] mt-[4px]"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
