export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 space-y-6">
          <div className="inline-block">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
              🌟 About TestApp Pro
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight" data-testid="about-title">
            Building the Future of Testing
          </h1>
          <p className="text-xl text-purple-50 max-w-2xl leading-relaxed" data-testid="about-description">
            TestApp Pro is a comprehensive Next.js testing application designed to empower developers and QA teams with reliable, automated browser testing capabilities.
          </p>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl p-12 shadow-xl border border-purple-100">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
            <span className="text-5xl">🎯</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
        </div>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed" data-testid="about-mission">
          To provide a reliable, user-friendly testing environment for automated browser testing tools. We believe in empowering teams to ship quality software faster through comprehensive testing solutions that mirror real-world applications.
        </p>
      </div>

      {/* Key Information Cards */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">Key Information</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our platform</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300" 
            data-testid="info-card-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                📦
              </div>
              <h3 className="text-2xl font-bold">Version</h3>
            </div>
            <p className="text-4xl font-bold mb-2">1.0.0</p>
            <p className="text-blue-100">Latest stable release with all features</p>
          </div>

          <div 
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300" 
            data-testid="info-card-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                ⚛️
              </div>
              <h3 className="text-2xl font-bold">Framework</h3>
            </div>
            <p className="text-4xl font-bold mb-2">Next.js</p>
            <p className="text-purple-100">Built with the latest React framework</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 border border-purple-100">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 text-lg">Principles that guide our development</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
            <p className="text-gray-600">
              Every feature is thoroughly tested and optimized for reliability and performance.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric</h3>
            <p className="text-gray-600">
              Designed with developers and QA teams in mind, ensuring an intuitive experience.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Continuously evolving to meet the changing needs of modern development teams.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">Built by Experts</h2>
          <p className="text-gray-600 text-lg">A team passionate about testing and quality</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              👨‍💻
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Team</h3>
            <p className="text-gray-600">Expert engineers with years of experience in web development and testing frameworks.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              🎨
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
            <p className="text-gray-600">Creative designers focused on building beautiful, accessible user interfaces.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
              🧪
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">QA Team</h3>
            <p className="text-gray-600">Dedicated quality assurance specialists ensuring every feature works flawlessly.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 text-white shadow-2xl">
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-2">By the Numbers</h2>
            <p className="text-purple-100 text-lg">Our impact on the testing community</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-purple-100 font-medium">Test Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-purple-100 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-purple-100 font-medium">Tests Passed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 font-medium">Support</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>
    </div>
  )
}
