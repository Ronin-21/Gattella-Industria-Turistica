import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="relative container mx-auto my-20 min-h-[800px]">
      <div className="bg-dark text-light shadow-dark/50 absolute top-0 right-0 flex h-[400px] w-full max-w-4xl flex-col items-center gap-6 p-4 text-center leading-relaxed tracking-wide shadow-lg md:p-8 lg:p-16">
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
      <div className="shadow-dark/50 absolute bottom-1/2 left-0 translate-y-1/2 shadow-lg">
        <Image
          src="/img-1.jpg"
          alt="Welcome"
          width={700}
          height={600}
          className="h-[600px] object-cover"
        />
      </div>
      <div className="shadow-dark/50 absolute right-1/2 bottom-0 translate-x-10/12 shadow-lg">
        <Image
          src="/img-2.jpg"
          alt="Welcome"
          width={600}
          height={350}
          className="h-[350px] object-cover"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
