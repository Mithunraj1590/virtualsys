
import Icons from "../../Layout/Icons";
import Style from "./LocateCard.module.scss";
import Link from "next/link";
import Animate from "../../Animate/animate";

const DiscoverCard = ({ props, dataAnime }) => {
  const parse = require("html-react-parser");
  return (
    <Animate  className={`animate-fadein ${Style.locatecard}`} style={{"--anim-index":`${dataAnime*0.1}s`}}>
      <Link className={Style.locatecard_wrap}  href={`${props?.link?.url}`}  target="_blank">
        <h4 className={`h4 ${Style.title}`}>{parse(props?.branch)}</h4>
        {parse(props?.address)}
        <div  className={Style.map}>
          {" "}
          <Icons icon="map-marker" size={17} />
          <span>{props?.link?.text}</span>
          {" "}
        </div>
      </Link>
    </Animate>
  );
};

export default DiscoverCard;
