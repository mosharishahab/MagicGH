import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [topic, setTopic] = useState('')
  const [story, setStory] = useState('')

  const generateStory = () => {
    const result = `روزی روزگاری کودکی به نام ${name} با حیوان مورد علاقه‌اش ${animal}، به دنبال ${topic} راهی یک ماجراجویی جادویی شد...`
    setStory(result)
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-4 text-right font-sans">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">قصه‌ساز جادویی</h1>
      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="اسم کودک"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="حیوان مورد علاقه"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      />
      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="موضوع داستان"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={generateStory}
      >
        بساز قصه!
      </button>
      {story && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <p className="leading-8">{story}</p>
        </div>
      )}
    </div>
  )
}
