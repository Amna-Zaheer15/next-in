


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Course from './Component/Course';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="services" element={<Services />} />

          <Route path="contact" element={<Contact />} />
          {/* Add more pages here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
