import Image from "next/image";
import ImgBox from "../components/img-box";
import Ellie from "../public/ellie/ellie-port.svg";

export default function EllieChatProduct() {
  return (
    <div id="ellie" className=" w-full h-screen px-10">
      <ImgBox src={Ellie} aspectRatio={Number(0.0800934)} />
    </div>
  );
}
