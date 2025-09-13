import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerFooter = () => {
  return (
    <Marquee
      className="h-[120px] grayscale md:h-[200px]"
      pauseOnHover={true}
      autoFill={true}
    >
      <Image
        src="/ambassador-logo.svg"
        alt="ambassador-logo"
        width={200}
        height={100}
        className="mx-14 h-[100px] object-contain md:h-[150px]"
      />
      <Image
        src="/city-logo.webp"
        alt="city-logo"
        width={200}
        height={100}
        className="mx-14 h-[100px] object-contain md:h-[130px]"
      />
      <Image
        src="/panamericano-logo.webp"
        alt="panamericano-logo"
        width={200}
        height={100}
        className="mx-14 h-[100px] object-contain md:h-[150px]"
      />
      <Image
        src="/principado-logo.webp"
        alt="principado-logo"
        width={200}
        height={100}
        className="mx-14 h-[100px] object-contain md:h-[150px]"
      />
      <Image
        src="/suiza-logo.webp"
        alt="suiza-logo"
        width={200}
        height={100}
        className="mx-14 h-[100px] object-contain md:h-[130px]"
      />
    </Marquee>
  );
};

export default BannerFooter;
