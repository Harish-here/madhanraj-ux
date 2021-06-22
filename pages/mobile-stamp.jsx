import Image from "next/image";
import ThankYou from "../components/thank-you";
import MobileStampBanner from "../public/mobile-stamp/mobile_stamp.webp";
import MobileStampSheet from "../public/mobile-stamp/mobile_stamp_sheet.webp";
import EmojiThink from "../public/mobile-stamp/thinking.svg";
export default function MobileStamp() {
  return (
    <div id="mobile-stamp" className="flex flex-col w-full h-screen px-10">
      <div className="font-40 text-center my-10 p-4">Mobile Stamp</div>
      <section>
        <div className="font-30 mb-6">Challenges while designing</div>
        <p>
          As an UX designer while designing for mobile apps on paper sketches it
          was frustrating, on every time to do draw mobile shapes and filling up
          the details time, wifi, battery icons
        </p>
      </section>
      <section>
        <div className="font-30 mb-6">Pain points</div>
        <ul className="ml-6">
          <li className="p-2">
            Mobile App templates sketches has only limited number of sheets
          </li>
          <li className="p-2">
            Mostly we draw in an unruled note, there we need immediate mobile
            app template
          </li>
          <li className="p-2">
            Working on different module unable to take different note
          </li>
        </ul>
      </section>
      <section>
        <div className="mb-8 flex items-center">
          <div className="font-30 ">How it will be…?</div>
          <div className="ml-6">
            <Image src={EmojiThink} width="50" height="50" alt="Mobile stamp" />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={MobileStampBanner}
            width="741"
            height="365"
            alt="Mobile stamp"
          />
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">Solution</div>
        <div className="flex justify-center">
          <Image
            src={MobileStampSheet}
            width="909"
            height="858"
            alt="Mobile stamp"
          />
        </div>
      </section>
      <ThankYou />
    </div>
  );
}
