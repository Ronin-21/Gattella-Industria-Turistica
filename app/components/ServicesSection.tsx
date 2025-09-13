import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const features = [
  "Tv por cable",
  "Wifi",
  "Sommier",
  "Baño privado",
  "Aire acondicionado",
  "Baño privado",
  "Aire acondicionado",
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="my-40">
      <div className="container mx-auto flex min-h-[600px] flex-col items-center justify-center md:flex-row">
        {/* Images */}
        <div className="relative h-[600px] w-full md:w-1/2">
          <Image
            alt="Servicios"
            src="/img-7.webp"
            width={700}
            height={500}
            className="shadow-dark/50 top-0 left-0 w-full shadow-lg md:absolute md:w-[700px]"
          />
          <Image
            alt="Servicios"
            src="/img-5.webp"
            width={400}
            height={400}
            className="shadow-dark/50 right-0 bottom-20 h-60 w-full object-cover shadow-lg md:absolute md:w-[400px]"
          />
          <div className="bg-primary shadow-dark/50 absolute bottom-0 flex h-40 max-w-96 items-center p-5 text-center leading-relaxed text-white shadow-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              impedit fuga at. Vel, culpa ea?
            </p>
          </div>
        </div>
        {/* Content */}
        <div className="flex h-full w-full flex-col items-start gap-5 p-10 md:w-1/2">
          <p className="text-secondary">Nuestros Servicios</p>
          <h3 className="font-title text-primary text-5xl font-semibold">
            Lorem ipsum, dolor sit amet
          </h3>
          <p className="text-dark/60 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            placeat commodi blanditiis accusamus similique alias? Non culpa, sed
            ex tenetur blanditiis esse molestias neque reprehenderit, dolor
            debitis aliquid? Delectus, dolorum.
          </p>

          <div className="mt-10">
            <div className="font-secondary grid w-full grid-cols-2 gap-x-10 gap-y-4 text-xl md:w-xl">
              {features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-center gap-1 text-sm">
                  <BiCheck className="text-accent h-6 w-6" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={"https://wa.me/+543858421018"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-dark font-secondary bg-accent hover:shadow-dark/50 text-shadow-dark/20 mt-10 cursor-pointer px-6 py-2 text-lg font-semibold text-white transition duration-500 ease-in-out text-shadow-md hover:shadow-md"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
