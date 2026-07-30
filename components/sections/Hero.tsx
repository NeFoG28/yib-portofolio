export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
          🚀 Currently Building • YIB Portfolio
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          One Purpose.
          <br />
          <span className="text-blue-600">
            Many Journeys.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          I build useful things through networking,
          quality assurance, data, and game development.
          Every journey helps me become someone
          more useful for the next challenge.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore My Journey
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100">
            View Projects
          </button>

        </div>

      </div>
    </section>
  );
}