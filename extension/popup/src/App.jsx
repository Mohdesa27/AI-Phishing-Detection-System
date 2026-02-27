import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const checkWebsite = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const response = await fetch("http://localhost:5000/api/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: tab.url }),
    });

    const data = await response.json();
    setResult(data.status);
  };

  return (
    <div style={{ padding: 20, width: 300 }}>
      <h3>Phishing Detector</h3>
      <button onClick={checkWebsite}>Check Website</button>
      <p>{result}</p>
    </div>
  );
}

export default App;