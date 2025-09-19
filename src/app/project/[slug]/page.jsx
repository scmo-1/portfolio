import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";
import projects from "@/content/projects.json";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const content = projects.find((p) => p.id === slug);

  return (
    <section className="p-auto flex flex-col items-center pt-40 pb-20">
      <div className="flex w-full max-w-screen-2xl flex-col gap-5 px-5 md:px-10">
        <h1 className="text-6xl">{content.title}</h1>
        <ul>
          <li>Status: {content.status}</li>
          <li>Year: {content.year}</li>
        </ul>
        <p className="text-xl lg:w-1/2">{content.description}</p>
        <ul className="flex flex-wrap gap-1">
          {content.tags.map((tag, idx) => (
            <li key={idx} className="w-max rounded-full border-2 px-2 text-lg">
              {tag}
            </li>
          ))}
        </ul>
        <div>
          <h2 className="mb-2"> Features:</h2>
          <ul className="">
            {content.features.map((feat, idx) => (
              <li key={idx} className="border-b-1 border-neutral-500">
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <p> Role: {content.role}</p>
        <div>
          <h3>What I've learned</h3>
          <p>{content.learning_outcomes}</p>
        </div>
        <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-10">
          <ExternalLink>Github</ExternalLink>
          <ExternalLink>Live Site</ExternalLink>
        </div>
      </div>
    </section>
  );
}

//  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[16/10]">
//             <Image
//               src={"/images/placeholder.png"}
//               alt="product"
//               fill
//               className="object-cover"
//             />
//           </div>
