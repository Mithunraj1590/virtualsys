import React from "react";
import Styles from "./StatimSpeciality.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/animate";

const StatimSpeciality = ({props}) =>{
    const { width } = useWindowSize();

    const imagecard = (
        <Animate className={` ms-lg-auto py-4 py-lg-0 ${Styles.img_section}`}>
            <div className={` ${Styles.img_wrapper}`}>
                <figure>
                    <Image src={props?.data?.image?.url} fill alt="image"  quality={100} sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
        </Animate>
    )
    
        


    return(
        <section className={Styles.statim_sepciality_section}>
            <div className={Styles.addon_img_wrapper}>
                <figure>
                    {width < 992  &&   <Image src={Assets.statim_speciality_img_mobile} fill alt="addon-img" sizes="(max-width: 768px) 100vw"/>}   
                    {width >= 992 &&  <Image src={Assets.statim_speciality_img} fill alt="addon-img" sizes="(max-width: 768px) 100vw"/> } 
                    
                    
                </figure>
            </div>
            <div className="container">
                <div className={`row ${Styles.content_wrapper}`}>
                    <div className="col-12 col-lg-6">
                        <h2 className={`${Styles.title} h2`}>{props?.data?.title}</h2>

                        {width < 992 && (imagecard)}
                        
                        <ul className={Styles.features_list}>
                            {props?.data?.features.map((data,i)=>{
                                return(
                                    <li  key={i} className={Styles.features_list_item}>{data?.text}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={`col-12 col-lg-6 `}>
                            {width >= 992 && (imagecard)}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default StatimSpeciality;