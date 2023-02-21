import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Products } from './products/products';
import { Home } from './home/home';
import { NotFound } from './notFound';
import { ProductPage } from './product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product-1" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
