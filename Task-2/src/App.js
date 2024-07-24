import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import GoalSIP from "./components/GoalSIP";
import Fire from "./components/Fire";
import MutualFunds from "./components/MutualFunds";
import FixedDepo from "./components/FixedDepo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/goal-sip" element={<GoalSIP />} />
          <Route path="/fire" element={<Fire />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/fixed-depo" element={<FixedDepo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
