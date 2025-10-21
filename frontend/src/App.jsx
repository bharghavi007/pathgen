import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "./components/InputForm";
import Roadmap from "./components/Roadmap";
import Login from "./components/Login";
import History from "./components/History";

function App() {
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || [],
  );
  const [lastGoal, setLastGoal] = useState("");
  const [lastDuration, setLastDuration] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedRoadmap = JSON.parse(localStorage.getItem("roadmap"));
    const savedLastGoal = localStorage.getItem("lastGoal");
    const savedLastDuration = localStorage.getItem("lastDuration");
    if (savedName) setUser(savedName);
    if (savedRoadmap) setRoadmap(savedRoadmap);
    if (savedLastGoal) setLastGoal(savedLastGoal);
    if (savedLastDuration) setLastDuration(savedLastDuration);
  }, []);

  const handleSubmit = async ({ goal, duration }) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/generate", {
        goal,
        duration,
      });
      const lines = res.data.result
        .split("\n")
        .filter((line) => line.trim() !== "");
      const parsed = lines.map((topic, i) => ({ topic }));
      setRoadmap(parsed);
      localStorage.setItem("roadmap", JSON.stringify(parsed));
      setLastGoal(goal);
      setLastDuration(duration);
      localStorage.setItem("lastGoal", goal);
      localStorage.setItem("lastDuration", duration);
      const newHistory = [
        ...history,
        { goal, duration, date: new Date().toLocaleDateString() },
      ];
      setHistory(newHistory);
      localStorage.setItem("history", JSON.stringify(newHistory));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Hi {user} 👋 — Let’s create your learning path!
      </h2>
      <InputForm onSubmit={handleSubmit} />
      {loading ? (
        <p className="text-gray-500 text-center">Generating...</p>
      ) : (
        <>
          <Roadmap
            roadmap={roadmap}
            onRegenerate={() => {
              if (lastGoal && lastDuration) {
                handleSubmit({ goal: lastGoal, duration: lastDuration });
              } else {
                console.warn("No previous path to regenerate.");
              }
            }}
          />
          {history.length > 0 && (
            <History
              history={history}
              onSelectHistoryItem={({ goal, duration }) =>
                handleSubmit({ goal, duration })
              }
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
