export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
         Beyond the Resume
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Who I Am
        </p>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
         I enjoy building things that are useful.

Throughout my journey, I have explored networking, quality assurance, data, and game development—not to master everything, but to understand how different disciplines can work together.

I believe meaningful solutions often come from connecting knowledge across fields. Every project is an opportunity to learn, contribute, and leave something better than before.
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