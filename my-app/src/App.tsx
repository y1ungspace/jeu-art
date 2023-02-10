import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Products } from './products';
import { Home } from './home';
import { NotFound } from './notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
