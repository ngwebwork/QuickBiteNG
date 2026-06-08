import React from "react";
import { Trash2 } from "lucide-react";
import shopbg from "../assets/SHop_bg.png";

const Cart = ({ cartAllProducts, setCartAllProducts }) => {
  const handleDecrease = (id) => {
    setCartAllProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item,
      ),
    );
  };

  const handleIncrease = (id) => {
    setCartAllProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const handleDeleteItem = (id) => {
    setCartAllProducts(cartAllProducts.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={shopbg}
          alt="Shop Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFC107]">
            Shopping Cart
          </h1>

          <p className="mt-4 text-lg text-gray-300">Home / Cart</p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12">
        {cartAllProducts.length > 0 ? (
          <>
            <div className="space-y-6">
              {cartAllProducts.map((product) => (
                <div
                  key={product.id}
                  className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-lg hover:border-[#FFC107]/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-72 h-64">
                      <img
                        src={product.image}
                        alt={product.label}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-2xl font-bold">
                            {product.label}
                          </h2>

                          <p className="text-gray-400 mt-2">
                            {product.description}
                          </p>

                          <p className="text-[#FFC107] text-2xl font-bold mt-4">
                            ₦{product.price}
                          </p>
                        </div>

                        <button
                          onClick={() => handleDeleteItem(product.id)}
                          className="text-red-500 hover:text-red-400 transition"
                        >
                          <Trash2 size={24} />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-8">
                        <button
                          onClick={() => handleDecrease(product.id)}
                          className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#FFC107] hover:text-black transition font-bold"
                        >
                          -
                        </button>

                        <span className="text-xl font-semibold">
                          {product.count}
                        </span>

                        <button
                          onClick={() => handleIncrease(product.id)}
                          className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#FFC107] hover:text-black transition font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="flex justify-center mt-12">
              <button className="px-10 py-4 rounded-full bg-[#FFC107] text-black font-bold hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-400 mt-4">
              Add some products to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
