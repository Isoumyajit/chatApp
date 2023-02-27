import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { LogIn } from "./Components/LogIn";
import { Register } from "./Components/Register";

function App() {
  return (
    <div className="App h-screen flex items-center justify-center  bg-sky-300">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
