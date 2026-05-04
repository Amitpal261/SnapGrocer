import React, { useEffect, useState } from 'react'
import { Search, ShoppingCart, Star } from 'lucide-react'

// Dummy API simulation
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Fresh Apples', category: 'Fruits', price: 120, rating: 4.5, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400' },
        { id: 2, name: 'Bananas', category: 'Fruits', price: 60, rating: 4.2, image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e43e?w=400' },
        { id: 3, name: 'Tomatoes', category: 'Vegetables', price: 40, rating: 4.3, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400' },
        { id: 4, name: 'Potatoes', category: 'Vegetables', price: 30, rating: 4.1, image: 'https://images.unsplash.com/photo-1582515073490-dc9e2fdd2e3b?w=400' },
        { id: 5, name: 'Onions', category: 'Vegetables', price: 35, rating: 4.0, image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400' },
        { id: 6, name: 'Milk', category: 'Dairy', price: 55, rating: 4.6, image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400' },
        { id: 7, name: 'Cheese', category: 'Dairy', price: 220, rating: 4.7, image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=400' },
        { id: 8, name: 'Butter', category: 'Dairy', price: 180, rating: 4.5, image: 'https://images.unsplash.com/photo-1589987607627-1f5d5c7f9f6d?w=400' },
        { id: 9, name: 'Bread', category: 'Bakery', price: 35, rating: 4.1, image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400' },
        { id: 10, name: 'Croissant', category: 'Bakery', price: 90, rating: 4.4, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
        { id: 11, name: 'Eggs', category: 'Dairy', price: 90, rating: 4.7, image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400' },
        { id: 12, name: 'Chicken Breast', category: 'Meat', price: 250, rating: 4.6, image: 'https://images.unsplash.com/photo-1604908176997-431c6f36aeb0?w=400' },
        { id: 13, name: 'Fish', category: 'Meat', price: 300, rating: 4.5, image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=400' },
        { id: 14, name: 'Orange Juice', category: 'Beverages', price: 110, rating: 4.3, image: 'https://images.unsplash.com/photo-1577801595572-54b0a6a36e37?w=400' },
        { id: 15, name: 'Soft Drink', category: 'Beverages', price: 80, rating: 4.2, image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400' },
        { id: 16, name: 'Rice', category: 'Staples', price: 70, rating: 4.5, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
        { id: 17, name: 'Wheat Flour', category: 'Staples', price: 60, rating: 4.4, image: 'https://images.unsplash.com/photo-1604908554027-d9d03a71d1d2?w=400' },
        { id: 18, name: 'Sugar', category: 'Staples', price: 45, rating: 4.3, image: 'https://images.unsplash.com/photo-1587731413211-14c3e9b9f5b2?w=400' },
        { id: 19, name: 'Salt', category: 'Staples', price: 20, rating: 4.1, image: 'https://images.unsplash.com/photo-1604908177225-6d2c5e7a2b5e?w=400' },
        { id: 20, name: 'Green Tea', category: 'Beverages', price: 150, rating: 4.6, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400' }
      ])
    }, 1200)
  })
}

const ShimmerCard = () => (
  <div className='bg-white rounded-2xl shadow-md overflow-hidden animate-pulse'>
    <div className='w-full h-40 bg-gray-300'></div>
    <div className='p-4 space-y-3'>
      <div className='h-4 bg-gray-300 rounded w-3/4'></div>
      <div className='h-3 bg-gray-300 rounded w-1/4'></div>
      <div className='flex justify-between items-center mt-4'>
        <div className='h-5 bg-gray-300 rounded w-1/4'></div>
        <div className='h-8 w-8 bg-gray-300 rounded-full'></div>
      </div>
    </div>
  </div>
)

const ImageWithPlaceholder = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='w-full h-40 bg-gray-200 overflow-hidden relative'>
      {!loaded && <div className='absolute inset-0 animate-pulse bg-gray-300'></div>}
      <img
        src={src}
        alt={alt}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

const Grocery = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || item.category === category)
    )
  })

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Beverages', 'Staples']

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
          <h1 className='text-3xl font-bold text-gray-800'>Groceries</h1>

          <div className='flex items-center bg-white border rounded-lg px-4 py-2 shadow-sm w-full md:w-1/3'>
            <Search className='text-gray-400' />
            <input
              type='text'
              placeholder='Search groceries...'
              className='ml-2 w-full outline-none'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className='flex gap-3 overflow-x-auto mb-8'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                category === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-white hover:bg-orange-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Shimmer Loading */}
        {loading && (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array(8).fill().map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        )}

        {/* Product Grid */}
        {!loading && (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition'>
                <ImageWithPlaceholder src={product.image} alt={product.name} />

                <div className='p-4'>
                  <h2 className='font-semibold text-gray-800'>{product.name}</h2>

                  <div className='flex items-center gap-1 text-sm text-orange-500 mt-1'>
                    <Star size={16} />
                    <span>{product.rating}</span>
                  </div>

                  <div className='flex justify-between items-center mt-4'>
                    <span className='text-lg font-bold text-gray-800'>₹{product.price}</span>

                    <button className='bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full'>
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div className='text-center mt-20 text-gray-500'>
            No products found 😕
          </div>
        )}

      </div>
    </div>
  )
}

export default Grocery
