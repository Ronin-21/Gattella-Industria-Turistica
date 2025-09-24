import Image from "next/image";
import Link from "next/link";

const PackagesSection = () => {
  return (
    <section
      id="paquetes"
      className="my-20 flex min-h-screen w-full flex-col items-center justify-center gap-20"
    >
      <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-primary font-title text-shadow-dark/30 text-3xl font-bold text-shadow-sm sm:text-4xl md:text-5xl">
          Paquetes
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
          ea. Fugit repellat numquam necessitatibus laudantium doloribus vero
          quibusdam distinctio.
        </p>
      </div>
      <div className="flex h-[600px] w-full max-w-7xl flex-col items-center justify-center gap-4 md:flex-row">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden md:w-[550px]">
          {/* <Image
            src="/img-6.webp"
            alt="paquetes"
            fill
            className="object-cover grayscale"
          /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover"
          >
            <source src="/termalazo.mp4" type="video/mp4" />
            Tu navegador no soporta el video HTML5.
          </video>
          <div className="absolute inset-0 bg-black/70" />
          <div className="text-light z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="font-title text-accent text-4xl">
              Viví Termas todo el año
            </p>
            <p className="text-light/85 text-sm leading-relaxed text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique, porro!
            </p>
            <Link
              href={"mailto:reservas@gattellaindustriaturistica.com"}
              className="hover:bg-primary font-secondary bg-secondary hover:shadow-dark/50 text-shadow-dark/20 mt-6 cursor-pointer px-6 py-2 text-lg font-semibold text-white transition duration-500 ease-in-out text-shadow-md hover:shadow-md"
            >
              Ver mas
            </Link>
          </div>
        </div>
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
          <Image
            src="/hotel-city-4.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover object-top"
          />
          <Image
            src="/hotel-panamericano-2.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <Image
            src="/hotel-principado-1.jpg"
            alt="paquetes"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <Image
            src="/hotel-ambassador-2.jpg"
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
