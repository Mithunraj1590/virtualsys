import React from "react";
import Styles from "./PerfectSolutions.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";


const PerfectSolutions = ({props}) =>{
    const parse = require("html-react-parser");
    const { width } = useWindowSize();
    const image_wrapper =(
        <Animate className={`m-auto ${Styles.img_section}`}>
            <div className={Styles.triangle_img}>
                <figure>
                    <Image src={Assets.triangle_img} fill alt="addon-img-2"  sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
            <div className={` ${Styles.img_wrapper}`}>
                <figure>
                    <Image src={props?.data?.image?.url} fill alt="image"  quality={100} sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
        </Animate>
    )
    return(
        <section className={Styles.perfect_solutions}>
            <div className={Styles.glow_img_wrapper}><figure><Image src={Assets.perfect_solutions_glow_img} fill alt="addon-img-1" sizes="(max-width: 768px) 100vw"/></figure></div>
            <div className={Styles.glow_img_wrapper_2}><figure><Image src={Assets.perfect_glow_img} fill alt="addon-img-2" sizes="(max-width: 768px) 100vw"/></figure></div>
            <div className={Styles.glow_img_wrapper_3}><figure><Image src={Assets.statim_img} fill alt="addon-img-2" sizes="(max-width: 768px) 100vw"/></figure></div>
            <div className="container">
                <div className={`row ${Styles.contents_wrapper}`}>
                    <div className="col-12 col-lg-7">
                        <h2 className={`gradient-text-blue-title h2 ${Styles.title}`}>{parse(props?.data?.title)}</h2>
                        {width < 992 && (image_wrapper)}

                        <ul className={Styles.features_list}>
                            {props?.data?.feature?.map((data,i)=>{
                                return(
                                    <li className={Styles.features_list_item} key={i}>{data?.text}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={`col-12 col-lg-5`}>

                        {width >= 992 && (image_wrapper)}

                    </div>
                </div>
            </div>
        </section>
    )
}
export default PerfectSolutions;