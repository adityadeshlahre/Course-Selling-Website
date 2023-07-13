import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Appbar from "./Appbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "#eeeeee",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Appbar />
        <Home />
      </div>
    </>
  );
}

export default App;
