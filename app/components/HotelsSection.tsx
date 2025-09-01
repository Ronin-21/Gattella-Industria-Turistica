import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hotel Ambassador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/hotel-ambassador.webp",
    site: "https://hotelambassadorinn.com/",
  },
  {
    title: "Hotel City",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/hotel-city.webp",
    site: "https://grandhotelcity.com/",
  },
  {
    title: "Hotel Panamericano",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/hotel-panamericano.webp",
    site: "https://hotelpanamericanotermal.com/",
  },
  {
    title: "Hotel Principado",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/hotel-principado.webp",
    site: "https://grandhotelprincipado.com/",
  },
  {
    title: "Hotel Suiza",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageUrl: "/hotel-suiza.png",
    site: "https://hotelsuizatermal.com/",
  },
];

const HotelsSection = () => {
  return (
    <div className="bg-dark grid min-h-[600px] w-full grid-cols-5">
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
    </div>
  );
};

export default HotelsSection;
