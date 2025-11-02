import React from "react";
import Style from "./NovacFeatures.module.scss";

const NovacFeatures = ({props}) =>{
    const theme = props?.data?.theme == "light" ? true : false;
    return(
        <div className={Style.product_features}>
            {props?.data?.features?.map((data,index) =>{
                return(

                    <div className={`row ${Style.features_wrapper}`} key={index}>
                        <div className="col-1"><span className={`${theme ? "text-black" : "text-white"} ${Style.index_no}`}>0{index+1}{"."}</span></div>
                        <div className="col-11 col-lg-10 col-xxl-11">
                            <h5 className={`${theme ? "text-black" : "text-white"} mb-0 ${Style.title}`}>{data?.title}</h5>
                            <p className={`${theme ? "text-black" : "text-white"} mb-0 ${Style.description}`}>{data?.description}</p>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}
export default NovacFeatures;