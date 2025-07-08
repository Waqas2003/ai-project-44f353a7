import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 9.99 },
    { id: 3, name: 'Item 3', price: 12.99 },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price;
      });
      setTotal(total);
    };
    calculateTotal();
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-orange-500 p-4 text-white">
        <h1 className="text-3xl font-bold">POS System</h1>
      </header>
      <main className="flex flex-col justify-center items-center p-4">
        <section className="w-full max-w-md p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">Items</h2>
          <ul className="list-none mb-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between p-2 border-b border-gray-200">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full max-w-md p-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold">Cart</h2>
          <ul className="list-none mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between p-2 border-b border-gray-200">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
        </section>
      </main>
    </div>
  );
}

export default App;