import React, { useState } from "react";

function InputForm({ onSubmit }) {
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ goal, duration });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md m-4">
      <h2 className="text-xl font-bold mb-2">Enter Learning Goal</h2>
      <input
        type="text"
        placeholder="Goal (e.g., Microcontrollers)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 m-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Duration (weeks)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="border p-2 m-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">
        Generate Path
      </button>
    </form>
  );
}

export default InputForm;
