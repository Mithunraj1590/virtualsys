import React from "react";
import Styles from "./StatimProduct.module.scss";
import StatimImage from "../StatimImage";
import StatimDescription from "../StatimDesctiption";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

const StatimProduct = ({props}) =>{
    return(
        
        <section className={Styles.statim_product_section}>
            <div className={Styles.satim_addon_img}>
                <figure>
                    <Image src={Assets.statim_img} fill alt="Novac Image" sizes="(max-width: 768px) 100vw"/>
                </figure>
            </div>
            <div className="container">
                <h2 className={`${Styles.title} h2`}>{props?.data?.title}</h2>
                <div className={`${Styles.content_wrapper} d-flex flex-column`}>
                    {props?.data?.rows?.map((data,i)=>{
                        return(
                            <div className={`row ${Styles.content_row}`} key={i}>
                                <div className="col-12 col-lg-6">
                                    <StatimDescription props={data} />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <StatimImage props={data}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default StatimProduct;