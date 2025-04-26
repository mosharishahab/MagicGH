import React from 'react'
import MagicSunAndCloud from './MagicSunAndCloud'
import './index.css'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 overflow-hidden">

      {/* ابر و خورشید کارتونی */}
      <MagicSunAndCloud />

      {/* کارت خوش آمد */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-48">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-lg">
          به قصه‌ساز خوش اومدی!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          بزن بریم یک داستان جادویی بسازیم
        </p>
        <button
          onClick={() => alert('مرحله‌ی بعدی آماده میشه')}
          className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-600 transition duration-300"
        >
          شروع قصه
        </button>
      </div>

    </div>
  )
}

export default App