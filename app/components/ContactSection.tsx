import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative flex h-[750px] items-center justify-center overflow-hidden md:h-[650px]"
    >
      <Image
        alt="Contact Background"
        src={"/hotel-principado-1.webp"}
        fill
        priority
        quality={75}
        className="object-cover"
      />
      <form className="bg-light/40 shadow-dark/50 z-10 flex min-h-[500px] w-full flex-col items-center justify-center gap-5 py-6 shadow-lg backdrop-blur-sm md:w-[850px]">
        <h4 className="font-title text-accent text-shadow-dark/50 text-4xl md:text-5xl font-semibold text-shadow-md">
          Contacto
        </h4>
        <p className="w-full max-w-xl text-center text-sm md:text-base">
          Estamos para ayudarte, escribinos y conversemos sobre tu próxima
          experiencia
        </p>
        <ContactForm />
        <p></p>
      </form>
    </section>
  );
};

export default ContactSection;
