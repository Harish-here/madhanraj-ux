import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";
import style from "./sideBar.module.scss";
import avatar from "../../public/avatar.webp";
import behance from "../../public/behance_logo.webp";
import linkedin from "../../public/linkedin_logo.webp";
import downArrow from "../../public/chev-down.svg";
import data from "./data";

function SideBarLayout(props) {
  const { children, router } = props;
  const { menuData, profileDescription } = data;
  const isCurrentRoute = (path) =>
    router?.route === path || path === router?.asPath;
  const activeMenuClass = `${style?.["menu-active"]} font-bold`;
  return (
    <div
      id="main"
      className="absolute inset-0 flex flex-row h-screen items-stretch text-base"
    >
      <div id="side-bar" className="flex flex-col justify-between py-5 px-10">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className={`${style.avatar} my-2 relative`}>
            <Image src={avatar} alt="Profile picture" />
          </div>
          <div className="text-sm mb-2"> {profileDescription}</div>
        </div>
        {/* Menu */}
        <div className={`flex flex-col justify-start ${style.menu}`}>
          <ul>
            {menuData?.map(({ label, path, subMenus }) => (
              <li className="mb-4" key={label}>
                <div className="flex justify-between">
                  <Link href={path}>
                    <a
                      className={`transition-all ${
                        isCurrentRoute(path) ? activeMenuClass : ""
                      }`}
                    >
                      {label}
                    </a>
                  </Link>
                  {subMenus?.length > 0 && (
                    <div
                      className={`transition-all mr-2  ${
                        isCurrentRoute(path) ? "rotate-90" : ""
                      }`}
                    >
                      <Image src={downArrow} alt="down arrow" />
                    </div>
                  )}
                </div>
                {subMenus?.length > 0 && (
                  <ul
                    className={`ml-2 mt-2 transition-all ${
                      !isCurrentRoute(path) ? "hidden" : ""
                    }`}
                  >
                    {subMenus?.map((menu) => (
                      <li
                        key={menu?.label}
                        className={`flex items-center pl-2 pb-2 ${
                          style?.["sub-menu"]
                        } ${
                          isCurrentRoute(menu?.path)
                            ? style?.["sub-menu-active"]
                            : ""
                        }`}
                      >
                        <Link href={menu?.path}>
                          <a
                            href={menu?.path}
                            className={`transition-all ${
                              isCurrentRoute(menu?.path) ? activeMenuClass : ""
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
        </div>
        <hr className="mb-2" />
        {/* footer */}
        <div className={style.footer}>
          <div
            className={`mb-2 transition-all ${
              isCurrentRoute("/about-me") ? activeMenuClass : ""
            }`}
          >
            <Link href="/about-me">
              <a>About Me</a>
            </Link>
          </div>
          <div className="flex items-baseline">
            <div className={style?.["behance-logo"]}>
              <Image src={behance} alt="Behance logo" />
            </div>
            <div className={`${style?.["linkedin-logo"]} ml-2`}>
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
    </div>
  );
}
export default withRouter(SideBarLayout);
