import { useState } from "react";
import logo from "./assets/naver.png";
import Upperbox from "./components/Upperbox";
import Lowerbox from "./components/Lowerbox";
import Join from "./components/Join";
import "./App.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [compare, setCompare] = useState(false);

  const onCompare = ({ password, passwordRe }) => {
    if (password === "") {
      setCompare(false);
    } else if (password === passwordRe) {
      setCompare(true);
    } else setCompare(false);
  };

  return (
    <div className="App">
      <header className="logo">
        <a href="https://www.naver.com/">
          <img src={logo} width="120px" />
        </a>
      </header>
      <Upperbox onCompare={onCompare} />
      <Lowerbox className="Lower" />
      <Join className="Join" compare={compare} />
    </div>
  );
}

export default App;
