import ImgBox from "../components/img-box";
import ToucanImg from "../public/toucan/PORT-UX.svg";

export default function Toucan() {
  return (
    <div className="w-full m-auto h-screen px-10">
      <ImgBox src={ToucanImg} aspectRatio={Number(0.105136)} />
    </div>
  );
}
