import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/digi.page.scss";
import SideBarLayout from "../components/side-bar";
import meta from "../constants/pageMeta";
import { withRouter } from "next/router";
import { injectStyle } from "../utils";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    injectStyle(
      "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,900;1,400&display=swap"
    );
  });
  return (
    <div className="w-full h-full">
      <Head>
        <title>
          {meta?.[router?.route.replace("/", "")]?.title}
          {router?.route === "/" ? meta?.[router?.route]?.title : ""} -
          Madhanraj UX
        </title>
        <meta name="description" content="Enjoy the Journey" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <SideBarLayout>
        <Component {...pageProps} />
      </SideBarLayout>
    </div>
  );
}

export default withRouter(MyApp);
