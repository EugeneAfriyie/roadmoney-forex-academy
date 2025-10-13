import { useState } from 'react';
import Header from './components/Header'; // We'll create this next

function App() {
  return (
    <div className="min-h-screen bg-navy text-white font-sans"> {/* Navy blue base */}
      <Header />
      {/* Next sections like About, What is Forex, etc., will go here later */}
    </div>
  );
}

export default App;