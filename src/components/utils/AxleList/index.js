import React from "react";
import Style from "./AxleList.module.scss";

const AxleList = ({props}) =>{
    return(
        <ul className={`ps-0 list-unstyled ${Style.axle_list_wrapper}`}>
            {props?.data?.list?.map((data,i)=>{
                return(
                    <li key={i} className={`position-relative ${Style.axle_list_item}`}>{data?.text}</li>
                )
            })}
        </ul>
    )
}
export default AxleList;