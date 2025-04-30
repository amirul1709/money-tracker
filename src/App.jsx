import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState("");

  async function getTransactions() {
    const url = import.meta.env.VITE_APP_API_URL + "/transactions";
    const res = await fetch(url);
    const json = await res.json();

    return json;
  }

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  function handleSubmit(ev) {
    ev.preventDefault();
    const url = import.meta.env.VITE_APP_API_URL + "/transaction";

    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        price,
        datetime,
        description,
      }),
    }).then((res) => {
      res.json().then((json) => {
        setName("");
        setPrice("");
        setDatetime("");
        setDescription("");
        console.log("result", json);
      });
    });
  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="basics">
          <input
            type="text"
            placeholder="iPhone 15"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="+1000"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
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
      <div>{transactions.length}</div>
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
