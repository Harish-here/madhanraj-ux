import Image from "next/image";
export default function ImageCard({ src, description, key, className = "" }) {
  return (
    <div
      key={key}
      className={`image-card flex flex-col justify-around justify-items-stretch ${className}`}
    >
      <div className="image-contanier">
        <Image layout="fill" src={src} alt="" />
      </div>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
}
