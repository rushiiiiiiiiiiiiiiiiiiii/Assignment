import React from "react";

const STATS = [
  { value: "17", label: "States present in", icon: "/U9q1R0.tif.png" },
  { value: "66", label: "Districts present in", icon: "/U9q1R0.tif.png" },
  { value: "10,000+", label: "Nand Ghars", icon: "/Layer_1.png" },
  { value: "4,00,000+", label: "Children impacted", icon: "/Layer_2.png" },
  { value: "3,00,000+", label: "Women impacted", icon: "/Layer_2 (1).png" },
];

export default function AtGlance() {
  return (
    <section className="w-full bg-[#F7F5EF]">
      {/* 1440 FRAME */}
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[30px] flex flex-col items-center gap-[24px]">
        {/* ROOF VECTOR */}
        <div className="w-[262px] h-[58px]">
          <img
            src="/Vector (2).png"
            alt="Roof decoration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* MAIN TEXT — PIXEL PERFECT DESKTOP */}
        <p
          className="
            w-full
            max-w-[693px]
            text-center
            font-semibold
            text-[#1F2937]

            text-[16px]
            leading-[28px]

            lg:text-[22px]
            lg:leading-[22px]
          "
          style={{ fontFamily: "Parkinsans, sans-serif" }}
        >
          Reimagining Anganwadis into modern centres of learning, nutrition,
          healthcare, and opportunity ensuring every child and woman in rural
          India can rise to their fullest potential.
        </p>

        {/* SECTION LABEL */}
        <span
          className="
            text-[14px]
            lg:text-[16px]
            leading-[16px]
            font-medium
            mt-[28px]
            text-[#1E1E1E]
          "
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          OUR REACH & IMPACT
        </span>

        {/* STATS — DESKTOP LOCKED */}
        <div className="w-full mt-[px]">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-5
              gap-[14px]

              max-w-[1280px]
              mx-auto
            "
          >
            {STATS.map((item) => (
              <div
                key={item.label}
                className="
                  h-[86px]
                  px-[12px]
                  py-[12px]
                  bg-white
                  border border-[#E6E6E6]
                  rounded-[12px]

                  flex
                  items-center
                  justify-between
                "
              >
                {/* TEXT */}
                <div className="flex flex-col gap-[6px]">
                  <span
                    className="
                      text-[#1D69AC]
                      text-[24px]
                      leading-[24px]
                      font-medium
                    "
                    style={{ fontFamily: "Parkinsans, sans-serif" }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="text-[14px] leading-[14px] text-[#4A4A4A]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>

                {/* ICON */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-[54px] h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
