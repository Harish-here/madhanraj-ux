import Head from "next/head";
import "../styles/globals.css";
import "../styles/digi.page.scss";
import SideBarLayout from "../components/side-bar";
import meta from "../constants/pageMeta";
import { withRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="w-full h-full">
      <Head>
        <title>
          Madhanraj UX - {meta?.[router?.route.replace("/", "")]?.title}{" "}
        </title>
        <meta name="description" content="Enjoy the Journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBarLayout>
        <Component {...pageProps} />
      </SideBarLayout>
    </div>
  );
}

export default withRouter(MyApp);
