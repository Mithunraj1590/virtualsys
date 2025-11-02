import Style from "./ProductLinkCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";
import Link from "next/link";
import Icons from "../../Layout/Icons";
import Animate from "../../Animate/animate";
const ProductLinkCard = ({ props, flag, dataAnime }) => {
  const parse = require("html-react-parser");
  return (
    <Animate
      className={`animate-fadein`}
      style={{ "--anim-index": `${dataAnime * 0.2}s` }}
    >
      <Link
        href={`${props?.url}`}
        className={` text-black ${Style.box_wrap} ${
          flag == "ziva" || flag == "fintech" ? Style.zivabox : ""
        }  ${flag == "kazito" ? Style.kazitobox : ""} ${
          flag == "career" ? Style.careerbox : ""
        } ${flag == "insurtech" ? Style.insurtechbox : ""} ${
          props?.active == true ? Style.active : ""
        }
        ${flag == "home" ? Style.homeproductbox : ""} 

        ${flag == "colm10" ? Style.colmbox1 : ""}
        ${flag == "colm20" ? Style.colmbox2 : ""}
        ${flag == "colm21" ? Style.colmbox3 : ""}
        ${flag == "colm30" ? Style.colmbox4 : ""}
        ${flag == "colm31" ? Style.colmbox5 : ""}
        `}
      >
        <figure className={`ms-auto ${Style.shape_figure}`}>
          <Image src={props?.image?.url} fill  alt={props?.title} sizes="(max-width: 768px) 100vw"/>
        </figure>
        <div className={Style.content}>
          <h3 className={Style.title}>{parse(props?.title)}</h3>
          <p>{props?.subtitle}</p>
        </div>
      </Link>
    </Animate>
  );
};

export default ProductLinkCard;
