import type { MouseEventHandler, ReactNode } from "react";

const ShimmeringButton = ({
  title,
  icon,
  otherClasses = "",
  handleClick = () => {},
}: {
  title?: string;
  icon?: ReactNode;
  otherClasses?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`z-20 inline-flex h-12 animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-6 text-lg font-bold text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-700 ${otherClasses}`}
      onClick={handleClick}
      type="button"
    >
      {icon}
      {title ? <span>{title}</span> : null}
    </button>
  );
};

export default ShimmeringButton;
