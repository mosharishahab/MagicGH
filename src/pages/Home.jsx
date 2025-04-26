
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && animal && topic) {
      const query = new URLSearchParams({ name, animal, topic }).toString();
      navigate(`/story?${query}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-900 to-indigo-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">قصه‌ی جادویی مخصوص تو!</h1>

      <input className="m-2 p-2 rounded text-black" placeholder="اسم کودک" onChange={(e) => setName(e.target.value)} />
      <input className="m-2 p-2 rounded text-black" placeholder="حیوان مورد علاقه" onChange={(e) => setAnimal(e.target.value)} />
      <input className="m-2 p-2 rounded text-black" placeholder="موضوع یا پیام قصه" onChange={(e) => setTopic(e.target.value)} />

      <button onClick={handleSubmit} className="bg-purple-700 hover:bg-purple-900 p-3 rounded-lg mt-4">
        بساز قصه!
      </button>
    </div>
  );
}

export default Home;
