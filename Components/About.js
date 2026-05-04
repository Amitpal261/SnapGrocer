import React from 'react'
import { Users, Target, Truck, ShieldCheck, Star, ShoppingCart, Clock } from 'lucide-react'

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-6'>
      <div className='max-w-6xl mx-auto'>

        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>About Us</h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We are redefining grocery delivery with speed, reliability, and convenience—bringing your daily essentials right to your doorstep.
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid md:grid-cols-4 gap-6 mb-16 text-center'>
          <div>
            <h2 className='text-3xl font-bold text-orange-500'>10K+</h2>
            <p className='text-gray-500'>Orders Delivered</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-orange-500'>5K+</h2>
            <p className='text-gray-500'>Happy Customers</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-orange-500'>200+</h2>
            <p className='text-gray-500'>Partner Stores</p>
          </div>
          <div>
            <h2 className='text-3xl font-bold text-orange-500'>30 min</h2>
            <p className='text-gray-500'>Avg Delivery Time</p>
          </div>
        </div>

        {/* Image + Content */}
        <div className='grid md:grid-cols-2 gap-10 items-center mb-16'>
          <img
            src='https://images.unsplash.com/photo-1542838132-92c53300491e'
            alt='grocery'
            className='rounded-2xl shadow-lg w-full h-[350px] object-cover'
          />

          <div>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Who We Are</h2>
            <p className='text-gray-600 leading-relaxed mb-4'>
              Our platform connects users with local grocery stores and delivery partners, ensuring fresh products reach you faster than ever.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              From fruits and vegetables to daily essentials, we make shopping seamless, affordable, and efficient.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className='grid md:grid-cols-4 gap-6 mb-16'>
          <div className='bg-white p-6 rounded-2xl shadow-md text-center'>
            <Truck className='mx-auto mb-3 text-orange-500' />
            <h3 className='font-semibold text-gray-800'>Fast Delivery</h3>
            <p className='text-sm text-gray-500 mt-2'>Lightning-fast delivery at your convenience.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-md text-center'>
            <ShieldCheck className='mx-auto mb-3 text-orange-500' />
            <h3 className='font-semibold text-gray-800'>Quality Assured</h3>
            <p className='text-sm text-gray-500 mt-2'>Only the freshest and best products.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-md text-center'>
            <Target className='mx-auto mb-3 text-orange-500' />
            <h3 className='font-semibold text-gray-800'>Affordable Prices</h3>
            <p className='text-sm text-gray-500 mt-2'>Best deals and competitive pricing.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-md text-center'>
            <Users className='mx-auto mb-3 text-orange-500' />
            <h3 className='font-semibold text-gray-800'>Customer First</h3>
            <p className='text-sm text-gray-500 mt-2'>Your satisfaction is our priority.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className='mb-16'>
          <h2 className='text-2xl font-semibold text-center text-gray-800 mb-10'>How It Works</h2>
          <div className='grid md:grid-cols-3 gap-6 text-center'>
            <div className='bg-white p-6 rounded-2xl shadow-md'>
              <ShoppingCart className='mx-auto mb-3 text-orange-500' />
              <h3 className='font-semibold'>Browse & Order</h3>
              <p className='text-sm text-gray-500 mt-2'>Choose from a wide range of groceries.</p>
            </div>

            <div className='bg-white p-6 rounded-2xl shadow-md'>
              <Clock className='mx-auto mb-3 text-orange-500' />
              <h3 className='font-semibold'>Quick Processing</h3>
              <p className='text-sm text-gray-500 mt-2'>Orders are packed and dispatched بسرعة.</p>
            </div>

            <div className='bg-white p-6 rounded-2xl shadow-md'>
              <Truck className='mx-auto mb-3 text-orange-500' />
              <h3 className='font-semibold'>Fast Delivery</h3>
              <p className='text-sm text-gray-500 mt-2'>Delivered right to your doorstep.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className='mb-16'>
          <h2 className='text-2xl font-semibold text-center text-gray-800 mb-10'>What Our Customers Say</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {[1,2,3].map((item) => (
              <div key={item} className='bg-white p-6 rounded-2xl shadow-md'>
                <Star className='text-orange-500 mb-2' />
                <p className='text-gray-600 text-sm'>"Amazing service! Fast delivery and great quality products."</p>
                <h4 className='mt-3 font-semibold text-gray-800'>Customer {item}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className='bg-orange-500 text-white rounded-2xl p-10 text-center shadow-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
          <p className='max-w-2xl mx-auto text-orange-100'>
            To revolutionize grocery shopping by making it faster, easier, and more accessible for everyone.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
