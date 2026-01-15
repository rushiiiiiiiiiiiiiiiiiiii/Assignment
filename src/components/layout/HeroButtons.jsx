export function HeroButtons() {
  return (
    <div className="flex gap-[18px]">
      {/* SUPPORT US */}
      <button
        className="
          h-[47px]
          px-[24px]
          border-2
          border-[#FFDA00]
          rounded-[999px]
          text-[14px]
          font-bold
          leading-[14px]
          text-[#FFDA00]
        "
      >
        SUPPORT US
      </button>

      {/* LEARN MORE */}
      <button
        className="
          h-[47px]
          px-[24px]
          bg-[#5BAF26]
          rounded-[999px]
          text-[14px]
          font-bold
          leading-[14px]
          text-white
        "
      >
        LEARN MORE
      </button>
    </div>
  );
}
