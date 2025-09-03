import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <div className="bg-light flex h-[650px] w-full flex-col items-center justify-center">
      <div className="container mx-auto">
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-primary font-title text-shadow-dark/30 text-3xl font-bold text-shadow-sm sm:text-4xl md:text-5xl">
            Testimonios
          </h2>
          <p className="max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam
            ea. Fugit repellat numquam necessitatibus laudantium doloribus vero
            quibusdam distinctio.
          </p>
        </div>
        {/* Testimonials */}
        <div className="grid h-full w-full grid-cols-3 gap-4">
          <div className="flex h-full flex-col items-center justify-center gap-5 p-4 text-center">
            <div className="relative mb-5 flex h-40 w-40 items-center justify-center">
              <Image
                src={"/img-8.jpg"}
                alt="testimonial"
                fill
                className="z-20 rounded-full object-cover"
              />
              <div className="bg-secondary absolute z-10 h-48 w-48 rounded-full opacity-50"></div>
              <div className="bg-primary absolute z-0 h-56 w-56 rounded-full opacity-50"></div>
            </div>
            <p className="text-xl">Lorem, ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, magni
            </p>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-5 p-4 text-center">
            <div className="relative mb-5 flex h-40 w-40 items-center justify-center">
              <Image
                src={"/img-8.jpg"}
                alt="testimonial"
                fill
                className="z-20 rounded-full object-cover"
              />
              <div className="bg-secondary absolute z-10 h-48 w-48 rounded-full opacity-50"></div>
              <div className="bg-primary absolute z-0 h-56 w-56 rounded-full opacity-50"></div>
            </div>
            <p className="text-xl">Lorem, ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, magni
            </p>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-5 p-4 text-center">
            <div className="relative mb-5 flex h-40 w-40 items-center justify-center">
              <Image
                src={"/img-8.jpg"}
                alt="testimonial"
                fill
                className="z-20 rounded-full object-cover"
              />
              <div className="bg-secondary absolute z-10 h-48 w-48 rounded-full opacity-50"></div>
              <div className="bg-primary absolute z-0 h-56 w-56 rounded-full opacity-50"></div>
            </div>
            <p className="text-xl">Lorem, ipsum dolor</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, magni
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
