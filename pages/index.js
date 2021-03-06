import Image from "next/image";
import ImgBox from "../components/img-box";
import HomeBanner from "../public/home/home_banner.webp";
import HomeHeading from "../public/home/home_heading.webp";
export default function Home() {
  return (
    <div id="home" className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center pt-4 mt-10">
          <ImgBox
            aspectRatio={Number(4.965811)}
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
