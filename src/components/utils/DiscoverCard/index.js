
import Style from "./DiscoverCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";

const DiscoverCard = ({ props }) => {
  return (
    <div className="col-lg-4">
      <div className={Style.box_wrap}>
        <figure className={` ${Style.figure_wrap}`}>
          <Image src={props?.image} fill sizes="" alt="novac" />
        </figure>
        <h4 className="h4 mb-3 fw6">{props?.title}</h4>
        <p>
          {props?.text}
        </p>
      </div>
    </div>
  );
};

export default DiscoverCard;
