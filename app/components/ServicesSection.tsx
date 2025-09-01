import Link from "next/link";
import { FaTheaterMasks } from "react-icons/fa";
import { IoIosFitness, IoIosRestaurant } from "react-icons/io";
import { MdOutlinePool, MdOutlineSpa, MdWifi } from "react-icons/md";

const services = [
  {
    icon: <MdOutlinePool />,
    title: "Piscinas",
    description: "Piscinas internas y externas con agua termal",
  },
  {
    icon: <IoIosRestaurant />,
    title: "Restaurante & Bar",
    description:
      "Restaurante con menú regional e internacional, y bar con coctelería de autor.",
  },
  {
    icon: <MdWifi />,
    title: "Wi-Fi",
    description:
      "Wi-Fi de alta velocidad en todo el hotel para que te mantengas conectado.",
  },
  {
    icon: <IoIosFitness />,
    title: "Gimnasio",
    description:
      "Gimnasio equipado con máquinas de última generación y clases dirigidas.",
  },
  {
    icon: <MdOutlineSpa />,
    title: "Spa & Relax",
    description:
      "Spa con sauna seco, húmedo y masajes relajantes y terapéuticos.",
  },
  {
    icon: <FaTheaterMasks />,
    title: "Actividades Recreativas",
    description: "Shows y actividades recreativas durante la temporada alta.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicios"
      className="container mx-auto flex flex-col items-center justify-evenly gap-20 px-4 py-20 md:my-20"
    >
      {/* Servicios */}
      <div className="flex max-w-3xl flex-col gap-8 md:self-start">
        <div className="flex w-full items-center justify-between px-2 sm:px-0">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-lg sm:text-xl md:text-2xl">
              Nuestros Servicios
            </h4>
            <h3 className="text-primary font-title text-shadow-dark/30 text-3xl font-bold text-shadow-sm sm:text-4xl md:text-5xl">
              Servicios
            </h3>
          </div>
        </div>
        <p className="text-dark/60 text-center text-base sm:text-lg md:text-left">
          En nuestro hotel, cada servicio está pensado para que disfrutes una
          estadía sin preocupaciones, rodeado de confort y atención
          personalizada.
        </p>
      </div>
      {/* Iconos */}
      <div className="grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 px-2 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-primary group flex max-w-xs flex-col items-center gap-4 rounded-md bg-white p-6 shadow-lg transition-all duration-200 hover:border-b-4 hover:shadow-black/50"
          >
            <div className="text-primary text-4xl sm:text-5xl">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold sm:text-xl">
              {service.title}
            </h3>
            <p className="text-dark/50 text-center text-sm sm:text-base">
              {service.description}
            </p>
            <Link
              href={"/reservas"}
              className="hover:text-primary group-hover:animate-fade-right group-hover:animate-duration-[2000ms] mt-4 text-base font-medium transition-colors duration-200 sm:text-lg"
            >
              Reservar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
