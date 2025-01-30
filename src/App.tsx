// Dependencies
import { Route, Routes } from "react-router";

// Pages
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
};

export default App;