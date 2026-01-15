export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        max-w-[1440px]
        mx-auto
        px-[24px]
        lg:px-[24px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
