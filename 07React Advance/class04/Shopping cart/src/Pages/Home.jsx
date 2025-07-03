import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import Product from '../Components/product';

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  const productFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setPost([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productFetch();
  }, []);

  return (
    <div className="min-h-screen bg-white py-30 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          🛒 Explore Products
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <Spinner />
          </div>
        ) : post.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {post.map((item) => (
              <Product key={item.id} post={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-red-500 font-medium mt-10 text-lg">
            No products found. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
