import Image from "next/image";
import Style from "./IndustriesWeServe.module.scss";
import Animate from "../Animate/animate";

const IndustriesWeServe = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.we_werve}>
      <div className="container">
        <h2 className={`${Style.title} h2`}>{parse(props?.data?.title)}</h2>
        <div className={`row ${Style.boxWrapper}`}>
          {props?.data?.cards?.map((data, i) => {
            return (
              <Animate
                className="col-6 col-lg-4 animate-fadein"
                key={i}
                style={{ "--anim-index": `${i * 0.1}s` }}
              >
                <div className={Style.card}>
                  <div className={Style.image_wrapper}>
                    <figure className={Style.image_box}>
                      <Image
                        fill
                        src={`${data?.image?.url}`}
                        alt="image"
                      />
                    </figure>
                  </div>
                  <h4 className={Style.card_title}>{data?.title}</h4>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default IndustriesWeServe;
