import React from "react";
import BreadCrumbs from "../utils/BreadCrumbs";
import Styles from "./StatimContent.module.scss";
import Link from "next/link";
import Icons from "../Layout/Icons";
import ZivaImage from "../utils/ZivaImage";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";

const StatimContent = ({ props }) => {
  const parse = require("html-react-parser");
  const statimClass = props?.data?.type == "integrate" ? Styles.integrate_statim : "";
  const zivaClass = props?.data?.type == "ziva-loan" ? Styles.ziva_loan : "";
  const productClass = props?.data?.type == "product-management" ? Styles.product_management : "";
  const collectionClass = props?.data?.type == "collection-management" ? Styles.product_management : "";
  const leadershipClass = props?.data?.type == "leadership" ? Styles.leadership : "";
  const brochureClass = props?.data?.type == "brochure" ? Styles.brochure : "";

  return (
    <section className={`position-relative overflow-hidden ${Styles.statim_content_wrap}`}>
      <div className="container">
        {props?.data?.breadcrumbs && props?.data?.breadcrumbs.length != 0 &&
          (<BreadCrumbs props={props} />)
        }
        <div className={`
          ${Styles.statim_content} ${statimClass} ${zivaClass} 
          ${productClass} ${collectionClass}  ${leadershipClass} ${brochureClass}`} >
          <div className={`row ${Styles.contents_wrapper}`}>
            <div className="col-12 col-lg-6">
              {props?.data?.image && <ZivaImage props={props?.data?.image}/> }

              {props?.data?.title && 
                <h2 className={`${props?.data?.title?.decoration == true && Styles.underline } position-relative ${Styles.title}`}>{props?.data?.title?.title}</h2>
              }

              {props?.data?.type=="kazito-inner" ?
                <div className={Styles.button_wrapper}>
                  <Link 
                  className={`btn ${props?.data?.type == "kazito-inner" ? "btn-kazito" : "btn-axle"}`}
                  href={`${props?.data?.button?.buttonUrl}`}>{props?.data?.button?.buttonText}</Link>
                </div> :""
              } 
            </div>
            <div className="col-12 col-lg-6">
              <div className={Styles.content_wrapper}>
                {parse(props?.data?.description)}

                { (props?.data?.type!="kazito-inner" && props?.data?.button?.buttonText ) ? 
                <div className={Styles.button_wrapper}>
                <Link
                  href={`${props?.data?.button?.buttonUrl}`}
                  className="white-arrow" >
                  {props?.data?.button?.buttonText}
                  <div className={"link-arrow ms-3"}><Icons  icon="arrow-link" size={15} /></div>
                </Link>
              </div>
              :
""                   
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Addon Image For Collection Management Page */}
      {(props?.data?.type == "loan-servicing") &&
        <>
          <div className={`${Styles.addon_img} ${Styles.top_right} d-none d-lg-block`}>
            <figure>
              <Image src={Assets.best_practice_bg} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw" />
            </figure>
          </div>
          <div className={`${Styles.addon_img} ${Styles.bottom_left} d-none d-lg-block`}>
            <figure>
              <Image src={Assets.platform_bottom_left} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
            </figure>
          </div>
        </>
      }

      {/* Addon Image For Collection Management Page */}
      {(props?.data?.type == "collection-management") &&
        <div className={`${Styles.addon_img} ${Styles.top_right} d-none d-lg-block`}>
            <figure>
                <Image src={Assets.manage_bg2} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
            </figure>
        </div>
      }

      {/* Addon Image For Statim Inner Page */}
      {(props?.data?.type == "statim-inner") &&
        <div className={`${Styles.addon_img} ${Styles.bottom_right} d-none d-lg-block`}>
            <figure>
                <Image src={Assets.mobappbg2} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
            </figure>
        </div>
      }

      {/* Addon Image For Kazito Inner Pages */}
      {(props?.data?.type == "kazito-inner") &&
        <div className={`${Styles.addon_img} d-none d-lg-block`}>
            <figure>
                <Image src={Assets.know_more_img_3} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
            </figure>
        </div>
      }


      {/* Addon Image For Leadership Page */}
        {(props?.data?.type == "leadership") &&
          <>
            <div className={`${Styles.leader_addon_img1} ${Styles.top_right} d-none d-lg-block`}>
              <figure>
                <Image src={Assets.leadership_content_bg} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
            <div className={`${Styles.leader_addon_img2} ${Styles.bottom_left} d-lg-block`}>
              <figure>
                <Image src={Assets.leadership_content_bg} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
          </>
        }

         {/* Addon Image For Brochures Page */}
         {(props?.data?.type == "brochure") &&
          <>
            <div className={`${Styles.brochure_addon_img1} d-lg-block`}>
              <figure>
                <Image src={Assets.brochure_bg} alt="brochure-bottom-glow" fill sizes="(max-width: 768px) 100vw"/>
              </figure>
            </div>
          </>
        }


    </section>
  );
};

export default StatimContent;
