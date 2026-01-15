import React from "react";

export default function InfrastructureUpgradation() {
  return (
    <section className="w-full bg-[#F7F5EF]">
      {/* 1440 FRAME */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px]">
        {/* ROW */}
        <div className="flex justify-between items-start">
          
          {/* LEFT CONTENT */}
          <div className="w-[512px] flex flex-col gap-[12px]">
            
            {/* ROOF VECTOR */}
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

            {/* TITLE */}
            <h2
              className="text-[22px] mt-[10px] font-semibold leading-[22px] mb-[10px] text-[#1E1E1E]"
              style={{ fontFamily: "Parkinsans, sans-serif" }}
            >
              Infrastructure Upgradation
            </h2>

            {/* DESCRIPTION */}
            <p
              className="text-[16px] leading-[16px] text-[#1E1E1E]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Nand Ghars are modern Anganwadis designed as lively, creative spaces
              with equipped with LED television, child-friendly furniture, access to
              clean water, play areas, hygienic toilets, and dedicated health
              and nutrition areas. Infrastructure upgradation is the cornerstone
              of Nand Ghar creating pathways to better learning, nutrition,
              healthcare, and women’s empowerment.
            </p>

            {/* CTA BUTTON */}
            <button
              className="
                mt-[12px]
                w-[137px]
                h-[47px]
                rounded-[999px]
                border-[2px]
                border-[#1D69AC]
                text-[#1D69AC]
                text-[14px]
                font-medium
                flex
                items-center
                justify-center
              "
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              KNOW MORE
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[660px] h-[371px]">
            <img
              src="/public/Infrastructure.png"
              alt="Infrastructure Upgradation"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
