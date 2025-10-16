export default function Products() {
  const products = [
    { id: 1, name: 'Product A', price: '$19.99', description: 'High quality product A' },
    { id: 2, name: 'Product B', price: '$29.99', description: 'Premium product B' },
    { id: 3, name: 'Product C', price: '$39.99', description: 'Deluxe product C' },
    { id: 4, name: 'Product D', price: '$49.99', description: 'Ultimate product D' }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold" data-testid="products-title">
        Our Products
      </h1>
      <p className="text-lg" data-testid="products-description">
        Browse our collection of test products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
            data-testid={`product-card-${product.id}`}
          >
            <h3 className="text-xl font-bold mb-2" data-testid={`product-name-${product.id}`}>
              {product.name}
            </h3>
            <p className="text-gray-600 mb-2" data-testid={`product-description-${product.id}`}>
              {product.description}
            </p>
            <p className="text-2xl font-bold text-blue-600 mb-3" data-testid={`product-price-${product.id}`}>
              {product.price}
            </p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
              data-testid={`add-to-cart-${product.id}`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
