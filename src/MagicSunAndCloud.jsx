import React from 'react'

export default function MagicSunAndCloud() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* خورشید */}
      <svg className="absolute top-5 left-8 w-[120px] animate-spin-slow" viewBox="0 0 100 100">
        {/* نورهای چرخان */}
        <circle cx="50" cy="10" r="5" fill="#ffd700" />
        <circle cx="90" cy="50" r="5" fill="#ffd700" />
        <circle cx="50" cy="90" r="5" fill="#ffd700" />
        <circle cx="10" cy="50" r="5" fill="#ffd700" />
        {/* خورشید اصلی */}
        <circle cx="50" cy="50" r="25" fill="#ffcc00" stroke="#ffaa00" strokeWidth="3" />
        {/* صورت خندان */}
        <circle cx="42" cy="45" r="2" fill="#000" />
        <circle cx="58" cy="45" r="2" fill="#000" />
        <path d="M40,60 Q50,70 60,60" stroke="#000" strokeWidth="2" fill="transparent" />
        {/* عینک دودی */}
        <rect x="36" y="42" width="10" height="6" rx="2" fill="#111" />
        <rect x="54" y="42" width="10" height="6" rx="2" fill="#111" />
        <line x1="46" y1="45" x2="54" y2="45" stroke="#111" strokeWidth="2" />
      </svg>

      {/* ابر خوشگل */}
      <svg className="absolute top-24 left-4 w-[300px]" viewBox="0 0 300 150">
        <g fill="#ffffff" stroke="#cce6ff" strokeWidth="4">
          <ellipse cx="75" cy="75" rx="60" ry="45" />
          <ellipse cx="140" cy="65" rx="50" ry="40" />
          <ellipse cx="210" cy="80" rx="55" ry="45" />
          <ellipse cx="140" cy="100" rx="90" ry="55" />
        </g>
      </svg>
    </div>
  )
}