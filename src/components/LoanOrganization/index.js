import React from "react";
import Style from "./LoanOrganization.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import FeatureCard from "../utils/FeatureCard";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Icons from "../Layout/Icons";

const LoanOrganization = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const collectionPage =
    props?.data?.type == "collection-management" ? true : false;
  const statimInnerPage = props?.data?.type == "statim-inner" ? true : false;
  const statimPage = props?.data?.type == "statim-inner" ? true : false;
  const greenBg = props?.data?.theme == "green" ? Style.green_bg : "";
  const darkBg = props?.data?.theme == "dark" ? Style.dark_bg : "";
  const blueBg = props?.data?.theme == "blue" ? Style.blue_bg : "";
  const statimInner =
    props?.data?.type == "statim-inner" ? Style.statim_inner : "";
  const kazitoInner =
    props?.data?.type == "kazito-inner" ? Style.kazito_inner : "";


   

  return (
    <section
      className={`${Style.loan_organization_section} position-relative overflow-hidden ${blueBg} ${greenBg} ${darkBg} ${statimInner} ${kazitoInner}`}
    >
      {props?.data?.theme == "dark" ? (
        <>
          <div className={Style.dark_top_img}>
            <figure>
              {/* top_right_img */}
              <Image src={Assets.top_right_img1} fill alt="addon-image"  sizes="(max-width: 768px) 100vw"/>
            </figure>
          </div>

          {/* bottom_left_img */}
          {props?.data?.page == "axle-corporates" && (
            <div className={Style.dark_bottom_img}>
              <figure>
                <Image src={Assets.top_right_img1} fill alt="addon-image"  sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Addon Image For Light , green & blue background */}
          {/* Addon Image For Light , green & blue background */}
          {!collectionPage && !statimPage && !kazitoInner && (
            <div className={Style.ziva_top_img}>
              <figure>
                <Image src={Assets.ziva_loan_bg_top1} alt="addon-img" fill sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
          )}
          {!statimInnerPage && !kazitoInner && (
            <div className={Style.ziva_bottom_img}>
              <figure>
                <Image
                  src={Assets.ziva_bottom_blue_light}
                  alt="addon-img"
                  fill
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
            </div>
          )}
          {statimInnerPage && (
            <div
              className={`${Style.ziva_bottom_img} ${Style.bottom_right} d-none d-lg-block`}
            >
              <figure>
                <Image src={Assets.bottom_right_img} alt="addon-img" fill sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
          )}
        </>
      )}

      {/* Addon Image For Kazito Inner Pages */}
      {props?.data?.type == "kazito-inner" && (
        <>
          <div className={`${Style.addon_img} d-none d-lg-block`}>
            <figure>
              <Image src={Assets.know_more_img} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
            </figure>
          </div>
          <div
            className={`${Style.top_addon_img} d-none d-lg-block position-absolute`}
          >
            <Image src={Assets.loan_bg} fill alt="Image" sizes="(max-width: 768px) 100vw"/>
          </div>
        </>
      )}
      <div className="container">
        <div className={`row position-relative ${Style.header_wrapper}`}>
          {props?.data?.type == "axle-inner" ||
          props?.data?.type == "kazito-inner" ? (
            <>
              {props?.data?.title && (
                <div
                  className={`col-12 col-lg-11 text-white mb-0 ${Style.title}`}
                >
                  {parse(props?.data?.title)}
                </div>
              )}
              {props?.data?.description && (
                <div
                  className={`col-12 col-lg-11 text-white mb-0 ${Style.header_description}`}
                >
                  {props?.data?.description}
                </div>
              )}
            </>
          ) : (
            <>
              {props?.data?.title && (
                <div
                  className={`col-12 
                    ${
                      props?.data?.type == "collection-management"
                        ? "col-md-8 col-xl-7"
                        : "col-md-6"
                    }`}
                >
                  <h4
                    className={`${
                      props?.data?.theme == "dark" ||
                      props?.data?.theme == "green"
                        ? "text-white gradient-text-green-white-title"
                        : "text-black gradient-text-green"
                    } 
                    ${props?.data?.theme == "blue" && "text-white"}
                    ${Style.title} mb-0`}
                  >
                    {parse(props?.data?.title)}
                  </h4>
                </div>
              )}

              {props?.data?.description && (
                <div className="col-12 col-lg-6">
                  <p
                    className={`mb-0 
                    ${
                      props?.data?.theme == "dark" ||
                      props?.data?.theme == "green"
                        ? "text-white"
                        : "text-black"
                    } 
                    ${props?.data?.theme == "blue" && "text-white"} 
                    ${Style.description}`}
                  >
                    {props?.data?.description}
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div className={`row ${Style.features_wrapper} position-relative overflow-hidden`}>
          {props?.data?.features?.map((data, i) => {
            const count =
              props?.data?.features?.filter((item) => item).length > 6
                ? Style.count_more
                : "";
            return (
              <div
                className={`col-12 col-sm-6 col-lg-4 ${Style.features_card} ${count} ${darkBg} ${greenBg} ${blueBg}`}
                key={i}
              >
                <FeatureCard props={data} dataAnime={i} />
              </div>
            );
          })}
          {/* {props?.data?.button && width < 768 && (
            <div className={Style.button_wrapper}>
              <Link
                href={`${props?.data?.button?.url}`}
                className={`arrow_text w-100 justify-content-center ${Style.arrow_text}`}
              >
                <span
                  className={`${
                    props?.data?.theme == "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {props?.data?.button?.buttonText}
                </span>
                <div className={`arrow_links ${Style.arrow_bottom}`}>
                  <Icons className={"link-arrow"} icon="arrow-link" size={12} />
                </div>
              </Link>
            </div>
          )}  */}
        </div>

        {/* Know more button in axle inner pages */}
        {props?.data?.page == "axle-corporates" && (
          <div className={`${Style.know_more_button_wrapper} text-md-center`}>
            <Link
              href={`${props?.data?.button?.buttonUrl}`}
              className="btn btn-axle"
            >
              {props?.data?.button?.buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
export default LoanOrganization;
