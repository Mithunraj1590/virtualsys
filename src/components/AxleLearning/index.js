import React from "react";
import Styles from "./AxleLearning.module.scss";
import Image from "next/image";
import Animate from "../Animate/animate";

const AxleLearning = ({props})=>{
    return(
        <section className={Styles.axle_learning_section}>
            <div className="container">
                <div className={Styles.section_header}>
                    <h2 className={`h2 ${Styles.section_title}`}>{props?.data?.title}</h2>
                    <p className={Styles.section_sub_title}>{props?.data?.subtitle}</p>
                </div>
                <div className={`row ${Styles.column_wrapper}`}>
                    {props?.data?.cards?.map((data,i)=>{
                        return(
                            <Animate className={`col-12 col-md-6 col-lg-3 animate-fadein ${Styles.column_item}`} key={i} style={{"--anim-index":`${i*0.2}s`}}>
                                <div className={`h-100 ${Styles.column_item_inner} d-flex flex-column justify-content-between`}>
                                    <figure className={`${Styles.img_wrapper} mb-0`}>
                                        <Image src={data?.image?.url} width={data?.image?.width} height={data?.image?.height} alt="image"  sizes="(max-width: 768px) 100vw"/>
                                    </figure>
                                    <p className={Styles.column_title}>{data?.title}</p>
                                </div>
                            </Animate>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default AxleLearning;