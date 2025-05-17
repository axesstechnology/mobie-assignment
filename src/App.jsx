import SignUpForm from "./pages/auth/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./pages/auth/Login";
import Search from "./pages/search/Search";
import { ChatList } from "./pages/chats/ChatList";
import ChatWindow from "./pages/chats/ChatWindow";
import Subscriptions from "./components/Subscriptions";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chats" element={<ChatList/>} />
            <Route path="/chats/:name" element={<ChatWindow />} />
            <Route path="/subscription" element={<Subscriptions/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
