import React, { ReactNode } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Products } from './products/products';
import { Home } from './home/home';
import { NotFound } from './notFound';
import { ProductPage } from './product';
import { products } from './abstracts/products-list';
import { ContactPage } from './contact';

const productsRouter: ReactNode = products.map(product => <Route path={`/products/${product.type}-${product.name.replace(' ', '-')} ${product.id}`} element={<ProductPage product={product}/>} />)


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/jeu-art" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
            {productsRouter}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
