import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import ThemeContextProvider from './context/ThemeContext';

import './styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>

      <ThemeContextProvider>
        
        <Routes>


          <Route path='/' element ={ <Home /> } />

          <Route path="/*" element={ <NotFound /> } />


        </Routes>

      </ThemeContextProvider>

    </BrowserRouter>
  );
}

export default App;