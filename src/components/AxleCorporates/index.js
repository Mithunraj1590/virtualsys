import Style from "./AxleCorporates.module.scss";

import ZivaIconTextCard from "../utils/ZivaIconTextCard";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const AxleCorporates = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.AxleCorporates}>
      <div className={Style.top_right_bg}>
        <Image fill src={Assets.content_bg2} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/>
      </div>
      <div className={Style.bottom_left_bg}>
        <Image fill src={Assets.AxleCorporates_bg2} alt={"background Image"}  sizes="(max-width: 768px) 100vw"/>
      </div>

      <div className="container">
        <h2 className={`h2  ${Style.title}`}>
          {props?.data?.title && parse(props?.data?.title)}
        </h2>

        <div className="row overflow-hidden">
          {props?.data?.cards?.map((data, i) => {
            return (
              <ZivaIconTextCard
                props={data}
                flag={"axle"}
                key={i}
                dataAnime={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AxleCorporates;
