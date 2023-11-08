import { useState } from "react";
import user from "./assets/user-solid.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://rajidevmind.github.io/rajiresume/" target="_blank">
          <img src={user} className="logo react" alt="user identity" />
        </a>
      </div>
      <h1>Raji, On AWS Amplify</h1>
      <p style={{ color: "#ffffff" }}>
        RAJI, is a professional web developer with a solid skillset in MERN
        stack technologies. He create digital solutions to help and scale small
        and medium enterprises.
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>I have over 2 years of experience, working and learning! </p>
      </div>
      <p className="read-the-docs">Click on the User svg logo to learn more</p>
    </>
  );
}

export default App;
