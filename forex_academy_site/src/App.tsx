// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';
import { ThemeProvider } from './Context/ThemeContext';
// Import other pages when created
// import About from './pages/About';
// import Mentorship from './pages/Mentorship';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add routes for other pages */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/mentorship" element={<Mentorship />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;