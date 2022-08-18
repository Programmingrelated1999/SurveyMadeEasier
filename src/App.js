import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";
import User from "./pages/User";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          HOME
        </Link>
        <Link style={padding} to="/create-form">
          CREATE A FORM
        </Link>
        <Link style={padding} to="/users">
          USER
        </Link>
      </div>

      <Routes>
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
