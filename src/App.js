import "./App.css";
import CreateForm from "./pages/navigation_links/CreateForm";
import Home from "./pages/navigation_links/Home";
import User from "./pages/navigation_links/User";
import MyForms from "./pages/navigation_links/MyForms";
import VoteForm from "./pages/VoteForm";

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
        <Route path="/vote/:id" element={<VoteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
