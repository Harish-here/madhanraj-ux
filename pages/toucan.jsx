import Image from "next/image";
import ToucanImg from "../public/toucan/PORT-UX.svg";

export default function Toucan() {
  return (
    <div className="flex flex-col w-full h-screen px-10">
      <div className="w-full h-screen m-auto">
        <Image src={ToucanImg} width="960" height="9131" alt="" />
      </div>
    </div>
  );
}
