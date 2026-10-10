import React from 'react';

interface LeomeEmblemProps {
  className?: string;
  size?: number;
}

export const LeomeEmblem: React.FC<LeomeEmblemProps> = ({ className = '', size = 38 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 select-none ${className}`}
    >
      <img
        src="/images/healthtour-seal.jpg"
        alt="HealthTour & Partners Official Medical Seal"
        className="w-full h-full object-cover rounded-full filter contrast-110"
        loading="eager"
      />
    </div>
  );
};

export const LeomeBrand: React.FC<{ subtitle?: string }> = () => {
  return (
    <div className="flex items-center gap-3.5 group cursor-pointer">
      <LeomeEmblem
        size={38}
        className="ring-1 ring-mint-300/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col">
        <span className="font-bold text-base sm:text-lg tracking-tight text-white leading-tight font-sans">
          HealthTour &amp;
        </span>
        <span className="font-bold text-base sm:text-lg tracking-tight text-white leading-tight font-sans">
          Partners
        </span>
      </div>
    </div>
  );
};
