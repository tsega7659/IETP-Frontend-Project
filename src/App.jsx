
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<div className="p-8 text-center">About Page Coming Soon!</div>}
        />
        <Route
          path="/contact"
          element={<div className="p-8 text-center">Contact Page Coming Soon!</div>}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
