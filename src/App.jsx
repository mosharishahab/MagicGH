import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [topic, setTopic] = useState('')
  const [story, setStory] = useState('')

  const generateStory = () => {
    const result = `روزی روزگاری کودکی به نام ${name} با حیوان مورد علاقه‌اش ${animal}، به دنبال ${topic} راهی یک ماجراجویی شاد و جادویی شد...`
    setStory(result)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-200 via-yellow-100 to-blue-200 p-6">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-8">قصه‌ساز جادویی</h1>

        <input
          className="border-2 border-pink-300 p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          placeholder="اسم کودک"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 border-yellow-300 p-3 mb-4 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          placeholder="حیوان مورد علاقه"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />
        <input
          className="border-2 border-blue-300 p-3 mb-6 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="موضوع داستان"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-bold transition transform hover:scale-105"
          onClick={generateStory}
        >
          بساز قصه!
        </button>

        {story && (
          <div className="mt-8 p-6 bg-yellow-100 rounded-xl shadow-inner text-gray-700 leading-8">
            <p>{story}</p>
          </div>
        )}
      </div>
    </div>
  )
}