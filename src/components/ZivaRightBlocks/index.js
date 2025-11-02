import Style from "./ZivaRightBlocks.module.scss";
import ProductLinkCard from "../utils/ProductLinkCard";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import BreadCrumbs from "../utils/BreadCrumbs";
import { useWindowSize } from "../../logic/useDimension";

const ZivaRightBlocks = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section
      className={`${Style.ziva_future} ${
        props?.data?.type == "kazito" ? "pb-lg-5" : " "
      } ${props?.data?.type == "fintech" ? Style.fintech_section : " "} ${
        props?.data?.type == "career" ? Style.career_section : " "
      }`}
    >
      {props?.data?.type == "ziva" ? (
        <>
          <div className={Style.top_right_bg}>
            <Image fill src={Assets.ziva_future_bg1} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/>
          </div>
          <div className={Style.bottom_left_bg}>
            <Image fill src={Assets.ziva_future_bg2} alt={"background Image"}   sizes="(max-width: 768px) 100vw"/>
          </div>
        </>
      ) : (
        ""
      )}

      {props?.data?.type == "kazito" ? (
        <>
          <div className={Style.kazito_bottom_right_bg}>
            <Image
              fill
              src={Assets.kazito_bottom_right_bg}
              alt={"background Image"}
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </>
      ) : (
        ""
      )}

      {props?.data?.type == "career" ? (
        <>
          <div className={Style.career_bg}>
            <Image
              fill
              src={Assets.career_future_bg}
              alt={"background Image"}
              sizes="(max-width: 768px) 100vw"
              priority={true}
            />
          </div>
        </>
      ) : (
        ""
      )}

      <div className="container">
        <div className={Style.BreadCrumbs_wrap}>
          <BreadCrumbs props={props} />
        </div>
        <div className={`row align-items-center ${Style.content_wraper}`}>
          <div className={`col-lg-6 pe-xxl-5 ${Style.topWrap}`}>
            <h2 className={`h2 gradient-text-green ${Style.title}`}>
              {parse(props?.data?.title)}
            </h2>
            {/* {props?.data?.subheading  && (  <h3 className={` ${Style.subheading}`}>{props?.data?.subheading}</h3> )}  */}
            {parse(props?.data?.text)}
          </div>

          <div className="col-lg-6">
            {/* {width > 992 && ( */}

            <div className={Style.right_wrapper}>
              <div className={`${Style.colm1} ${Style.colm}`}>
                {props?.data?.cards?.[0]?.map((data, i) => {
                  return (
                    <ProductLinkCard
                      key={i}
                      props={data}
                      flag={`${props?.data?.type}`}
                      dataAnime={i}
                    ></ProductLinkCard>
                  );
                })}
              </div>

              <div className={`${Style.colm2} ${Style.colm}`}>
                {props?.data?.cards?.[1]?.map((data, i) => {
                  return (
                    <ProductLinkCard
                      key={i}
                      props={data}
                      flag={`${props?.data?.type}`}
                      dataAnime={i}
                    ></ProductLinkCard>
                  );
                })}
              </div>
            </div>
            {/* )}  */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ZivaRightBlocks;
