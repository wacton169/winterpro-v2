export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">

      {/* HERO */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="font-bold text-4xl">
          Emergency HVAC Repair in Michigan
        </h1>

        <p className="mt-4 text-lg">
          Winter Pro HVAC — Same-day service. Licensed professionals. 24/7 emergency availability.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="tel:6145887215"
            className="px-6 py-3 border rounded-lg"
          >
            Call Now
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg"
          >
            Get Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        <h2 className="font-bold text-3xl">
          HVAC Services Across Michigan
        </h2>

        <div className="gap-6 grid md:grid-cols-3 mt-8 px-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">HVAC Repair</h3>
            <p>Fast and reliable heating and cooling repairs.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">Installation</h3>
            <p>Professional HVAC system installation.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-bold">Maintenance</h3>
            <p>Keep your system running efficiently year-round.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="font-bold text-2xl">
          Why Choose Winter Pro HVAC?
        </h2>

        <div className="flex md:flex-row flex-col justify-center gap-6 mt-6">
          <div>✅ Licensed & Insured</div>
          <div>✅ 24/7 Emergency Service</div>
          <div>✅ Fast Response Times</div>
        </div>
      </section>

      {/* CTA */}
