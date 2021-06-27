import Image from "next/image";
import SeeMyIdLogo from "../public/digi-card/seemyid_logo.svg";
import ImageCard from "../components/image-card";
import ThankYou from "../components/thank-you";
import {
  userBehaviourCard,
  conceptCard,
  conceptCard2,
  salesPersonCard,
  paperSketchImgs,
  wireframeImgs,
} from "../constants/pages/digi-card/data";
import ImgBox from "../components/img-box";
import Personna from "../public/digi-card/personna.webp";
import ConceptBoard from "../public/digi-card/concept_board.webp";
import MarketingGroup from "../public/digi-card/marketing/marketing_group.webp";
import MarketingBanner from "../public/digi-card/marketing/marketing_banner.webp";
import SalesExample from "../public/digi-card/sales/example.webp";

export default function DigiCard() {
  return (
    <div
      id="digi-card-page"
      className="flex flex-col items-stretch  w-full h-screen px-10"
    >
      <section>
        <div className="page-heading">Digital Business Card</div>
        <div className="page-banner-container flex justify-center">
          <div>
            <div className="seemyid-logo">
              <Image src={SeeMyIdLogo} alt="See my Id Logo" />
            </div>
          </div>
          <div className="ml-20">
            <div className="heading font-30 mb-6">
              <a aria-hidden="true" tabIndex="-1" id="problemStatement"></a>
              Problem Statement
              <a href="#problemStatement" className="ml-2 hash-link">
                #
              </a>
            </div>
            <p className="font-20">
              very small Business people couldn’t able to share their products &
              services to new customers its hard for their users to explain
              about their products
            </p>
            <p className="mt-6 font-20">
              couldn’t able to have cumulated information of all their products
              and service in a single place
            </p>
          </div>
        </div>
      </section>
      {/* Observation section */}
      <section id="user-behaviour">
        <div className="font-30 mb-6">
          <a aria-hidden="true" tabIndex="-1" id="userBehaviour"></a>
          Observing User behaviour
          <a href="#userBehaviour" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="w-auto flex justify-center">
          <div className="flex flex-wrap">
            {userBehaviourCard?.map(({ src, description }) => (
              <ImageCard
                className="mr-6 mb-6"
                key={src}
                src={src}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
      {/* persona */}
      <section>
        <div className="font-30 mb-6">
          <a aria-hidden="true" tabIndex="-1" id="persona"></a>
          Persona
          <a href="#persona" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="flex justify-start">
          <Image src={Personna} alt="" />
        </div>
      </section>
      <section>
        <div className="font-30 mb-6">
          <a aria-hidden="true" tabIndex="-1" id="rootCause"></a>
          Root Cause Analysis - 5 why’s
          <a href="#rootCause" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div>
          <Image src={ConceptBoard} alt="" />
        </div>
      </section>
      {/* concept section */}
      <section id="concept-model">
        <div className="font-30 mb-6">
          <a aria-hidden="true" tabIndex="-1" id="conceptualModel"></a>
          Conceptual Model
          <a href="#conceptualModel" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="font-28 font-bold mb-6">1st level solution</div>
        <div className="w-auto flex justify-center">
          <div className="flex flex-wrap">
            {conceptCard?.map(({ src, description }) => (
              <ImageCard
                className="mr-6 mb-6"
                key={src}
                src={`${src}`}
                description={description}
              />
            ))}
          </div>
        </div>
        <div className="font-28 font-bold mb-6">
          Once get 7,000 customers in seemyid (long term vision)
        </div>
        <div className="w-auto flex mb-10 ">
          <div className="flex flex-wrap mt-3">
            {conceptCard2?.map(({ src, description }) => (
              <ImageCard
                className="mr-6 mb-6"
                key={src}
                src={`${src}`}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* marketing section */}
      <section>
        <div className="font-30 font-bold mb-10">
          <a aria-hidden="true" tabIndex="-1" id="marketingTechnique"></a>
          UX on marketing
          <a href="#marketingTechnique" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="font-22 mb-6">
          Utlizing <span className="bg-yellow p-1 rounded">PERIPHERAL</span>{" "}
          VISION
        </div>
        <div className="mb-20">
          <Image src={MarketingBanner} alt="" />
        </div>
        <div className="mb-10">
          <Image src={MarketingGroup} alt="" />
        </div>
      </section>
      {/* sales section */}
      <section id="sales-section">
        <div className="font-30 font-bold mb-6">Sales Technique</div>
        <div className="sub-heading mb-6">
          <div>Seemyid cost</div>
          <div className="font-30">350.00/- per year</div>
          <div>Less than 1rs per day</div>
        </div>
        <div className="font-28 mb-6">Part time sales persons</div>
        <div className="sales-person mb-6">
          <div className="flex mt-3 justify-center">
            {salesPersonCard?.map(({ src, description }) => (
              <ImageCard key={src} src={`${src}`} description={description} />
            ))}
          </div>
        </div>
        <div className="font-28 mb-6">For example</div>
        <div className="px-10 mb-10">
          <Image src={SalesExample} width="937" height="280" alt="" />
        </div>
        <div className="font-20 mb-6">
          If a salesman sale one product to a customer for 350/- he will get
          100rs as remuneration
        </div>
      </section>
      {/* paper sketch */}
      <section id="paper-sketch" className="mb-20">
        <div className="font-30 font-bold mb-10">
          <a aria-hidden="true" tabIndex="-1" id="paperSketch"></a>
          Paper Sketch
          <a href="#paperSketch" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="flex flex-wrap justify-around ">
          {paperSketchImgs?.map((src) => (
            <ImgBox key={src} src={src} aspectRatio={Number(0.56822)} />
          ))}
        </div>
      </section>
      {/* wireframe */}
      <section id="wireframes">
        <div className="font-30 font-bold mb-6">
          <a aria-hidden="true" tabIndex="-1" id="wireframe"></a>
          Wireframes
          <a href="#wireframe" className="ml-2 hash-link">
            #
          </a>
        </div>
        <div className="flex flex-wrap ">
          {wireframeImgs?.map((src) => (
            <ImgBox key={src} src={src} aspectRatio={Number(0.46223)} />
          ))}
        </div>
      </section>
      <ThankYou />
    </div>
  );
}
