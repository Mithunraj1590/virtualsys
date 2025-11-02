import React from "react";
import Style from "./AxleInstitutes.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import ZivaImage from "../utils/ZivaImage";
import AxleList from "../utils/AxleList";

const AxleInstitutes = ({props}) =>{
    const parse = require("html-react-parser");
    return(
        <section className={`${Style.axle_institute_section} position-relative overflow-hidden`}>
            <div className={Style.top_addon_img}>
                <figure>
                    <Image src={Assets.orange_round_light} fill alt="addon-img"/>
                </figure>
            </div>
            <div className={Style.bottom_addon_img}>
                <figure>
                    <Image src={Assets.orange_round_light} fill alt="addon-img"/>
                </figure>
            </div>
            <div className="container">
                <div className={Style.header_wrapper}>
                    <h4 className={`mb-0 text-black ${Style.title} gradient-text-orange-black-title`}>{parse(props?.data?.title)}</h4>
                </div>
                <div className={`row ${Style.content_wrapper}`}>
                    <div className={`col-12 col-lg-6`}>
                        <ZivaImage props={props?.data?.image}/>
                    </div>
                    <div className={`col-12 col-lg-6`}>
                        <div className={Style.list_wrapper}>
                            <AxleList props={props}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AxleInstitutes;