import React from "react";
import Style from "./ZivaLos.module.scss";
import NovacAccordion from "../utils/NovacAccordion";
import ZivaImage from "../utils/ZivaImage";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import NovacFeatures from "../utils/NovacFeatures";

const ZivaLos = ({props}) =>{
    const parse = require("html-react-parser");
    const productClass = props?.data?.type == "product-management" ? Style.product_management : "";
    const themeClass = props?.data?.theme == "dark" && Style.dark_theme;
    const orangeTheme = props?.data?.theme == "orange" && Style.orange_theme;

   
    return(
        <section className={`${Style.ziva_section} ${themeClass} ${orangeTheme} position-relative overflow-hidden`}>
            {/* Addon Image For Dark Theme */}
            {props?.data?.theme == "dark" && 
                <div className={Style.addon_img}>
                    <figure>
                        <Image src={Assets.ziva_top_glow} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            }
            {/* Addon Image For Orange Theme */}
            {/* {props?.data?.theme == "orange" &&
                <div className={Style.addon_img}>
                    <figure>
                        <Image src={Assets.orange_round_light} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            } */}
            {/* Addon Image  For White Theme kazito Inner page */}
            {(props?.data?.theme == "light" && props?.data?.type == "kazito-inner") &&
                <div className={`${Style.addon_img} ${Style.top_right}`}>
                    <figure>
                        <Image src={Assets.know_more_img_4} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            }
            {/* Addon Image For White Theme Axle Inner page*/}
            {(props?.data?.theme == "light" && props?.data?.type == "axle-inner") &&
                <div className={`${Style.addon_img}`}>
                    <figure>
                        <Image src={Assets.top_left_img} alt="ziva-top-glow" fill sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            }
            <div className="container position-relative">
                <div className={`row align-items-center ${Style.header_wrapper} ${productClass}`}>
                    {props?.data?.fullTitle && 
                        <div className={`col-12 ${props?.data?.page == "axle-corporates" ? "col-lg-6" : "col-lg-12"}`}>
                            <h2 className={`mb-0 ${props?.data?.page == "axle-corporates" ? " text-lg-start gradient-text-orange-black-title" : " text-lg-center gradient-text-light-orange-title"} ${props?.data?.theme == "light" ? "text-dark" : "text-white"} ${Style.title} ${Style.full_title} ${props?.data?.type == "kazito-inner" && Style.kazito_page}`}>{parse(props?.data?.fullTitle)}</h2>
                        </div>
                    }
                    {props?.data?.title && 
                        <div className="col-12 col-lg-6">
                            <h2 className={`
                                ${props?.data?.theme == "dark" && "gradient-text-green-white-title text-white"} ${props?.data?.theme == "light" && "text-black gradient-text-orange-black-title"}  ${props?.data?.theme == "orange" && "text-white gradient-text-light-orange-title"}  mb-0 ${Style.title}`}>
                                    {parse(props?.data?.title)}
                                </h2>
                        </div>
                    }
                    {props?.data?.description &&
                        <div className="col-12 col-lg-6">
                            <p className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"}  mb-0 ${Style.description}`}>{props?.data?.description}</p>
                        </div>
                    }
                </div>
                <div className={`row ${Style.content_wrapper} 
                    ${props?.data?.type == "kazito-inner" && "flex-lg-row-reverse"}`}>
                    <div className="col-12 col-lg-6">
                        <ZivaImage props={props?.data?.image}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        {props?.data?.features &&
                            <NovacFeatures props={props}/>

                        }
                        {props?.data?.accordion &&
                            <NovacAccordion props={props}  />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ZivaLos;