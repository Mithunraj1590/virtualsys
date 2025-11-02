import React from "react";
import Style from "./statimImageContent.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const StatimImageContent = ({props}) =>{
    const parse = require("html-react-parser");
    return(
        <section className={`position-relative overflow-hidden ${Style.statim_section}`}>
            {/* Addon Images on Statim Inner Pages */}
            {props?.data?.type == "statim-inner" &&
                <div className={Style.addon_img_wrapper}>
                    <figure>
                        <Image src={Assets.top_left_img} alt="Addon-image" fill sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            }
            <div className="container">
                <div className={Style.header_wrapper}>
                    <h4 className={`mb-0 text-black gradient-text-orange-black-title ${Style.title}`}>{parse(props?.data?.title)}</h4>
                </div>
                <div className={`row align-items-center ${Style.content_wrapper}`}>
                    <div className={`col-12 col-md-6`}>
                        <div className={`m-auto ${Style.img_wrapper}`}>
                            <figure>
                                <Image fill src={props?.data?.image?.url} alt="image"  quality={100} sizes="(max-width: 768px) 100vw"/>
                            </figure>
                        </div>
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <p className={`text-black mb-0 ${Style.content}`}>{props?.data?.content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StatimImageContent;