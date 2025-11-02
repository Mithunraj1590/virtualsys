import React from "react";
import Style from "./FintechThreeRow.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import FeatureCard from "../utils/FeatureCard";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Icons from "../Layout/Icons";

const FintechThreeRow = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const collectionPage =
    props?.data?.type == "collection-management" ? true : false;
  const kazitoInner =
    props?.data?.type == "kazito-inner" ? Style.kazito_inner : "";

  return (
    <section
      className={`${Style.fintech_organization_section} d-none position-relative overflow-hidden `}
    >
      <div className={Style.top_img}>
        <Image src={Assets.bg_fintechthreerow} fill alt="addon-image" />
      </div>

      <div className="container">
        <div className={`row ${Style.features_wrapper} position-relative`}>
          {props?.data?.features?.map((data, i) => {
            const count =
              props?.data?.features?.filter((item) => item).length > 10
                ? Style.count_more
                : "";
            return (
              <div
                className={`col-12 col-md-6 col-lg-4 ${Style.features_card}`}
                key={i}
              >
                <FeatureCard props={data} flag="fintech" />
              </div>
            );
          })}
          {props?.data?.button && width < 768 && (
            <div className={Style.button_wrapper}>
              <Link
                href={`${props?.data?.button?.url}`}
                className={`btn btn btn-outline-primary d-block`}
              >
                <span>{props?.data?.button?.text} </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default FintechThreeRow;
