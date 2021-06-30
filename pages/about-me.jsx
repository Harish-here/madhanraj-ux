import ImgBox from "../components/img-box";
import Avatar from "../public/about-me/avatar.webp";
import BookCopy from "../public/about-me/book_copy.webp";
import Back from "../public/about-me/history_back.svg";
export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-col w-full h-screen relative">
      <div
        className="fixed top-16 left-14"
        style={{ width: "24px", height: "24px" }}
        onClick={() => window.history.back()}
      >
        <ImgBox src={Back} aspectRatio={Number(1)} />
      </div>
      <section id="about" className="flex justify-center mb-28 ">
        <div className="about-wrapper flex flex-col justify-between h-screen">
          <div className="mt-10 ml-10 flex justify-center">
            <div className="flex flex-col">
              <div
                className="font-bold font-40 mb-12 pl-1"
                style={{ color: "#041e9e" }}
              >
                Hello, I’m
              </div>
              <div className="color-black font-80 mb-12">Madhan Raj</div>
              <div
                style={{ color: "#041e9e" }}
                className="flex items-baseline font-24 pl-1"
              >
                <span>Lyricst</span>
                <span className="red-circle"></span>
                <span>Screenwriter</span>
                <span className="red-circle"></span>
                <span>Cinephilia</span>
              </div>
            </div>
          </div>
          <div>
            <ImgBox src={Avatar} aspectRatio={Number(1.2314)} />
          </div>
        </div>
      </section>
      <section id="book" className="px-28 flex flex-col mb-28">
        <div className="font-24 mb-10">
          Presenting my first copy of my book to my &ldquo;UX Guru&rdquo;,
          Kingsley <small>(founder of UXMint)</small>
        </div>
        <div>
          <a
            href="https://notionpress.com/read/ka"
            target="_blank"
            rel="noreferrer"
          >
            <ImgBox src={BookCopy} aspectRatio={Number(1.97283)} />
          </a>
        </div>
      </section>
      <section id="youtube" className="px-28">
        <div className="font-30 mb-10">Songs penned by me</div>
        <div className="song-section flex flex-wrap">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DUnZbv8ahRU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XO3CUeKcegQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SB4OHluW0uE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-baseline color-black px-28 font-20 font-bold py-16">
        <div>
          <small>Engineered by</small>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/harish-here/"
            rel="noreferrer"
          >
            <strong>&nbsp;Harish</strong>
          </a>
        </div>
        <span className="mx-3">|</span>
        <div>
          <small>Site&apos;s source</small>
          <a
            target="_blank"
            href="https://github.com/Harish-here/madhanraj-ux"
            rel="noreferrer"
          >
            <strong>&nbsp;Repository</strong>
          </a>
        </div>
      </section>
    </div>
  );
}
