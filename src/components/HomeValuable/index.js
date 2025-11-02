import Style from "./HomeValuable.module.scss";
import Link from "next/link";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Animate from "../Animate/animate";
import ClientSlider from "../ClientSlider"

const HomeValuable = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={`${Style.home_valuable}`}>
      <div className={Style.bg_right}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <Animate className={`${Style.top_head}  animate-fadein`}>
              <h2 className={`h2 pb-xl-3 pb-2 ${Style.title}`}>{parse(`${props?.data?.title}`)}</h2>
              <p>{props?.data?.text}</p>
            </Animate>
          </div>
        </div>


        <div className="position-relative">
          <div className={`round-bg ${Style.top_center_bg}`}></div>
        </div>
        

        <Animate className={`row animate-fadein ${Style.value_wrap}`}>

            <ClientSlider props={props} />

        </Animate>


       


      </div>
    </section>
  );
};
export default HomeValuable;
