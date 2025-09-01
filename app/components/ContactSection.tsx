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
      <div className="bg-primary/50 z-10 flex h-[500px] w-[850px] flex-col items-center justify-center p-5 text-white backdrop-blur-sm shadow-lg shadow-dark/30">
        <h4></h4>
        <p></p>
        <div>
          <input type="text" />
          <button></button>
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default ContactSection;
