import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import style from "./sideBar.module.scss";
import avatar from "../../public/avatar.webp";
// import behance from "../../public/behance_logo.webp";
import linkedin from "../../public/linkedin_logo.webp";
import downArrow from "../../public/chev-down.svg";
import MobileBanner from "../../public/mobile_banner.webp";
import data from "./data";
import ImgBox from "../img-box";
import LinkImage from './link.svg';

function SideBarLayout(props) {
  const { children, router } = props;
  const { menuData, profileDescription } = data;
  const screenRef = useRef();
  const [isMobile, toggleMobile] = useState(false);
  const isCurrentRoute = (path) => {
    if (path === "/") {
      return router?.route === path;
    }
    return router?.route === path || router?.asPath.includes(path);
  };
  const onResize = () => {
    toggleMobile(screenRef.current.offsetWidth < 1024);
  };
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  const activeMenuClass = `${style?.["menu-active"]} font-bold`;
  return (
    <div
      id="main"
      className="absolute inset-0 flex flex-row h-screen items-stretch text-base"
      ref={screenRef}
    >
      {!isMobile && (
        <>
          <div
            id="side-bar"
            className={`flex flex-col justify-between py-5 px-10 ${router.route === "/about-me" ? "hidden" : ""
              }`}
            className={`flex flex-col justify-between py-5 px-10 ${router.route === "/about-me" ? "hidden" : ""
              }`}
          >
            {/* Profile */}
            <div className="flex flex-col items-center">
              <div className={`${style.avatar} my-2 relative`}>
                <Image src={avatar} alt="Profile picture" />
              </div>
              <div className="font-20 font-bold mb-2">S.M. Madhan Raj</div>
              <div className="text-sm mb-2 text-center">
                {" "}
                {profileDescription}
              </div>
            </div>
            {/* Menu */}
            <div className={`flex flex-col justify-start ${style.menu}`}>
              <ul>
                {menuData?.map(({ label, path, subMenus }) => (
                  <li className="mb-4" key={label}>
                    <div className="flex justify-between">
                      <Link href={path}>
                        <a
                          className={`transition-all ${isCurrentRoute(path) ? activeMenuClass : ""
                            }`}
                          className={`transition-all ${isCurrentRoute(path) ? activeMenuClass : ""
                            }`}
                        >
                          {label}
                        </a>
                      </Link>
                      {subMenus?.length > 0 && (
                        <div
                          className={`transition-all mr-2  ${isCurrentRoute(path) ? "rotate-90" : ""
                            }`}
                          className={`transition-all mr-2  ${isCurrentRoute(path) ? "rotate-90" : ""
                            }`}
                        >
                          <Image src={downArrow} alt="down arrow" />
                        </div>
                      )}
                    </div>
                    {subMenus?.length > 0 && (
                      <ul
                        className={`ml-2 mt-2 transition-all ${!isCurrentRoute(path) ? "hidden" : ""
                          }`}
                        className={`ml-2 mt-2 transition-all ${!isCurrentRoute(path) ? "hidden" : ""
                          }`}
                      >
                        {subMenus?.map((menu) => (
                          <li
                            key={menu?.label}
                            className={`flex items-baseline pl-2 pb-2 ${style?.["sub-menu"]
                              } ${isCurrentRoute(menu?.path)
                            className={`flex items-baseline pl-2 pb-2 ${style?.["sub-menu"]
                              } ${isCurrentRoute(menu?.path)
                                ? style?.["sub-menu-active"]
                                : ""
                              }`}
                              }`}
                          >
                        <Link href={menu?.path}>
                          <a
                            href={menu?.path}
                            className={`transition-all ${isCurrentRoute(menu?.path)
                              ? activeMenuClass
                              : ""
                              }`}
                          >
                            {menu?.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>

                )}
              </li>
                ))}
            </ul>
            <div className="font-16">
              <a className='flex justify-between font-bold' href="https://rebrand.ly/madhan ">
                <span>Official Works</span>
                <span className="ml-2"><Image width={15} height={15} src={LinkImage} alt="portfolio" /></span></a>
            </div>
          </div>
          <hr className="mb-2" />
          {/* footer */}
          <div className={style.footer}>
            <div
              className={`mb-2 color-pale-blue transition-all ${isCurrentRoute("/about-me") ? activeMenuClass : ""
                }`}
              className={`mb-2 color-pale-blue transition-all ${isCurrentRoute("/about-me") ? activeMenuClass : ""
                }`}
            >
              <Link href="/about-me">
                <a>About Me</a>
              </Link>
            </div>
            <div className="flex items-baseline">
              {/*                 <div className={style?.["behance-logo"]}>
                {/*                 <div className={style?.["behance-logo"]}>
                  <a
                    href="https://www.behance.net/madhanrajUX"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image src={behance} alt="Behance logo" />
                  </a>
                </div> */}
              <div className={`${style?.["linkedin-logo"]}`}>
                <a
                  href="https://www.linkedin.com/in/madhan-raj-035317a6/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image src={linkedin} alt="LinkedIn logo" />
                </a>
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
    </>
  )
}

{
  isMobile && (
    <div className="w-full h-screen">
      <ImgBox src={MobileBanner} aspectRatio={Number(0.49636)} />
    </div>
  )
}
    </div >
  );
}
export default withRouter(SideBarLayout);
