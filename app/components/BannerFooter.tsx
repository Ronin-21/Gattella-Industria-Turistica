import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const BannerFooter = () => {
  return (
    <Marquee
      className="h-[120px] grayscale md:h-[200px]"
      pauseOnHover={true}
      autoFill={true}
    >
      {/* Hotel Ambassador */}
      <Link
        href={"https://hotelambassadorinn.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/ambassador-logo.svg"
          alt="ambassador-logo"
          width={200}
          height={100}
          className="mx-14 h-[100px] object-contain md:h-[150px]"
        />
      </Link>
      {/* Hotel City */}
      <Link
        href={"https://grandhotelcity.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/city-logo.webp"
          alt="city-logo"
          width={200}
          height={100}
          className="mx-14 h-[100px] object-contain md:h-[130px]"
        />
      </Link>
      {/* Hotel Panamericano */}
      <Link
        href={"https://hotelpanamericanotermal.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/panamericano-logo.webp"
          alt="panamericano-logo"
          width={200}
          height={100}
          className="mx-14 h-[100px] object-contain md:h-[150px]"
        />
      </Link>
      {/* Hotel Principado */}
      <Link
        href={"https://grandhotelprincipado.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/principado-logo.webp"
          alt="principado-logo"
          width={200}
          height={100}
          className="mx-14 h-[100px] object-contain md:h-[150px]"
        />
      </Link>
      {/* Hotel Suiza */}
      <Link
        href={"https://hotelsuizatermal.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/suiza-logo.webp"
          alt="suiza-logo"
          width={200}
          height={100}
          className="mx-14 h-[100px] object-contain md:h-[130px]"
        />
      </Link>
    </Marquee>
  );
};

export default BannerFooter;
