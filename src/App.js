import React, { useEffect, useState } from "react";
import { getHealth } from "./api";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const fetchHealth = async () => {
      const data = await getHealth();
      if (data) {
        setStatus("Backend is running!");
      } else {
        setStatus("Unable to reach backend.");
      }
    };
    fetchHealth();
  }, []);

  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
}

export default App;
