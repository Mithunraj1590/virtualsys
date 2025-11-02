import React from "react";
import Style from "./ZivaBenefits.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import ZivaImage from "../utils/ZivaImage";
import { useWindowSize } from "../../logic/useDimension";

const ZivaBenefits = ({props}) => {
    const { width } = useWindowSize();
    const theme = props?.data?.theme == "dark" ? Style.dark_bg : Style.light_bg ;
    return(
        <section className={`${Style.ziva_section} ${theme} position-relative overflow-hidden`}>
            <div className={Style.addon_img}>
                <figure>
                    <Image src={Assets.ziva_bottom_glow} fill alt="bottom-glow-img" sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
            <div className="container">
                <div className={`row ${Style.content_wrapper}`}>
                    {width <1200 &&
                        <div className="col-12">
                            <h2 className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"} mb-0 ${Style.title}`}>{props?.data?.title}</h2>
                            <p className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"} mb-0 ${Style.description}`}>{props?.data?.description}</p>
                        </div>
                    }
                    <div className="col-12 col-md-6">
                        <ZivaImage props={props?.data?.image}/>
                    </div>
                    <div className="col-12 col-md-6">
                        {width >= 1200 &&
                            <>
                                <h2 className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"} mb-0 ${Style.title}`}>{props?.data?.title}</h2>
                                <p className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"} mb-0 ${Style.description}`}>{props?.data?.description}</p>
                            </>
                        }
                        <ul className={`list-unstyled ps-0 mb-0 pt-xl-4 ${Style.benefits_list} ${theme}`}>
                            {props?.data?.benefits?.map((data,i)=>{
                                return(
                                    <li  key={i} className={`${props?.data?.theme == "dark" ? "text-white" : "text-black"} ${Style.benefits_list_item}`}>{data?.text}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ZivaBenefits;