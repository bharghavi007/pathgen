import React, { useState } from "react";
import InputForm from "../src/components/InputForm";
import Roadmap from "../src/components/RoadMap";

function App() {
  const [roadmap, setRoadmap] = useState([]);

  const handleSubmit = ({ goal, duration }) => {
    const placeholder = Array.from({ length: Number(duration) }, (_, i) => ({
      topic: `${goal} - Week ${i + 1} plan`,
    }));
    setRoadmap(placeholder);
  };

  return (
    <div className="App max-w-xl mx-auto p-4">
      <InputForm onSubmit={handleSubmit} />
      <Roadmap roadmap={roadmap} />
    </div>
  );
}

export default App;
