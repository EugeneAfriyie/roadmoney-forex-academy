import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page (Hero coming next)</div>} />
        <Route path="/about" element={<div>About Mentor Page</div>} />
        <Route path="/forex" element={<div>What is Forex Page</div>} />
        <Route path="/mentorship" element={<div>Mentorship Program Page</div>} />
        <Route path="/testimonials" element={<div>Testimonials Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
}

export default App;