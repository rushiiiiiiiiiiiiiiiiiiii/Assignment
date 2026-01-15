import { useState } from "react";
import Container from "../Container";
import logo from "/navlogo1.png";
import { Menu, X } from "lucide-react";

const MENU = [
  "ABOUT US",
  "OUR WORK",
  "OUR IMPACT",
  "GALLERY",
  "GET INVOLVED",
  "MEDIA",
  "RESOURCES",
  "CONTACT",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* translucent layer like figma */}
      <div className="bg-white/50 backdrop-blur-[24px]">
        <Container>
          <div className="flex items-center justify-between h-[64px]">
            {/* LOGO */}
            <img
              src={logo}
              alt="Nand Ghar"
              className="w-[194px] h-[50px] object-contain"
            />

            {/* DESKTOP MENU (PIXEL PERFECT – UNCHANGED) */}
            <nav className="hidden lg:flex items-center gap-[34px] h-[18px]">
              {MENU.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-[14px]
                    font-bold
                    leading-[14px]
                    text-black
                    whitespace-nowrap
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <button
              className="
                hidden lg:flex
                items-center justify-center
                h-[47px]
                min-w-[145px]
                px-[24px]
                border-2 border-[#1D69AC]
                rounded-[999px]
                text-[14px]
                font-bold
                leading-[14px]
                text-[#1D69AC]
              "
            >
              DONATE NOW
            </button>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-[8px]"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white border-t border-black/10">
          <Container>
            <nav className="flex flex-col py-[16px] gap-[16px]">
              {MENU.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="
                    text-[14px]
                    font-semibold
                    text-black
                  "
                >
                  {item}
                </a>
              ))}

              {/* MOBILE CTA */}
              <button
                className="
                  mt-[12px]
                  h-[47px]
                  w-full
                  border-2 border-[#1D69AC]
                  rounded-[999px]
                  text-[14px]
                  font-bold
                  text-[#1D69AC]
                "
              >
                DONATE NOW
              </button>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
