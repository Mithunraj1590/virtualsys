//for google font (migrated from @next/font to next/font)
import { Plus_Jakarta_Sans, Inter, Manrope } from "next/font/google";
//for local font
// import localFont from 'next/font/local'
import CommonLayout from "../src/components/Layout/CommonLayout";
import "../src/styles/common.scss";
import useScrollRestoration from "../src/logic/useScrollRestoration";

const primary = Manrope({
  style: ["normal"],
  subsets: ["latin"],
  fallback: "",
  display: "swap",
});

const secondary = Plus_Jakarta_Sans({
  weight: ["300", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: "",
  display: "swap",
});

const teritary = Inter({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: "",
  display: "swap",
});

function MyApp({ Component, pageProps, router }) {
  useScrollRestoration(router);
  // if (typeof window !== "undefined") {
  //   window.history.scrollRestoration = "manual";
  // }

  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${primary.style.fontFamily};
          --bs-body-font-family: ${primary.style.fontFamily};
          --primary-font-family: ${primary.style.fontFamily};
          --secondary-font-family: ${secondary.style.fontFamily};
          --teritary-font-family: ${teritary.style.fontFamily};
        }
      `}</style>
      <CommonLayout props={pageProps}>
        <Component {...pageProps} />
      </CommonLayout>
    </>
  );
}

export default MyApp;
