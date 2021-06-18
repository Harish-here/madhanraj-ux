import Image from "next/image";
import Link from "next/link";
import style from "./sideBar.module.css";
import avatar from "../../public/avatar.webp";
import behance from "../../public/behance_logo.webp";
import linkedin from "../../public/linkedin_logo.webp";
import data from "./data";

export default function SideBarLayout(props) {
  const { children } = props;
  const { menuData, profileDescription } = data;
  return (
    <div
      id="main"
      className="absolute inset-0 flex flex-row h-screen items-stretch text-base"
    >
      <div id="side-bar" className="flex flex-col justify-between py-5 px-10">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className={`${style.avatar} my-2`}>
            <Image src={avatar} alt="Profile picture" />
          </div>
          <div className="text-sm mb-2"> {profileDescription}</div>
        </div>
        {/* Menu */}
        <div className={`flex flex-col justify-start ${style.menu}`}>
          <div className="mb-2">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <hr className="mb-2" />
          <div className="text-sm mb-2">Ux Products</div>
          <ul>
            {menuData?.map(({ label, path }) => (
              <li className="mb-4">
                <Link href={path}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="mb-2" />
        {/* footer */}
        <div className={style.footer}>
          <div className="mb-2">About me</div>
          <div className="flex items-baseline">
            <div className={style?.["behance-logo"]}>
              <Image src={behance} alt="Behance logo" />
            </div>
            <div className={`${style?.["linkedin-logo"]} ml-2`}>
              <Image src={linkedin} alt="LinkedIn logo" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="main-page"
        className="overflow-y-auto flex flex-col items-stretch"
      >
        {children}
      </div>
    </div>
  );
}
