import SignUpForm from "./pages/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
