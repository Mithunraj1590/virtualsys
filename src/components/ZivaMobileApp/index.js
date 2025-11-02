import Style from "./ZivaMobileApp.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Animate from "../Animate/animate";

const ZivaMobileApp = ({ props }) => {
  const parse = require("html-react-parser");
  
  return (
    <section className={Style.ziva_mobile_app}>
      <div className={Style.top_left_bg}>
        <Image fill src={Assets.mobappbg1} alt={"background Image"} sizes="(max-width: 768px) 100vw" />
      </div>
      <div className={Style.bottom_right_bg}>
        <Image fill src={Assets.mobappbg2} alt={"background Image"} sizes="(max-width: 768px) 100vw" />
      </div>

      <div className="container">
        <h2 className={`${Style.title} h2 gradient-text-green-title`}>
          {parse(props?.data?.title)}
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className={Style.image_Wraper}>
                <figure className={Style.image_wrap}>
                <Image
                    fill
                    src={props?.data?.image?.url}
                    alt="image"
                    quality={100}
                    sizes="(max-width: 768px) 100vw"
                />
                </figure>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-4">
            {props?.data?.cards?.map((data, i) => {
              return (
                <Animate className={`animate-fadein ${Style.ziva_icon_text}`} key={i} style={{"--anim-index":`${i*0.2}s`}}>
                  <figure>
                    <Image
                      fill
                      src={data?.image?.url}
                      alt="image"
                      sizes="(max-width: 768px) 100vw"
                    />
                  </figure>
                  <div>
                    <h3 className={Style.title}>{data?.title}</h3>
                    <div className={Style.description}>{data?.description && ( parse(data?.description))}</div>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ZivaMobileApp;
