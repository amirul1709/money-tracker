import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);

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

  console.log(transactions);

  const displayTransactions = transactions.map((transaction) => (
    <div className="transaction">
      <div className="left">
        <div className="name">{transaction.name}</div>
        <div className="description">{transaction.description}</div>
      </div>
      <div className="right">
        <div className={`price ${transaction.price < 0 ? "red" : "green"}`}>
          {transaction.price < 0
            ? `-$${Math.abs(transaction.price)}`
            : `+$${transaction.price}`}
        </div>
        <div className="datetime">{transaction.datetime}</div>
      </div>
    </div>
  ));

  let balance = 0.0;

  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  balance = balance.toFixed(2);

  const cents = balance.split(".")[1];
  const dollars = balance.split(".")[0];

  return (
    <main>
      <h1>
        ${dollars}
        <span>.{cents}</span>
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
      <div className="transactions">
        {transactions.length > 0 ? (
          displayTransactions
        ) : (
          <p>No transactions available</p>
        )}
      </div>
    </main>
  );
}

export default App;
