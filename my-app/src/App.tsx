import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';
import { Products } from './products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}>
          <Route index element={<Header isBottomLineOn={false} />} />
          <Route path="home" element={<Header isBottomLineOn={false} />} />
          <Route path="products" element={<Products />} />
          {/* <Route path="*" element={<Header />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
