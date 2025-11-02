import Style from "./ZivaIconTextCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Animate from "../../Animate/animate";

const ZivaIconTextCard = ({ props, flag, dataAnime }) => {
  const parse = require("html-react-parser");
  return (
    <Animate
      className={`animate-fadein col-lg-6 ${Style.wraper_zivatext} ${
        flag == "axle" ? Style.axle_wrapper : ""
      } ${flag == "kazito" ? Style.kazito_wrapper : ""} ${
        flag == "fintech" && Style.fintech_wrapper
      }`}
      style={{ "--anim-index": `${dataAnime * 0.1}s` }}
    >
      <div className={Style.ziva_icon_text_card}>
        <figure>
          <Image fill src={props?.image?.url} alt="image" sizes="(max-width: 768px) 100vw"/>
        </figure>
        <div>
          <h3 className={Style.title}>{parse(props?.title)}</h3>
          <p>{props?.text}</p>

          {props?.link?.url && (
            <div className="overflow-hidden">
              <Link
                href={`${props?.link?.url}`}
                className={`btn btn-ziva 
                  ${flag == "ziva" ? "btn-ziva" : ""}
                  ${flag == "axle" ? "btn-axle" : ""}
                  ${flag == "kazito" ? "btn-kazito" : ""}
                `}
              >
                Know More
              </Link>
            </div>
          )}

          {props?.url && (
            <div className="overflow-hidden">
              <Link
                href={`${props?.url}`}
                className={`btn btn-ziva 
                  ${flag == "ziva" ? "btn-ziva" : ""}
                  ${flag == "axle" ? "btn-axle" : ""}
                  ${flag == "kazito" ? "btn-kazito" : ""}
                `}
              >
                Know More
              </Link>
            </div>
          )}
        </div>
      </div>
    </Animate>
  );
};

export default ZivaIconTextCard;
