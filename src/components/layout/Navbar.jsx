import Container from "../Container";
import logo from "/navlogo1.png";

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
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* translucent layer like figma */}
      <div className="bg-white/50 backdrop-blur-sm">
        <Container>
          <div className="flex items-center justify-between h-[64px]">
            {/* LOGO */}
            <img
              src={logo}
              alt="Nand Ghar"
              className="w-[194px] h-[50px] object-contain"
            />

            {/* MENU */}
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

            {/* DONATE NOW */}
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
                box-border
              "
            >
              DONATE NOW
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
