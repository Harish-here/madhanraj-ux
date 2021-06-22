import Image from "next/image";
import HomeBanner from "../public/home/home_banner.webp";
import HomeHeading from "../public/home/home_heading.webp";
export default function Home() {
  return (
    <div id="home" className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center pt-4 mt-10">
          <Image
            width="611"
            height="101"
            src={HomeHeading}
            alt="Home heading"
          />
        </div>
        <div className="home-banner">
          <Image src={HomeBanner} alt="Home banner" />
        </div>
      </div>
    </div>
  );
}
