import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";
import projects from "@/content/projects.json";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const content = projects.find((p) => p.id === slug);

  return (
    <section className="mb-200 flex min-h-screen flex-col items-center justify-center px-5 pt-40 pb-10 md:px-10">
      <article className="mx-auto flex w-full max-w-screen-xl flex-col gap-5 lg:items-start lg:justify-between">
        <h1 className="text-6xl">{content.title}</h1>
        <ul className="mt-2 space-y-1">
          <li>Status: {content.status}</li>
          <li>Year: {content.year}</li>
        </ul>

        <p className="text-xl lg:w-1/2">{content.description}</p>
        <div className="flex w-full flex-col justify-between gap-5 lg:flex-row">
          <ul className="flex flex-wrap items-center gap-2">
            {content.tags.map((tag, idx) => (
              <li
                key={idx}
                className="w-max rounded-full border-2 px-3 py-1 text-lg"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-10 lg:self-end">
            <ExternalLink>Github</ExternalLink>
            <ExternalLink>Live Site</ExternalLink>
          </div>
        </div>
      </article>

      <div className="relative z-1 my-10 aspect-[4/3] w-full max-w-screen-xl overflow-hidden rounded-xl lg:aspect-[16/8]">
        <Image
          src={content.image}
          alt={`Image of ${content.title}`}
          fill
          className="object-cover"
        />
      </div>

      <article className="mx-auto flex w-full max-w-screen-xl flex-col gap-8">
        <div>
          <h2 className="mb-2 text-xl lg:text-3xl">Features:</h2>
          <ul className="space-y-1 lg:text-lg">
            {content.features.map((feat, idx) => (
              <li key={idx} className="border-b border-neutral-500 pb-1">
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl lg:text-3xl">Process:</h2>
          <p className="lg:text-lg">{content.process}</p>
        </div>

        <div>
          <h3 className="mb-2 text-xl lg:text-3xl">What I've learned</h3>
          <p className="lg:text-lg">{content.learning_outcomes}</p>
        </div>
      </article>
    </section>
  );
}
