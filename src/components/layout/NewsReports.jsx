import React from "react";

const NEWS = [
  {
    id: 1,
    image: "/report1.png",
    category: "In The Press",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
  {
    id: 2,
    image: "/report2.png",
    category: "Blog",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
  {
    id: 3,
    image: "/report3.png",
    category: "Report",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
  {
    id: 4,
    image: "/report4.jpg",
    category: "Events",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
  {
    id: 5,
    image: "/report5.jpg",
    category: "Article",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
  {
    id: 6,
    image: "/report6.jpg",
    category: "Blog",
    date: "12-12-2026",
    title: "Nutrition | Nand Ghar | Anil Agarwal Foundation",
    description:
      "True reflection seldom keeps to the calendar; it arrives in its own time, after the noise has thinned, when the mind has learned to listen...",
  },
];

export default function NewsReports() {
  return (
    <section className="w-full bg-[#F7F5EF]">
      <div className="max-w-[1440px] mx-auto px-[16px] sm:px-[24px] lg:px-[80px] py-[40px]">
        {/* TITLE */}
        <p
          className="text-center text-[14px] uppercase tracking-wide mb-[24px]"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          NEWS & REPORTS
        </p>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[24px]
          "
        >
          {NEWS.map((item) => (
            <div key={item.id} className="flex flex-col gap-[12px]">
              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="
                  w-full
                  h-[224px]
                  object-cover
                  rounded-[24px]
                "
              />

              {/* META */}
              <div className="flex justify-between text-[12px] text-[#7CB342]">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>

              {/* TITLE */}
              <h4
                className="
                  text-[16px]
                  font-medium
                  leading-[100%]
                  text-[#1D69AC]
                "
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
                  text-[16px]
                  leading-[100%]
                  text-[#1E1E1E]
                "
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        <div className="flex justify-center mt-[32px]">
          <button
            className="
              h-[47px]
              px-[24px]
              rounded-full
              border-[2px]
              border-[#1D69AC]
              text-[#1D69AC]
              text-[14px]
              font-medium
            "
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
