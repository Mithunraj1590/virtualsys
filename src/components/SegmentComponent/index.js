import React from "react";
import Style from "./SegmentComponent.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Animate from "../Animate/animate";

const SegmentComponent = ({props}) =>{
    const divSection = props?.data?.segments?.filter(item => item).length > 5 ? "col-6" : "col-10 ms-auto me-auto";
    return(
        <section className={`${Style.component_section} position-relative overflow-hidden`}>
            <div className={Style.addon_img}>
                <figure className="mb-0">
                    <Image fill src={Assets.statim_speciality_img} alt="Novac Image" sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
            <div className="container">
                <h4 className={`text-black text-center ${Style.title}`}>{props?.data?.title}</h4>
                <div className={`row ${Style.segment_wrapper}`}>
                    {props?.data?.segments?.map((data,index) => {
                        return(
                            <Animate className={` ${divSection} animate-fadein col-md-4 col-lg-3`} key={index}  style={{"--anim-index":`${index*0.08}s`}}>
                                <figure className="mb-0 text-center">
                                    <Image src={data?.image?.url} alt="image" width={data?.image?.width} height={data?.image?.height}  sizes="(max-width: 768px) 100vw"/>
                                </figure>
                                <h6 className={`text-center mb-0 ms-auto me-auto ${Style.segment_title}`}>{data?.title}</h6>
                            </Animate>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default SegmentComponent;