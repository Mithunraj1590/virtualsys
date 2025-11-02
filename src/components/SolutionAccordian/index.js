import React from "react";
import Style from "./SolutionAccordian.module.scss";
import NovacAccordion from "../utils/NovacAccordion";
import ZivaImage from "../utils/ZivaImage";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import NovacFeatures from "../utils/NovacFeatures";

const SolutionAccordian = ({ props }) => {
  const parse = require("html-react-parser");
  const digitallearning_gradient =
    props?.data?.gradient == true && Style.digitallearning_gradient;

  const immersivetech_section =
    props?.data?.type == "immersivetech" && Style.immersivetech_section;

  const techbrew_section =
    props?.data?.type == "techbrew" && Style.techbrew_section;

  return (
    <section
      className={`${Style.insuretech_section} ${techbrew_section}   position-relative overflow-hidden ${digitallearning_gradient} ${immersivetech_section}`}
    >
      {/* Addon Image For Solution Fintech page*/}
      {props?.data?.type == "insurtech" && (
        <div className={`${Style.addon_img}`}>
          <Image src={Assets.bg_accordian} alt="ziva-top-glow" fill  sizes="(max-width: 768px) 100vw"/>
        </div>
      )}

      {/* Addon Image For Immersivetech page*/}
      {props?.data?.type == "immersivetech" && (
        <div className={`${Style.addon_img}`}>
          <Image
            src={Assets.accordian_bg_immersive}
            alt="immersive-top-glow"
            fill
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      {props?.data?.gradient == true && (
        <div className={`${Style.addon_img}`}>
          <Image
            src={Assets.bg_accordian_digitallearning}
            alt="ziva-top-glow"
            fill
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      )}

      {/* Techbrew */}
      {props?.data?.type == "techbrew" && (
        <div className={`${Style.bg_techbrew}`}>
          <Image src={Assets.accordian_bg_techbrew} alt="techbrew glow" fill  sizes="(max-width: 768px) 100vw"/>
        </div>
      )}

      <div className="container position-relative">
        <div className={`row  ${Style.header_wrapper} `}>
          {props?.data?.type == "insurtech" && ( 
            <>
              {props?.data?.title && (
                <div className="col-12 col-lg-5">
                  <h2
                    className={`
                        ${
                          props?.data?.theme == "dark" &&
                          "gradient-text-green-white-title text-white"
                        } ${
                      props?.data?.theme == "light" &&
                      "text-black gradient-text-orange-black-title"
                    }  h2  mb-0 ${Style.title}`}
                  >
                    {parse(props?.data?.title)}
                  </h2>
                </div>
              )}
              {props?.data?.description && (
                <div className="col-12 col-lg-7 pt-lg-3">
                  <div
                    className={`${
                      props?.data?.theme == "dark" ? "text-white" : "text-black"
                    }  mb-0 ${Style.description}`}
                  >
                    {parse(props?.data?.description)}
                  </div>
                </div>
              )}
            </>
          )}

          {props?.data?.type == "immersivetech" && (
            <>
              {props?.data?.title && (
                <div className="col-12 col-lg-5">
                  <h2
                    className={`
                        ${
                          props?.data?.theme == "dark" &&
                          "gradient-text-green-white-title text-white"
                        } ${
                      props?.data?.theme == "light" &&
                      "text-black gradient-text-orange-black-title"
                    }  h2  mb-0 ${Style.title}`}
                  >
                    {parse(props?.data?.title)}
                  </h2>
                </div>
              )}
              {props?.data?.description && (
                <div className="col-12 col-lg-7 pt-lg-3">
                  <div
                    className={`${
                      props?.data?.theme == "dark" ? "text-white" : "text-black"
                    }  mb-0 ${Style.description}`}
                  >
                    {parse(props?.data?.description)}
                  </div>
                </div>
              )}
            </>
          )}

          {props?.data?.type == "digitallearning" && (
            <>
              {props?.data?.gradient == true ? (
                <>
                  {props?.data?.title && (
                    <div className="col-12 col-lg-6">
                      <h2
                        className={`
                                    ${
                                      props?.data?.theme == "dark" &&
                                      "gradient-text-green-white-title text-white"
                                    } ${
                          props?.data?.theme == "light" &&
                          "text-black gradient-text-digitallearning-black-title"
                        }  h2  mb-0 ${Style.title}`}
                      >
                        {parse(props?.data?.title)}
                      </h2>
                    </div>
                  )}
                  {props?.data?.description && (
                    <div className="col-12 col-lg-6 pt-lg-3">
                      <div
                        className={`${
                          props?.data?.theme == "dark"
                            ? "text-white"
                            : "text-black"
                        }  mb-0 ${Style.description}`}
                      >
                        {parse(props?.data?.description)}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {props?.data?.title && (
                    <div className="col-12 col-lg-6">
                      <h2
                        className={`
                        ${
                          props?.data?.theme == "dark" &&
                          "gradient-text-green-white-title text-white"
                        } ${
                          props?.data?.theme == "light" &&
                          "text-black gradient-text-digitallearning-black-title"
                        }  h2  mb-0 ${Style.title}`}
                      >
                        {parse(props?.data?.title)}
                      </h2>
                    </div>
                  )}
                  {props?.data?.description && (
                    <div className="col-12 col-lg-6 pt-lg-3">
                      <div
                        className={`${
                          props?.data?.theme == "dark"
                            ? "text-white"
                            : "text-black"
                        }  mb-0 ${Style.description}`}
                      >
                        {parse(props?.data?.description)}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {props?.data?.type == "techbrew" && (
            <>
              {props?.data?.title && (
                <div className="col-12 col-lg-5">
                  <h2
                    className={`
                        ${
                          props?.data?.theme == "dark" &&
                          "gradient-text text-white"
                        } ${
                      props?.data?.theme == "light" &&
                      "text-black gradient-text-orange-black-title"
                    }  h2  mb-0 ${Style.title}`}
                  >
                    {parse(props?.data?.title)}
                  </h2>
                </div>
              )}
            </>
          )}
        </div>
        <div
          className={`row ${Style.content_wrapper} 
            ${props?.data?.rowverse == true  && "flex-lg-row-reverse"}`}
        >
          <div className="col-12 col-lg-6">
            <ZivaImage props={props?.data?.image} />
          </div>
          <div className="col-12 col-lg-6">
            {props?.data?.accordion && <NovacAccordion props={props} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionAccordian;
