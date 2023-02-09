import "./App.css";
import { Users } from "./Users";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Search..."
        type="text"
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
