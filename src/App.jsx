import React, { useState } from 'react'
import './index.css'

export default function App() {
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [topic, setTopic] = useState('')
  const [story, setStory] = useState('')

  const generateStory = () => {
    setStory(
      `روزی روزگاری کودکی به نام ${name} با حیوان مورد علاقه‌اش ${animal}،  
      به دنبال ${topic} یک ماجراجویی جادویی را تجربه کرد…`
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 to-blue-100 p-4">
      <h1 className="text-4xl font-bold mb-6">قصه‌ساز جادویی</h1>
      <input
        className="border p-2 mb-4 w-full max-w-md rounded"
        placeholder="اسم کودک"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-full max-w-md rounded"
        placeholder="حیوان مورد علاقه"
        value={animal}
        onChange={e => setAnimal(e.target.value)}
      />
      <input
        className="border p-2 mb-6 w-full max-w-md rounded"
        placeholder="موضوع داستان"
        value={topic}
        onChange={e => setTopic(e.target.value)}
      />
      <button
        onClick={generateStory}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        بساز قصه!
      </button>
      {story && (
        <div className="mt-8 p-4 bg-white rounded shadow max-w-md text-right">
          <p>{story}</p>
        </div>
      )}
    </div>
  )
}