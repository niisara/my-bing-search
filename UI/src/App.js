import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p className="text-gray-600 font-semibold">Bing Search</p>
          <Search />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
