import React from 'react'
import './MagicSunAndCloud.css'

export default function MagicSunAndCloud() {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* خورشید با عینک دودی */}
      <div className="absolute top-4 left-8 z-10">
        <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow">
          {/* نورهای چرخان */}
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="10"
              r="5"
              fill="#FFD700"
              transform={`rotate(${i * 45},50,50)`}
            />
          ))}
          {/* خورشید اصلی */}
          <circle cx="50" cy="50" r="25" fill="#FFD700" stroke="#fbbf24" strokeWidth="2" />
          {/* چشم‌ها */}
          <circle cx="42" cy="45" r="2" fill="#333" />
          <circle cx="58" cy="45" r="2" fill="#333" />
          {/* لبخند */}
          <path d="M40,60 Q50,70 60,60" stroke="#333" strokeWidth="2" fill="none" />
          {/* عینک دودی */}
          <rect x="36" y="42" width="10" height="6" fill="#333" />
          <rect x="54" y="42" width="10" height="6" fill="#333" />
          <line x1="46" y1="45" x2="54" y2="45" stroke="#333" strokeWidth="2" />
        </svg>
      </div>

      {/* ابر فانتزی */}
      <div className="absolute top-20 left-4 w-72 z-0 opacity-90">
        <svg viewBox="0 0 300 120">
          <ellipse cx="60" cy="60" rx="50" ry="30" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
          <ellipse cx="110" cy="50" rx="60" ry="35" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
          <ellipse cx="170" cy="60" rx="55" ry="30" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
          <ellipse cx="110" cy="80" rx="100" ry="40" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}