import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { LogIn } from "./Components/LogIn";
import { Register } from "./Components/Register";
import { useContext } from "react";
import { authContext } from "./Context/context";

function App() {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);

  return (
    <div className="App h-screen flex items-center justify-center  bg-sky-300">
      <Router>
        <Routes>
          <Route path="/">
            {" "}
            <Route
              path="dashboard"
              index
              element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="login"
              element={!currentUser ? <LogIn /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="register"
              element={
                !currentUser ? <Register /> : <Navigate to="/dashboard" />
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
