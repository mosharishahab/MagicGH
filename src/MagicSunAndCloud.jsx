import React from 'react'

export default function MagicSunAndCloud() {
  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none overflow-hidden">
      
      {/* خورشید خندان با عینک دودی */}
      <svg className="absolute top-10 left-8 w-[120px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* نور خورشید */}
        <g stroke="#FFD700" strokeWidth="2">
          <line x1="50" y1="5" x2="50" y2="20" />
          <line x1="50" y1="80" x2="50" y2="95" />
          <line x1="5" y1="50" x2="20" y2="50" />
          <line x1="80" y1="50" x2="95" y2="50" />
          <line x1="20" y1="20" x2="30" y2="30" />
          <line x1="70" y1="70" x2="80" y2="80" />
          <line x1="20" y1="80" x2="30" y2="70" />
          <line x1="70" y1="30" x2="80" y2="20" />
        </g>
        {/* صورت خورشید */}
        <circle cx="50" cy="50" r="25" fill="#FFD700" stroke="#FFC400" strokeWidth="2" />
        {/* چشم‌ها */}
        <circle cx="42" cy="45" r="3" fill="#000" />
        <circle cx="58" cy="45" r="3" fill="#000" />
        {/* دهان لبخند */}
        <path d="M40 60 Q50 70 60 60" stroke="#000" strokeWidth="2" fill="transparent" />
        {/* عینک دودی */}
        <rect x="36" y="42" width="10" height="6" rx="2" fill="#111" />
        <rect x="54" y="42" width="10" height="6" rx="2" fill="#111" />
        <line x1="46" y1="45" x2="54" y2="45" stroke="#111" strokeWidth="2" />
      </svg>

      {/* ابر فانتزی نرم */}
      <svg className="absolute top-32 left-2 w-[350px]" viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFFFFF" stroke="#CCE6FF" strokeWidth="4">
          <ellipse cx="80" cy="75" rx="60" ry="45" />
          <ellipse cx="160" cy="65" rx="50" ry="40" />
          <ellipse cx="240" cy="80" rx="55" ry="45" />
          <ellipse cx="160" cy="100" rx="90" ry="55" />
        </g>
      </svg>

    </div>
  )
}