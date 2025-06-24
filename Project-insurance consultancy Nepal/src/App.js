import './App.css';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'; // <-- import Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './components/Article/Article';


function Home() {
  return (
    <>
      <Header />
      <About />
      <Qualities />
      <Services />
      <Features />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Testimonials />} />
            <Route path="/article" element={<Article />} /> {/* Add this line */}
     
      </Routes>
      <Footer />
    </>
  );
}

export default App;