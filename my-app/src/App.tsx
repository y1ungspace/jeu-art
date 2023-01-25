import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Header />} />
          <Route path="blogs" element={<Header />} />
          <Route path="contact" element={<Header />} />
          <Route path="*" element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
