export default function OldBrain() {
  return (
    <div className="flex flex-col w-full h-screen px-10">
      <div className="font-40 text-center my-10 p-4">
        Can&apos;t resist stories
      </div>
      <div>
        <section className="flex justify-center">
          <video controls width="350">
            <source src="/mobile-stamp/taman.mp4" type="video/mp4" />
            Sorry, your browser doesn support embedded videos.
          </video>
        </section>
      </div>
    </div>
  );
}
