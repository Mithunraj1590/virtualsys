import Style from "./ZivaStandOut.module.scss";
import { useState } from "react";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";

const ZivaStandOut = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const clickedClass = isClicked ? Style.btnClicked : '';

  return (
    <section className={Style.ziva_stand_out}>
      <div className={Style.top_left_bg}>
        <Image fill src={Assets.standout_bg} alt={"background Image"} sizes="(max-width: 768px) 100vw"/>
      </div>
      {/* <div className={Style.bottom_left_bg}>
        <h4>{props.data?.bg_title}</h4>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className={Style.left}>
              <h2 className={`${Style.title} h2 `}>
                {parse(props?.data?.title)}
              </h2>
              <p>{props?.data?.text} </p>
            </div>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0">
            <ul className={`${Style.right} ${clickedClass}`}>
            {props?.data?.cards?.map((data, i) => {
              return (
                <li className={Style.ziva_list} key={i}>
                    {data?.text}
                </li>
              );
            })}
            </ul>



            {width < 992 && (
                <div className={`text-center mt-3 ${Style.viewallbtn} ${clickedClass}`}>
                <div onClick={handleClick}
                  className={`arrow_text ${Style.arrow_text}`}
                >
                  <span>View All</span>
                  <div className={`arrow_links ${Style.arrow_bottom}`}>
                    <Icon className={"link-arrow"} icon="arrow-link" size={12} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
export default ZivaStandOut;
