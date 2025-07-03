import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cartitem from '../Components/Cartitem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(total);
  }, [cart]);

  const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 max-w-6xl mx-auto">
          {/* Cart Items */}
          <section className="flex-1 space-y-4">
            {cart.map((item, index) => (
              <Cartitem key={item.id || index} item={item} itemIndex={index} isLastItem={index === cart.length - 1} />
            ))}
          </section>
          {/* Summary */}
          <aside className="w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-extrabold mb-2 text-blue-700">Your Cart</h2>
            <p className="text-lg mb-2 text-gray-700">Summary</p>
            <p className="mb-2 text-gray-600">Total Items: <span className="font-bold text-blue-700">{cart.length}</span></p>
            <p className="mb-4 text-gray-600">Total Amount: <span className="font-bold text-green-600">{formatCurrency(totalAmount)}</span></p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 w-full mt-2">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-24">
          <span className="text-6xl mb-4">🛒</span>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Cart;
