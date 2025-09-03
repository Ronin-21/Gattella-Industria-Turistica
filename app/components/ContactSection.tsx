import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative flex min-h-[650px] items-center justify-center overflow-hidden"
    >
      <Image
        alt="Contact Background"
        src={"/img-7.jpg"}
        fill
        priority
        quality={75}
        className="object-cover"
      />
      <form className="bg-light/40 shadow-dark/30 z-10 flex h-[500px] w-[850px] flex-col items-center justify-center gap-10 p-5 shadow-lg backdrop-blur-sm">
        <h4 className="font-title text-accent text-shadow-dark/50 text-5xl font-semibold text-shadow-md">
          Contacto
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          veritatis?
        </p>
        <div className="flex w-full max-w-2xl items-center justify-center gap-5">
          <input type="text" className="h-full bg-white" />
          <button
            type="submit"
            className="bg-accent cursor-pointer rounded-md px-4 py-2"
          >
            Enviar
          </button>
        </div>
        <p></p>
      </form>
    </section>
  );
};

export default ContactSection;
