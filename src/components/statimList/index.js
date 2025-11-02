import React from "react";
import Style from "./statimList.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const StatimList = ({ props }) => {
  const parse = require("html-react-parser");
  const darkTheme =
    props?.data?.theme == "dark" ? Style.dark_theme : Style.light_theme;

  const features = props?.data?.features || [];
  const halfIndex = Math.ceil(features.length / 2);
  const firstHalf = features.slice(0, halfIndex);
  const secondHalf = features.slice(halfIndex);

  return (
    <section
      className={`${Style.statim_list_section} ${darkTheme} position-relative overflow-hidden`}
    >
      {/* Addon Image for Statim Inner Page */}
      {props?.data?.type == "statim-inner" && (
        <div
          className={`${Style.addon_img} position-absolute d-none d-lg-block`}
        >
          <figure>
            <Image
              fill
              src={Assets.bottom_right_img}
              alt="addon-img"
              sizes="(max-width: 768px) 100vw"
              priority={true}
            />
          </figure>
        </div>
      )}
      <div className="container">
        <div className={`row ${Style.content_wrapper}`}>
          <div className={`col-12 col-lg-5 ${Style.text_wrapper}`}>
            <h4
              className={`mb-0 gradient-text-light-orange-title ${
                Style.title
              } ${props?.data?.theme == "dark" ? "text-white" : "text-black"}`}
            >
              {parse(props?.data?.title)}
            </h4>
            <p
              className={`mb-0 ${Style.content} ${
                props?.data?.theme == "dark" ? "text-white" : "text-black"
              }`}
            >
              {props?.data?.content}
            </p>
          </div>
          <div className={`col-12 col-lg-7 ${Style.list_wrapper}`}>
            <ul className={`ms-0 list-unstyled mb-0 ${Style.features_list}`}>
              {firstHalf.map((data, index) => (
                <li
                  key={index}
                  className={`position-relative ${
                    props?.data?.theme === "dark" ? "text-white" : "text-black"
                  } ${Style.features_list_item}`}
                >
                  {data?.text}
                </li>
              ))}
            </ul>

            {/* Second <ul> */}
            <ul className={`ms-0 list-unstyled mb-0 ${Style.features_list}`}>
              {secondHalf.map((data, index) => (
                <li
                  key={index + halfIndex}
                  className={`position-relative ${
                    props?.data?.theme === "dark" ? "text-white" : "text-black"
                  } ${Style.features_list_item}`}
                >
                  {data?.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatimList;
