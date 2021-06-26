import Image from "next/image";
import OpeningBanner from "../public/hotel-app/opening_banner.webp";
import Marketing from "../public/hotel-app/marketing.webp";
import JourneyMap from "../public/hotel-app/journey_map.webp";
import { wireframeImgs } from "../constants/pages/hotel-app/data";
import ThankYou from "../components/thank-you";
import ImgBox from "../components/img-box";
export default function HotelApp() {
  return (
    <div id="hotel-app" className="flex flex-col w-full h-screen px-10">
      <h1 className="font-40 text-center my-10 p-4">
        Hotel Booking App for B2B
      </h1>
      <section id="opening">
        <div className="font-30 mb-6">Goal</div>
        <div className="font-20 mb-6">
          To design a hotel room booking application for B2B organisation, where
          its Employee policy, Approval management system has to be done in a
          single place.{" "}
        </div>
        <div className="flex justify-center">
          <ImgBox src={OpeningBanner} aspectRatio={Number(1.3662)} />
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">Competitor Analysis - Possibilities</div>
        <div className="font-16">
          <div className="font-20">
            {" "}
            Other hotel associations in India have alleged that Go-MMT charges
            exorbitant commissions, has unfair accounting practices and offers
            unauthorised and further discounting of prices set by hoteliers. The
            Hotel & Restaurant Association of Gujarat had first raised the issue
            against Go-MMT. According to Lamta, the SHRA had written to the
            aggregator about the concerns raised by local hotels.
            <br />
            <br />
            “The association had raised specific concerns to be addressed and
            resolved… including abolishing coupon code discounting on hotels…
            standardising commission at 15% and removing the clause of
            performance-linked bonuses without the written consent of hotels,
            among others. But we haven’t received any reply or response from
            Go-MMT and so we have decided to take this step,” Lamta said.
          </div>
          <br /> Read more at:
          <br />
          http://economictimes.indiatimes.com/articleshow/67578678.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst
          <div className="font-22 my-6">With OYO</div>
          <div className="font-20">
            “Our new proposed organisation, HACI, has the support of 47 pan
            India associations which have about 8000 hoteliers as members. Oyo
            has become more stubborn and our concerns still exist. They are
            trying to contact individual hoteliers, which is not useful. Our
            Oyo-listed partners in Jaipur will not accept bookings from January
            15, which will be followed by other cities like Mysore and Shirdi
            and later Mumbai,” said Ashraf Ali, joint convenor, HACI.
          </div>
          <br /> Read more at:
          <br />
          http://economictimes.indiatimes.com/articleshow/67447132.cms?utm_source=contentofinterest&utm_medium=text&utm_
          campaign=cppst.
          <br />
          <div className="font-20 my-6">
            Magow’s observation finds resonance in the report, which states that
            almost two-thirds of India’s rooms supply in 2020-21 will comprise
            of budget hotels. “Hotel bookings are bound to be the next growth
            driver for the OTAs, especially because the margins are higher. If
            you consider the $2.3 billion projection in gross booking value and
            take at least 15% as commission, the revenue opportunity is huge,”
            Abhishek Goyal, the founder of start-up tracker Tracxn, said over
            the phone.
          </div>
          https://www.livemint.com/Industry/pEhTS9khxa7R6xTxiSAuIM/Online-hotel-bookings-to-generate-about-23-billion-by-2020.html
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">Persona</div>
        <div className="relative w-full">
          <ImgBox aspectRatio={Number(0.6)} src={Marketing} />
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">Journey Map</div>
        <div className="relative w-full">
          <ImgBox aspectRatio={Number(2.1286)} src={JourneyMap} />
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">High fidelity Wireframe</div>
        <div className="flex flex-wrap justify-evenly">
          {wireframeImgs?.map((src) => (
            <ImgBox key={src} src={src} aspectRatio={Number(1.3662)} />
          ))}
        </div>
      </section>
      <ThankYou />
    </div>
  );
}
