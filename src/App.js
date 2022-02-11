import "./App.css";
import { useEffect, useState } from "react";
  //  functions
function App() {
  const fetchTopHeadlines = async () => {
    try {
      const response = await fetch("http://localhost:8080/top-headlines", {
        mode: "cors",
      });
      const data = await response.json();
      console.log(data.articles);
    } catch (e) { console.log(e)}
  };
  // hooks
  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  // HTML
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
