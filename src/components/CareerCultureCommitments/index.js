import Style from "./CareerCultureCommitments.module.scss";
import ZivaImage from "../utils/ZivaImage";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";

const CareerCultureCommitments = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section className={Style.CareerCultureCommitments}>
      <div className={Style.top_bg}>
        <Image
          fill
          src={Assets.career_culture_bg}
          alt={"background Image"}
          quality={100}
          sizes="(max-width: 768px) 100vw"
          className="d-none d-lg-block"
        />

        <Image
          fill
          src={Assets.career_culture_bg_mobile}
          alt={"background Image"}
          quality={100}
          sizes="(max-width: 768px) 100vw"
          className="d-block d-lg-none "
        />
      </div>
      <div className="container">
        {props?.data?.cards?.map((data, i) => {
          return (
            <div className={`row align-items-xl-end ${Style.ContentBox}`} key={i}>
              <div className="col-lg-6">
                {width > 992 && (
                  <div className={`${Style.imagewrap} mb-3`}>
                    <ZivaImage
                      props={data?.image}
                      flag={`${data?.image_position}`}
                    />
                  </div>
                )}
              </div>
              <div className="col-lg-6 pe-xxl-5">
                <div className={Style.content}>
                  <h2 className={`h2 ${Style.title}`}>{parse(data?.title)}</h2>
                  {width < 992 && (
                    <div className={`${Style.imagewrap}`}>
                      <ZivaImage
                        props={data?.image}
                        flag={`${data?.image_position}`}
                      />
                    </div>
                  )}
                  <div>{parse(data?.description)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CareerCultureCommitments;
