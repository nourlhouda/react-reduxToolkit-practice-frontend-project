import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/posts" element={<Post />} />

        <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        </Route>

      </Routes>
    </div>
    
  );
}

export default App;
