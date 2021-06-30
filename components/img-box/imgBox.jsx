import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function ImgBox(props) {
  const { aspectRatio, src, minHeight, key = "" } = props;
  const [resultantHeight, setResultantHeight] = useState(minHeight || 0);
  const imageRef = useRef();
  const onResize = () => {
    const width = imageRef?.current?.offsetWidth;
    setResultantHeight(Math.round(width / aspectRatio));
  };
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return (
    <div
      key={key}
      className="img-box"
      ref={imageRef}
      style={{ height: `${resultantHeight}px`, position: "relative" }}
    >
      <Image layout="fill" src={src} alt="" />
    </div>
  );
}
