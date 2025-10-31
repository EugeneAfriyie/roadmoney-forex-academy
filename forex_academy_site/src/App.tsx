import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Plans from './Pages/Plans/Plans';
import Contact from './Pages/Contact/Contact';
import Header from './components/TestHeader';
import Resources from './Pages/Resources/Resources';
// import Contact from './Pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
