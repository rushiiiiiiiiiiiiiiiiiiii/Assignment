import React from "react";

const SOCIAL_UPDATES = [
  { id: 1, image: "/social1.png" },
  { id: 2, image: "/social2.png" },
  { id: 3, image: "/social3.png" },
  { id: 4, image: "/social4.png" },
  { id: 5, image: "/social5.png" },
  { id: 6, image: "/social6.jpg" },
  { id: 7, image: "/social7.jpg" },
  { id: 8, image: "/social8.jpg" },
];

export default function SocialUpdates() {
  return (
    <section className="w-full bg-[#F6F3ED]">
      <div
        className="
          max-w-[1440px]
          mx-auto

          px-[16px]
          sm:px-[24px]
          md:px-[40px]
          lg:px-[80px]

          py-[40px]
        "
      >
        {/* TITLE */}
        <p
          className="text-center text-[14px] tracking-wide mb-[40px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          SOCIAL UPDATES
        </p>

        {/* GRID */}
        <div
          className="
            grid
            gap-[24px]

            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {SOCIAL_UPDATES.map((item) => (
            <div
              key={item.id}
              className="
                w-full
                h-[360px]
                lg:h-[400px]

                bg-white
                overflow-hidden
                rounded-[24px]
              "
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* FOLLOW US */}
        <div className="mt-[40px] flex flex-col items-center gap-[12px]">
          <p
            className="text-[16px]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            FOLLOW US
          </p>

          <div className="flex items-center gap-[12px]">
            <a
              href="#"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>

            <a
              href="#"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
