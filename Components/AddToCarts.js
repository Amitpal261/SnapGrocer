import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "../Utility/CardSilce";
import { Trash2 } from "lucide-react";

const AddToCarts = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.price || 10) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen text-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          🛒 Shopping Cart
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white backdrop-blur   border-gray-800 p-4 rounded-2xl shadow-lg flex gap-4 items-center hover:border-gray-700 transition"
            >
              <img
                src={item.image}
                className="w-24 h-24 rounded-xl object-cover bord"
                alt=""
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg text-black">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-400">
                  {item.cuisine} • {item.difficulty}
                </p>

                <p className="text-sm mt-1 text-yellow-400">
                  ⭐ {item.rating} ({item.reviewCount})
                </p>

                
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition text-black"
                  >
                    -
                  </button>

                  <span className="font-medium text-lg text-black">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300 transition text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right flex flex-col items-end gap-3">
                <h3 className="text-green-400 font-bold text-lg">
                  ${(item.price || 10) * item.quantity}
                </h3>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="flex bg-white items-center gap-1 text-red-400 hover:text-red-500 text-sm"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 backdrop-blur border border-gray-100 p-6 rounded-2xl shadow-lg h-fit text-black">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-3 text-black">
            <div className="flex justify-between">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-green-400">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-xl font-semibold shadow-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCarts;