import React, { useState } from "react";
import axios from "axios";
import InputForm from "./components/InputForm";
import Roadmap from "./components/RoadMap";

function App() {
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({ goal, duration }) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/generate", { goal, duration });
      const lines = res.data.result.split("\n").filter((line) => line.trim() !== "");
      const parsed = lines.map((topic, i) => ({ topic }));
      setRoadmap(parsed);
    } catch (err) {
      console.error("Error:", err);
    }
    setLoading(false);
  };

  return (
    <div className="App max-w-xl mx-auto p-4">
      <InputForm onSubmit={handleSubmit} />
      {loading ? <p className="text-center text-gray-500">Generating...</p> : <Roadmap roadmap={roadmap} />}
    </div>
  );
}

export default App;
