import React from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductsList';

const App = () => {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
