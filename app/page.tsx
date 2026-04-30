export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">

      {/* HERO SECTION */}
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
            className="bg-blue-600 px-6 py-3 rounded-lg text-white"
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

      {/* SERVICES SECTION */}
      <section className="py-20 text-center">
