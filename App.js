import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './Saved';
import Home from './Home';



function App() {
  return (
    <Router>
      <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
