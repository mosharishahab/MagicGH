import { useState } from 'react'

export default function App() {
  const [started, setStarted] = useState(false)

  if (!started) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* خورشید */}
        <div className="sun"></div>

        {/* ابرهای متحرک */}
        <div className="cloud"></div>
        <div className="cloud cloud2"></div>

        {/* پرنده‌های متحرک */}
        <div className="bird"></div>
        <div className="bird bird2"></div>

        {/* کارت شروع */}
        <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-md w-full z-10">
          <h1 className="text-5xl text-blue-500 font-extrabold mb-6">به قصه‌ساز خوش اومدی!</h1>
          <p className="text-lg text-gray-600 mb-8">بزن بریم یک داستان جادویی بسازیم</p>
          <button
            className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-xl transition transform hover:scale-110"
            onClick={() => setStarted(true)}
          >
            شروع قصه
          </button>
        </div>
      </div>
    )
  }

  // بعد از شروع قصه
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-100 via-yellow-100 to-blue-100 p-4">
      <h2 className="text-3xl text-blue-600 font-extrabold">اینجا فرم وارد کردن اسم کودک، حیوان و موضوع قصه میاد</h2>
    </div>
  )
}