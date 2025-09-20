import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";
import projects from "@/content/projects.json";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const content = projects.find((p) => p.id === slug);

  return (
    <section className="p-auto mb-200 flex min-h-screen flex-col items-center px-5 pt-40 pb-10 md:px-10">
      <div className="flex w-full max-w-screen-2xl flex-col gap-5">
        <h1 className="text-6xl">{content.title}</h1>
        <ul>
          <li>Status: {content.status}</li>
          <li>Year: {content.year}</li>
        </ul>
        <div className="flex gap-10">
          <ExternalLink>Github</ExternalLink>
          <ExternalLink>Live Site</ExternalLink>
        </div>
        <p className="text-xl lg:w-1/2">{content.description}</p>
        <ul className="flex flex-wrap gap-1">
          {content.tags.map((tag, idx) => (
            <li key={idx} className="w-max rounded-full border-2 px-2 text-lg">
              {tag}
            </li>
          ))}
        </ul>

        <div>
          <h2 className="mb-2 text-xl"> Features:</h2>
          <ul className="">
            {content.features.map((feat, idx) => (
              <li key={idx} className="border-b-1 border-neutral-500">
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl">Role</h2>
          <p> {content.role}</p>
        </div>
        <div>
          <h3 className="text-xl">What I've learned</h3>
          <p>{content.learning_outcomes}</p>
        </div>
      </div>
    </section>
  );
}

/* <div className="relative mb-5 aspect-[1/2] w-1/2 overflow-hidden rounded-xl">
          <Image
            src={content.image02}
            alt={`Image of ${content.title}`}
            fill
            className="object-fit"
          />
        </div> */
