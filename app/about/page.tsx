export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold" data-testid="about-title">
        About Us
      </h1>
      <p className="text-lg" data-testid="about-description">
        This is the about page. Learn more about our test application.
      </p>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p data-testid="about-mission">
          To provide a reliable testing environment for automated browser testing tools.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Key Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 rounded" data-testid="info-card-1">
            <h3 className="font-bold">Version</h3>
            <p>1.0.0</p>
          </div>
          <div className="border p-4 rounded" data-testid="info-card-2">
            <h3 className="font-bold">Framework</h3>
            <p>Next.js</p>
          </div>
        </div>
      </div>
    </div>
  )
}
