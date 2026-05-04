import React, { useEffect, useState ,useContext} from 'react'
import { useParams } from 'react-router'
import Instruction from './Instruction'
import usercontext from "./UserContext";
const ProductView = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [activeInstruction, setActiveInstruction] = useState(null);
  const name = useContext(usercontext)
  console.log("Name :",name.name);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        const foundProduct = data.recipes.find(d => d.id === Number(id))
        setProduct(foundProduct)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

      {/* Card */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* Image */}
        <div className="h-80 md:h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col gap-4">
            <h1>{name.name}</h1>
          <h1 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h1>
         
          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="bg-yellow-100 px-3 py-1 rounded-full">
              ⭐ {product.rating}
            </span>
            <span className="bg-green-100 px-3 py-1 rounded-full">
              🍽 {product.servings} servings
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">
              ⏱ {product.cookTimeMinutes} min
            </span>
            <span className="bg-red-100 px-3 py-1 rounded-full">
              {product.difficulty}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-5xl w-full mt-6 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Instructions</h3>
        <ol className="list-inside space-y-3 text-gray-700">
          {product.instructions.map((step, index) => (
            <Instruction
              key={index}
              step={step}
              index={index}
              activeInstruction={activeInstruction}
              setActiveInstruction={setActiveInstruction}
            />
          ))}
        </ol>

      </div>

    </div>
  )
}

export default ProductView