import React from "react";

const STATS = [
  { value: "17", label: "States present in", icon: "/public/U9q1R0.tif.png" },
  { value: "66", label: "Districts present in", icon: "/public/U9q1R0.tif.png" },
  { value: "10,000+", label: "Nand Ghars", icon: "/public/Layer_1.png" },
  { value: "4,00,000+", label: "Children impacted", icon: "/public/Layer_2.png" },
  { value: "3,00,000+", label: "Women impacted", icon: "/public/Layer_2 (1).png" },
];

export default function AtGlance() {
  return (
    <section className="w-full bg-[#F7F5EF]">
      {/* FRAME */}
      <div className="max-w-[1440px] mx-auto px-[16px] lg:px-[80px] py-[30px] flex flex-col items-center gap-[24px]">
        
        {/* ROOF VECTOR */}
        <div className="w-[262px] h-[57.5px]">
          <svg
            width="262"
            height="58"
            viewBox="0 0 262 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 56L131 2L260 56"
              stroke="#1D69AC"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* MAIN TEXT */}
        <p
          className="
            max-w-[693px]
            text-center
            text-[18px] sm:text-[20px] lg:text-[22px]
            leading-[22px]
            font-semibold
            font-parkinsans
            text-[#1E1E1E]
          "
        >
          Reimagining Anganwadis into modern centres of learning, nutrition,
          healthcare, and opportunity ensuring every child and woman in rural
          India can rise to their fullest potential.
        </p>

        {/* SECTION LABEL */}
        <span
          className="
            text-[14px] lg:text-[16px]
            leading-[16px]
            font-medium
            font-outfit
            text-[#1E1E1E]
            text-center
          "
        >
          OUR REACH & IMPACT
        </span>

        {/* STATS GRID */}
        <div className="w-full mt-[12px]">
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
                  border
                  border-[#E6E6E6]
                  rounded-[12px]
                  flex
                  items-center
                  justify-between
                "
              >
                {/* TEXT */}
                <div className="flex flex-col gap-[8px]">
                  <span
                    className="
                      text-[#1D69AC]
                      text-[22px] lg:text-[24px]
                      font-medium
                      leading-[24px]
                      font-parkinsans
                    "
                  >
                    {item.value}
                  </span>
                  <span className="text-[14px] leading-[14px] text-[#4A4A4A]">
                    {item.label}
                  </span>
                </div>

                {/* ICON */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-[44px] h-[44px] lg:w-[54px] lg:h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
