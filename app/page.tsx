export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">

      <section className="bg-gray-100 py-20 text-center">
        <h1 className="font-bold text-4xl">
          Emergency HVAC Repair in Michigan
        </h1>

        <p className="mt-4 text-lg">
          Winter Pro HVAC — Same-day service. Licensed professionals. 24/7 emergency availability.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          
            Call Now
          </a>

          
            Get Quote
          </a>

        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="font-bold text-3xl">
          HVAC Services Across Michigan
        </h2>

        <div className="gap-6 grid md:grid-cols-3 mt-8 px-6">
          <div className="p-6 border rounded-lg">
            <h3>HVAC Repair</h3>
            <p>Fast and reliable repairs</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3>Installation</h3>
            <p>Professional installs</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3>Maintenance</h3>
            <p>Keep systems efficient</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-20 text-center">
        <h2 className="font-bold text-3xl">Get a Free Quote</h2>

        <form
          className="flex flex-col gap-4 mx-auto mt-8 max-w-md"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);

            await fetch("/api/leads", {
              method: "POST",
              body: JSON.stringify(data),
            });

            alert("Request submitted!");
          }}
        >
          <input name="name" placeholder="Your Name" required className="p-3 border rounded" />
          <input name="phone" placeholder="Phone Number" required className="p-3 border rounded" />

          <select name="service" className="p-3 border rounded">
            <option>HVAC Repair</option>
            <option>Installation</option>
            <option>Maintenance</option>
          </select>

          <button className="bg-blue-600 p-3 rounded text-white">
            Submit Request
          </button>
        </form>
      </section>

    </main>
  );
}
