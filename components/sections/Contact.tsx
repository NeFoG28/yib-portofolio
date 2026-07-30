import { ArrowUpRight, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <Section
      id="contact"
      subtitle="Start a Conversation"
      title="Let's Build Something Useful"
    >
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Whether it&apos;s a network that needs to stay connected,
            a product that needs to be tested, data that needs to be
            understood, or an idea that needs to be brought to life —
            I&apos;m always open to meaningful work and new journeys.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>

            {contact.social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}

          </div>

        </div>

      </div>
    </Section>
  );
}