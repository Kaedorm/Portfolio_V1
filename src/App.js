import React from 'react';
import{ BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import FormerLife from './pages/FormerLife';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/competences" element={<Knowledges />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/formerlife" element={<FormerLife />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;