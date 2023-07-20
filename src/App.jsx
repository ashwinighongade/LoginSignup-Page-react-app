
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // console.log(props)
  return (
    <Router>
      <Routes>
        <Route  path="/Login" element={<Login/>} />
        <Route  path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App
