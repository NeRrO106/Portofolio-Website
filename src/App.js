import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import AboutMe from './components/pages/about/about';
import Skills from './components/pages/skills/skills';
import Portofolio from './components/pages/portofolio/portofolio';
import Feedback from './components/pages/feedback/feedback';
import Contact from './components/pages/contact/contact';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route path='/' element={<AboutMe/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Portofolio/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
