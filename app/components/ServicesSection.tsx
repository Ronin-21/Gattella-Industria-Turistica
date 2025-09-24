import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-40" id="servicios">
      <div className="container mx-auto flex min-h-[600px] flex-col items-center justify-around md:flex-row md:px-10">
        <div className="flex h-full flex-col items-start justify-center gap-10 md:w-1/2">
          <h3 className="font-title text-primary text-5xl font-semibold">
            Servicios
          </h3>
          <p className="max-w-md">
            En todos nuestros hoteles te ofrecemos una experiencia completa de
            descanso y entretenimiento.
          </p>
          <p className="max-w-md">
            Todos nuestros hoteles están diseñados para que disfrutes de una
            estadía única, combinando descanso, diversión y bienestar. La tarifa
            incluye desayuno buffet cada mañana, acceso a piscinas termales,
            sauna, actividades recreativas y cochera opcional.
          </p>
          <p className="max-w-md">
            Las habitaciones cuentan con camas sommier, TV con cable, aire
            acondicionado y bañera con hidromasaje, además de otros detalles que
            aseguran tu comodidad.
          </p>
          <p className="max-w-md">
            Para quienes buscan una experiencia aún más completa, ofrecemos
            servicio de restaurante, bar y masajes, ideales para relajarte y
            dejarte llevar por el espíritu de Termas.
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
        <div className="relative flex h-[600px] md:w-1/2">
          <Image
            src="/hotel-ambassador-4.jpg"
            alt="Banner Image"
            width={450}
            height={300}
            className="shadow-dark/80 top-0 right-0 z-10 h-[300px] rounded-md object-cover shadow-lg md:absolute md:w-[450px] md:-translate-x-20 md:translate-y-20"
          />
          <Image
            src="/hotel-principado-1.jpg"
            alt="Banner Image"
            width={450}
            height={300}
            className="shadow-dark/60 bottom-0 z-0 h-[300px] w-full rounded-md object-cover shadow-lg md:absolute"
          />
          <Image
            src="/hotel-suiza-2.jpg"
            alt="Banner Image"
            width={450}
            height={300}
            className="shadow-dark/50 top-0 z-0 h-[300px] rounded-md object-cover shadow-lg md:absolute md:w-[450px] md:-translate-x-20 md:-translate-y-10"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
