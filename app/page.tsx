export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold" data-testid="home-title">
        Welcome to the Test App
      </h1>
      <p className="text-lg" data-testid="home-description">
        This is a simple Next.js application with multiple pages for browser testing.
      </p>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Features:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li data-testid="feature-1">Multiple pages (Home, About, Contact, Products)</li>
          <li data-testid="feature-2">Navigation bar for easy page switching</li>
          <li data-testid="feature-3">Test-friendly data attributes for automation</li>
          <li data-testid="feature-4">Responsive design with Tailwind CSS</li>
        </ul>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        data-testid="home-cta-button"
      >
        Get Started
      </button>
    </div>
  )
}
