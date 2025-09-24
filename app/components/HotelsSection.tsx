import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hotel Ambassador Inn",
    description:
      "Sumergite en nuestras piscinas y disfrutá de un descanso único.",
    imageUrl: "/hotel-ambassador.webp",
    site: "https://hotelambassadorinn.com/",
  },
  {
    title: "Grand Hotel City",
    description:
      "Diversión, buena comida y hospitalidad en el corazón de Termas.",
    imageUrl: "/hotel-city.webp",
    site: "https://grandhotelcity.com/",
  },
  {
    title: "Hotel Panamericano",
    description: "Relajate, renovate y encontrá tu bienestar en cada detalle.",
    imageUrl: "/hotel-panamericano.webp",
    site: "https://hotelpanamericanotermal.com/",
  },
  {
    title: "Grand Hotel Principado",
    description: "Descubrí la elegancia, combinada con tradición y confort.",
    imageUrl: "/hotel-principado.webp",
    site: "https://grandhotelprincipado.com/",
  },
  {
    title: "Hotel Suiza",
    description: "Elegí el clásico de Termas y volvé a sentirte en casa.",
    imageUrl: "/hotel-suiza.webp",
    site: "https://hotelsuizatermal.com/",
  },
];

const HotelsSection = () => {
  return (
    <section
      id="hoteles"
      className="bg-dark grid min-h-[600px] w-full grid-cols-1 md:grid-cols-5"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative flex items-center justify-center overflow-hidden"
        >
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Content */}
          <div className="z-10 flex flex-col items-center gap-8 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h4 className="font-title text-accent text-shadow-dark/50 text-3xl text-shadow-md">
              {service.title}
            </h4>
            <p className="leading-relaxed">{service.description}</p>
            <Link
              href={service.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:bg-dark font-secondary cursor-pointer bg-transparent px-6 py-2 text-lg outline-2 transition duration-500"
            >
              Ver sitio
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HotelsSection;
