import React from "react";
import Style from "./ZivaPlatforms.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import ZivaImage from "../utils/ZivaImage";
import Image from "next/image";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";

const ZivaPlatforms = ({props}) =>{
    const parse = require("html-react-parser");
    const { width } = useWindowSize();
    return(
        <section className={`position-relative overflow-hidden ${Style.platforms_section}`}>
            {props?.data?.type == "collection-management" &&
                <div className={`${Style.addon_img} d-none d-lg-block`}>
                    <figure>
                        <Image fill src={Assets.top_left_blue_img} alt="addon-img" sizes="(max-width: 768px) 100vw"/>
                    </figure>
                </div>
            }
            <div className="container">
                <div className={`row flex-md-row-reverse ${Style.content_wrapper}`}>
                    {width < 991 &&
                        <div className="col-12">
                            <h2 className={`mb-4 text-white ${Style.title}`}>{props?.data?.title}</h2>
                        </div>
                    }
                    <div className="col-12 col-lg-6">
                        <ZivaImage props={props?.data?.image} flag={"image_right"} sizes="(max-width: 768px) 100vw"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        {width > 991 &&
                            <h2 className={`mb-0 text-white ${Style.title}`}>{props?.data?.title}</h2>
                        }
                        <div className={Style.platforms_content}>
                            {props?.data?.platforms?.map((data,i)=>{
                                return(
                                    <div className={`row ${Style.platforms_wrapper} position-relative`} key={i}>
                                        <div className={`col-12 ${Style.icon_wrap}`}>
                                            <figure className="mb-0">
                                                <Image src={data?.image?.url} alt="image" fill sizes="(max-width: 768px) 100vw"/>
                                            </figure>
                                        </div>
                                        <div className={`col-12 ${Style.content_wrap}`}>
                                            <h5 className={`text-white mb-0 ${Style.platforms_title}`}>{data?.title}</h5>
                                            <div className={`text-white mb-0 ${Style.platforms_desc}`}>{parse(`${data?.text}`)}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={Style.button_wrapper}>
                            <Link className="btn btn-secondary" href={`${props?.data?.link?.url}`}>{props?.data?.link?.title}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ZivaPlatforms;