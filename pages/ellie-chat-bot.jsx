import Image from "next/image";
import Ellie from "../public/ellie/ellie-port.svg";

export default function EllieChatProduct() {
  return (
    <div className="flex flex-col w-full h-screen px-10">
      <div className="w-full h-screen m-auto">
        <Image src={Ellie} width="960" height="11986" alt="" />
      </div>
    </div>
  );
}
