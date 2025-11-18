'use client'

import { useState } from 'react'

export default function Products() {
  const [addedToCart, setAddedToCart] = useState<number | null>(null)

  const products = [
    { 
      id: 1, 
      name: 'Starter Plan', 
      price: '$19.99', 
      description: 'Perfect for small teams and individual developers',
      features: ['Up to 1,000 tests/month', 'Basic analytics', 'Email support', '1 concurrent test'],
      icon: '🚀',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 2, 
      name: 'Professional Plan', 
      price: '$29.99', 
      description: 'Ideal for growing teams with advanced needs',
      features: ['Up to 10,000 tests/month', 'Advanced analytics', 'Priority support', '5 concurrent tests'],
      icon: '💼',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 3, 
      name: 'Business Plan', 
      price: '$39.99', 
      description: 'Comprehensive solution for larger organizations',
      features: ['Up to 50,000 tests/month', 'Custom analytics', '24/7 phone support', '20 concurrent tests'],
      icon: '🏢',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      id: 4, 
      name: 'Enterprise Plan', 
      price: '$49.99', 
      description: 'Ultimate testing power for enterprise teams',
      features: ['Unlimited tests', 'White-label analytics', 'Dedicated account manager', 'Unlimited concurrent tests'],
      icon: '👑',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const handleAddToCart = (productId: number) => {
    setAddedToCart(productId)
    setTimeout(() => setAddedToCart(null), 2000)
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 p-12 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 space-y-6">
          <div className="inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
              🛍️ Premium Testing Plans
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight" data-testid="products-title">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-purple-50 max-w-2xl leading-relaxed" data-testid="products-description">
            Explore our comprehensive collection of testing plans designed to fit teams of all sizes. From startups to enterprise, we've got you covered.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">✓</span>
              <span>30-day money back</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-2xl">✓</span>
              <span>Free trial included</span>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            data-testid={`product-card-${product.id}`}
          >
            {/* Background Gradient Effect */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${product.gradient}`}></div>
            
            {/* Product Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} text-white text-3xl mb-6 shadow-lg`}>
              {product.icon}
            </div>

            {/* Product Name */}
            <h3 className="text-3xl font-bold mb-3 text-gray-900" data-testid={`product-name-${product.id}`}>
              {product.name}
            </h3>

            {/* Product Description */}
            <p className="text-gray-600 mb-4 text-lg" data-testid={`product-description-${product.id}`}>
              {product.description}
            </p>

            {/* Product Price */}
            <div className="mb-6">
              <span className={`text-5xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} data-testid={`product-price-${product.id}`}>
                {product.price}
              </span>
              <span className="text-gray-500 text-lg ml-2">/month</span>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                    ✓
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Add to Cart Button */}
            <button
              className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 ${
                addedToCart === product.id
                  ? 'bg-green-500 text-white'
                  : `bg-gradient-to-r ${product.gradient} text-white hover:shadow-xl hover:scale-[1.02]`
              }`}
              data-testid={`add-to-cart-${product.id}`}
              onClick={() => handleAddToCart(product.id)}
            >
              {addedToCart === product.id ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="text-xl">✓</span>
                  Added to Cart!
                </span>
              ) : (
                'Add to Cart →'
              )}
            </button>

            {/* Popular Badge for Product 2 */}
            {product.id === 2 && (
              <div className="absolute top-8 right-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                ⭐ Popular
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 border border-gray-200">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose TestApp Pro?</h2>
          <p className="text-gray-600 text-lg">Our plans include everything you need for successful testing</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
            <p className="text-gray-600">Bank-level encryption and 99.9% uptime guarantee for all your testing needs.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">Optimized infrastructure ensures your tests run quickly and efficiently.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Analytics</h3>
            <p className="text-gray-600">Comprehensive insights and reports to track your testing performance.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-12 shadow-xl border border-purple-100">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our plans</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
            <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
            <p className="text-gray-600">All plans include a 14-day free trial with full access to all features. No credit card required.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and wire transfers for enterprise customers.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you offer custom plans?</h3>
            <p className="text-gray-600">Yes! Contact our sales team for custom enterprise solutions tailored to your specific needs.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-white shadow-2xl">
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Still Have Questions?
          </h2>
          <p className="text-xl text-purple-100 leading-relaxed">
            Our team is here to help you find the perfect plan for your testing needs. Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Contact Sales
            </button>
            <button className="bg-purple-700/50 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-purple-700/70 font-bold py-4 px-10 rounded-full transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>
    </div>
  )
}
