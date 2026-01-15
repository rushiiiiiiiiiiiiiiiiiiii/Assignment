import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/navlogo1.png";

const MENU = [
  { label: "ABOUT US", hash: "#about" },
  { label: "OUR WORK", hash: "#our-work" },
  { label: "OUR IMPACT", hash: "#our-impact" },
  { label: "GALLERY", hash: "#gallery" },
  { label: "GET INVOLVED", hash: "#get-involved" },
  { label: "MEDIA", hash: "#media" },
  { label: "RESOURCES", hash: "#resources" },
  { label: "CONTACT", hash: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ===== FIGMA GLASS BAR ===== */}
      <div className="bg-white/50 backdrop-blur-[24px]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-[24px]
            h-[64px]
            flex
            items-center
          "
        >
          {/* ===== LOGO (194px exactly) ===== */}
          <div className="w-[194px] flex items-center">
            <img
              src={logo}
              alt="Nand Ghar"
              className="h-[50px] w-auto object-contain"
            />
          </div>

          {/* ===== DESKTOP NAV (997px block) ===== */}
          <nav
            className="
              hidden lg:flex
              items-center
              gap-[34px]
              ml-[85px]
              w-[997px]
            "
          >
            {MENU.map((item) => (
              <a
                key={item.label}
                href={item.hash}
                className="
                  text-[14px]
                  font-bold
                  leading-[14px]
                  text-black
                  whitespace-nowrap
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ===== CTA (RIGHT ALIGNED, 24px padding) ===== */}
          <div className="hidden lg:flex ml-auto">
            <a
              href="#donate"
              className="
                h-[47px]
                min-w-[145px]
                px-[24px]
                flex items-center justify-center
                border-2 border-[#1D69AC]
                rounded-full
                text-[13.6px]
                font-bold
                text-[#1D69AC]
              "
            >
              DONATE NOW
            </a>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-auto p-[8px]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-[600px]" : "max-h-0"}
        `}
      >
        <div className="bg-white border-t border-black/10 px-[24px]">
          <nav className="flex flex-col py-[16px] gap-[16px]">
            {MENU.map((item) => (
              <a
                key={item.label}
                href={item.hash}
                onClick={() => setOpen(false)}
                className="text-[14px] font-semibold text-black"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#donate"
              className="
                mt-[12px]
                h-[47px]
                flex items-center justify-center
                border-2 border-[#1D69AC]
                rounded-full
                text-[14px]
                font-bold
                text-[#1D69AC]
              "
            >
              DONATE NOW
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
