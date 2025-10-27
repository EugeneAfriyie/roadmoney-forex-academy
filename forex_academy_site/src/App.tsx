import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Mentorship from './Pages/Mentorship/Mentorship';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mentorship" element={<Mentorship />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
