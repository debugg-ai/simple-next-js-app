export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-12 text-white shadow-2xl">
        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl font-bold leading-tight animate-fade-in" data-testid="home-title">
            Welcome to the Test App
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl" data-testid="home-description">
            This is a simple Next.js application with multiple pages for browser testing.
          </p>
          <button
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
            data-testid="home-cta-button"
          >
            Get Started →
          </button>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Features
          </h2>
          <p className="text-gray-600 text-lg">Everything you need for comprehensive testing</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1" data-testid="feature-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                📄
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Pages</h3>
                <p className="text-gray-600">Navigate through Home, About, Contact, and Products pages seamlessly</p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-300 transform hover:-translate-y-1" data-testid="feature-2">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                🧭
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Navigation</h3>
                <p className="text-gray-600">Intuitive navigation bar for effortless page switching</p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-300 transform hover:-translate-y-1" data-testid="feature-3">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                🤖
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Test-Friendly</h3>
                <p className="text-gray-600">Built with automation in mind using data attributes</p>
              </div>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-300 transform hover:-translate-y-1" data-testid="feature-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                📱
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-600">Beautiful responsive layouts powered by Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 shadow-inner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600 font-medium">Pages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Responsive</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">Fast</div>
            <div className="text-gray-600 font-medium">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">Modern</div>
            <div className="text-gray-600 font-medium">Design</div>
          </div>
        </div>
      </div>
    </div>
  )
}
