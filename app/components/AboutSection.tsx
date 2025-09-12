import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto flex min-h-[400px] flex-col items-center justify-around md:flex-row md:px-10">
        <div className="flex h-full flex-col items-start justify-center gap-10 md:w-1/2">
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
        <div className="relative flex h-[400px] md:w-1/2">
          <Image
            src="/img-5.jpg"
            alt="Banner Image"
            width={450}
            height={300}
            className="shadow-dark/50 top-0 right-0 z-10 h-[300px] object-cover shadow-lg md:absolute md:w-[450px] md:-translate-x-20"
          />
          <div className="bg-secondary bottom-0 h-[200px] w-full md:absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
