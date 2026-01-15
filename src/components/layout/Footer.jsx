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
            px-[80px]
            py-[32px]
          
            flex
            items-center
            justify-between
            max-lg:flex-col
            max-lg:items-start
            max-lg:gap-[24px]
            max-lg:px-[24px]
          "
        >
          {/* TEXT */}
          <p
            className="
              text-[22px]
              font-medium
              leading-[22px]
              max-w-[464px]
            "
            style={{ fontFamily: "Parkinsans, sans-serif" }}
          >
            Every rupee, every hour, every hand builds India’s tomorrow.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              flex
              gap-[10px]
              flex-nowrap

              max-lg:flex-wrap
            "
          >
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
            px-[80px]
            py-[36px]

            grid
            lg:grid-cols-[336px_1fr]
            gap-x-[98px]

            max-lg:grid-cols-1
            max-lg:gap-[32px]
            max-lg:px-[24px]
          "
        >
          {/* LOGOS */}
          <div className="flex items-start gap-[24px]">
            <img
              src="/footerlogo.png"
              alt="Anil Agarwal Foundation"
              className="h-[86px]"
            />
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              grid-cols-4
              gap-[48px]

              max-lg:grid-cols-2
              max-sm:grid-cols-1
            "
          >
            <FooterColumn title="NAVIGATE">
              <li className="whitespace-nowrap">Home</li>
              <li className="whitespace-nowrap">About Us</li>
              <li className="whitespace-nowrap">Our Impact</li>
              <li className="whitespace-nowrap">Gallery</li>
              <li className="whitespace-nowrap">Media</li>
              <li className="whitespace-nowrap">Resources</li>
            </FooterColumn>

            <FooterColumn title="OUR WORK">
              <li className="whitespace-nowrap">Education</li>
              <li className="whitespace-nowrap">Nutrition</li>
              <li className="whitespace-nowrap">Healthcare</li>
              <li className="whitespace-nowrap">Women’s Empowerment</li>
            </FooterColumn>

            <FooterColumn title="GET INVOLVED">
              <li className="whitespace-nowrap">Donate Now</li>
              <li className="whitespace-nowrap">Adopt a Nand Ghar</li>
              <li className="whitespace-nowrap">Partner with Us</li>
              <li className="whitespace-nowrap">Volunteer with Us</li>
              <li className="whitespace-nowrap">Spread the Word</li>
              <li className="whitespace-nowrap">Contact Us</li>
            </FooterColumn>

            <FooterColumn title="FIND US">
              <li className="flex items-start gap-[8px] whitespace-normal">
                <img src="/loc.png" className="w-[16px] h-[16px] mt-[2px]" />
                Core-6, 3rd Flr, Scope Complex, Lodhi Road, Delhi-110003
              </li>
              <li className="flex items-center gap-[8px] whitespace-nowrap">
                <img src="/email.png" className="w-[16px] h-[16px]" />
                contactus@nandghar.org
              </li>
              <li className="flex items-center gap-[8px] whitespace-nowrap">
                <img src="/wp.png" className="w-[16px] h-[16px]" />
                +91 7307356813
              </li>
              <li className="flex items-center gap-[8px] whitespace-nowrap">
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
        w-[200px]
        rounded-full
        text-[14px]
        font-medium
        whitespace-nowrap

        ${outline ? "border-[2px] border-[#1D69AC] text-[#1D69AC]" : ""}
        ${filled ? "bg-[#FFD200] text-black border-[2px] border-[#FFD200]" : ""}
      `}
    >
      {children}
    </button>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white text-[14px] font-semibold mb-[12px]">
        {title}
      </h4>
      <ul className="text-white text-[12px] leading-[18px] space-y-[6px]">
        {children}
      </ul>
    </div>
  );
}
