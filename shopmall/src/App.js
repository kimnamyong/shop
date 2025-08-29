import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Data from './components/data';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from "./components/Details";
import React, { useContext } from "react";
export const 재고Context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/"
          element={
            <재고Context.Provider value={재고}>
              <Home shoes={shoes} shoes변경={shoes변경} />
            </재고Context.Provider>
          }>
        </Route>
        <Route path="/detail/:id"
          element={
            <재고Context.Provider value={재고}>
              <Details shoes={shoes} />
            </재고Context.Provider>
          }>
        </Route>
      </Routes>
    </div>
  );
}
export default App;



