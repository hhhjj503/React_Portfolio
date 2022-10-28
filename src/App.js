import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Skills from './pages/Skills';
import { createGlobalStyle } from 'styled-components';
import reset from '../node_modules/styled-reset/lib/index';

const App = () => {
  const GlobalStyles = createGlobalStyle`
    ${reset}
    html { font-size: 62.5%; }
    a{text-decoration:none;color:black;}
`;

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/React_Portfolio" element={<Home />} />
          <Route path="/React_Portfolio/about" element={<About />} />
          <Route path="/React_Portfolio/skills" element={<Skills />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
