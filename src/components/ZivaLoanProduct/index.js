import Style from "./ZivaLoanProduct.module.scss";
import { useState } from "react";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../Layout/Icons";
import ZivaThreeListCard from "../utils/ZivaThreeListCard";
import { useWindowSize } from "../../logic/useDimension";

const ZivaLoanProduct = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const clickedClass = isClicked ? "btnClicked" : '';


  return (
    <section className={Style.ziva_loanproduct}>
      <div className="container">
        <h2 className={`${Style.title} text-lg-center h2 `}>
          {parse(props?.data?.title)}
        </h2>
        <div className={`row pt-51 ${Style.ziva_loanwrapper} `}>
          {props?.data?.cards?.map((data, i) => {
            return <ZivaThreeListCard props={data} key={i} click={`${clickedClass}`}></ZivaThreeListCard>;
          })}
        </div>

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
    </section>
  );
};
export default ZivaLoanProduct;
