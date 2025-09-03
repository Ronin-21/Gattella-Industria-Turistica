import Image from "next/image";
import Link from "next/link";

const PackagesSection = () => {
  return (
    <section
      id="paquetes"
      className="my-20 flex min-h-screen w-full flex-col items-center justify-center gap-20"
    >
      <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-primary font-title text-shadow-dark/30 text-3xl font-bold text-shadow-sm sm:text-4xl md:text-5xl">
          Paquetes
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
          ea. Fugit repellat numquam necessitatibus laudantium doloribus vero
          quibusdam distinctio.
        </p>
      </div>
      <div className="flex h-[600px] w-full max-w-7xl items-center justify-center gap-4 p-4 sm:px-6 lg:px-8">
        <div className="relative flex h-full w-[550px] items-center justify-center overflow-hidden">
          <Image
            src="/img-6.jpg"
            alt="paquetes"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="text-light z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="font-title text-accent text-4xl">
              Lorem ipsum dolor sit
            </p>
            <p className="text-light/85 text-sm leading-relaxed text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique, porro!
            </p>
            <Link
              href={"mailto:"}
              className="hover:bg-primary font-secondary bg-secondary hover:shadow-dark/50 text-shadow-dark/20 mt-6 cursor-pointer px-6 py-2 text-lg font-semibold text-white transition duration-500 ease-in-out text-shadow-md hover:shadow-md"
            >
              Ver mas
            </Link>
          </div>
        </div>
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
          <Image
            src="/img-3.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <Image
            src="/img-4.png"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <Image
            src="/img-5.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <Image
            src="/img-7.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
