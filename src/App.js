import logo from "./logo.svg";
import "./App.css";
import { Users } from "./Users";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <input
        placeholder="Search..."
        type="text"
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
