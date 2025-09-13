import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="relative container mx-auto my-20 min-h-[800px]">
      <div className="bg-dark text-light shadow-dark/50 flex min-h-[400px] w-full max-w-4xl flex-col items-center gap-6 p-8 text-center leading-relaxed tracking-wide shadow-lg md:absolute md:top-0 md:right-0 lg:p-16">
        <h3 className="font-title text-accent text-4xl tracking-wide">
          Quienes Somos?
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dolores
          assumenda exercitationem, ullam suscipit molestiae impedit enim
          nostrum sint quaerat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dolores
          assumenda exercitationem, ullam suscipit molestiae impedit enim
          nostrum sint quaerat. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eius dolores assumenda exercitationem, ullam
          suscipit molestiae impedit enim nostrum sint quaerat.
        </p>
      </div>
      <div className="shadow-dark/50 left-0 shadow-lg md:absolute md:bottom-1/2 md:translate-y-1/2">
        <Image
          src="/img-1.webp"
          alt="Welcome"
          width={700}
          height={600}
          className="h-[600px] w-full object-cover md:w-[700px]"
        />
      </div>
      <div className="shadow-dark/50 bottom-0 shadow-lg md:absolute md:right-1/2 md:translate-x-10/12">
        <Image
          src="/img-2.webp"
          alt="Welcome"
          width={600}
          height={350}
          className="h-[350px] w-full object-cover md:w-[600px]"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
