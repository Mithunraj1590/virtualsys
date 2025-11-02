import React from "react";
import Styles from "./AxleContentBlock.module.scss";
import BreadCrumbs from "../utils/BreadCrumbs";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";

const AxleContentBlock = ({ props}) => {
    const parse = require("html-react-parser");
    return(
        <section className={Styles.axle_content_section}>
            <div className={Styles.bottom_left_bg}><Image fill  src={Assets.content_bg1} alt={"background Image"} sizes="(max-width: 768px) 100vw"/></div>
            <div className={Styles.bottom_right_bg}><Image fill  src={Assets.content_bg2} alt={"background Image"} sizes="(max-width: 768px) 100vw"/></div>

            <div className="container">
                <BreadCrumbs props={props}/>
                <div className={Styles.section_header}>
                    <h2 className={`h2 ${Styles.axle_section_title}`}>{parse(props?.data?.title)}</h2>
                </div>
                <div className={`row align-items-center ${Styles.section_wrapper}`}>
                    <div className={`col-12 col-lg-6 position-relative pb-4 pb-lg-0`}>
                        <div className={Styles.image_wrapper}>
                            <figure>
                                <Image fill src={(props?.data?.image?.url)} alt="image"  quality={100} sizes="(max-width: 768px) 100vw"/>
                            </figure>

                            {/* <div className={`w-100 ${Styles.play_btn_wrapper}`}>
                                    <figure>
                                        <Image fill src={(props?.data?.playButton?.url)} alt={(props?.data?.playButton?.alt)}></Image>
                                    </figure>
                                </div> */}

                        </div>
                       
                    </div>
                    <div className={`col-12 col-lg-6`}>
                        <h6 className={`h6 ${Styles.section_title}`}>{props?.data?.sectionContent}</h6>
                        <p className={Styles.section_description}>{parse(`${props?.data?.sectionDescription}`)}</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AxleContentBlock;