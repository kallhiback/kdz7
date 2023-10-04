import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom"
import Todo from "./pages/todo";
import Form from "./pages/form";
import Slaider from "./pages/slaider";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1 className="h1">САЛАМ АЛЕЙКУМ</h1>  
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo-лист</Link>
          </li>
          <li>
            <Link to="/form">Форма</Link>
          </li>
          <li>
            <Link to="/slaider">Слайдер</Link>
          </li>
        </ul>
      </nav>
      <hr style={{border: "2px solid white", marginBottom: "50px", marginTop: "50px"}}/>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/slaider" element={<Slaider />} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
