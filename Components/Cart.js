import React, { useContext, useEffect, useState } from "react";
// import styles from "./Cart.module.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseRecipe from "./UseRecipe";
import CartwithDifficulty from "./cartwithdifficutly";
import UserContext from "./UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../Utility/CardSilce";

const RecipeCardWithDifficulty = CartwithDifficulty(RecipeCard);

// ✅ Card Component (renamed for clarity)
function RecipeCard({ data }) {
  const user = useContext(UserContext);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col bg-white/60 backdrop-blur-lg rounded-xl border border-gray-200 p-4 items-center w-72 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      <img src={data.image} alt={data.name} className= "w-[200px] h-[200px] object-cover rounded-b-[20px] transition-transform duration-300 ease-in-out group-hover:scale-110" 
 />

      <div className="text-center mt-3">
        <h2 className="text-lg font-semibold">{data.name}</h2>

        <p className="text-sm text-gray-600 mt-1">
          Cuisine: {data.cuisine}
        </p>

        <div className="mt-2 text-yellow-600 font-medium">
          ⭐ {data.rating}
        </div>

        <button
          className="mt-3 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
          onClick={() => dispatch(addItem(data))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// ✅ Main Homepage Component
function ProductDetails() {
  const [recipes, setRecipes] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const data = UseRecipe();

  // ✅ Load data
  useEffect(() => {
    if (data) {
      setRecipes(data);
      setDisplayData(data);
      setLoading(false);
    }
  }, [data]);

  // ✅ Search
  const handleSearch = () => {
    const filtered = recipes.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayData(filtered);
  };

  // ✅ Top Rated Filter
  const filterTopRated = () => {
    const filtered = recipes.filter((item) => item.rating >= 4.7);
    setDisplayData(filtered);
  };

  // ✅ Reset Filters
  const resetFilters = () => {
    setDisplayData(recipes);
    setSearchText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      {/* 🔥 HERO SECTION */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Discover Delicious Recipes 🍲
        </h1>
        <p className="text-gray-500 mt-2">
          Explore top-rated dishes and add your favorites to cart
        </p>
      </div>

      {/* 🔍 SEARCH + FILTERS */}
      <div className="flex justify-center gap-4 flex-wrap mb-8">
        <input
          type="text"
          value={searchText}
          placeholder="Search recipes..."
          className="px-4 py-2 border rounded-md w-60"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-orange-400 px-4 py-2 text-white rounded-md hover:bg-orange-500"
        >
          Search
        </button>

        <button
          onClick={filterTopRated}
          className="bg-yellow-400 px-4 py-2 text-white rounded-md hover:bg-yellow-500"
        >
          Top Rated ⭐
        </button>

        <button
          onClick={resetFilters}
          className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Reset
        </button>
      </div>

      {/* 📦 CONTENT */}
      {loading ? (
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(6)].map((_, i) => (
            <Shimmer key={i} />
          ))}
        </div>
      ) : displayData.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          ❌ No recipes found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
          {displayData.map((item) => (
            <Link to={`/resturants/${item.id}`} key={item.id}>
              <RecipeCardWithDifficulty data={item} />
            </Link>
          ))}

        </div>
      )}
    </div>
  );
}

export default ProductDetails;