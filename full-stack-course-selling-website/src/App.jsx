import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Appbar from "./Appbar";
import Cards from "./Cards";
import Slider from "./Slider";
import Registration from "./Registration";
import Loginup from "./Loginup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Appbar />
        {/* <div style={{ paddingTop: "20px" }}>
          <Home />
        </div>
        <div>
          <Slider />
        </div> */}
        <Loginup />
      </div>
    </>
  );
}

export default App;
