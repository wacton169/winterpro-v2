export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
      
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="font-bold text-4xl">
          Emergency HVAC Repair in Central Ohio
        </h1>
        <p className="mt-4 text-lg">
          Same-day service. Licensed professionals. 24/7 availability.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a href="tel:6145887215" className="bg-blue-600 px-6 py-3 rounded text-white">
            Call Now
          </a>

          <a href="#" className="bg-gray-800 px-6 py-3 rounded text-white">
            Get Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 text-center">
        <h2 className="font-bold text-3xl">Our Services</h2>

        <div className="gap-6 grid md:grid-cols-3 mt-8 px-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">HVAC Repair</h3>
            <p>Fast and reliable heating and cooling fixes.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">Installation</h3>
            <p>New system installs with expert precision.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">Maintenance</h3>
            <p>Keep systems running efficiently year-round.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="font-bold text-3xl">
          Need Service Now?
        </h2>

        <a href="tel:6145887215" className="inline-block bg-white mt-6 px-6 py-3 rounded text-blue-600">
          Call 614-588-7215
        </a>
      </section>

    </main>
  );
}
