import React from 'react'

export default function MagicSunAndCloud() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">

      {/* خورشید کارتونی با نورهای چرخان */}
      <div className="absolute top-10 left-8 w-[120px] animate-bounce-slow">
        <div className="relative w-full h-full">
          {/* نورهای چرخان */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
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
            </svg>
          </div>

          {/* صورت خورشید */}
          <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
            <circle cx="50" cy="50" r="25" fill="#FFD700" stroke="#FFC400" strokeWidth="2" />
            {/* چشمک زدن */}
            <circle cx="42" cy="45" r="3" fill="#000" className="animate-blink" />
            <circle cx="58" cy="45" r="3" fill="#000" />
            {/* لبخند */}
            <path d="M40 60 Q50 70 60 60" stroke="#000" strokeWidth="2" fill="transparent" />
            {/* عینک دودی */}
            <rect x="36" y="42" width="10" height="6" rx="2" fill="#111" />
            <rect x="54" y="42" width="10" height="6" rx="2" fill="#111" />
            <line x1="46" y1="45" x2="54" y2="45" stroke="#111" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* ابر متحرک */}
      <svg viewBox="0 0 300 150" className="absolute top-32 left-2 w-[350px] animate-cloud-move" xmlns="http://www.w3.org/2000/svg">
        <g fill="#ffffff" stroke="#cce6ff" strokeWidth="4">
          <ellipse cx="80" cy="75" rx="60" ry="45" />
          <ellipse cx="140" cy="65" rx="50" ry="40" />
          <ellipse cx="210" cy="80" rx="55" ry="45" />
          <ellipse cx="140" cy="100" rx="90" ry="55" />
        </g>
      </svg>

    </div>
  )
}