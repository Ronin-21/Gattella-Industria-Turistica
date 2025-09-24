import Image from "next/image";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const features = [
  "3 noches de alojamiento",
  "Todas las comidas con bebidas incluídas",
  "Actividades durante todo el dia",
  "Fiestas temáticas",
  "Gran elección de la Reina del Termalazo",
];

const SeasonsSection = () => {
  return (
    <section id="termalazo" className="my-40">
      <div className="container mx-auto flex min-h-[400px] flex-col items-center justify-center md:flex-row">
        {/* Images */}
        <div className="relative h-[600px] w-full md:w-1/2">
          <Image
            alt="termalazo"
            src="/termalazo-4.webp"
            width={700}
            height={500}
            className="shadow-dark/50 top-0 left-0 w-full shadow-lg md:absolute md:w-[700px]"
          />
          <Image
            alt="termalazo"
            src="/termalazo-5.webp"
            width={400}
            height={400}
            className="shadow-dark/50 right-0 bottom-20 h-60 w-full object-cover shadow-lg md:absolute md:w-[400px]"
          />
          <div className="bg-primary shadow-dark/60 font-title absolute bottom-0 flex h-40 max-w-96 items-center rounded-md p-5 text-center text-lg leading-relaxed text-white italic shadow-md md:left-10">
            <p className="z-10">
              Lo que pasa en el Caribe Santiagueño… queda en el Caribe
              Santiagueño.
            </p>
            <ImQuotesLeft className="text-secondary/40 absolute top-5 left-3 hidden text-5xl md:block" />
            <ImQuotesRight className="text-secondary/40 absolute right-3 bottom-5 hidden text-5xl md:block" />
          </div>
        </div>
        {/* Content */}
        <div className="flex h-full w-full flex-col items-start gap-5 p-5 md:w-1/2 md:p-10">
          <p className="text-secondary">Nuestros Eventos</p>
          <h3 className="font-termalazo text-4xl font-semibold text-cyan-400 md:text-5xl">
            TER<span className="text-lime-400">MAL</span>
            <span className="text-orange-400">AZO</span>
          </h3>
          <p className="text-dark/60 mt-10 text-sm md:text-base">
            La experiencia que convierte a Termas de Río Hondo en el verdadero
            Caribe Santiagueño. Durante 4 días y 3 noches, viví diversión sin
            pausa: actividades durante el día, shows en vivo todas las noches,
            la elección de la Reina y una atmósfera de fiesta que no se
            encuentra en ningún otro lugar.
          </p>
          <p className="text-dark/60 text-sm md:text-base">
            Con amigos, en pareja o en grupo, vení a disfrutar de música,
            alegría y energía termal en un evento que vas a recordar para
            siempre.
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
            href={"https://wa.me/+543858538691"}
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

export default SeasonsSection;
