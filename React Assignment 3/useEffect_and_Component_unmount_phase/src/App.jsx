import "./App.css";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showStopWatch, setShowStopWatch] = useState(true);

  return (
    <div className="App">
      {showTimer ? <Timer /> : null}
      <button onClick={() => setShowTimer(!showTimer)}>TOGGLE TIMER</button>
      <br />
      <br />
      <hr />
      {showStopWatch && <StopWatch />}
      <button onClick={() => setShowStopWatch(!showStopWatch)}>
        TOGGLE STOPWATCH
      </button>
    </div>
  );
}

export default App;
