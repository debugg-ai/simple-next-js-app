export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-12 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 space-y-6">
          <div className="inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
              ✨ Next-Generation Testing Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in" data-testid="home-title">
            Build Better Apps with Confidence
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl leading-relaxed" data-testid="home-description">
            A comprehensive Next.js testing application designed for modern development teams. Streamline your workflow with automated browser testing, responsive design, and seamless navigation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
              data-testid="home-cta-button"
            >
              Get Started →
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold py-3 px-8 rounded-full transition-all duration-200">
              View Demo
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>Test-Optimized</span>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features for Modern Testing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to build, test, and deploy production-ready applications with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1" data-testid="feature-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl shadow-md">
                📄
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Page Architecture</h3>
                <p className="text-gray-600">Complete site structure with Home, About, Contact, and Products pages. Perfect for testing complex navigation flows and user journeys.</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Navigation</h3>
                <p className="text-gray-600">Intuitive navigation system that adapts to user behavior. Test routing, deep linking, and state management with ease.</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation-Ready</h3>
                <p className="text-gray-600">Built-in data attributes and semantic markup for seamless integration with E2E testing frameworks like Playwright and Cypress.</p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Responsive</h3>
                <p className="text-gray-600">Mobile-first design that looks perfect on every device. Test responsive breakpoints and viewport behaviors effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Built for Real-World Testing</h2>
          <p className="text-gray-600 text-lg">Trusted by teams who ship quality software</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">QA Teams</h3>
            <p className="text-gray-600">Validate user flows, catch bugs early, and ensure consistent experiences across all pages and components.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Developers</h3>
            <p className="text-gray-600">Debug with confidence using clear component structures and test-friendly patterns that accelerate development.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Teams</h3>
            <p className="text-gray-600">Verify features work as expected before release. Reduce production issues and improve user satisfaction.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">What Teams Are Saying</h2>
          <p className="text-gray-600 text-lg">Join hundreds of satisfied development teams</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="font-semibold text-lg">Sarah Chen</div>
                <div className="text-blue-100 text-sm">Lead QA Engineer</div>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">
              "This testing app has transformed our QA workflow. The clean structure and test attributes make writing automated tests a breeze. We caught 40% more bugs before production."
            </p>
            <div className="flex gap-1 mt-4 text-yellow-300">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="font-semibold text-lg">Marcus Rodriguez</div>
                <div className="text-purple-100 text-sm">Senior Developer</div>
              </div>
            </div>
            <p className="text-lg text-purple-50 leading-relaxed">
              "Finally, a test application that actually reflects real-world scenarios. The responsive design and navigation patterns mirror our production apps perfectly."
            </p>
            <div className="flex gap-1 mt-4 text-yellow-300">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 shadow-inner">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">The Numbers Speak</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Teams Using</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-pink-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Tests Run</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">User Rating</div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Built with Modern Technologies</h2>
          <p className="text-gray-600">Leveraging the best tools in the ecosystem</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-4xl">⚛️</div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">Next.js</div>
              <div className="text-sm text-gray-500">React Framework</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-4xl">🎨</div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">Tailwind CSS</div>
              <div className="text-sm text-gray-500">Styling</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-4xl">📘</div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">TypeScript</div>
              <div className="text-sm text-gray-500">Type Safety</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-4xl">🎭</div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">Playwright</div>
              <div className="text-sm text-gray-500">E2E Testing</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="text-4xl">🌲</div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">Cypress</div>
              <div className="text-sm text-gray-500">Testing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-16 text-white shadow-2xl">
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Testing Workflow?
          </h2>
          <p className="text-xl text-purple-100 leading-relaxed">
            Join thousands of developers and QA engineers who trust our platform for comprehensive testing. Get started in minutes, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="bg-purple-700/50 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-purple-700/70 font-bold py-4 px-10 rounded-full transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          <div className="pt-6 flex flex-wrap justify-center gap-6 text-sm text-purple-100">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No credit card needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>
    </div>
  )
}
