import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basics">
          <input type="text" placeholder="+$1000 iPhone 15" />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder="description" />
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
            <div className="price">$1000</div>
            <div className="datetime">2025-09-17 15:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
