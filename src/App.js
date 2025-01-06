import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
    <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
    <div className=" mb-3">
        <TextForms heading="TextUtils- Word & Character counter, Remove extra spaces" mode={mode} />
   </div>
   </>
    // <Router>
    //   <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
    //   <div className="container my-3">
    //     <Routes>
    //       <Route path="/" element={<TextForms heading="Enter your text to analyze" mode={mode} />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
