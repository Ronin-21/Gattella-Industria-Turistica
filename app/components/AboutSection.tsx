import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto flex h-[400px] items-center justify-around px-10">
        <div className="flex h-full w-1/2 flex-col items-start justify-center gap-10">
          <h3 className="font-title text-primary text-5xl font-semibold">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            maxime?
          </p>
          <Link
            href={"https://wa.me/+543858421018"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-dark font-secondary bg-accent hover:shadow-dark/50 text-shadow-dark/20 cursor-pointer px-6 py-2 text-lg font-semibold text-white transition duration-500 ease-in-out text-shadow-md hover:shadow-md"
          >
            Contáctanos
          </Link>
        </div>
        {/* Images */}
        <div className="relative hidden h-full w-1/2 md:flex">
          <Image
            src="/img-5.jpg"
            alt="Banner Image"
            width={450}
            height={300}
            className="shadow-dark/50 absolute top-0 right-0 z-10 h-[300px] w-[450px] -translate-x-20 object-cover shadow-lg"
          />
          <div className="bg-secondary absolute bottom-0 h-[200px] w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
