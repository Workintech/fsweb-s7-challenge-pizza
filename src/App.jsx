import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import OrderPizza from './components/OrderPizza.jsx'; 
import Success from './components/Success.jsx';


function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderPizza" element={<OrderPizza />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App
