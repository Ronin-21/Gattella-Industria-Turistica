import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerFooter = () => {
  return (
    <Marquee
      className="h-[120px] grayscale xl:h-[200px]"
      pauseOnHover={true}
      autoFill={true}
    >
      <Image
        src="/ambassador-logo.svg"
        alt="ambassador-logo"
        width={200}
        height={100}
        className="mx-14 h-[150px] object-contain"
      />
      <Image
        src="/city-logo.webp"
        alt="city-logo"
        width={200}
        height={100}
        className="mx-14 h-[130px] object-contain"
      />
      <Image
        src="/panamericano-logo.webp"
        alt="panamericano-logo"
        width={200}
        height={100}
        className="mx-14 h-[150px] object-contain"
      />
      <Image
        src="/principado-logo.webp"
        alt="principado-logo"
        width={200}
        height={100}
        className="mx-14 h-[150px] object-contain"
      />
      <Image
        src="/suiza-logo.png"
        alt="suiza-logo"
        width={200}
        height={100}
        className="mx-14 h-[130px] object-contain"
      />
    </Marquee>
  );
};

export default BannerFooter;
