import "./App.css";
import CreateForm from "./pages/CreateForm";
import Home from "./pages/Home";
import User from "./pages/User";
import MyForms from "./pages/MyForms";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/home">
          HOME
        </Link>
        <Link style={padding} to="/create-form">
          CREATE A FORM
        </Link>
        <Link style={padding} to="/myforms">
          MY FORMS
        </Link>
        <Link style={padding} to="/users">
          USER
        </Link>
      </div>

      <Routes>
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/users" element={<User />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myforms" element={<MyForms />} />
      </Routes>
    </Router>
  );
}

export default App;
