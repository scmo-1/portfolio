import Image from "next/image";
import ExternalLink from "@/components/ui/ExternalLink";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  return (
    <section className="p-auto flex flex-col items-center pt-40 pb-20">
      <div className="flex w-full max-w-screen-2xl flex-col gap-5 px-5 md:px-10">
        <h1 className="text-7xl">Title</h1>
        <p className="text-xl lg:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <span className="rounded-full border-2 px-2 text-lg">Next.js</span>
        </div>
        <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-10">
          <ExternalLink>Github</ExternalLink>
          <ExternalLink>Live Site</ExternalLink>
        </div>
        <div className="relative mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[16/10]">
            <Image
              src={"/images/placeholder.png"}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={"/images/placeholder.png"}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={"/images/placeholder.png"}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={"/images/placeholder.png"}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
