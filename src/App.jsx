import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {}

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="basics">
          <input
            type="text"
            placeholder="+$1000 iPhone 15"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(ev) => setDateTime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Phone</div>
            <div className="description">Upgrade time</div>
          </div>
          <div className="right">
            <div className="price red">-$1000</div>
            <div className="datetime">2025-09-17 15:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New job</div>
            <div className="description">Type shit</div>
          </div>
          <div className="right">
            <div className="price">+$2500</div>
            <div className="datetime">2025-09-17 15:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New whip</div>
            <div className="description">Lets roll</div>
          </div>
          <div className="right">
            <div className="price red">-$10000</div>
            <div className="datetime">2025-09-17 15:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
