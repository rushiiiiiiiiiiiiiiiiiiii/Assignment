import React from "react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* ================= CTA STRIP ================= */}
      <div className="bg-[#A8D08D]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-[10px]
            h-[112px]

            grid
            grid-cols-[464px_1fr]
            items-center

            max-lg:px-[24px]
            max-lg:grid-cols-1
            max-lg:h-auto
            max-lg:py-[32px]
            max-lg:gap-[24px]
          "
        >
          {/* TEXT */}
          <p
            className="
              text-[22px]
              leading-[28px]
              font-medium
              text-center
            "
            style={{ fontFamily: "Parkinsans, sans-serif" }}
          >
            Every rupee, every hour, every hand builds India’s tomorrow.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-[12px] justify-end flex-wrap max-lg:justify-start">
            <CTAButton outline>ADOPT A NAND GHAR</CTAButton>
            <CTAButton outline>DONATE NOW</CTAButton>
            <CTAButton filled>PARTNER WITH US</CTAButton>
            <CTAButton filled>VOLUNTEER WITH US</CTAButton>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-[#5BAF26]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-[40px]
            py-[48px]

            grid
            grid-cols-[360px_1fr]
            gap-x-[60px]

            max-lg:px-[24px]
            max-lg:grid-cols-1
            max-lg:gap-y-[40px]
          "
        >
          {/* LOGOS */}
          <div className="flex items-start gap-[32px]">
            <img
              src="/footerlogo.png"
              alt="Foundation Logos"
              className="h-[86px]"
            />
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              grid-cols-4

              max-lg:grid-cols-2
              max-sm:grid-cols-1
              max-lg:gap-y-[32px]
            "
          >
            <FooterColumn title="NAVIGATE">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Impact</li>
              <li>Gallery</li>
              <li>Media</li>
              <li>Resources</li>
            </FooterColumn>

            <FooterColumn title="OUR WORK">
              <li>Education</li>
              <li>Nutrition</li>
              <li>Healthcare</li>
              <li>Women’s Empowerment</li>
            </FooterColumn>

            <FooterColumn title="GET INVOLVED">
              <li>Donate Now</li>
              <li>Adopt a Nand Ghar</li>
              <li>Partner with Us</li>
              <li>Volunteer with Us</li>
              <li>Spread the Word</li>
              <li>Contact Us</li>
            </FooterColumn>

            <FooterColumn title="FIND US">
              <li className="flex items-start gap-[8px]">
                <img src="/loc.png" className="w-[16px] h-[16px] mt-[3px]" />
                Core-6, 3rd Flr, Scope Complex, Lodhi Road, Delhi-110003
              </li>
              <li className="flex items-center gap-[8px]">
                <img src="/email.png" className="w-[16px] h-[16px]" />
                contactus@nandghar.org
              </li>
              <li className="flex items-center gap-[8px]">
                <img src="/wp.png" className="w-[16px] h-[16px]" />
                +91 7307356813
              </li>
              <li className="flex items-center gap-[8px]">
                <img src="/watch.png" className="w-[16px] h-[16px]" />
                9:30 AM to 6 PM
              </li>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

function CTAButton({ children, outline, filled }) {
  return (
    <button
      className={`
        h-[47px]
        px-[24px]
        rounded-full
        text-[14px]
        font-medium
        whitespace-nowrap

        ${outline ? "border-2 border-[#1D69AC] text-[#1D69AC]" : ""}
        ${filled ? "bg-[#FFD200] text-[#1D69AC] border-2 border-[#FFD200]" : ""}
      `}
    >
      {children}
    </button>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white text-[14px] font-semibold mb-[14px]">
        {title}
      </h4>
      <ul className="text-white text-[13px] leading-[22px] space-y-[6px]">
        {children}
      </ul>
    </div>
  );
}
