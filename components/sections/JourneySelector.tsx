import { journeys } from "@/data/journeys";
import JourneyCard from "../ui/JourneyCard";

export default function JourneySelector() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="mb-16 text-center">

        <p className="text-blue-600 font-semibold">
          Explore My Journey
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Choose a Perspective
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          The same person.
          Different contributions.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {journeys.map((journey) => (
          <JourneyCard
            key={journey.id}
            journey={journey}
          />
        ))}

      </div>

    </section>
  );
}