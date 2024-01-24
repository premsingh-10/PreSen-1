
import './App.css';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Particles id="tsparticles" />
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />

      
    </div>
    </Router>
  );
}

export default App;
