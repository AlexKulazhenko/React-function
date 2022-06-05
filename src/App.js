import { useState } from "react";
import { Clicker } from "./Clicker";
import { Timer } from "./Timer";
import { WithRef } from "./WithRef";


function App() {
  const [isTimer, setTimer] = useState(false);
  

  return (
    <div className="App">
      <h2>React App</h2>
      <button onClick={() => setTimer(!isTimer)}>Toggle Clicker</button>
      {isTimer && <Timer />}
    </div>
  );
}

export default App;
