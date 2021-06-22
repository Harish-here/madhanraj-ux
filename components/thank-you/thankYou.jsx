import Image from "next/image";
import ThumbsUp from "./../../public/thumbs-up.svg";
export default function ThankYou() {
  return (
    <div id="thank-you" className="mt-10 flex ">
      <div className="flex items-center justify-center w-full">
        <div className="font-30 thankyou-text">Thank you</div>
        <div className="ml-4">
          <Image width="27" height="30" src={ThumbsUp} alt="" />
        </div>
      </div>
    </div>
  );
}
